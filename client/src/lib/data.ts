export const EMAIL = "jallpatellco@gmail.com";

export const EXPERIENCES = [
  {
    id: 1, 
    org: "UpWork", 
    role: "Freelancer", 
    period: "Jan – Apr 2025",
    active: false,
    stack: ["Rust", "Tokio", "Node.js", "TypeScript", "Docker"],
    details: "Built production off-chain Rust application for DeFi systematic trading — real-time pricing engine, OMS, and risk monitoring. Tokio async WebSocket streaming achieving <5ms response times. JITO bundle integration for MEV protection.",
  },
  {
    id: 2, 
    org: "Episodic Labs", 
    role: "Backend Intern", 
    period: "May – Jul 2025",
    active: false,
    stack: ["TypeScript", "Node.js", "Puppeteer", "GitHub Actions"],
    details: "Modular Node.js microservices improving scalability by 30%. CI/CD via GitHub Actions, cutting deploy time by 50%. Integrated market data feeds, boosting data-driven analysis by 35%.",
  },
  {
    id: 3, 
    org: "NaapBooks", 
    role: "SDE Intern", 
    period: "Aug 2025 – Present", 
    active: true,
    stack: ["React", "TypeScript", "Next.js"],
    details: "Building scalable frontend and backend systems with React and TypeScript in a fast-paced product environment.",
  },
];

export const PROJECTS = [
  {
    id: 1, 
    name: "MetaGas", 
    tagline: "Live Gas Tracker",
    description: "Real-time gas prices across chains. Live charting with hi/lo per 15-min window for precision transaction timing.",
    stack: ["TypeScript", "Redis", "WebSockets", "Next.js"],
    link: "https://metagas.vercel.app/"
  },
  {
    id: 2, 
    name: "GreenProject", 
    tagline: "Solana Arb Engine",
    description: "Optimised Solana arbitrage bot into a real-time trading engine on Tokio async runtime with live opportunity detection.",
    stack: ["Rust", "TypeScript", "Solana SDKs"],
    link: "https://github.com/jallpatell/GreenProject"
  },
  {
    id: 3, 
    name: "Pulse", 
    tagline: "Market Crawler",
    description: "TypeScript web-crawler scraping Indian equity news from Zerodha Pulse as a data input layer for a larger analysis system.",
    stack: ["TypeScript", "Puppeteer"],
    link: "https://github.com/jallpatell/pulse"
  },
  {
    id: 4, 
    name: "CRYPTeX", 
    tagline: "Decentralized Wallet",
    description: "Non-custodial ETH & SOL wallet — seed-phrase generation, key derivation, transaction signing, and JSON-RPC history viewer.",
    stack: ["TypeScript", "React", "@solana/web3.js"],
    link: "https://cryptexne.vercel.app/"
  },
  {
    id: 5, 
    name: "product-recco", 
    tagline: "AI Advisor",
    description: "Cross-platform AI product advisor powered by Gemini NLP with state management, RESTful API integrations, and local persistence.",
    stack: ["React Native", "Gemini API", "AsyncStorage"],
    link: "https://snack.expo.dev/@jallpatell/product-recco"
  },
];

export const SKILLS = [
  { cat: "Languages",  items: ["Javascript", "TypeScript", "Go"] },
  { cat: "Backend",    items: ["Node.js", "Express", "WebSockets", "Kafka", "Zod", "Bash"] },
  { cat: "Frontend",   items: ["Next.js", "React Native", "Tailwind", "redux", "framer", "tanstack"] },
  { cat: "Databases",  items: ["PostgreSQL", "Redis", "MongoDB", "Prisma", "Drizzle"] },
  { cat: "DevOps",     items: ["Docker", "NGINX", "GitHub Actions"] },
  { cat: "Web3",       items: ["Anchor", "Solana CLI", "web3.js"] },
];
