import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle2, Code2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './ServiceTemplate.css';

// Tech stack images
import img299 from '../assets/image 299.png'; // AWS
import img305 from '../assets/image 305.png'; // Docker
import img306 from '../assets/image 306.png'; // Kubernetes
import reactImg from '../assets/react.svg'; // React

const globalTechnologies = [
  { name: 'React', icon: reactImg },
  { name: 'NodeJS', icon: null },
  { name: 'AWS', icon: img299 },
  { name: 'Docker', icon: img305 },
  { name: 'Kubernetes', icon: img306 },
  { name: 'Python', icon: null }
];

const ServiceTemplate = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <div className="service-hero-graphic">
            {/* Using a placeholder graphic, could map specific icons based on serviceId later */}
            <Code2 size={64} />
          </div>
          <h1>{service.title}</h1>
          <p className="service-description">{service.description}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="features-grid">
            {service.features.map((feature, idx) => (
              <div className="feature-card" key={idx}>
                <div className="feature-icon-wrapper">
                  <CheckCircle2 size={30} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Cycle */}
      <section className="service-process">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-cycle">
            {service.processSteps.map((step, idx) => (
              <div className="process-step" key={idx}>
                <div className="process-circle">
                  {idx + 1}
                </div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="service-tech">
        <div className="container">
          <h2 className="section-title">Technologies We Use</h2>
          <div className="tech-grid">
            {globalTechnologies.map((tech, idx) => (
              <div className="tech-item" key={idx}>
                {tech.icon && <img src={tech.icon} alt={tech.name} style={{width: '24px', height: '24px', objectFit: 'contain'}} />}
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;
