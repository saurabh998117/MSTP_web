import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Layout, Users, Code, Mail, Lightbulb, UserCheck, ShieldCheck } from 'lucide-react';
import './Home.css';

// Hero Slider Images
import slider1 from '../assets/home/slider1.png';
import slider2 from '../assets/home/slider2.png';
import slider3 from '../assets/home/slider3.png';
import slider4 from '../assets/home/slider4.png';

// Marquee Client logos
import stfLogo from '../assets/aboutus/stf.png';
import constaLogo from '../assets/aboutus/constai.png';
import radissonLogo from '../assets/aboutus/radissen.png';
import yamahaLogo from '../assets/aboutus/yamaha.png';
import upgradLogo from '../assets/aboutus/upgrad.png';
import woomaniyaLogo from '../assets/aboutus/woomaniya.png';
import madhursaLogo from '../assets/aboutus/madhursa.png';

const heroSlides = [slider1, slider2, slider3, slider4];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

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
        <div className="hero-container-full">
          {/* Hero Slider Graphic */}
          <div className="hero-graphic" style={{position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {heroSlides.map((slide, index) => (
              <img 
                key={index}
                src={slide} 
                alt={`Hero Slider ${index + 1}`} 
                style={{
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  opacity: currentSlide === index ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                  position: index === 0 ? 'relative' : 'absolute',
                  top: 0,
                  left: 0
                }} 
              />
            ))}
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
                <div key={i} className="clients-group" style={{display: 'flex', alignItems: 'center', gap: '3rem'}}>
                  <div className="client-logo-card"><img src={stfLogo} alt="STF" style={{width: '80%', height: '80%', objectFit: 'contain'}} /></div>
                  <div className="client-logo-card"><img src={constaLogo} alt="Consta AI" style={{width: '80%', height: '80%', objectFit: 'contain'}} /></div>
                  <div className="client-logo-card"><img src={radissonLogo} alt="Radisson Blu" style={{width: '80%', height: '80%', objectFit: 'contain'}} /></div>
                  <div className="client-logo-card"><img src={madhursaLogo} alt="Madhursa" style={{width: '80%', height: '80%', objectFit: 'contain'}} /></div>
                  <div className="client-logo-card"><img src={yamahaLogo} alt="Yamaha" style={{width: '80%', height: '80%', objectFit: 'contain'}} /></div>
                  <div className="client-logo-card"><img src={upgradLogo} alt="upGrad" style={{width: '80%', height: '80%', objectFit: 'contain'}} /></div>
                  <div className="client-logo-card"><img src={woomaniyaLogo} alt="Woomaniya" style={{width: '80%', height: '80%', objectFit: 'contain'}} /></div>
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
