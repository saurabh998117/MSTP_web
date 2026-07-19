import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import ServiceTemplate from './components/ServiceTemplate';
import ApplyForm from './pages/ApplyForm';
import SuccessPage from './pages/SuccessPage';
import BookConsultation from './pages/BookConsultation';
import PrivacyPage from './pages/PrivacyPage';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import { servicesData } from './data/servicesData';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<CaseStudy />} />
            <Route path="/services/:serviceId" element={<ServiceTemplate />} />
            <Route path="/apply" element={<ApplyForm />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/book" element={<BookConsultation />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            
            {/* Index route for all services */}
            <Route path="/services" element={
              <div className="section container" style={{paddingTop: '100px', minHeight: '60vh'}}>
                <h1 className="section-title">Our Services</h1>
                <p style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)'}}>
                  Comprehensive digital solutions to drive your business forward.
                </p>
                <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
                  {Object.entries(servicesData).map(([id, service]) => (
                    <Link key={id} to={`/services/${id}`} className="btn btn-outline" style={{margin: '0.5rem'}}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
