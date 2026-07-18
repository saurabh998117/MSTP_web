export const servicesData = {
  'it-services': {
    title: 'IT Services',
    description: 'We provide comprehensive IT services to help businesses optimize their technology infrastructure, ensuring seamless operations, security, and scalability in the digital age.',
    features: [
      { title: 'IT Consulting', desc: 'Strategic guidance to align technology with business goals.' },
      { title: 'Cloud Solutions', desc: 'Secure and scalable cloud migration and management.' },
      { title: 'Cybersecurity', desc: 'Advanced protection against digital threats and vulnerabilities.' },
      { title: 'Network Infrastructure', desc: 'Reliable and high-performance network setup and support.' },
      { title: 'Data Backup', desc: 'Automated backup solutions for business continuity.' },
      { title: '24/7 Tech Support', desc: 'Round-the-clock assistance for all your IT needs.' }
    ],
    processSteps: ['Assessment', 'Strategy', 'Implementation', 'Testing', 'Deployment', 'Support'],
    technologies: ['React', 'NodeJS', 'AWS', 'Docker', 'Kubernetes', 'Python']
  },
  'salesforce-services': {
    title: 'Salesforce Services',
    description: 'Our Salesforce experts help you maximize your CRM investment through custom development, integration, and strategic consulting to drive sales and improve customer relationships.',
    features: [
      { title: 'Sales Cloud', desc: 'Optimize your sales process and close deals faster.' },
      { title: 'Service Cloud', desc: 'Deliver exceptional customer support experiences.' },
      { title: 'Marketing Cloud', desc: 'Create personalized customer journeys at scale.' },
      { title: 'Custom Lightning Apps', desc: 'Tailored applications built on the Salesforce platform.' },
      { title: 'Integration', desc: 'Seamlessly connect Salesforce with other business systems.' },
      { title: 'Data Migration', desc: 'Securely move your existing data into Salesforce.' }
    ],
    processSteps: ['Requirement Gathering', 'Design Architecture', 'Custom Development', 'QA Testing', 'UAT', 'Go Live'],
    technologies: ['Salesforce', 'Apex', 'Lightning', 'MuleSoft', 'LWC', 'Visualforce']
  },
  'web-development': {
    title: 'Web Development',
    description: 'We build fast, responsive, and highly scalable web applications tailored to your specific business requirements using the latest modern web technologies.',
    features: [
      { title: 'Custom Web Apps', desc: 'Tailor-made solutions to solve unique business challenges.' },
      { title: 'E-Commerce', desc: 'Robust online stores that drive sales and conversions.' },
      { title: 'CMS Development', desc: 'Easy-to-manage content management systems.' },
      { title: 'Progressive Web Apps', desc: 'App-like experiences directly in the web browser.' },
      { title: 'API Integration', desc: 'Connecting your web app with third-party services.' },
      { title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces that users love.' }
    ],
    processSteps: ['Discovery', 'Wireframing', 'UI Design', 'Development', 'Testing', 'Launch'],
    technologies: ['React', 'NextJS', 'Vue', 'NodeJS', 'MongoDB', 'PostgreSQL']
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'Create engaging native and cross-platform mobile experiences that delight users and drive business growth.',
    features: [
      { title: 'iOS Development', desc: 'Native applications built for the Apple ecosystem.' },
      { title: 'Android Development', desc: 'High-performance apps for Android devices.' },
      { title: 'Cross-Platform', desc: 'Write once, run anywhere with React Native and Flutter.' },
      { title: 'UI/UX Design', desc: 'Intuitive mobile interfaces.' },
      { title: 'App Store Optimization', desc: 'Increase visibility in app stores.' },
      { title: 'Maintenance', desc: 'Ongoing updates and bug fixes.' }
    ],
    processSteps: ['Concept', 'Wireframing', 'Development', 'Testing', 'App Store Launch', 'Support'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  'digital-marketing': {
    title: 'Digital Marketing Services',
    description: 'Data-driven marketing strategies to increase your online visibility, drive traffic, and convert leads into loyal customers.',
    features: [
      { title: 'SEO', desc: 'Search Engine Optimization to rank higher.' },
      { title: 'PPC Advertising', desc: 'Targeted ad campaigns for immediate ROI.' },
      { title: 'Social Media', desc: 'Engaging content and community management.' },
      { title: 'Content Marketing', desc: 'Valuable content that attracts your audience.' },
      { title: 'Email Marketing', desc: 'Automated campaigns to nurture leads.' },
      { title: 'Analytics', desc: 'In-depth reporting and performance tracking.' }
    ],
    processSteps: ['Audit', 'Strategy', 'Content Creation', 'Campaign Launch', 'Optimization', 'Reporting'],
    technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Meta Ads']
  },
  'software-development': {
    title: 'Software Development',
    description: 'Custom software engineering solutions tailored to automate your unique business processes and solve complex challenges.',
    features: [
      { title: 'Enterprise Software', desc: 'Scalable solutions for large organizations.' },
      { title: 'SaaS Development', desc: 'Cloud-based subscription software products.' },
      { title: 'Legacy Modernization', desc: 'Upgrading outdated systems to modern tech.' },
      { title: 'System Integration', desc: 'Connecting disparate software systems.' },
      { title: 'Custom APIs', desc: 'Building robust application programming interfaces.' },
      { title: 'QA & Testing', desc: 'Rigorous quality assurance.' }
    ],
    processSteps: ['Planning', 'Architecture', 'Development', 'Testing', 'Deployment', 'Maintenance'],
    technologies: ['Java', 'C#', 'Python', 'Node.js', 'Docker', 'AWS']
  },
  'analytics': {
    title: 'Analytics & Data Science',
    description: 'Transform raw data into actionable insights to drive informed business decisions and gain a competitive edge.',
    features: [
      { title: 'Data Visualization', desc: 'Interactive dashboards and reports.' },
      { title: 'Predictive Analytics', desc: 'Forecasting future trends using historical data.' },
      { title: 'Business Intelligence', desc: 'Comprehensive BI implementation.' },
      { title: 'Data Warehousing', desc: 'Secure and scalable data storage.' },
      { title: 'Machine Learning', desc: 'Automated pattern recognition.' },
      { title: 'Data Strategy', desc: 'Consulting on data governance and utilization.' }
    ],
    processSteps: ['Data Collection', 'Cleaning', 'Analysis', 'Modeling', 'Visualization', 'Insight Delivery'],
    technologies: ['Python', 'R', 'Tableau', 'PowerBI', 'TensorFlow', 'Snowflake']
  },
  'industrial-automation': {
    title: 'Industrial Automation',
    description: 'Streamline manufacturing and industrial processes with advanced automation technologies to increase efficiency and safety.',
    features: [
      { title: 'SCADA Systems', desc: 'Supervisory control and data acquisition.' },
      { title: 'PLC Programming', desc: 'Programmable logic controller setup.' },
      { title: 'Robotics Integration', desc: 'Automated physical processes.' },
      { title: 'IoT Sensors', desc: 'Real-time equipment monitoring.' },
      { title: 'Predictive Maintenance', desc: 'Preventing downtime before it happens.' },
      { title: 'Process Optimization', desc: 'Refining workflows for maximum output.' }
    ],
    processSteps: ['Site Survey', 'System Design', 'Hardware Setup', 'Software Integration', 'Testing', 'Training'],
    technologies: ['Siemens', 'Allen-Bradley', 'AutoCAD', 'Python', 'MQTT']
  },
  'ai-services': {
    title: 'AI Services',
    description: 'Leverage the power of Artificial Intelligence to automate tasks, personalize customer experiences, and unlock new capabilities.',
    features: [
      { title: 'NLP', desc: 'Natural Language Processing and Chatbots.' },
      { title: 'Computer Vision', desc: 'Image and video analysis.' },
      { title: 'Generative AI', desc: 'Custom LLM integrations and content generation.' },
      { title: 'Predictive Models', desc: 'AI-driven forecasting.' },
      { title: 'Recommendation Engines', desc: 'Personalized user content.' },
      { title: 'AI Consulting', desc: 'Identifying AI opportunities for your business.' }
    ],
    processSteps: ['Use Case ID', 'Data Prep', 'Model Training', 'Evaluation', 'Deployment', 'Monitoring'],
    technologies: ['OpenAI', 'PyTorch', 'TensorFlow', 'Hugging Face', 'Python']
  },
  'web3-dev': {
    title: 'Web3 Development',
    description: 'Build decentralized applications (DApps), smart contracts, and blockchain solutions for the next generation of the internet.',
    features: [
      { title: 'Smart Contracts', desc: 'Secure and audited contract development.' },
      { title: 'DApp Creation', desc: 'Decentralized application interfaces.' },
      { title: 'NFT Marketplaces', desc: 'Platforms for buying and selling digital assets.' },
      { title: 'DeFi Solutions', desc: 'Decentralized finance protocols.' },
      { title: 'Tokenomics', desc: 'Designing token economies.' },
      { title: 'Wallet Integration', desc: 'Connecting users to the blockchain.' }
    ],
    processSteps: ['Architecture', 'Smart Contract Dev', 'Security Audit', 'Frontend Integration', 'Testnet', 'Mainnet Launch'],
    technologies: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'IPFS']
  }
};
