export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Part-time';
  level: 'Senior' | 'Mid-level' | 'Manager' | 'Director' | 'Principal';
  description: string;
  requirements: string[];
  niceToHave: string[];
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: 'sap-s4hana-finance-lead',
    title: 'SAP S/4HANA Finance Lead Consultant',
    department: 'Consulting',
    location: 'Toronto, ON / Remote',
    type: 'Full-time',
    level: 'Senior',
    description: 'Lead SAP S/4HANA Finance implementations for our insurance and utilities clients. You will work directly with CFOs and finance transformation leads, translating complex financial requirements into scalable SAP solutions.',
    requirements: [
      '8+ years of SAP finance consulting experience',
      '3+ full-cycle S/4HANA Finance implementations',
      'Deep expertise in SAP General Ledger, Asset Accounting, and Financial Close',
      'Experience with at least one regulated industry (insurance, utilities, or telecom)',
      'Strong stakeholder management and executive communication skills',
    ],
    niceToHave: ['SAP FPSL experience', 'IFRS 17 project experience', 'SAP Certified Application Associate'],
    postedDate: '2026-02-15',
  },
  {
    id: 'sap-brim-consultant',
    title: 'SAP BRIM Consultant',
    department: 'Consulting',
    location: 'New York, NY / Remote',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Join our growing BRIM practice delivering SAP billing and revenue management solutions for telecom and utilities clients. You will configure SAP BRIM modules including SOM, CI, CC, and FI-CA.',
    requirements: [
      '4+ years of SAP BRIM / FI-CA / FS-CD experience',
      'At least 1 full BRIM implementation lifecycle',
      'Strong understanding of subscription and usage-based billing processes',
      'Experience with BRIM SOM, Convergent Invoicing, or FI-CA modules',
    ],
    niceToHave: ['Telecom or utilities industry background', 'SAP Convergent Mediation experience', 'Revenue assurance exposure'],
    postedDate: '2026-02-20',
  },
  {
    id: 'ai-data-scientist',
    title: 'AI / Data Scientist – Finance Applications',
    department: 'AI Innovation',
    location: 'Remote (North America)',
    type: 'Full-time',
    level: 'Senior',
    description: 'Build and deploy financial AI models within SAP environments. You will work alongside SAP finance consultants to design ML solutions for reconciliation automation, anomaly detection, and predictive forecasting — all integrated with SAP BTP.',
    requirements: [
      '5+ years of data science / ML engineering experience',
      'Proficiency in Python, scikit-learn, and one deep learning framework',
      'Experience deploying ML models in production enterprise environments',
      'Strong understanding of financial data (GL, billing, forecasting)',
    ],
    niceToHave: ['SAP BTP or HANA ML experience', 'Finance domain expertise', 'Experience with explainable AI (SHAP, LIME)'],
    postedDate: '2026-03-01',
  },
  {
    id: 'sap-papm-consultant',
    title: 'SAP PaPM Senior Consultant',
    department: 'Consulting',
    location: 'Chicago, IL / Remote',
    type: 'Full-time',
    level: 'Senior',
    description: 'Deliver SAP PaPM implementations and management reporting transformations for our insurance and utilities clients. You will work closely with CFOs and FP&A leaders to design profitability models that drive real business decisions.',
    requirements: [
      '5+ years SAP finance consulting with PaPM or CO-PA experience',
      'At least 1 PaPM implementation or significant CO-PA to PaPM migration',
      'Strong understanding of cost allocation, transfer pricing, and profitability analysis',
      'SAP Analytics Cloud familiarity',
    ],
    niceToHave: ['Insurance or utilities industry experience', 'BEPS 2.0 / transfer pricing knowledge', 'Management consulting background'],
    postedDate: '2026-02-28',
  },
  {
    id: 'engagement-manager',
    title: 'Engagement Manager – SAP Finance',
    department: 'Consulting',
    location: 'Toronto, ON or New York, NY / Hybrid',
    type: 'Full-time',
    level: 'Manager',
    description: 'Lead client engagements end-to-end — from proposal through delivery — working with C-suite stakeholders at our insurance, utilities, and telecom clients. You will manage cross-functional teams of SAP consultants and own delivery quality and client satisfaction.',
    requirements: [
      '8+ years of consulting experience with at least 3 in a management role',
      'Track record of leading SAP finance programmes over $1M in fees',
      'Strong executive communication and C-suite relationship skills',
      'Experience managing teams of 5-15 consultants',
      'Financial services, utilities, or telecom industry background preferred',
    ],
    niceToHave: ['SAP partner programme experience', 'P&L responsibility experience', 'MBA or equivalent'],
    postedDate: '2026-01-30',
  },
];
