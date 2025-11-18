'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { Watch } from '../types/watch';

export interface CartItem {
  watch: Watch;
  quantity: number;
}

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD'; payload: Watch }
  | { type: 'REMOVE'; payload: { slug: string } }
  | { type: 'UPDATE'; payload: { slug: string; quantity: number } }
  | { type: 'SET'; payload: CartItem[] }
  | { type: 'CLEAR' };

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (watch: Watch) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const storageKey = 'tsf-watches-cart-v1';

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((item) => item.watch.slug === action.payload.slug);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.watch.slug === action.payload.slug
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return { items: [...state.items, { watch: action.payload, quantity: 1 }] };
    }
    case 'REMOVE': {
      return { items: state.items.filter((item) => item.watch.slug !== action.payload.slug) };
    }
    case 'UPDATE': {
      const { slug, quantity } = action.payload;
      if (quantity <= 0) {
        return { items: state.items.filter((item) => item.watch.slug !== slug) };
      }
      return {
        items: state.items.map((item) =>
          item.watch.slug === slug ? { ...item, quantity } : item
        )
      };
    }
    case 'SET':
      return { items: action.payload };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      try {
        const parsed: CartItem[] = JSON.parse(stored);
        dispatch({ type: 'SET', payload: parsed });
      } catch (error) {
        console.error('Failed to parse cart from storage', error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(storageKey, JSON.stringify(state.items));
  }, [state.items]);

  const addItem = useCallback((watch: Watch) => {
    dispatch({ type: 'ADD', payload: watch });
  }, []);

  const removeItem = useCallback((slug: string) => {
    dispatch({ type: 'REMOVE', payload: { slug } });
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    dispatch({ type: 'UPDATE', payload: { slug, quantity } });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const value = useMemo(() => {
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.watch.price * item.quantity,
      0
    );
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      items: state.items,
      subtotal,
      totalItems,
      addItem,
      removeItem,
      updateQuantity,
      clear
    };
  }, [state.items, addItem, removeItem, updateQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
