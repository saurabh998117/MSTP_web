import { ShieldCheck } from 'lucide-react';
import './PrivacyPage.css';

const PrivacyPage = () => {
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
          <p className="privacy-intro">
            At MAATRSHRI Group, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website. We are committed to protecting the information that you provide to us.
          </p>

          <div className="policy-section">
            <div className="section-number">1</div>
            <div className="section-text">
              <h2>Information We Collect</h2>
              <p>
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view.
              </p>
            </div>
          </div>

          <div className="policy-section">
            <div className="section-number">2</div>
            <div className="section-text">
              <h2>How We Use Your Information</h2>
              <p>
                We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to communicate with you and screen our orders for potential risk or fraud.
              </p>
            </div>
          </div>

          <div className="policy-section">
            <div className="section-number">3</div>
            <div className="section-text">
              <h2>Sharing Your Personal Information</h2>
              <p>
                We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site. We may also share your Personal Information to comply with applicable laws and regulations, or to otherwise protect our rights.
              </p>
            </div>
          </div>

          <div className="policy-section">
            <div className="section-number">4</div>
            <div className="section-text">
              <h2>Data Retention</h2>
              <p>
                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
              </p>
            </div>
          </div>

          <div className="policy-section">
            <div className="section-number">5</div>
            <div className="section-text">
              <h2>Changes To This Policy</h2>
              <p>
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
              </p>
            </div>
          </div>

          <div className="policy-section">
            <div className="section-number">6</div>
            <div className="section-text">
              <h2>Contact Us</h2>
              <p>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at hr@maatrshrigroup.in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
