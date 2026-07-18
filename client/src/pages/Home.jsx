import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Layout, Users, Code, Mail, Lightbulb, UserCheck, ShieldCheck } from 'lucide-react';
import './Home.css';

// Tech stack images
import heroImg from '../assets/hero.png';
import img299 from '../assets/image 299.png';
import img300 from '../assets/image 300.png';
import img301 from '../assets/image 301.png';
import img302 from '../assets/image 302.png';
import img303 from '../assets/image 303.png';
import img305 from '../assets/image 305.png';
import img306 from '../assets/image 306.png';
import img307 from '../assets/image 307.png';
import img308 from '../assets/image 308.png';
import img309 from '../assets/image 309.png';
import img310 from '../assets/image 310.png';
import img311 from '../assets/image 311.png';
import reactImg from '../assets/react.svg';
import viteImg from '../assets/vite.svg';

const techImages = [
  img299, img300, img301, img302, img303, img305, img306, 
  img307, img308, img309, img310, img311, reactImg, viteImg
];

const Home = () => {
  const services = [
    {
      icon: <Users size={40} />,
      title: "CONSULTING SERVICES",
      description: "We deliver expert guidance to help you navigate complex challenges, drive innovation, and unlock sustainable growth."
    },
    {
      icon: <Monitor size={40} />,
      title: "IT SERVICES",
      description: "MAATRSHRI provides streamlined IT solutions to optimize operations and accelerate digital growth."
    },
    {
      icon: <Layout size={40} />,
      title: "WEB DESIGN",
      description: "We build high-performance, responsive websites tailored to your brand and optimized for user experience."
    },
    {
      icon: <Smartphone size={40} />,
      title: "APP DEVELOPMENT",
      description: "We specialize in developing user-friendly, feature-rich mobile applications that enhance user experience and drive business growth."
    },
    {
      icon: <Code size={40} />,
      title: "SOCIAL MARKETING",
      description: "We amplify your brand, engage target audiences, and drive conversions through high-impact social media strategy."
    },
    {
      icon: <Mail size={40} />,
      title: "EMAIL MARKETING",
      description: "High-impact campaigns designed to boost visibility and drive conversions through targeted engagement."
    }
  ];

  const reasons = [
    {
      icon: <Lightbulb size={50} />,
      title: "Innovation-Driven Solutions",
      description: "We combine technology, strategy, and creativity to build scalable digital experiences tailored for modern business growth."
    },
    {
      icon: <UserCheck size={50} />,
      title: "User-Focused Approach",
      description: "Every solution is designed with usability, clarity, and seamless user experience at the core."
    },
    {
      icon: <ShieldCheck size={50} />,
      title: "Reliable Long-Term Partnership",
      description: "We focus on transparent collaboration, timely delivery, and sustainable solutions that help businesses grow confidently."
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              We Turn Ambitious Ideas Into <span>Scalable Solutions.</span>
            </h1>
            <p className="hero-subtitle">
              Building future-ready digital products that drive real business growth.
            </p>
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
          </div>
          {/* We use the uploaded hero image here */}
          <div className="hero-graphic" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={heroImg} alt="Hero Illustration" style={{maxWidth: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain'}} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <h2 className="section-title">SERVICES WE OFFER!</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Banner */}
      <section className="clients-banner">
        <div className="container" style={{ overflow: 'hidden' }}>
          <div className="clients-marquee">
            <div className="clients-track">
              {/* Duplicate the logos so the infinite scroll is seamless */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="clients-group">
                  <div className="client-logo-card">STE</div>
                  <div className="client-logo-card" style={{color: '#0dcaf0'}}>consta ai</div>
                  <div className="client-logo-card" style={{fontFamily: 'serif'}}>Radisson <span style={{color: 'blue'}}>BLU</span></div>
                  <div className="client-logo-card" style={{color: '#0dcaf0'}}>AQUAPLUS</div>
                  <div className="client-logo-card" style={{fontFamily: 'cursive', color: '#d97706'}}>Madhursa</div>
                  <div className="client-logo-card" style={{color: '#198754'}}><strong>ST</strong><br/><small style={{fontSize: '10px'}}>SANTOSH TIWARI & ASSOCIATES</small></div>
                  <div className="client-logo-card" style={{color: 'red'}}>YAMAHA</div>
                  <div className="client-logo-card" style={{backgroundColor: '#e11d48', color: 'white'}}>upGrad</div>
                  <div className="client-logo-card" style={{backgroundColor: '#064e3b', color: '#d1fae5'}}>WOOMANIYA</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us section">
        <div className="container">
          <h2 className="section-title">Why choose us <span>?</span></h2>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div className="reason-card" key={index}>
                <div className="reason-icon">{reason.icon}</div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-desc">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
