import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { CheckCircle2, Code2, MessageSquare, LayoutList, TestTube, Rocket, Settings } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import './ServiceTemplate.css';

import gifIT from '../assets/services/it service F.gif';
import gifSalesforce from '../assets/services/Salesforce-F.gif';
import gifWebDev from '../assets/services/WEB_D_F.gif';
import gifDigital from '../assets/services/Digital_ F.gif';
import gifSoftwareDev from '../assets/services/Software dev-F.gif';
import gifAI from '../assets/services/AI F.gif';
import gifIOT from '../assets/services/IOT-F.gif';
import gifDatabase from '../assets/services/Database F.gif';
import gifDataAnalytics from '../assets/services/Data analytics-F.gif';
import gifIndustrial from '../assets/services/industrial_auto F.gif';
import gifSoftwareTesting from '../assets/services/software testing F.gif';
import gifStaffing from '../assets/services/Staffing Payroll F.gif';
import gifPayment from '../assets/services/Payment Gateway F.gif';
import gifCloud from '../assets/services/cloud F.gif';
import gifWordpress from '../assets/services/Wordpress F.gif';
import gifOracle from '../assets/services/Oracle F.gif';
import gifICO from '../assets/services/ico dev F.gif';
import gifToken from '../assets/services/Token F.gif';
import gifWeb3 from '../assets/services/Web3 F.gif';
import gifDApp from '../assets/services/Decentralized app F.gif';
import gifWallet from '../assets/services/Wallet F.gif';
import gifExchange from '../assets/services/Exchange F.gif';
import gifMLM from '../assets/services/MLM F.gif';
import gifDex from '../assets/services/Dex Plat F.gif';

const localServiceIcons = {
  'it-services': gifIT,
  'salesforce-services': gifSalesforce,
  'web-development': gifWebDev,
  'mobile-app': gifSoftwareDev,
  'digital-marketing': gifDigital,
  'software-development': gifSoftwareDev,
  'ai-services': gifAI,
  'iot': gifIOT,
  'database-design': gifDatabase,
  'data-analytics': gifDataAnalytics,
  'industrial-automation': gifIndustrial,
  'software-testing': gifSoftwareTesting,
  'staffing': gifStaffing,
  'payment-gateway': gifPayment,
  'cloud-hosting': gifCloud,
  'shopify-wordpress': gifWordpress,
  'oracle': gifOracle,
  'ico': gifICO,
  'token': gifToken,
  'web3': gifWeb3,
  'dapp': gifDApp,
  'wallet': gifWallet,
  'exchange': gifExchange,
  'mlm': gifMLM,
  'dex': gifDex
};

// Tech stack images
import nodeImg from '../assets/tech_logo/node.png';
import dockerImg from '../assets/tech_logo/docker.png';
import kubernetesImg from '../assets/tech_logo/kubernatives.png';
import reactImg from '../assets/tech_logo/react.png';
import awsImg from '../assets/tech_logo/aws.png';

const globalTechnologies = [
  { name: 'React', icon: reactImg },
  { name: 'NodeJS', icon: nodeImg },
  { name: 'AWS', icon: awsImg },
  { name: 'Docker', icon: dockerImg },
  { name: 'Kubernetes', icon: kubernetesImg }
];

const processIcons = [
  <MessageSquare size={48} strokeWidth={1.5} />,
  <LayoutList size={48} strokeWidth={1.5} />,
  <Code2 size={48} strokeWidth={1.5} />,
  <TestTube size={48} strokeWidth={1.5} />,
  <Rocket size={48} strokeWidth={1.5} />,
  <Settings size={48} strokeWidth={1.5} />
];

const ServiceTemplate = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => {
        const found = data.find(s => s.id === serviceId);
        if (found) {
          setService(found);
        } else {
          navigate('/services');
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [serviceId, navigate]);

  if (loading) return <div style={{paddingTop: '100px', textAlign: 'center'}}>Loading service details...</div>;
  if (!service) return null;

  const heroImage = service.icon || localServiceIcons[service.id];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ padding: 0, borderBottom: 'none' }}>
        {heroImage ? (
          <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
            <img src={heroImage} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
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
            {service.features && service.features.map((feature, idx) => (
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
            {service.processSteps && service.processSteps.map((step, idx) => (
              <div className="process-step" key={idx}>
                <div className="process-circle" style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {processIcons[idx % processIcons.length]}
                </div>
                <span>{typeof step === 'object' ? step.title : step}</span>
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
                {tech.icon && <img src={tech.icon} alt={tech.name} style={{width: '36px', height: '36px', objectFit: 'contain'}} />}
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
