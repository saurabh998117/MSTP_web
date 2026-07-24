import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../../apiConfig';

const SettingsTab = () => {
  const [settings, setSettings] = useState({
    privacyPolicy: '',
    aboutUsText: '',
    contactEmail: '',
    contactPhone: '',
    contactAddress: '',
    logoUrl: '',
    socialLinks: {
      instagram: '',
      linkedin: '',
      whatsapp: '',
      twitter: '',
      facebook: ''
    }
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/settings`);
      const data = await res.json();
      if (data && data._id) {
        setSettings(data);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSettings({ ...settings, logoUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social_')) {
      const platform = name.split('_')[1];
      setSettings(prev => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [platform]: value }
      }));
    } else {
      setSettings(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    
    try {
      const res = await fetch(`${API_BASE_URL}/api/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(settings)
      });
      if (res.ok) {
        setMessage('Settings saved successfully!');
      } else {
        setMessage('Failed to save settings.');
      }
    } catch (err) {
      setMessage('Server error.');
    }
    setSaving(false);
  };

  if (loading) return <div>Loading settings...</div>;

  return (
    <div>
      <div className="admin-header">
        <h2>Site Settings</h2>
        <button onClick={handleSubmit} className="btn btn-primary" disabled={saving}>
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>

      {message && <div style={{padding: '10px', backgroundColor: '#333', marginBottom: '20px', borderRadius: '5px', color: '#00e676'}}>{message}</div>}

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
        {/* Left Column: General & Contact */}
        <div>
          <h3>Contact Details</h3>
          <div className="form-group" style={{marginBottom: '1rem'}}>
            <label>Contact Email</label>
            <input type="email" name="contactEmail" value={settings.contactEmail || ''} onChange={handleChange} className="admin-input" />
          </div>
          <div className="form-group" style={{marginBottom: '1rem'}}>
            <label>Contact Phone</label>
            <input type="text" name="contactPhone" value={settings.contactPhone || ''} onChange={handleChange} className="admin-input" />
          </div>
          <div className="form-group" style={{marginBottom: '1rem'}}>
            <label>Contact Address</label>
            <textarea name="contactAddress" value={settings.contactAddress || ''} onChange={handleChange} className="admin-input" rows="3"></textarea>
          </div>

          <h3 style={{marginTop: '2rem'}}>Logo</h3>
          <div className="form-group" style={{marginBottom: '1rem'}}>
            <label>Upload Logo (Replaces Current)</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="admin-input" style={{padding: '0.5rem'}} />
            {settings.logoUrl && (
              <div style={{marginTop: '1rem'}}>
                <img src={settings.logoUrl} alt="Logo Preview" style={{maxWidth: '150px', backgroundColor: '#fff', padding: '10px'}} />
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Socials & Text */}
        <div>
          <h3>Social Media Links</h3>
          {['instagram', 'linkedin', 'whatsapp', 'twitter', 'facebook'].map(platform => (
            <div className="form-group" key={platform} style={{marginBottom: '1rem'}}>
              <label style={{textTransform: 'capitalize'}}>{platform} URL</label>
              <input 
                type="text" 
                name={`social_${platform}`} 
                value={settings.socialLinks?.[platform] || ''} 
                onChange={handleChange} 
                className="admin-input" 
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{marginTop: '2rem'}}>
        <h3>About Us Text (Shown on Careers Page)</h3>
        <textarea name="aboutUsText" value={settings.aboutUsText || ''} onChange={handleChange} className="admin-input" rows="5"></textarea>
      </div>

      <div style={{marginTop: '2rem', marginBottom: '4rem'}}>
        <h3>Privacy Policy</h3>
        <p style={{color: '#a3a3a3', marginBottom: '1rem'}}>Enter the full privacy policy text here. Line breaks will be preserved.</p>
        <textarea name="privacyPolicy" value={settings.privacyPolicy || ''} onChange={handleChange} className="admin-input" rows="15"></textarea>
      </div>
    </div>
  );
};

export default SettingsTab;
