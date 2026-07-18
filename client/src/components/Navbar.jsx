import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.jpeg" alt="MAATRSHRI Logo" className="logo-img" />
          </Link>
        </div>
        
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          </li>
          <li className="nav-item-dropdown">
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
            <div className="mega-menu">
              <div className="mega-menu-grid">
                
                <div className="mega-menu-col">
                  <h4>FOUNDATION</h4>
                  <ul>
                    <li><Link to="/services/it-services">IT Services</Link></li>
                    <li><Link to="/services/salesforce-services">Salesforce Services</Link></li>
                    <li><Link to="/services/web-development">Web Development</Link></li>
                    <li><Link to="/services/mobile-app">Mobile App Development</Link></li>
                    <li><Link to="/services/digital-marketing">Digital Marketing Services</Link></li>
                    <li><Link to="/services/software-development">Software Development</Link></li>
                  </ul>
                </div>

                <div className="mega-menu-col">
                  <h4>INNOVATION</h4>
                  <ul>
                    <li><Link to="/services/ai-services">Artificial Intelligence</Link></li>
                    <li><Link to="/services/iot">Internet Of Things</Link></li>
                    <li><Link to="/services/database-design">Database Design</Link></li>
                    <li><Link to="/services/data-analytics">Data Analytics</Link></li>
                    <li><Link to="/services/industrial-automation">Industrial Automation</Link></li>
                    <li><Link to="/services/software-testing">Software Testing</Link></li>
                  </ul>
                </div>

                <div className="mega-menu-col">
                  <h4>ENTERPRISE</h4>
                  <ul>
                    <li><Link to="/services/staffing">Staffing & Payroll</Link></li>
                    <li><Link to="/services/payment-gateway">Payment Gateway Service</Link></li>
                    <li><Link to="/services/cloud-hosting">Cloud & Hosting Service</Link></li>
                    <li><Link to="/services/shopify-wordpress">Shopify & Wordpress Development</Link></li>
                    <li><Link to="/services/oracle">Oracle Development & Consulting</Link></li>
                  </ul>
                </div>

                <div className="mega-menu-col">
                  <h4>WEB3 SERVICES</h4>
                  <ul>
                    <li><Link to="/services/ico">ICO Development</Link></li>
                    <li><Link to="/services/token">Token Development</Link></li>
                    <li><Link to="/services/web3">Web3 Development</Link></li>
                    <li><Link to="/services/dapp">DApp Development</Link></li>
                    <li><Link to="/services/wallet">Wallet Development</Link></li>
                    <li><Link to="/services/exchange">Exchange Development</Link></li>
                    <li><Link to="/services/mlm">MLM Software Development</Link></li>
                    <li><Link to="/services/dex">Dex Platform</Link></li>
                  </ul>
                </div>

              </div>
            </div>
          </li>
          <li>
            <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
          </li>
          <li>
            <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link>
          </li>
        </ul>

        <div className="nav-action">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link to="/contact" className="btn btn-outline">Contact us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
