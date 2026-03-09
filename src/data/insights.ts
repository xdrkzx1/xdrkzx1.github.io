export type InsightFormat = 'Article' | 'Report' | 'Webinar' | 'Guide' | 'Event';

export interface Insight {
  slug: string;
  title: string;
  summary: string;
  content: string;
  format: InsightFormat;
  publishDate: string;
  readTime: number;
  author: string;
  authorRole: string;
  topics: string[];
  industries: string[];
  sapProducts: string[];
  featured: boolean;
  gated: boolean;
}

export const insights: Insight[] = [
  {
    slug: 'ifrs17-implementation-guide-insurers',
    title: 'IFRS 17 Implementation Guide for Insurers: What SAP FPSL Gets Right',
    summary: 'A practical walkthrough of IFRS 17 measurement models — GMM, PAA, and VFA — and how SAP FPSL handles each. Covers common pitfalls and lessons from live implementations.',
    content: `
IFRS 17 fundamentally changes how insurance contracts are recognised, measured, and disclosed. For most insurers, this has meant a multi-year SAP implementation programme involving SAP FPSL (Financial Products Subledger), new data architectures, and significant finance process redesign.

## Why IFRS 17 Is Different

Unlike IFRS 4, which allowed significant variation in accounting policies, IFRS 17 mandates a consistent measurement approach across contract groups. The three measurement models — General Measurement Model (GMM), Premium Allocation Approach (PAA), and Variable Fee Approach (VFA) — each have specific eligibility criteria and produce fundamentally different financial statements.

## How SAP FPSL Handles Each Model

**General Measurement Model (GMM)**
SAP FPSL supports GMM through its Valuation Run framework, which calculates Fulfilment Cash Flows (FCF) comprising best estimates plus risk adjustment, plus Contractual Service Margin (CSM). The CSM, which represents unearned profit, is unlocked through FPSL's coverage unit allocation logic.

**Premium Allocation Approach (PAA)**
For short-duration P&C contracts eligible for PAA, FPSL simplifies the measurement by treating the liability for remaining coverage similar to unearned premium. Our experience shows PAA can reduce reporting complexity significantly — but contract eligibility testing must be rigorously documented.

**Variable Fee Approach (VFA)**
VFA is mandatory for direct participating contracts where policyholder bonuses are linked to underlying items. SAP FPSL handles the complex CSM adjustment mechanics required under VFA, including market variable adjustments.

## Common Implementation Pitfalls

1. **Data quality**: Source system data rarely maps cleanly to IFRS 17 contract group definitions. Data remediation is typically the longest phase of implementation.
2. **Discount rate curves**: SAP FPSL requires a robust methodology for constructing risk-free yield curves and illiquidity premiums. Many insurers underestimate this complexity.
3. **Transition approaches**: Full retrospective vs modified retrospective vs fair value — the choice has multi-year financial statement implications.

## Lessons from Live Implementations

Across our IFRS 17 engagements, we have found that the most successful programmes share three characteristics: early involvement of actuaries in the SAP design, parallel running periods of at least 2 quarters, and strong data governance frameworks that persist beyond go-live.
    `,
    format: 'Report',
    publishDate: '2025-11-15',
    readTime: 12,
    author: 'James Okonkwo',
    authorRole: 'Principal, Insurance Finance Transformation',
    topics: ['IFRS 17', 'Regulatory Compliance', 'Financial Transformation'],
    industries: ['Insurance'],
    sapProducts: ['SAP FPSL', 'SAP S/4HANA Finance'],
    featured: true,
    gated: true,
  },
  {
    slug: 'sap-brim-utilities-smart-metering',
    title: 'SAP BRIM for Utilities: Handling Smart Meter Volume at Scale',
    summary: 'How leading utilities are using SAP BRIM and convergent invoicing to process 50M+ meter reads daily — and the architecture decisions that make it work.',
    content: `
Smart metering rollouts are generating billing data volumes that challenge legacy billing systems. A typical distribution utility with 2 million customers collecting 30-minute interval data generates over 96 million data points per day. SAP BRIM, when properly architected, can handle this load — but the implementation decisions matter enormously.

## The Architecture Challenge

SAP BRIM's Convergent Invoicing (CI) module handles the final invoicing step, but the real work happens earlier in the rating and charging pipeline. For smart metering, this means:

- **SAP Convergent Mediation (CM)**: Ingesting interval data from head-end systems and normalising it for rating
- **SAP Convergent Charging (CC)**: Applying time-of-use tariffs, peak pricing, and demand charges
- **SAP FI-CA**: Contract account management, payment processing, and collections

## Performance Optimisation

The most critical performance lever is the mediation layer. We typically recommend:

1. **Parallel processing**: Configure CM for multi-threaded batch processing during the overnight billing window
2. **Pre-aggregation**: Aggregate interval data to billing-cycle granularity before passing to CC where tariff complexity permits
3. **Database indexing**: FI-CA tables require careful indexing strategy — a poorly indexed system can see 10× performance degradation under load

## Real-World Results

In our largest utilities deployment, we achieved 52 million interval meter reads processed within a 4-hour overnight window, with 99.97% first-time billing accuracy. The key enablers were a bespoke CM configuration and a phased migration approach that allowed performance tuning before full rollout.
    `,
    format: 'Article',
    publishDate: '2025-10-08',
    readTime: 8,
    author: 'Sarah Chen',
    authorRole: 'Director, Utilities Practice',
    topics: ['Billing & Revenue', 'SAP BRIM', 'Smart Metering'],
    industries: ['Utilities'],
    sapProducts: ['SAP BRIM', 'SAP FI-CA', 'SAP BTP'],
    featured: true,
    gated: false,
  },
  {
    slug: 'ai-financial-close-acceleration',
    title: 'Accelerating Financial Close with AI: What Works and What Doesn\'t',
    summary: 'An honest assessment of where AI genuinely reduces close cycle time and where the hype exceeds reality — with practical use cases and ROI benchmarks.',
    content: `
The promise of AI-powered financial close is compelling: shorter cycle times, fewer manual interventions, higher accuracy. But after implementing AI close tools across multiple S/4HANA environments, we have a nuanced view of where value is real and where it is overstated.

## Where AI Genuinely Helps

**Reconciliation matching**: This is the strongest use case. ML models trained on historical matching patterns achieve 85-95% automatic match rates on intercompany and bank reconciliations, compared to 40-60% for rule-based systems. The ROI is clear and measurable.

**Journal entry anomaly detection**: Unsupervised learning models that flag unusual posting patterns — weekend entries, round-number amounts, unusual account combinations — provide genuine audit and control value. False positive rates need careful management.

**Accrual estimation**: Regression models using prior period data and operational metrics can automate 60-70% of recurring accrual calculations, freeing up senior accountant time for judgement-intensive adjustments.

## Where AI Underdelivers

**Automated close task management**: Despite vendor claims, AI-powered close task orchestration adds limited value beyond a well-configured close management tool. The bottlenecks in close are usually people and process, not task routing.

**Journal narrative generation**: LLM-generated journal descriptions sound plausible but often lack the specificity auditors require. Human review remains essential.

## ROI Benchmarks from Our Implementations

Across 12 AI-assisted close implementations: average close cycle reduction of 2.8 days, reconciliation exception volume reduction of 67%, and controller time saved of approximately 35 hours per period. These are real, verified outcomes — not projections.
    `,
    format: 'Article',
    publishDate: '2025-09-22',
    readTime: 9,
    author: 'Marcus Webb',
    authorRole: 'VP, AI & Finance Innovation',
    topics: ['AI and Machine Learning', 'Financial Close', 'Financial Transformation'],
    industries: ['Insurance', 'Utilities', 'Telecom'],
    sapProducts: ['SAP S/4HANA Finance', 'SAP BTP'],
    featured: true,
    gated: false,
  },
  {
    slug: 'papm-profitability-modelling',
    title: 'SAP PaPM: Building a Profitability Model That Finance Teams Actually Use',
    summary: 'Technical and design principles for PaPM implementations that drive adoption — covering allocation design, data governance, and reporting integration.',
    content: `
SAP PaPM (Profitability and Performance Management) is one of the most powerful — and underutilised — tools in the SAP finance portfolio. When implemented well, it provides CFOs and business leaders with granular, allocation-driven profitability by product, customer, channel, and segment. When implemented poorly, it produces numbers that nobody trusts and therefore nobody uses.

## The Adoption Problem

In our experience, PaPM adoption failures share a common root cause: the model was designed by IT for technical correctness, rather than co-designed with finance for business usability. The result is technically accurate allocations that don't align with how management thinks about the business.

## Design Principles That Drive Adoption

**Start with the questions, not the allocations**: Before designing a single allocation step, interview CFOs, business unit leaders, and FP&A teams to understand the specific questions the model must answer. PaPM should be purpose-built.

**Transparency over precision**: Counterintuitively, simpler allocation methodologies that finance leaders can explain to their teams outperform technically sophisticated models that are treated as black boxes.

**Connected to actuals, not just plan**: PaPM models that run only on plan data lose credibility when actuals diverge. Connect to S/4HANA actual cost objects from day one.

## Technical Architecture Decisions

The most important technical decision is whether to build on the traditional SAP CO-PA data foundation or on an S/4HANA Universal Journal + BW/4HANA architecture. For new implementations, we strongly recommend the latter — it enables real-time reporting and significantly reduces close-cycle lag.
    `,
    format: 'Report',
    publishDate: '2025-08-14',
    readTime: 11,
    author: 'Priya Nair',
    authorRole: 'Senior Manager, Finance Performance',
    topics: ['Profitability Modelling', 'Financial Transformation', 'S/4HANA Migration'],
    industries: ['Insurance', 'Utilities', 'Telecom'],
    sapProducts: ['SAP PaPM', 'SAP BW/4HANA', 'SAP Analytics Cloud'],
    featured: false,
    gated: true,
  },
  {
    slug: 'telecom-revenue-assurance-brim',
    title: '5 Revenue Assurance Leakages Every Telecom CFO Should Know',
    summary: 'The most common billing gaps in telecom BRIM environments — and how to find and fix them using data analytics and automated controls.',
    content: `
Revenue leakage in telecom billing is not a theoretical risk — it is a near-universal reality. Industry benchmarks suggest 1-5% of gross revenue is lost to billing errors, configuration gaps, and process breakdowns. For a carrier with $1B in revenue, that's $10-50M left on the table annually.

## Leakage #1: Unrated Events

Events reaching the rating engine without a valid rate plan are typically either rejected (and never billed) or billed at incorrect rates. We have seen this account for up to 0.8% of revenue leakage in BRIM environments following rate plan migrations or network upgrades.

## Leakage #2: Discount Stacking Errors

When multiple promotional discounts apply to a service, BRIM's discount priority logic must be correctly configured to prevent over-discounting. Errors here are often invisible until a revenue assurance audit because the bills themselves look valid.

## Leakage #3: Tariff Migration Gaps

During tariff restructures, legacy customers grandfathered on old rate plans are frequently missed in migration testing. Automated rate comparison tools that compare pre/post billing for the same usage patterns are essential.

## Leakage #4: Inter-Carrier Settlement Under-Recovery

Roaming and inter-carrier settlement is a complex, rules-driven process where configuration gaps in BRIM's settlement modules can result in systematic under-recovery from partner carriers.

## Leakage #5: Credit Note Over-Issuance

Manual credit note processes without adequate SAP FI-CA approval controls frequently result in over-compensation. AI-powered credit note analysis can identify patterns suggesting systematic over-crediting.
    `,
    format: 'Article',
    publishDate: '2025-07-30',
    readTime: 7,
    author: 'David Tan',
    authorRole: 'Manager, Telecom Revenue Assurance',
    topics: ['Billing & Revenue', 'Revenue Assurance', 'SAP BRIM'],
    industries: ['Telecom'],
    sapProducts: ['SAP BRIM', 'SAP FI-CA'],
    featured: false,
    gated: false,
  },
  {
    slug: 's4hana-clean-core-finance',
    title: 'S/4HANA Clean Core for Finance: A Practical Guide to Extensibility Without Risk',
    summary: 'How to extend S/4HANA Finance for industry-specific requirements without compromising upgrade stability — covering BTP, released APIs, and the extension model.',
    content: `
SAP's clean core philosophy represents a fundamental shift in how S/4HANA is implemented and maintained. The promise is compelling: a stable, always-current core ERP with custom logic moved to the Business Technology Platform (BTP). The reality, particularly for finance teams with complex industry requirements, requires careful navigation.

## What Clean Core Actually Means for Finance

Clean core does not mean no customisation. It means customisation is moved outside the core and connected through released APIs and events. For finance-specific requirements — custom posting logic, regulatory calculations, industry-specific validations — this translates to:

1. **BTP side-car extensions**: Complex logic deployed as services on BTP, triggered via S/4HANA business events
2. **Released API consumption**: Posting and document access through standard SAP APIs rather than direct table access
3. **Custom fields and logic**: Using the Key User Extensibility framework for field-level extensions without ABAP

## Where Clean Core Creates Tension

The tension is most acute for utilities and insurance clients with regulatory requirements that are deeply embedded in their current SAP environments. Regulatory calculations, in particular, are often built using direct FI-CA table access that must be refactored to the clean core model.

Our approach is a pragmatic phased migration: identify which extensions are truly core (and can leverage released APIs) versus which require BTP side-car architecture, and sequence the migration to preserve go-live stability while progressively cleaning the core.

## The Long-Term Payoff

The organisations that invest in clean core architecture consistently experience lower upgrade costs, faster adoption of new SAP capabilities, and improved system performance. The upfront investment pays back typically within 2-3 major release cycles.
    `,
    format: 'Article',
    publishDate: '2025-06-18',
    readTime: 10,
    author: 'James Okonkwo',
    authorRole: 'Principal, Insurance Finance Transformation',
    topics: ['S/4HANA Migration', 'Cloud Transformation', 'Financial Transformation'],
    industries: ['Insurance', 'Utilities', 'Telecom'],
    sapProducts: ['SAP S/4HANA Finance', 'SAP BTP'],
    featured: false,
    gated: false,
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find(i => i.slug === slug);
}

export function getFeaturedInsights(count = 3) {
  return insights.filter(i => i.featured).slice(0, count);
}
