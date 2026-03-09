export interface Capability { title: string; desc: string; }
export interface AIAccelerator { name: string; desc: string; }

export interface Solution {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  capabilities: Capability[];
  accelerators: AIAccelerator[];
  sapProducts: string[];
  industries: string[];
  outcomes: { value: string; label: string }[];
}

export const solutions: Solution[] = [
  {
    slug: 'financial-transformation',
    title: 'Financial Transformation with SAP',
    shortTitle: 'Financial Transformation',
    tagline: 'Modernize your financial core with SAP S/4HANA, Central Finance, and regulatory compliance solutions.',
    description: 'We help CFOs and finance leaders modernize legacy ERP landscapes with SAP S/4HANA Finance and Central Finance, accelerate period-end close, and achieve IFRS 17 and regulatory compliance — with AI embedded at every step.',
    icon: '📊',
    capabilities: [
      { title: 'SAP S/4HANA Finance Migration', desc: 'Greenfield and brownfield S/4HANA implementations with zero-downtime migration strategies and clean-core principles.' },
      { title: 'SAP Central Finance', desc: 'Centralize financial data from multiple ERP systems into a single source of truth without disrupting existing landscapes.' },
      { title: 'IFRS 17 Compliance', desc: 'End-to-end IFRS 17 implementation using SAP FPSL, covering measurement models, disclosures, and regulatory reporting.' },
      { title: 'Treasury & Risk Management', desc: 'SAP TRM and FPSL solutions for liquidity management, hedging, and financial risk visibility.' },
      { title: 'Financial Close Acceleration', desc: 'AI-assisted reconciliations, automated intercompany eliminations, and faster period-end close processes.' },
      { title: 'Group Reporting & Consolidation', desc: 'SAP Group Reporting implementations for compliant consolidated financial statements.' },
    ],
    accelerators: [
      { name: 'AI Close Assistant', desc: 'Machine learning models that predict close bottlenecks and auto-remediate reconciliation exceptions.' },
      { name: 'Anomaly Detector', desc: 'Real-time GL anomaly detection to catch posting errors before they impact reporting.' },
      { name: 'IFRS 17 Validator', desc: 'Automated IFRS 17 contract grouping validation and measurement model testing tool.' },
    ],
    sapProducts: ['SAP S/4HANA Finance', 'SAP Central Finance', 'SAP FPSL', 'SAP Group Reporting', 'SAP TRM'],
    industries: ['Insurance', 'Utilities', 'Telecom'],
    outcomes: [
      { value: '60%', label: 'Reduction in close cycle time' },
      { value: '99.8%', label: 'Reconciliation accuracy' },
      { value: '100%', label: 'IFRS 17 compliance' },
    ],
  },
  {
    slug: 'intelligent-revenue-billing',
    title: 'Intelligent Revenue and Billing',
    shortTitle: 'Revenue & Billing',
    tagline: 'Unlock revenue potential with SAP BRIM — from usage-based billing to AI-enhanced collections.',
    description: 'Noshtek specialises in SAP BRIM (Billing and Revenue Innovation Management), FI-CA, and FS-CD implementations for utilities, telecoms, and insurers managing complex, high-volume billing scenarios.',
    icon: '💰',
    capabilities: [
      { title: 'SAP BRIM Implementation', desc: 'End-to-end BRIM deployments covering SOM, CI, FICA, and convergent invoicing for subscription and usage billing.' },
      { title: 'SAP FI-CA / FS-CD', desc: 'Contract accounts receivable and payable for insurers and utilities with high-transaction-volume requirements.' },
      { title: 'Usage-Based Billing', desc: 'Smart metering, event-based rating, and real-time consumption billing for utilities and telecom.' },
      { title: 'Subscription Management', desc: 'End-to-end subscription lifecycle management including pricing, discounting, bundling, and renewals.' },
      { title: 'Revenue Assurance', desc: 'Automated revenue leakage detection and prevention across the billing cycle.' },
      { title: 'Collections & Dunning', desc: 'AI-powered collections strategy optimisation and automated dunning workflows.' },
    ],
    accelerators: [
      { name: 'Revenue Leakage Finder', desc: 'ML models scanning billing data for systematic under-charging and configuration gaps.' },
      { name: 'Collections AI', desc: 'Propensity-to-pay models that dynamically route accounts to the optimal collections strategy.' },
      { name: 'Billing QA Accelerator', desc: 'Automated regression testing framework for BRIM configuration changes.' },
    ],
    sapProducts: ['SAP BRIM', 'SAP FI-CA', 'SAP FS-CD', 'SAP S/4HANA', 'SAP BTP'],
    industries: ['Utilities', 'Telecom', 'Insurance'],
    outcomes: [
      { value: '30%', label: 'Revenue leakage reduction' },
      { value: '4×', label: 'Faster billing cycles' },
      { value: '25%', label: 'Improvement in collections rate' },
    ],
  },
  {
    slug: 'profitability-performance',
    title: 'Profitability and Performance',
    shortTitle: 'Profitability & Performance',
    tagline: 'Drive data-driven decisions with SAP PaPM and analytics that reveal true business profitability.',
    description: 'We deploy SAP PaPM (Profitability and Performance Management) and SAP Analytics Cloud to give finance and business leaders granular, allocation-driven profitability intelligence — from product to customer to channel.',
    icon: '📈',
    capabilities: [
      { title: 'SAP PaPM Implementation', desc: 'Full PaPM deployments covering cost allocation, transfer pricing, customer profitability, and segment reporting.' },
      { title: 'Profitability Modelling', desc: 'Design and build of multi-dimensional profitability models aligned to management and regulatory reporting requirements.' },
      { title: 'SAP Analytics Cloud', desc: 'SAC planning, analytics, and predictive scenarios connected to your S/4HANA financial data.' },
      { title: 'Management Reporting', desc: 'Executive dashboards and KPI reporting frameworks built on a single, trusted data foundation.' },
      { title: 'Transfer Pricing & BEPS 2.0', desc: 'Automated transfer pricing documentation and BEPS 2.0 Pillar Two compliance modelling.' },
      { title: 'ESG Reporting', desc: 'Sustainability and ESG financial reporting integrated with core SAP finance processes.' },
    ],
    accelerators: [
      { name: 'Profitability Modeller', desc: 'Pre-built PaPM model templates for insurance, utilities, and telecom segments.' },
      { name: 'Margin Intelligence AI', desc: 'Predictive models that identify margin erosion drivers before they appear in monthly reports.' },
      { name: 'SAC Starter Pack', desc: 'Accelerated SAC deployment with pre-configured dashboards for CFO and FP&A teams.' },
    ],
    sapProducts: ['SAP PaPM', 'SAP Analytics Cloud', 'SAP S/4HANA', 'SAP BW/4HANA', 'SAP BTP'],
    industries: ['Insurance', 'Utilities', 'Telecom'],
    outcomes: [
      { value: '40%', label: 'Faster management reporting' },
      { value: '15%', label: 'Average margin improvement identified' },
      { value: '3×', label: 'Faster planning cycles' },
    ],
  },
  {
    slug: 'ai-for-sap-finance',
    title: 'AI for SAP Finance',
    shortTitle: 'AI for SAP Finance',
    tagline: 'Financial-grade AI embedded within your SAP processes — governed, explainable, and outcome-driven.',
    description: 'Noshtek embeds AI accelerators directly within SAP finance workflows — not as bolt-on tools, but as integrated capabilities built on SAP BTP, BW/4HANA, and SAP Business AI. Every model is designed for financial-grade accuracy and explainability.',
    icon: '🤖',
    capabilities: [
      { title: 'AI-Powered Reconciliations', desc: 'Intelligent matching of transactions across systems, reducing manual reconciliation effort by up to 80%.' },
      { title: 'Predictive Forecasting', desc: 'ML-driven cash flow, revenue, and P&L forecasting integrated with SAP planning processes.' },
      { title: 'Intelligent Collections', desc: 'Propensity-to-pay and risk-scoring models that optimise collections strategies and reduce DSO.' },
      { title: 'Document Intelligence', desc: 'Automated invoice processing, contract data extraction, and GL coding using large language models.' },
      { title: 'Anomaly Detection', desc: 'Real-time detection of unusual financial transactions, potential fraud, and posting errors.' },
      { title: 'SAP BTP Data Foundation', desc: 'Data integration, transformation, and AI model deployment on SAP Business Technology Platform.' },
    ],
    accelerators: [
      { name: 'Finance AI Studio', desc: 'Our proprietary framework for rapid AI model development and deployment within SAP environments.' },
      { name: 'Explainability Layer', desc: 'SHAP-based model explanations designed for audit and regulatory review of AI-driven financial decisions.' },
      { name: 'BTP Data Connector', desc: 'Pre-built integration templates connecting SAP S/4HANA, BRIM, and PaPM data to AI workloads on BTP.' },
    ],
    sapProducts: ['SAP BTP', 'SAP Business AI', 'SAP BW/4HANA', 'SAP Datasphere', 'SAP S/4HANA'],
    industries: ['Insurance', 'Utilities', 'Telecom'],
    outcomes: [
      { value: '80%', label: 'Manual reconciliation reduction' },
      { value: '95%', label: 'Forecast accuracy improvement' },
      { value: '3 days', label: 'Faster financial close' },
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find(s => s.slug === slug);
}
