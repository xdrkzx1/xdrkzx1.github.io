export interface Outcome { metric: string; value: string; description: string; }

export interface CaseStudy {
  slug: string;
  client: string;
  clientDesc: string;
  industry: string;
  region: string;
  solutions: string[];
  challenge: string;
  approach: string;
  outcomes: Outcome[];
  testimonial?: { quote: string; name: string; role: string; };
  sapProducts: string[];
  timeline: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'major-insurer-ifrs17',
    client: 'Major North American Life Insurer',
    clientDesc: 'Tier-1 life and annuity insurer with $80B in assets under management operating in the US and Canada.',
    industry: 'Insurance',
    region: 'North America',
    solutions: ['financial-transformation'],
    challenge: 'The insurer needed to comply with IFRS 17 effective January 2025, requiring a complete overhaul of their insurance contract measurement from IFRS 4 to the new standard. Their existing SAP ECC environment lacked the capability to support GMM and VFA measurement models across 12 product lines.',
    approach: 'Noshtek led a full SAP FPSL implementation alongside S/4HANA Finance migration. We co-designed the IFRS 17 measurement models with the client\'s actuarial team, built the data transformation layer from their policy administration systems, and implemented a parallel run capability enabling 4 quarters of dual reporting before go-live.',
    outcomes: [
      { metric: 'IFRS 17 go-live', value: 'On time, on budget', description: 'First time compliant reporting for Q1 2025 regulatory submission' },
      { metric: 'Close cycle', value: '38%', description: 'Reduction in financial close cycle time post-FPSL implementation' },
      { metric: 'Manual journal entries', value: '-65%', description: 'Reduction in manual adjusting entries through automated FPSL postings' },
      { metric: 'Audit findings', value: '0', description: 'Zero regulatory audit findings in first IFRS 17 compliance review' },
    ],
    testimonial: {
      quote: 'Noshtek\'s team brought a rare combination of deep SAP FPSL expertise and genuine insurance accounting knowledge. They didn\'t just implement the software — they helped us redesign our finance operating model for IFRS 17.',
      name: 'CFO',
      role: 'Major North American Life Insurer',
    },
    sapProducts: ['SAP FPSL', 'SAP S/4HANA Finance', 'SAP Group Reporting'],
    timeline: '18 months',
    featured: true,
  },
  {
    slug: 'regional-utility-brim',
    client: 'Regional Energy Utility',
    clientDesc: 'Integrated electricity distribution and retail utility serving 2.1 million residential and commercial customers across the US Midwest.',
    industry: 'Utilities',
    region: 'North America',
    solutions: ['intelligent-revenue-billing', 'ai-for-sap-finance'],
    challenge: 'A smart meter rollout programme generating 50M+ daily interval reads was overwhelming the utility\'s legacy billing platform. Incorrect bills were running at 3.2%, causing significant customer complaints and regulatory risk. The utility needed a scalable, accurate billing platform within 24 months.',
    approach: 'We delivered a full SAP BRIM implementation with optimised Convergent Mediation architecture for smart meter data, integrated with their AMI head-end system. An AI-powered billing QA layer was built on SAP BTP to catch rating anomalies before invoicing. Customer self-service was extended through SAP Fiori.',
    outcomes: [
      { metric: 'Billing accuracy', value: '99.94%', description: 'Up from 96.8% on the legacy system — a 10× error reduction' },
      { metric: 'Processing throughput', value: '52M reads/day', description: 'In a 4-hour overnight window, supporting full smart meter rollout' },
      { metric: 'Customer complaints', value: '-71%', description: 'Billing-related customer service contacts reduced in first 6 months post-go-live' },
      { metric: 'Revenue recovery', value: '$4.2M', description: 'Annual revenue recovered from previously unrated events identified by AI layer' },
    ],
    testimonial: {
      quote: 'The AI billing QA tool has been a game-changer. We catch issues before customers see them, not after. The difference in our customer satisfaction scores has been remarkable.',
      name: 'VP, Customer Operations',
      role: 'Regional Energy Utility',
    },
    sapProducts: ['SAP BRIM', 'SAP FI-CA', 'SAP BTP', 'SAP S/4HANA'],
    timeline: '22 months',
    featured: true,
  },
  {
    slug: 'telecom-revenue-assurance',
    client: 'Mid-Size Telecom Operator',
    clientDesc: 'Converged telecom operator providing fixed, mobile, and broadband services to 800K B2C and B2B customers.',
    industry: 'Telecom',
    region: 'North America',
    solutions: ['intelligent-revenue-billing', 'ai-for-sap-finance'],
    challenge: 'Following a convergent billing migration to SAP BRIM, the operator discovered systematic revenue leakage estimated at 2.3% of gross revenue. The root causes were multiple: discount configuration errors, unrated roaming events, and overly generous credit note approvals. Manual reconciliation processes were unable to identify leakage in real time.',
    approach: 'Noshtek deployed a revenue assurance analytics layer built on SAP BTP Datasphere, connecting billing events, network usage data, and FI-CA transaction data. We implemented ML-powered anomaly detection to identify leakage patterns and automated a set of preventive controls within BRIM configuration.',
    outcomes: [
      { metric: 'Revenue leakage', value: '2.1% → 0.4%', description: 'Revenue leakage reduced from 2.3% to under 0.4% within 9 months' },
      { metric: 'Annual revenue recovery', value: '$18M', description: 'Net present value of identified and recovered revenue in Year 1' },
      { metric: 'Detection time', value: 'Real-time', description: 'Leakage detection moved from monthly audit cycle to real-time alerting' },
      { metric: 'Manual effort', value: '-80%', description: 'Reduction in manual revenue assurance analyst hours per month' },
    ],
    testimonial: {
      quote: 'We knew we had a leakage problem — we just couldn\'t see it clearly enough to fix it. Noshtek\'s analytics platform made the invisible visible, and then helped us eliminate the root causes systematically.',
      name: 'Chief Revenue Officer',
      role: 'Mid-Size Telecom Operator',
    },
    sapProducts: ['SAP BRIM', 'SAP BTP', 'SAP Datasphere', 'SAP FI-CA'],
    timeline: '9 months',
    featured: true,
  },
  {
    slug: 'insurer-papm-profitability',
    client: 'Specialty Lines Insurer',
    clientDesc: 'Specialty P&C insurer with $3.5B GWP operating across 5 US states and Canada.',
    industry: 'Insurance',
    region: 'North America',
    solutions: ['profitability-performance'],
    challenge: 'The insurer\'s finance team was spending 6+ days per month manually compiling line-of-business and geographic profitability reports from multiple source systems. The reports were backward-looking, inconsistently defined across divisions, and not trusted by senior management for strategic decisions.',
    approach: 'We implemented SAP PaPM connected to their S/4HANA Universal Journal, designing a multi-dimensional profitability model covering LOB, geography, distribution channel, and customer segment. SAP Analytics Cloud was layered on top for executive dashboards and self-service analysis.',
    outcomes: [
      { metric: 'Reporting cycle', value: '6 days → 4 hours', description: 'Monthly profitability reporting delivered within 4 hours of period close' },
      { metric: 'Report adoption', value: '94%', description: 'Senior leadership using PaPM reports as primary source for P&L reviews' },
      { metric: 'Profitable LOBs identified', value: '+3', description: 'Three under-performing lines of business restructured based on PaPM insights' },
      { metric: 'Finance analyst time', value: '-40%', description: 'Reduction in time spent on manual reporting, redirected to analysis' },
    ],
    sapProducts: ['SAP PaPM', 'SAP Analytics Cloud', 'SAP S/4HANA Finance', 'SAP BW/4HANA'],
    timeline: '12 months',
    featured: false,
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find(c => c.slug === slug);
}

export function getFeaturedCaseStudies(count = 3) {
  return caseStudies.filter(c => c.featured).slice(0, count);
}
