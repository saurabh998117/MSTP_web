import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud } from 'lucide-react';
import './ApplyForm.css';

const ApplyForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    expectedCtc: '',
    jobRole: '',
    jobType: 'Full-Time',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/success', {
        state: {
          title: 'Application Submitted Successfully',
          message: 'Thank you for your interest. Our HR team will review your application and get back to you shortly.',
          returnLink: '/careers',
          returnText: 'Back to Careers'
        }
      });
    }, 1500);
  };

  return (
    <div className="apply-page">
      <div className="container">
        <div className="apply-form-container">
          <div className="apply-header">
            <h1 className="section-title">JOB APPLICATION FORM</h1>
            <p>Please fill out the form below to submit your application.</p>
          </div>

          <form className="apply-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group half">
                <label>First Name *</label>
                <input type="text" name="firstName" required onChange={handleChange} />
              </div>
              <div className="form-group half">
                <label>Last Name *</label>
                <input type="text" name="lastName" required onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Email *</label>
                <input type="email" name="email" required onChange={handleChange} />
              </div>
              <div className="form-group half">
                <label>Phone *</label>
                <input type="tel" name="phone" required onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Expected CTC (₹)</label>
                <input type="text" name="expectedCtc" onChange={handleChange} placeholder="e.g. 12 LPA" />
              </div>
              <div className="form-group half">
                <label>Job Role *</label>
                <select name="jobRole" required onChange={handleChange}>
                  <option value="">Select a role...</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Salesforce Consultant">Salesforce Consultant</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Job Type *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="jobType" value="Full-Time" defaultChecked onChange={handleChange} />
                  Full-Time
                </label>
                <label className="radio-label">
                  <input type="radio" name="jobType" value="Part-Time" onChange={handleChange} />
                  Part-Time
                </label>
                <label className="radio-label">
                  <input type="radio" name="jobType" value="Contract" onChange={handleChange} />
                  Contract
                </label>
                <label className="radio-label">
                  <input type="radio" name="jobType" value="Internship" onChange={handleChange} />
                  Internship
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Upload CV/Resume *</label>
              <div className="file-upload-box">
                <UploadCloud size={32} className="upload-icon" />
                {file ? (
                  <p style={{color: '#10b981'}}>{file.name}</p>
                ) : (
                  <>
                    <p>Drag and drop your file here or click to browse</p>
                    <span className="file-hint">Supported formats: PDF, DOCX (Max 5MB)</span>
                  </>
                )}
                <input type="file" required accept=".pdf,.doc,.docx" className="file-input" onChange={handleFileChange} />
              </div>
            </div>

            <div className="form-submit-wrapper">
              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
