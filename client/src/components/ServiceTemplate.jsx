import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle2, Code2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './ServiceTemplate.css';

// Tech stack images
import nodeImg from '../assets/tech_logo/node.png';
import dockerImg from '../assets/services/digital.jpeg'; // Note: Docker icon not available, using placeholder
import kubernetesImg from '../assets/services/cloud.jpeg'; // Note: K8s icon not available, using placeholder
import reactImg from '../assets/tech_logo/react.png';

const globalTechnologies = [
  { name: 'React', icon: reactImg },
  { name: 'NodeJS', icon: nodeImg },
  { name: 'AWS', icon: kubernetesImg },
  { name: 'Docker', icon: dockerImg },
  { name: 'Kubernetes', icon: kubernetesImg },
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
      <section className="service-hero" style={{ padding: 0, borderBottom: 'none' }}>
        {service.icon ? (
          <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
            <img src={service.icon} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
          </div>
        ) : (
          <div className="container service-hero-content" style={{ padding: '6rem 0' }}>
            <div className="service-hero-graphic">
              <Code2 size={64} />
            </div>
          </div>
        )}
        
        <div className="container" style={{ padding: '3rem 0 1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>{service.title}</h1>
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
