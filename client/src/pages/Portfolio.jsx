import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import { API_BASE_URL } from '../apiConfig';

import ekatrGif from '../assets/portfolio/एkatr Events.gif';
import constaGif from '../assets/portfolio/Consta AI Solutions.gif';
import aquaGif from '../assets/portfolio/myaquaplus.gif';
import satoshiGif from '../assets/portfolio/STF Gold.gif';
import rccmGif from '../assets/portfolio/BCCM Global_A2.gif';
import samraatGif from '../assets/portfolio/SAMRAAT LOGS_ A1.gif';

const localPortfolioImages = {
  'ekatr': ekatrGif,
  'consta': constaGif,
  'samraat-logs': samraatGif,
  'aquaplus': aquaGif,
  'satoshifx': satoshiGif,
  'rccm-global': rccmGif
};

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/portfolios`)
      .then(res => res.json())
      .then(data => setPortfolios(data))
      .catch(console.error);
  }, []);

  return (
    <div className="portfolio-page">
      <div className="container" style={{paddingTop: '8rem', paddingBottom: '4rem'}}>
        <h2 className="portfolio-main-title">Delivered by WhiteCircle Group</h2>
        
        <div className="portfolio-grid">
          {portfolios.map((project) => {
            const projectImg = project.image || localPortfolioImages[project.id];
            return (
              <div className="portfolio-item" key={project.id}>
                <h3 className="portfolio-item-title">{project.title}</h3>
                <Link to={`/portfolio/${project.id}`} className="portfolio-image-link">
                  <img src={projectImg} alt={project.title} className="portfolio-image" />
                  <div className="portfolio-overlay">
                    <span className="view-case-study">View Case Study <ArrowRight size={16} /></span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="portfolio-cta-section">
          <div className="cta-content">
            <h2 className="cta-heading">
              Let's turn your idea into<br />a <span className="highlight-green">real-life product.</span>
            </h2>
            <Link to="/contact" className="btn btn-green">
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-primary)', padding: '0.3rem', borderRadius: '50%', color: 'var(--accent-primary)'}}>
                <ArrowRight size={16} />
              </div>
              Get In Touch
              <ArrowRight size={16} style={{marginLeft: 'auto'}} />
            </Link>
          </div>
          <div className="cta-graphic">
            <div className="idea-illustration">
              {/* This represents the lightbulb graphic in the screenshot */}
              <div className="lightbulb-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="lightbulb-icon">
                  <path d="M9 21h6" />
                  <path d="M10 21v-4" />
                  <path d="M14 21v-4" />
                  <path d="M12 17v-4" />
                  <path d="M12 3a6 6 0 0 0-6 6c0 2 1.5 4 2 5" />
                  <path d="M12 3a6 6 0 0 1 6 6c0 2-1.5 4-2 5" />
                </svg>
                <div className="hand-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
                    <path d="M14 8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
                    <path d="M10 10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v4" />
                    <path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
                    <path d="M21 11v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7l3-3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
           <Link to="/book" className="btn btn-primary" style={{backgroundColor: '#2563eb', border: 'none', padding: '0.8rem 2rem'}}>Book Consultation</Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
