import { ExternalLink, Globe } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
      description: 'A comprehensive financial analytics dashboard for enterprise clients providing real-time data visualization.',
      tags: ['React', 'Node.js', 'D3.js']
    },
    {
      title: 'E-Commerce Mobile App',
      category: 'Mobile App Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
      description: 'A seamless shopping experience for iOS and Android with AR product preview features.',
      tags: ['React Native', 'Firebase', 'Stripe']
    },
    {
      title: 'Healthcare Management System',
      category: 'Software Development',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
      description: 'A secure, HIPAA-compliant platform for managing patient records and telemedicine appointments.',
      tags: ['Next.js', 'PostgreSQL', 'AWS']
    },
    {
      title: 'DeFi Wallet',
      category: 'Web3 Development',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600',
      description: 'A decentralized cryptocurrency wallet supporting multiple blockchains and NFT management.',
      tags: ['Solidity', 'Web3.js', 'React']
    },
    {
      title: 'Smart Factory Automation',
      category: 'IoT & Automation',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
      description: 'IoT sensor dashboard for monitoring assembly line efficiency and predicting maintenance needs.',
      tags: ['Python', 'MQTT', 'Vue.js']
    },
    {
      title: 'Global Retail CRM',
      category: 'Salesforce Services',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      description: 'Custom Salesforce implementation consolidating customer data across 500+ global retail stores.',
      tags: ['Salesforce', 'Apex', 'LWC']
    }
  ];

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero section">
        <div className="container">
          <h1 className="section-title">Our <span>Portfolio</span></h1>
          <p className="portfolio-subtitle">
            Explore some of our recent projects where we've helped businesses transform their digital presence and operational efficiency.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <button className="icon-btn"><ExternalLink size={20} /></button>
                    <button className="icon-btn"><Globe size={20} /></button>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span className="tag" key={tIdx}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="portfolio-cta">
            <h3>Have a project in mind?</h3>
            <p>Let's discuss how we can bring your vision to life.</p>
            <a href="/book" className="btn btn-primary">Start a Project</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
