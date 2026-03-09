export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  shortBio: string;
  bio: string;
  expertise: string[];
  industries: string[];
  initials: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    slug: 'james-okonkwo',
    name: 'James Okonkwo',
    title: 'Principal, Insurance Finance Transformation',
    shortBio: '20+ years of SAP finance implementation experience with leading insurers across North America and Europe.',
    bio: 'James leads Noshtek\'s insurance practice with deep expertise in IFRS 17, SAP FPSL, and financial close transformation. Before joining Noshtek, he led the SAP finance practice at a Big Four firm, delivering IFRS 17 programmes for tier-1 life insurers. He is a frequent speaker at SAP Finance conferences and has published widely on IFRS 17 implementation strategy.',
    expertise: ['IFRS 17', 'SAP FPSL', 'SAP S/4HANA Finance', 'Financial Close', 'Insurance Accounting'],
    industries: ['Insurance'],
    initials: 'JO',
    linkedin: 'https://linkedin.com/in/jamesokonkwo',
  },
  {
    slug: 'sarah-chen',
    name: 'Sarah Chen',
    title: 'Director, Utilities Practice',
    shortBio: 'Specialist in SAP BRIM for utilities with expertise in smart metering, tariff design, and digital billing transformation.',
    bio: 'Sarah has spent 15 years at the intersection of energy industry transformation and SAP technology. She has led BRIM implementations at five of the ten largest US distribution utilities and is recognised as a leading voice on smart metering and usage-based billing architecture. Sarah holds a BSc in Electrical Engineering and an MBA in Finance.',
    expertise: ['SAP BRIM', 'Smart Metering', 'FI-CA', 'Utilities Billing', 'Convergent Mediation'],
    industries: ['Utilities'],
    initials: 'SC',
    linkedin: 'https://linkedin.com/in/sarahchen-noshtek',
  },
  {
    slug: 'marcus-webb',
    name: 'Marcus Webb',
    title: 'VP, AI & Finance Innovation',
    shortBio: 'AI practitioner building financial-grade ML models within SAP environments — from reconciliation automation to predictive forecasting.',
    bio: 'Marcus leads Noshtek\'s AI Centre of Excellence, developing and deploying machine learning models within SAP financial processes. His focus is on AI that is explainable, auditable, and genuinely integrated with SAP workflows rather than bolted on. Prior to Noshtek, he led data science teams at a global investment bank and a healthcare company. He holds a PhD in Applied Mathematics.',
    expertise: ['Machine Learning', 'SAP BTP', 'Financial AI', 'Reconciliation Automation', 'Predictive Analytics'],
    industries: ['Insurance', 'Utilities', 'Telecom'],
    initials: 'MW',
    linkedin: 'https://linkedin.com/in/marcuswebb-ai',
  },
  {
    slug: 'priya-nair',
    name: 'Priya Nair',
    title: 'Senior Manager, Finance Performance',
    shortBio: 'SAP PaPM and Analytics Cloud specialist helping CFOs build profitability models that finance teams actually trust and use.',
    bio: 'Priya specialises in SAP PaPM implementations and management reporting transformation. She has delivered profitability models for insurers, utilities, and financial services firms across 8 countries. Her approach centres on co-designing with finance business partners to ensure models reflect how management actually thinks about the business — not just what the software can technically produce.',
    expertise: ['SAP PaPM', 'SAP Analytics Cloud', 'Profitability Modelling', 'Management Reporting', 'Transfer Pricing'],
    industries: ['Insurance', 'Utilities', 'Telecom'],
    initials: 'PN',
    linkedin: 'https://linkedin.com/in/priyanair-sap',
  },
  {
    slug: 'david-tan',
    name: 'David Tan',
    title: 'Manager, Telecom Revenue Assurance',
    shortBio: 'Telecom billing specialist with deep BRIM and FI-CA expertise in convergent billing, roaming settlement, and revenue assurance.',
    bio: 'David brings 12 years of telecom billing experience to Noshtek, with a focus on SAP BRIM for converged operators. He has led revenue assurance programmes that have collectively recovered over $50M in annual revenue leakage for telecom clients. David is co-author of the Noshtek Revenue Assurance Playbook and regularly contributes to TM Forum working groups on billing standards.',
    expertise: ['SAP BRIM', 'Revenue Assurance', 'Telecom Billing', 'Roaming Settlement', 'FI-CA'],
    industries: ['Telecom'],
    initials: 'DT',
    linkedin: 'https://linkedin.com/in/davidtan-telecom',
  },
  {
    slug: 'lisa-hoffman',
    name: 'Lisa Hoffman',
    title: 'Managing Director, North America',
    shortBio: 'P&L leader building Noshtek\'s North American practice with a focus on CFO and CIO relationships in regulated industries.',
    bio: 'Lisa leads Noshtek\'s North American business, working directly with C-suite clients to scope and deliver transformational SAP finance programmes. With 25 years of consulting experience, including 10 years as a partner at a leading management consultancy, Lisa brings strategic perspective alongside deep SAP technical credibility. She serves on the board of two technology non-profits focused on diversity in enterprise technology.',
    expertise: ['Executive Advisory', 'SAP Finance Strategy', 'Programme Management', 'M&A Integration'],
    industries: ['Insurance', 'Utilities', 'Telecom'],
    initials: 'LH',
    linkedin: 'https://linkedin.com/in/lisahoffman-noshtek',
  },
];

export function getTeamMemberBySlug(slug: string) {
  return team.find(m => m.slug === slug);
}
