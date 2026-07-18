import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, HeartPulse, Laptop, TrendingUp, DollarSign } from 'lucide-react';
import './Careers.css';

const Careers = () => {
  const benefits = [
    {
      icon: <DollarSign size={24} />,
      title: 'Competitive Salary',
      desc: 'We offer industry-standard compensation with performance bonuses.'
    },
    {
      icon: <HeartPulse size={24} />,
      title: 'Health & Wellness',
      desc: 'Comprehensive medical insurance and wellness programs for you and your family.'
    },
    {
      icon: <Laptop size={24} />,
      title: 'Flexible Work',
      desc: 'Work from anywhere with our flexible remote and hybrid policies.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Career Growth',
      desc: 'Continuous learning opportunities, certifications, and clear career paths.'
    }
  ];

  const jobs = [
    {
      title: 'Senior Frontend Developer',
      location: 'Remote / India',
      type: 'Full-time',
      desc: 'Looking for an experienced React developer to build scalable user interfaces.',
    },
    {
      title: 'Backend Engineer (Node.js)',
      location: 'Hybrid / India',
      type: 'Full-time',
      desc: 'Join our backend team to build robust APIs and microservices.',
    },
    {
      title: 'Salesforce Consultant',
      location: 'Remote / Global',
      type: 'Full-time',
      desc: 'Help clients optimize their CRM and drive business growth.',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote / India',
      type: 'Full-time',
      desc: 'Create beautiful and intuitive digital experiences for our global clients.',
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero section">
        <div className="container">
          <h1 className="section-title">Shape Your Future with <span>MAATRSHRI</span></h1>
          <p className="careers-subtitle">
            Be part of a global team that drives digital innovation, embraces challenges, and delivers excellence.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section">
        <div className="container">
          <h2 className="section-title" style={{fontSize: '2rem'}}>Why work with us?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div className="benefit-card" key={idx}>
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="jobs-section section">
        <div className="container">
          <h2 className="section-title" style={{fontSize: '2rem'}}>Open Roles</h2>
          <div className="jobs-grid">
            {jobs.map((job, idx) => (
              <div className="job-card" key={idx}>
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-meta">
                  <span className="meta-item"><MapPin size={16} /> {job.location}</span>
                  <span className="meta-item"><Clock size={16} /> {job.type}</span>
                </div>
                <p className="job-desc">{job.desc}</p>
                <Link to="/apply" className="btn btn-primary job-apply-btn" style={{textAlign: 'center', display: 'block'}}>Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
