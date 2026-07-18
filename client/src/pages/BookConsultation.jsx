import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookConsultation.css';

const BookConsultation = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/success', {
        state: {
          title: 'Consultation Booked',
          message: 'Thank you for reaching out! One of our experts will contact you shortly to schedule your free consultation.',
          returnLink: '/',
          returnText: 'Back to Home'
        }
      });
    }, 1500);
  };

  return (
    <div className="book-page">
      <div className="container">
        <div className="book-form-container">
          <div className="book-header">
            <h1 className="section-title">Book a <span>Free Consultation</span></h1>
            <p>Ready to transform your business? Let's discuss your project.</p>
          </div>

          <form className="book-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group half">
                <label>Full Name *</label>
                <input type="text" name="name" required onChange={handleChange} />
              </div>
              <div className="form-group half">
                <label>Email Address *</label>
                <input type="email" name="email" required onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Company Name</label>
                <input type="text" name="company" onChange={handleChange} />
              </div>
              <div className="form-group half">
                <label>Phone Number *</label>
                <input type="tel" name="phone" required onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>What services are you interested in? *</label>
              <select name="subject" required onChange={handleChange}>
                <option value="">Select a service...</option>
                <option value="IT Consulting">IT Consulting</option>
                <option value="Salesforce Development">Salesforce Development</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-submit-wrapper">
              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Booking...' : 'Book Consultation'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
