import type { IconName } from "./_components/icon";

export const tagline = "Connecting Capital. Creating Value. Delivering Impact.";

export const contact = {
  email: "info@okeff.com",
  website: "www.okeff.com",
  canadaPhone: "+1 289 946 2155",
  nigeriaPhone: "+234 803 218 4902",
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/experience", label: "Experience" },
  { href: "/offices", label: "Offices" },
  { href: "/insights", label: "Insights" },
];

export const offices = [
  {
    id: "canada",
    label: "Canada Head Office",
    country: "Canada",
    address: ["404–250 Webb Drive", "Mississauga, Ontario L5B 3Z4", "Canada"],
    phone: contact.canadaPhone,
    summary:
      "Our Canadian office supports investor engagement, North American market access, international partnerships, trade development and corporate advisory.",
    homeSummary:
      "Our Canadian office supports international business development, investor engagement, trade facilitation and access to North American markets.",
  },
  {
    id: "nigeria",
    label: "Nigeria Office",
    country: "Nigeria",
    address: ["4 Dave Anazodo Street", "Ajao Estate, Isolo", "Lagos, Nigeria"],
    phone: contact.nigeriaPhone,
    summary:
      "Our Nigerian office supports opportunity development, stakeholder engagement, local market access and strategic relationships across Nigeria and Africa.",
    homeSummary:
      "Our Nigerian office supports local market engagement, stakeholder relationships, opportunity development and access to African markets.",
  },
];

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  intro: string[];
  listLabel?: string;
  items?: string[];
  note?: string;
};

export const services: Service[] = [
  {
    id: "oil-and-gas",
    icon: "oil",
    title: "Oil & Gas Advisory",
    summary:
      "Supporting upstream, midstream and downstream opportunities through commercial advisory, project development support, investor introductions, strategic partnerships and transaction facilitation.",
    intro: ["We support oil and gas opportunities across the upstream, midstream and downstream value chain."],
    listLabel: "Our services may include:",
    items: [
      "Oil and gas asset opportunity identification",
      "Investor and technical partner introductions",
      "Farm-in, joint venture and strategic partnership support",
      "Commercial advisory",
      "Project development support",
      "Transaction coordination",
      "Due diligence support",
      "Market intelligence",
      "Offtake and crude supply discussions",
      "Marine and logistics support",
      "Lubricants and petroleum product market development",
    ],
    note: "OKEFF acts as an advisor and facilitator and works with qualified technical, legal, financial and commercial partners where specialist services are required.",
  },
  {
    id: "trade-finance",
    icon: "trade",
    title: "Trade Finance Facilitation",
    summary:
      "Connecting importers, exporters, suppliers and project owners with suitable financial institutions and trade finance partners.",
    intro: [
      "We help connect businesses involved in cross-border trade with suitable financial institutions, trade finance providers and transaction partners.",
    ],
    listLabel: "Our support may include:",
    items: [
      "Import and export finance facilitation",
      "Letters of credit",
      "Standby letters of credit",
      "Bank guarantees",
      "Structured trade solutions",
      "Commodity finance",
      "Supplier and buyer introductions",
      "Transaction structuring support",
      "Commercial documentation coordination",
    ],
    note: "OKEFF does not operate as a bank or licensed lender. Our role is to provide advisory and facilitation support and connect clients with qualified financial providers.",
  },
  {
    id: "investment-facilitation",
    icon: "briefcase",
    title: "Investment Facilitation & Capital Advisory",
    summary:
      "Supporting project owners and businesses seeking strategic capital or investment partners.",
    intro: ["We support project owners and businesses seeking strategic capital or investment partners."],
    listLabel: "Our services include:",
    items: [
      "Investor identification",
      "Investment opportunity positioning",
      "Project and business introductions",
      "Funding strategy support",
      "Strategic capital discussions",
      "Transaction preparation",
      "Investor engagement",
      "Partnership development",
      "Commercial negotiation support",
    ],
  },
  {
    id: "investment-matchmaking",
    icon: "chart",
    title: "Investment Matchmaking",
    summary:
      "Matching qualified investors and financiers with credible projects, operating businesses and commercially viable opportunities.",
    intro: [
      "We connect qualified investors with credible opportunities that align with their investment criteria, sector interests, geography and risk appetite.",
      "We also help project owners improve how opportunities are presented to potential investors.",
    ],
  },
  {
    id: "international-trade",
    icon: "globe",
    title: "International Trade & Market Access",
    summary:
      "Supporting import and export transactions, supplier identification, market access, commercial introductions and cross-border business development.",
    intro: ["We support businesses seeking to import, export or expand into new markets."],
    listLabel: "Our services include:",
    items: [
      "Market-entry advisory",
      "Supplier and buyer identification",
      "Product sourcing",
      "Commercial introductions",
      "Import and export support",
      "Distribution partnerships",
      "Cross-border business development",
      "Canada–Africa trade facilitation",
    ],
  },
  {
    id: "commodities",
    icon: "bars",
    title: "Commodities Advisory",
    summary:
      "Supporting commercial opportunities involving gold, minerals, energy products, lubricants and other commodities.",
    intro: ["OKEFF supports opportunities involving:"],
    items: [
      "Gold and precious metals",
      "Minerals and mining products",
      "Crude oil and petroleum products",
      "Lubricants",
      "Agricultural commodities",
      "Industrial products",
    ],
    note: "We assist with market access, counterparty introductions, transaction development and commercial facilitation.",
  },
  {
    id: "carbon-markets",
    icon: "leaf",
    title: "Carbon Markets Advisory",
    summary:
      "Providing advisory and strategic support for carbon credit projects, sustainability initiatives and climate-related investment opportunities.",
    intro: ["OKEFF supports carbon market and sustainability-related opportunities through:"],
    items: [
      "Carbon project business development",
      "Stakeholder and investor introductions",
      "Strategic advisory",
      "Project positioning",
      "Carbon credit market access",
      "Commercial partnership development",
    ],
    note: "OKEFF previously supported the facilitation of a carbon credit initiative in Delta State, Nigeria.",
  },
  {
    id: "vessel-leasing",
    icon: "ship",
    title: "Vessel Leasing & Marine Advisory",
    summary:
      "Facilitating commercial discussions for vessels and marine assets required for offshore, logistics and oil and gas operations.",
    intro: ["We facilitate discussions involving vessels and marine assets for offshore and oil and gas operations."],
    listLabel: "Support may include:",
    items: [
      "Vessel requirement assessment",
      "Vessel owner and operator introductions",
      "Commercial lease discussions",
      "Offshore logistics support",
      "Marine asset sourcing",
      "Project-specific advisory",
    ],
  },
  {
    id: "business-development",
    icon: "bridge",
    title: "Strategic Business Development",
    summary:
      "Helping businesses enter new markets, establish partnerships, identify opportunities and build sustainable growth strategies.",
    intro: ["We help organizations identify growth opportunities and build the relationships needed to pursue them."],
    listLabel: "Our services include:",
    items: [
      "Opportunity identification",
      "Partnership development",
      "Market expansion",
      "Stakeholder engagement",
      "Business strategy",
      "Commercial introductions",
      "Government and private-sector relationship support",
      "Proposal and transaction development",
    ],
  },
  {
    id: "public-sector",
    icon: "building",
    title: "Government & Public Sector Advisory",
    summary:
      "Supporting government and public-sector organizations with strategic advisory, service delivery improvement, modernization, governance, data stewardship and stakeholder engagement.",
    intro: [
      "OKEFF provides strategic advisory and business consulting support to government and public-sector organizations seeking to improve service delivery, strengthen governance, modernize operations, and develop strategic partnerships.",
      "We also support organizations seeking to navigate and build productive relationships with public-sector stakeholders.",
    ],
    listLabel: "Our services may include:",
    items: [
      "Business and strategic advisory",
      "Service delivery and process improvement",
      "Digital transformation and modernization advisory",
      "Data governance and information management advisory",
      "Policy and program implementation support",
      "Stakeholder engagement",
      "Public-private partnership support",
      "Project and initiative coordination",
      "Governance frameworks and operating models",
      "Performance measurement and reporting",
      "Government and private-sector relationship support",
      "Strategic research and analysis",
    ],
  },
];

// The home page lists the core services named in the website content (Investment
// Facilitation & Capital Advisory is covered on the Services page only).
export const coreServices = services.filter((s) => s.id !== "investment-facilitation");

export const industries: { icon: IconName; title: string; text: string }[] = [
  { icon: "oil", title: "Oil and Gas", text: "Upstream assets, petroleum products, lubricants, marine logistics, investment and technical partnerships." },
  { icon: "bolt", title: "Energy", text: "Conventional energy, energy infrastructure and emerging energy opportunities." },
  { icon: "globe", title: "International Trade", text: "Import and export transactions, market access, distribution and cross-border partnerships." },
  { icon: "bars", title: "Commodities", text: "Gold, minerals, petroleum products, agricultural commodities and industrial products." },
  { icon: "leaf", title: "Carbon Markets", text: "Carbon credit projects, sustainability initiatives and climate-related investment." },
  { icon: "pick", title: "Mining and Minerals", text: "Investment introductions, commercial partnerships and market access." },
  { icon: "ship", title: "Marine and Offshore", text: "Vessel leasing, offshore support and marine logistics." },
  { icon: "chart", title: "Financial Services", text: "Trade finance, investment facilitation and structured commercial opportunities." },
  { icon: "factory", title: "Manufacturing", text: "Supplier partnerships, export markets, distribution and investment opportunities." },
  { icon: "building", title: "Government and Public Sector", text: "Strategic advisory, service delivery improvement, modernization, governance, data stewardship, project facilitation and stakeholder engagement." },
];

export const whyChoose = [
  "International relationships across Canada, Nigeria, Africa and global markets",
  "Experience supporting complex oil and gas and investment opportunities",
  "Access to investors, project developers, financiers, suppliers and strategic partners",
  "Strong understanding of cross-border business and emerging markets",
  "Practical, client-focused approach",
  "Commitment to integrity, confidentiality and long-term partnerships",
];

export const approach = [
  { title: "Understand", text: "We learn about the client’s objectives, project requirements, financial needs and target markets." },
  { title: "Assess", text: "We evaluate the commercial opportunity, potential partners, transaction structure and key considerations." },
  { title: "Structure", text: "We help develop a clear commercial approach, partnership framework and market-entry strategy." },
  { title: "Connect", text: "We introduce suitable investors, financiers, suppliers, project owners and strategic partners." },
  { title: "Support Execution", text: "We support discussions, negotiations, due diligence coordination and transaction progression." },
  { title: "Deliver Value", text: "We focus on sustainable outcomes and long-term commercial relationships." },
];

export const coreValues = [
  { title: "Integrity", text: "We act honestly, responsibly and transparently in every engagement." },
  { title: "Excellence", text: "We are committed to high professional standards and quality service." },
  { title: "Partnership", text: "We build relationships founded on trust, shared objectives and mutual value." },
  { title: "Innovation", text: "We develop practical and commercially relevant solutions." },
  { title: "Accountability", text: "We take ownership of our commitments and responsibilities." },
  { title: "Impact", text: "We focus on outcomes that create meaningful and sustainable value." },
  { title: "Legacy", text: "We seek to build businesses, relationships and opportunities that benefit future generations." },
];

export const highlights: { icon: IconName; title: string; text: string }[] = [
  { icon: "leaf", title: "Carbon Credit Project Facilitation", text: "Supported the facilitation and development of a carbon credit initiative in Delta State, Nigeria, including stakeholder and commercial engagement." },
  { icon: "oil", title: "Strategic Oil and Gas Advisory", text: "Supported the identification, positioning and presentation of upstream oil and gas opportunities to prospective investors, technical partners and financiers." },
  { icon: "check", title: "Letter of Support from a Major International Energy Company", text: "Helped secure a letter of support from Shell for a special-purpose vehicle involved in an oil and gas opportunity in Nigeria." },
  { icon: "globe", title: "International Partner Engagement", text: "Supported discussions and business development activities involving international investors, engineering groups, oil and gas operators and strategic partners." },
  { icon: "bolt", title: "Nigeria Oil and Gas Opportunities", text: "Participated in commercial discussions relating to producing and development-stage oil and gas assets, financing structures, technical partnerships and offtake opportunities." },
  { icon: "trade", title: "International Trade Development", text: "Developed opportunities involving lubricants, petroleum products, commodities, import and export transactions and market access between Canada and Nigeria." },
];

export const whyPartner = [
  { title: "Cross-Border Reach", text: "We connect commercial opportunities between North America, Africa and international markets." },
  { title: "Trusted Relationships", text: "Our network includes investors, financiers, business owners, government-related stakeholders, technical partners, suppliers and commercial advisors." },
  { title: "Sector Knowledge", text: "We understand the commercial realities of oil and gas, international trade, commodities, carbon markets and investment facilitation." },
  { title: "Opportunity-Focused Approach", text: "We focus on practical solutions that help credible opportunities move toward execution." },
  { title: "Flexible Engagement", text: "We work as advisors, facilitators, business developers and transaction support partners depending on the client’s requirements." },
  { title: "Professional Discretion", text: "We understand the importance of confidentiality, responsible communication and careful handling of commercially sensitive information." },
];

export const enquiryTopics = [
  "Oil and gas opportunities",
  "Trade finance requirements",
  "Investment and funding opportunities",
  "International trade",
  "Commodity transactions",
  "Carbon market projects",
  "Vessel leasing",
  "Strategic partnerships",
  "Government and public-sector advisory",
  "General business advisory",
];

export const areasOfInterest = [
  "Oil and Gas Advisory",
  "Trade Finance",
  "Investment Facilitation",
  "International Trade",
  "Commodities",
  "Carbon Markets",
  "Vessel Leasing",
  "Strategic Partnership",
  "Government & Public Sector Advisory",
  "General Enquiry",
];

export const insights: { tag: string; date: string; icon: IconName; title: string; text: string }[] = [
  { tag: "ENERGY", date: "Perspective", icon: "oil", title: "Unlocking value across Africa’s evolving energy landscape", text: "Where disciplined capital, local insight and strategic partnership can accelerate bankable outcomes." },
  { tag: "TRADE", date: "Briefing", icon: "ship", title: "Making complex cross-border transactions investable", text: "The essential role of credible counterparties, risk alignment and fit-for-purpose finance." },
  { tag: "PUBLIC SECTOR", date: "Outlook", icon: "building", title: "Building public-private partnerships that endure", text: "A practical framework for aligning public priorities with long-term private investment." },
];

export const disclaimer =
  "OKEFF Integrated Limited provides advisory, facilitation and business development services. Financial, legal, technical and regulated services are delivered by appropriately qualified third-party professionals where required.";
