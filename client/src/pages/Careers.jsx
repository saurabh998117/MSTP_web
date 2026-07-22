import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, HeartPulse, Laptop, TrendingUp, DollarSign, Search, Calendar, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import './Careers.css';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const benefits = [
    {
      icon: <DollarSign size={24} />,
      title: 'Competitive Salary',
      desc: 'We offer industry-standard compensation with performance bonuses.'
    },
    {
      icon: <HeartPulse size={24} />,
      title: 'Health & Wellness',
      desc: 'Comprehensive medical insurance and wellness programs for you and your family.'
    },
    {
      icon: <Laptop size={24} />,
      title: 'Flexible Work',
      desc: 'Work from anywhere with our flexible remote and hybrid policies.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Career Growth',
      desc: 'Continuous learning opportunities, certifications, and clear career paths.'
    }
  ];

  const jobs = [
    {
      id: '100',
      title: 'Software developer (SDE-1)',
      department: 'Product and Platform Engineering',
      type: 'Full-time',
      experience: '0-2 years',
      location: 'Bhopal, India',
      date: '30/06/2026',
      description: 'Extensive experience in Java programming, demonstrating advanced proficiency in developing scalable applications. You will be responsible for building robust backend systems and integrating with microservices.',
      primarySkills: 'Java Backend, Java, Python',
      secondarySkills: 'Java + spring boot + Microservices, SQL',
      overview: 'JD Focus: Strong CS fundamentals, coding, and data structures skills - Freshers from IITs, NITs, BITS, IIITs, and Other Premier Institutes only.',
      eligibility: 'Candidates must have a CGPA of 7.5 and above. CGPA score is mandatory on the resume. Profiles without CGPA mentioned will not be considered.'
    },
    {
      id: '101',
      title: 'Software Engineer Intern',
      department: 'Engineering',
      type: 'Internship',
      experience: '0 years',
      location: 'Raipur, India',
      date: '25/06/2026',
      description: 'Looking for a passionate intern to help build scalable user interfaces and backend systems. You will be mentored by senior developers and establish strong coding practices.',
      primarySkills: 'JavaScript, React, Node.js',
      secondarySkills: 'HTML, CSS, Git',
      overview: 'JD Focus: Fast learner with a solid foundation in computer science and web development.',
      eligibility: 'Currently pursuing or recently graduated with a Bachelor\'s degree in Computer Science. Minimum CGPA 7.0.'
    },
    {
      id: '102',
      title: 'Frontend developer',
      department: 'UI/UX Engineering',
      type: 'Full-time',
      experience: '1-4 years',
      location: 'Bhopal, India',
      date: '20/06/2026',
      description: 'Join our frontend team to build robust UI interfaces. You will work on high-throughput systems serving millions of users.',
      primarySkills: 'React, Next.js, TypeScript',
      secondarySkills: 'Tailwind CSS, Redux, Jest',
      overview: 'JD Focus: Deep understanding of React ecosystem and frontend performance optimization techniques.',
      eligibility: 'B.Tech/BE in CS/IT. Strong problem-solving skills and experience with scalable architectures.'
    },
    {
      id: '103',
      title: 'Java Backend developer',
      department: 'Platform Engineering',
      type: 'Full-time',
      experience: '2-5 years',
      location: 'Hybrid',
      date: '15/06/2026',
      description: 'Help clients optimize their backend systems and drive business growth through tailored Java implementations and custom development.',
      primarySkills: 'Java, Spring Boot, Microservices',
      secondarySkills: 'MySQL, AWS, Docker',
      overview: 'JD Focus: End-to-end backend implementation and scalable architecture design.',
      eligibility: 'Proven track record of successful enterprise deployments. Strong algorithmic skills.'
    },
    {
      id: '104',
      title: '.NET Backend developer',
      department: 'Enterprise Solutions',
      type: 'Full-time',
      experience: '2-5 years',
      location: 'Raipur, India',
      date: '10/06/2026',
      description: 'Develop and maintain robust .NET applications for enterprise clients. Focus on performance, security, and scalability.',
      primarySkills: 'C#, .NET Core, ASP.NET',
      secondarySkills: 'SQL Server, Azure, Entity Framework',
      overview: 'JD Focus: Enterprise application development using Microsoft technologies.',
      eligibility: 'Minimum 2 years of experience with .NET Core and SQL Server.'
    },
    {
      id: '105',
      title: 'Full stack developer',
      department: 'Product Engineering',
      type: 'Full-time',
      experience: '2-4 years',
      location: 'Bhopal, India',
      date: '05/06/2026',
      description: 'Work on both frontend and backend to deliver complete features. Collaborate with designers and product managers to create seamless experiences.',
      primarySkills: 'React, Node.js, MongoDB',
      secondarySkills: 'Express, TypeScript, AWS',
      overview: 'JD Focus: Full stack product development from concept to deployment.',
      eligibility: 'Experience building full-stack applications. Solid understanding of both client-side and server-side paradigms.'
    }
  ];

  const toggleJob = (id) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
    }
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero section">
        <div className="container">
          <h1 className="section-title">Shape Your Future with <span>MAATRSHRI</span></h1>
          <p className="careers-subtitle">
            Be part of a global team that drives digital innovation, embraces challenges, and delivers excellence.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section">
        <div className="container">
          <h2 className="section-title" style={{fontSize: '2rem'}}>Why work with us?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div className="benefit-card" key={idx}>
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section - Theme Aware Grid Layout */}
      <section className="jobs-section section">
        <div className="container">
          <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '2rem'}}>Open Roles!</h2>
          
          <div className="jobs-search-bar">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search for job postings..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="jobs-search-input"
            />
          </div>

          <div className="job-boxes-grid">
            {filteredJobs.map((job) => (
              <React.Fragment key={job.id}>
                {/* Unexpanded Dark Box */}
                <div className={`job-box-card ${expandedJobId === job.id ? 'active-box' : ''}`}>
                  <div className="job-box-header">
                    <span className="job-box-id"><Briefcase size={14} style={{marginRight: '6px'}}/> Job ID: <span style={{color: 'var(--accent-primary)'}}>{job.id}</span></span>
                    <span className="job-box-badge">{job.type}</span>
                  </div>
                  <h3 className="job-box-title">{job.title}</h3>
                  <div className="job-box-meta">
                    <span className="job-box-meta-item"><MapPin size={16}/> {job.location}</span>
                    <span className="job-box-meta-item"><Briefcase size={16}/> <span style={{color: 'var(--accent-primary)', marginRight: '4px'}}>{job.experience}</span> experience</span>
                  </div>
                  <div className="job-box-footer">
                    <button className="view-details-btn" onClick={() => toggleJob(job.id)}>
                      View details <ArrowRight size={16} style={{marginLeft: '4px'}}/>
                    </button>
                    <Link to="/apply" state={{ job }} className="apply-now-btn-small">
                      Apply Now <ArrowRight size={16} style={{marginLeft: '4px'}}/>
                    </Link>
                  </div>
                </div>

                {/* Expanded Details Accordion */}
                {expandedJobId === job.id && (
                  <div className="job-expanded-view">
                    
                    <div className="job-list-header-expanded">
                      <div className="job-list-title-area">
                        <h3 className="job-list-title-exp">J{job.id} - {job.title}</h3>
                        <div className="job-list-department-exp">
                          <Briefcase size={14} style={{marginRight: '6px'}} /> 
                          {job.department}
                        </div>
                      </div>
                      <div className="job-list-meta-area-exp">
                        <span className="meta-badge-exp"><Briefcase size={14} /> {job.experience}</span>
                        <span className="meta-badge-exp"><MapPin size={14} /> {job.location}</span>
                        <span className="meta-badge-exp"><Calendar size={14} /> {job.date}</span>
                        <button className="collapse-btn" onClick={() => setExpandedJobId(null)}>
                           <ChevronUp size={20} className="expand-icon-exp" />
                        </button>
                      </div>
                    </div>

                    <div className="job-list-details-exp">
                      
                      {/* About Us Inside Job */}
                      <div className="details-section">
                        <h4>About Us</h4>
                        <p>
                          At MAATRSHRI, we are more than just a technology provider; we are architects of the digital future. We have partnered with global enterprises to solve complex business challenges through cutting-edge IT solutions, strategic consulting, and robust engineering. We foster a culture of continuous innovation, where bold ideas are encouraged and talent is nurtured. Join us to build a career that truly matters.
                        </p>
                      </div>

                      <div className="details-section">
                        <h4>Job Details</h4>
                        <p>{job.title}</p>
                        <p>{job.department}</p>
                        <p>{job.experience}</p>
                        <p>{job.location}</p>
                        <p>{job.date}</p>
                      </div>

                      <div className="details-section">
                        <h4>Job Description</h4>
                        <p>{job.description}</p>
                      </div>

                      <div className="details-section">
                        <h4>Primary Skills</h4>
                        <p>{job.primarySkills}</p>
                      </div>

                      <div className="details-section">
                        <h4>Secondary Skills</h4>
                        <p>{job.secondarySkills}</p>
                      </div>

                      <div className="details-section">
                        <h4>Job Overview</h4>
                        <p>{job.overview}</p>
                      </div>

                      <div className="details-section">
                        <h4>Eligibility Criteria</h4>
                        <p>{job.eligibility}</p>
                      </div>

                      <div className="job-action-buttons">
                        <button className="btn btn-outline" onClick={() => setExpandedJobId(null)}>Cancel</button>
                        <Link to="/apply" state={{ job }} className="btn btn-primary" style={{textDecoration: 'none'}}>Apply</Link>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
            
            {filteredJobs.length === 0 && (
              <div style={{textAlign: 'center', padding: '3rem', color: '#94a3b8', gridColumn: '1 / -1'}}>
                No jobs found matching your search.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
