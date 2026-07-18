import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, TechCorp',
      text: 'Best Services! MAATRSHRI Group has completely transformed our digital presence. Their team is highly professional and delivered our project ahead of schedule.',
      rating: 5
    },
    {
      name: 'Sarah Smith',
      role: 'Marketing Director',
      text: 'The website they built for us is incredible. We have seen a 40% increase in conversions since launching. Highly recommend their web development team.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section section">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((test, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-content">
                <p>"{test.text}"</p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-avatar">{test.name.charAt(0)}</div>
                  <div className="author-info">
                    <h4>{test.name}</h4>
                    <span>{test.role}</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon filled" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
