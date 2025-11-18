const testimonials = [
  {
    quote:
      'TSF\'s concierge team transformed my purchase into a milestone celebration. The storytelling around each watch made the experience truly memorable.',
    name: 'Amelia Laurent',
    role: 'Art Patron, Paris'
  },
  {
    quote:
      'The digital passport and heritage dossier provided certainty and pride in ownership. TSF balances tradition with a modern collector ethos.',
    name: 'Rafael Mendoza',
    role: 'Founder, Meridian Capital'
  },
  {
    quote:
      'From the atelier visit to the discreet delivery, the process felt curated for me alone. Their limited pieces are genuine future heirlooms.',
    name: 'Lina Hwang',
    role: 'Architect, Seoul'
  }
];

export default function Testimonials() {
  return (
    <section className="section dark">
      <div className="container" style={{ display: 'grid', gap: 48 }}>
        <div className="section-heading">
          <h2>Stories from the collector circle.</h2>
          <p>
            The TSF collector community spans entrepreneurs, creatives, and heritage enthusiasts. Their experiences shape our services and inspire future complications.
          </p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card testimonial">
              <blockquote>“{testimonial.quote}”</blockquote>
              <cite>{testimonial.name} · {testimonial.role}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
