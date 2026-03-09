export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  challenges: { title: string; desc: string }[];
  solutions: string[];
  stats: { value: string; label: string }[];
  regulatoryContext: string;
}

export const industries: Industry[] = [
  {
    slug: 'insurance',
    name: 'Insurance',
    tagline: 'Navigate IFRS 17, modernise billing, and unlock profitability in a rapidly evolving regulatory landscape.',
    description: 'Noshtek has deep expertise serving life, P&C, and specialty insurers facing IFRS 17 compliance deadlines, complex reinsurance accounting, and billing modernisation programmes. We understand both the SAP architecture and the financial reporting intricacies unique to insurance.',
    icon: '🛡️',
    color: '#083a5e',
    challenges: [
      { title: 'IFRS 17 Compliance', desc: 'Complex measurement models (GMM, PAA, VFA) requiring significant data transformation and SAP FPSL implementation.' },
      { title: 'Legacy Policy Administration', desc: 'Migrating complex billing from legacy systems to SAP FS-CD or FI-CA with zero revenue disruption.' },
      { title: 'Regulatory Reporting', desc: 'Solvency II, LDTI, and local GAAP requirements on top of IFRS 17 adding reporting complexity.' },
      { title: 'Claims & Reserve Management', desc: 'Integrating claims data with financial close and reserve adequacy processes in real time.' },
    ],
    solutions: ['financial-transformation', 'intelligent-revenue-billing', 'profitability-performance', 'ai-for-sap-finance'],
    stats: [
      { value: '15+', label: 'Insurance clients served' },
      { value: '100%', label: 'IFRS 17 go-live rate' },
      { value: '40%', label: 'Avg close acceleration' },
    ],
    regulatoryContext: 'IFRS 17, Solvency II, LDTI (US), local GAAP, BEPS 2.0, ESG reporting frameworks.',
  },
  {
    slug: 'utilities',
    name: 'Utilities',
    tagline: 'Transform smart metering, usage billing, and SAP finance for the energy transition.',
    description: 'From large integrated utilities to distribution network operators, Noshtek delivers SAP-powered billing, finance, and analytics solutions that support the complexity of deregulated energy markets, smart metering rollouts, and sustainability reporting.',
    icon: '⚡',
    color: '#007a3f',
    challenges: [
      { title: 'Smart Meter Volume Billing', desc: 'Processing millions of interval meter reads daily within SAP BRIM with real-time accuracy.' },
      { title: 'Energy Transition Finance', desc: 'Modelling the financial impact of renewable assets, storage, and distributed energy resources.' },
      { title: 'Regulatory Price Controls', desc: 'Compliant revenue recognition and cost allocation under regulatory price control frameworks (RIIO, AER, FERC).' },
      { title: 'S/4HANA Migration', desc: 'Migrating large, complex utility ERP landscapes to S/4HANA while maintaining operational continuity.' },
    ],
    solutions: ['intelligent-revenue-billing', 'financial-transformation', 'profitability-performance', 'ai-for-sap-finance'],
    stats: [
      { value: '20+', label: 'Utility clients worldwide' },
      { value: '50M+', label: 'Meter reads processed daily' },
      { value: '30%', label: 'Billing cost reduction' },
    ],
    regulatoryContext: 'RIIO (UK), AER (Australia), FERC (US), EU Energy Regulation, IFRS 16, ESG/GRI reporting.',
  },
  {
    slug: 'telecom',
    name: 'Telecom',
    tagline: 'Modernise subscription and convergent billing while accelerating revenue operations with AI.',
    description: 'Noshtek supports telecom operators navigating the shift to 5G, convergent billing, and usage-based pricing models. We deploy SAP BRIM and advanced analytics solutions that handle complex bundle pricing, partner settlements, and revenue assurance at scale.',
    icon: '📡',
    color: '#0d5080',
    challenges: [
      { title: 'Convergent Billing Complexity', desc: 'Billing for fixed, mobile, broadband, and OTT services on a single platform without revenue leakage.' },
      { title: 'Revenue Assurance', desc: 'Reconciling network usage data with billing events to identify leakage across millions of transactions.' },
      { title: '5G Monetisation', desc: 'Developing and pricing new 5G service packages including network slicing and IoT connectivity billing.' },
      { title: 'Partner & Roaming Settlements', desc: 'Automated inter-carrier settlement and roaming revenue sharing with real-time reconciliation.' },
    ],
    solutions: ['intelligent-revenue-billing', 'ai-for-sap-finance', 'profitability-performance', 'financial-transformation'],
    stats: [
      { value: '10+', label: 'Telecom operators served' },
      { value: '99.9%', label: 'Billing accuracy achieved' },
      { value: '25%', label: 'Revenue assurance improvement' },
    ],
    regulatoryContext: 'IFRS 15, GDPR, FCC regulations, EU Electronic Communications Code, ITU standards.',
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find(i => i.slug === slug);
}
