import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { API_BASE_URL } from '../apiConfig';
import './PrivacyPage.css';

const PrivacyPage = () => {
  const [privacyText, setPrivacyText] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/settings`)
      .then(res => res.json())
      .then(data => {
        if (data && data.privacyPolicy) {
          setPrivacyText(data.privacyPolicy);
        }
      })
      .catch(console.error);
  }, []);
  return (
    <div className="privacy-page">
      <div className="container">
        <div className="privacy-header">
          <div className="privacy-title-wrapper">
            <h1 className="section-title" style={{textAlign: 'left', marginBottom: '0.5rem'}}>Privacy Policy</h1>
            <p>Last updated: June 15, 2026</p>
          </div>
          <div className="privacy-icon-wrapper">
            <ShieldCheck size={48} />
          </div>
        </div>

        <div className="privacy-content">
          {privacyText ? (
            <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
              {privacyText}
            </div>
          ) : (
            <p>Loading privacy policy...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
