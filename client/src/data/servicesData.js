// Import all GIFs
import gifIT from '../assets/services/it service F.gif';
import gifSalesforce from '../assets/services/Salesforce-F.gif';
import gifWebDev from '../assets/services/WEB_D_F.gif';
import gifDigital from '../assets/services/Digital_ F.gif';
import gifSoftwareDev from '../assets/services/Software dev-F.gif';

import gifAI from '../assets/services/AI F.gif';
import gifIOT from '../assets/services/IOT-F.gif';
import gifDatabase from '../assets/services/Database F.gif';
import gifDataAnalytics from '../assets/services/Data analytics-F.gif';
import gifIndustrial from '../assets/services/industrial_auto F.gif';
import gifSoftwareTesting from '../assets/services/software testing F.gif';

import gifStaffing from '../assets/services/Staffing Payroll F.gif';
import gifPayment from '../assets/services/Payment Gateway F.gif';
import gifCloud from '../assets/services/cloud F.gif';
import gifWordpress from '../assets/services/Wordpress F.gif';
import gifOracle from '../assets/services/Oracle F.gif';

import gifICO from '../assets/services/ico dev F.gif';
import gifToken from '../assets/services/Token F.gif';
import gifWeb3 from '../assets/services/Web3 F.gif';
import gifDApp from '../assets/services/Decentralized app F.gif';
import gifWallet from '../assets/services/Wallet F.gif';
import gifExchange from '../assets/services/Exchange F.gif';
import gifMLM from '../assets/services/MLM F.gif';
import gifDex from '../assets/services/Dex Plat F.gif';

const genericFeatures = [
  { title: 'Custom Strategy', desc: 'Tailored solutions to meet your specific business requirements.' },
  { title: 'Expert Implementation', desc: 'Flawless execution by our team of seasoned professionals.' },
  { title: 'Ongoing Support', desc: 'Continuous monitoring and maintenance to ensure optimal performance.' },
  { title: 'Scalable Architecture', desc: 'Built to grow seamlessly alongside your business.' }
];

const genericProcess = ['Consultation', 'Planning', 'Development', 'Testing', 'Deployment', 'Support'];

export const servicesData = {
  // FOUNDATION
  'it-services': {
    title: 'IT Services',
    description: 'We provide comprehensive IT services to help businesses optimize their technology infrastructure, ensuring seamless operations, security, and scalability in the digital age.',
    icon: gifIT,
    features: [
      { title: 'IT Consulting', desc: 'Strategic guidance to align technology with business goals.' },
      { title: 'Cloud Solutions', desc: 'Secure and scalable cloud migration and management.' },
      { title: 'Cybersecurity', desc: 'Advanced protection against digital threats.' },
      { title: 'Network Infrastructure', desc: 'Reliable and high-performance network setup.' }
    ],
    processSteps: genericProcess,
    technologies: ['React', 'NodeJS', 'AWS', 'Docker']
  },
  'salesforce-services': {
    title: 'Salesforce Services',
    description: 'Our Salesforce experts help you maximize your CRM investment through custom development, integration, and strategic consulting to drive sales.',
    icon: gifSalesforce,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Salesforce', 'Apex', 'Lightning']
  },
  'web-development': {
    title: 'Web Development',
    description: 'We build fast, responsive, and highly scalable web applications tailored to your specific business requirements.',
    icon: gifWebDev,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['React', 'NextJS', 'NodeJS']
  },
  'mobile-app': {
    title: 'Mobile App Development',
    description: 'Create engaging native and cross-platform mobile experiences that delight users and drive business growth.',
    icon: gifSoftwareDev, // fallback since no mobile gif
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['React Native', 'Flutter', 'Swift']
  },
  'digital-marketing': {
    title: 'Digital Marketing Services',
    description: 'Data-driven marketing strategies to increase your online visibility, drive traffic, and convert leads into loyal customers.',
    icon: gifDigital,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['SEO', 'Google Ads', 'Meta Ads']
  },
  'software-development': {
    title: 'Software Development',
    description: 'Custom software engineering solutions tailored to automate your unique business processes and solve complex challenges.',
    icon: gifSoftwareDev,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Java', 'Python', 'Docker']
  },

  // INNOVATION
  'ai-services': {
    title: 'Artificial Intelligence',
    description: 'Leverage the power of AI to automate tasks, personalize customer experiences, and unlock new capabilities.',
    icon: gifAI,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['OpenAI', 'TensorFlow', 'Python']
  },
  'iot': {
    title: 'Internet Of Things',
    description: 'Connect and manage smart devices to collect data, automate processes, and build intelligent environments.',
    icon: gifIOT,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['MQTT', 'C++', 'AWS IoT']
  },
  'database-design': {
    title: 'Database Design',
    description: 'Architecting robust, scalable, and secure databases for high-performance applications.',
    icon: gifDatabase,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['PostgreSQL', 'MongoDB', 'Redis']
  },
  'data-analytics': {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights to drive informed business decisions.',
    icon: gifDataAnalytics,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Tableau', 'PowerBI', 'Python']
  },
  'industrial-automation': {
    title: 'Industrial Automation',
    description: 'Streamline manufacturing and industrial processes with advanced automation technologies.',
    icon: gifIndustrial,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['SCADA', 'PLC', 'Robotics']
  },
  'software-testing': {
    title: 'Software Testing',
    description: 'Rigorous QA and automated testing to ensure your software is bug-free and performs flawlessly.',
    icon: gifSoftwareTesting,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Selenium', 'Jest', 'Cypress']
  },

  // ENTERPRISE
  'staffing': {
    title: 'Staffing & Payroll',
    description: 'Comprehensive workforce management and payroll processing solutions for modern enterprises.',
    icon: gifStaffing,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['HRMS', 'Payroll Systems']
  },
  'payment-gateway': {
    title: 'Payment Gateway Service',
    description: 'Secure, fast, and reliable payment integration solutions to accept global transactions.',
    icon: gifPayment,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Stripe', 'PayPal', 'Razorpay']
  },
  'cloud-hosting': {
    title: 'Cloud & Hosting Service',
    description: 'Scalable cloud architecture and reliable hosting for maximum uptime and performance.',
    icon: gifCloud,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['AWS', 'Azure', 'GCP']
  },
  'shopify-wordpress': {
    title: 'Shopify & Wordpress Development',
    description: 'Build powerful e-commerce stores and CMS websites that drive sales and content engagement.',
    icon: gifWordpress,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Shopify', 'WordPress', 'PHP']
  },
  'oracle': {
    title: 'Oracle Development & Consulting',
    description: 'Expert Oracle database development, ERP consulting, and cloud migration services.',
    icon: gifOracle,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Oracle DB', 'PL/SQL']
  },

  // WEB3 SERVICES
  'ico': {
    title: 'ICO Development',
    description: 'Launch successful Initial Coin Offerings with secure smart contracts and robust platforms.',
    icon: gifICO,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Solidity', 'Ethereum']
  },
  'token': {
    title: 'Token Development',
    description: 'Create custom utility, security, or governance tokens on various blockchain networks.',
    icon: gifToken,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['ERC20', 'BEP20', 'Smart Contracts']
  },
  'web3': {
    title: 'Web3 Development',
    description: 'Build the next generation of decentralized applications and blockchain infrastructure.',
    icon: gifWeb3,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Web3.js', 'Ethers.js']
  },
  'dapp': {
    title: 'DApp Development',
    description: 'End-to-end decentralized application development tailored for Web3 ecosystems.',
    icon: gifDApp,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['React', 'Solidity', 'IPFS']
  },
  'wallet': {
    title: 'Wallet Development',
    description: 'Secure, multi-currency crypto wallet solutions with advanced features and user-friendly UX.',
    icon: gifWallet,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Cryptography', 'Blockchain Nodes']
  },
  'exchange': {
    title: 'Exchange Development',
    description: 'High-performance cryptocurrency exchange platforms with top-tier security.',
    icon: gifExchange,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Order Matching Engine', 'Liquidity']
  },
  'mlm': {
    title: 'MLM Software Development',
    description: 'Smart contract-based Multi-Level Marketing platforms ensuring transparency and trust.',
    icon: gifMLM,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['Smart Contracts', 'DeFi']
  },
  'dex': {
    title: 'Dex Platform',
    description: 'Decentralized exchange development allowing peer-to-peer crypto trading without intermediaries.',
    icon: gifDex,
    features: genericFeatures,
    processSteps: genericProcess,
    technologies: ['AMM', 'Liquidity Pools', 'Solidity']
  }
};
