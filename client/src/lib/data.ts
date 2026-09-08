export const EMAIL = "jallpatellco@gmail.com";
export const GITHUB = "https://github.com/jallpatell";
export const LINKEDIN = "https://linkedin.com/in/jallpatell";
export const CALENDLY = "https://calendly.com/jallpatellco";

export const EXPERIENCES = [
  {
    id: 1,
    org: "UpWork",
    role: "Freelancer",
    period: "Jan – Apr 2025",
    active: false,
    stack: ["Rust", "Tokio", "Node.js", "TypeScript", "Docker"],
    details:
      "Built production off-chain Rust application for DeFi systematic trading — real-time pricing engine, OMS, and risk monitoring. Tokio async WebSocket streaming achieving <5ms response times. JITO bundle integration for MEV protection.",
    metric: "<5ms response times via Tokio async WebSocket streaming",
    achievements: [
      "Real-time pricing engine",
      "Order management system",
      "MEV protection via JITO bundles",
      "Risk monitoring dashboard",
    ],
  },
  {
    id: 2,
    org: "Episodic Labs",
    role: "Backend Intern",
    period: "May – Jul 2025",
    active: false,
    stack: ["TypeScript", "Node.js", "Puppeteer", "GitHub Actions"],
    details:
      "Modular Node.js microservices improving scalability by 30%. CI/CD via GitHub Actions, cutting deploy time by 50%. Integrated market data feeds, boosting data-driven analysis by 35%.",
    metric: "30% scalability improvement with modular microservices",
    achievements: [
      "Modular Node.js microservices",
      "CI/CD with GitHub Actions",
      "50% faster deploy time",
      "Market data feed integration",
    ],
  },
  {
    id: 3,
    org: "NaapBooks",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Jun 2026",
    active: false,
    stack: ["React", "TypeScript", "Next.js"],
    details:
      "Built scalable frontend and backend systems with React and TypeScript in a fast-paced product environment, demonstrating consistent ownership and delivery.",
    metric: "Scalable frontend & backend in a fast-paced product env",
    achievements: [
      "React + TypeScript frontend",
      "Next.js server-side rendering",
      "Component library",
      "API integration",
    ],
  },
  {
    id: 4,
    org: "NaapBooks",
    role: "SDE 1",
    period: "Jul 2026 – Present",
    active: true,
    stack: ["React", "TypeScript", "Next.js", "Node.js"],
    details:
      "Taking on increased ownership across the full product stack. Leading frontend architecture decisions, building core product features, and collaborating closely with design and backend teams.",
    metric: "Full-stack ownership across core product features",
    achievements: [
      "Full product ownership",
      "Frontend architecture",
      "Cross-team collaboration",
      "Feature delivery",
    ],
  },
];

export const PROJECTS = [
  {
    id: 0,
    name: "Hyperchain",
    tagline: "AI Workflow Automation",
    category: "PLATFORM",
    description:
      "End-to-end workflow automation platform (similar to n8n / Zapier) with drag & drop node-executors implemented using a custom DAG engine.",
    stack: ["TypeScript", "Postgres", "Zod", "React.js", "TanStack Query"],
    link: "https://hyperchain.onrender.com/",
    github: null,
    status: ["LIVE"],
    featured: true,
  },
  {
    id: 1,
    name: "MetaGas",
    tagline: "Live Gas Tracker",
    category: "TOOL",
    description:
      "Real-time gas prices across chains. Live charting with hi/lo per 15-min window for precision transaction timing.",
    stack: ["TypeScript", "Redis", "WebSockets", "Next.js"],
    link: "https://metagas.vercel.app/",
    github: null,
    status: ["LIVE"],
    featured: false,
  },
  {
    id: 2,
    name: "GreenProject",
    tagline: "Solana Arb Engine",
    category: "WEB3",
    description:
      "Optimised Solana arbitrage bot into a real-time trading engine on Tokio async runtime with live opportunity detection.",
    stack: ["Rust", "TypeScript", "Solana SDKs"],
    link: "https://github.com/jallpatell/GreenProject",
    github: "https://github.com/jallpatell/GreenProject",
    status: ["OPEN SOURCE"],
    featured: false,
  },
  {
    id: 3,
    name: "Pulse",
    tagline: "Market Crawler",
    category: "TOOL",
    description:
      "TypeScript web-crawler scraping Indian equity news from Zerodha Pulse as a data input layer for a larger analysis system.",
    stack: ["TypeScript", "Puppeteer"],
    link: "https://github.com/jallpatell/pulse",
    github: "https://github.com/jallpatell/pulse",
    status: ["OPEN SOURCE"],
    featured: false,
  },
  {
    id: 4,
    name: "CRYPTeX",
    tagline: "Decentralized Wallet",
    category: "WEB3",
    description:
      "Non-custodial ETH & SOL wallet — seed-phrase generation, key derivation, transaction signing, and JSON-RPC history viewer.",
    stack: ["TypeScript", "React", "@solana/web3.js"],
    link: "https://cryptexne.vercel.app/",
    github: null,
    status: ["LIVE"],
    featured: false,
  },
];

export const SKILLS = [
  { cat: "Languages", items: ["JavaScript", "TypeScript", "C++", "Rust", "Shell Scripting"] },
  { cat: "Backend", items: ["Node.js", "Express", "WebSockets", "Kafka", "Zod"] },
  { cat: "Frontend", items: ["Next.js", "React", "React Native", "Tailwind", "Framer Motion"] },
  { cat: "Databases", items: ["PostgreSQL", "Redis", "MongoDB", "Prisma", "Drizzle"] },
  { cat: "DevOps", items: ["Docker", "NGINX", "GitHub Actions"] },
  { cat: "Web3", items: ["Anchor", "Solana CLI", "web3.js", "JITO", "Tokio"] },
];
