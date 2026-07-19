import { useParams, Navigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import './CaseStudy.css';
import { 
  FileText, Search, Layout, Code, PlayCircle, Rocket, 
  Monitor, RefreshCw, XCircle, Users, Quote
} from 'lucide-react';

const CaseStudy = () => {
  const { id } = useParams();
  const project = portfolioData[id];

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  // Icons for Challenge section
  const challengeIcons = [
    <Monitor size={32} strokeWidth={1.5} />,
    <RefreshCw size={32} strokeWidth={1.5} />,
    <XCircle size={32} strokeWidth={1.5} />,
    <Users size={32} strokeWidth={1.5} />
  ];

  // Icons for Process section
  const processSteps = [
    { name: 'Gathering Information', icon: <FileText size={24} /> },
    { name: 'Research', icon: <Search size={24} /> },
    { name: 'Design', icon: <Layout size={24} /> },
    { name: 'Development', icon: <Code size={24} /> },
    { name: 'Testing', icon: <PlayCircle size={24} /> },
    { name: 'Deploy', icon: <Rocket size={24} /> }
  ];

  return (
    <div className="case-study-page">
      <div className="container" style={{paddingTop: '6rem', paddingBottom: '4rem'}}>
        
        {/* Header Section */}
        <div className="cs-header-grid">
          <div className="cs-header-text">
            <h1 className="cs-title">
              <span className="highlight-green">Case Study:</span> {project.title.split(' - ')[0]}
            </h1>
            <p className="cs-description">{project.description}</p>
          </div>
          <div className="cs-header-image">
            <img src={project.image} alt={project.title} className="cs-hero-img" />
          </div>
        </div>

        {/* 01. Challenge */}
        <div className="cs-section">
          <h2 className="cs-section-title"><span className="highlight-green">01.</span> Challenge</h2>
          <div className="cs-challenge-grid">
            <div className="cs-challenge-text">
              <p>{project.challengeDescription}</p>
            </div>
            <div className="cs-challenge-icons">
              {project.challenges.map((challenge, idx) => (
                <div className="challenge-item" key={idx}>
                  <div className="challenge-icon-box">
                    {challengeIcons[idx % challengeIcons.length]}
                  </div>
                  <span>{challenge.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 02. Process */}
        <div className="cs-section">
          <h2 className="cs-section-title"><span className="highlight-green">02.</span> Process</h2>
          <div className="cs-process-flow">
            {processSteps.map((step, idx) => (
              <div className="process-step" key={idx}>
                <div className="process-icon-circle">
                  {step.icon}
                </div>
                <span className="process-name">{step.name}</span>
                {idx < processSteps.length - 1 && (
                  <div className="process-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 03. Tools Used */}
        <div className="cs-section">
          <h2 className="cs-section-title"><span className="highlight-green">03.</span> Tools Used</h2>
          <div className="cs-tools-grid">
            {project.tools.map((tool, idx) => (
              <div className="tool-box" key={idx}>
                <div className="tool-logo-placeholder">
                  {tool.name.charAt(0)}
                </div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 04. Testimonial */}
        <div className="cs-section">
          <h2 className="cs-section-title"><span className="highlight-green">04.</span> Testimonial</h2>
          <div className="cs-testimonial-box">
            <div className="quote-icon-large">
              <Quote size={48} color="#00e676" />
            </div>
            <p className="cs-testimonial-text">
              "{project.testimonial.text}"
            </p>
            <div className="cs-testimonial-author">
              <img src={project.testimonial.avatar} alt={project.testimonial.author} className="author-avatar" />
              <div className="author-info">
                <h4>{project.testimonial.author}</h4>
                <span>{project.testimonial.role}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudy;
