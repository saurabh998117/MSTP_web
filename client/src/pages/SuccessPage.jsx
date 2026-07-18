import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import './SuccessPage.css';

const SuccessPage = () => {
  const location = useLocation();
  const { 
    title = 'Success!', 
    message = 'Your action was completed successfully.',
    returnLink = '/',
    returnText = 'Back to Home'
  } = location.state || {};

  return (
    <div className="success-page">
      <div className="container">
        <div className="success-card">
          <div className="success-icon-wrapper">
            <CheckCircle2 size={80} className="success-icon" />
          </div>
          <h1 className="success-title">{title}</h1>
          <p className="success-message">{message}</p>
          <Link to={returnLink} className="btn btn-outline success-btn">
            {returnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
