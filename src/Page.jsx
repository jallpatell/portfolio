import { useState, useEffect, useMemo } from "react";
import { Github, Linkedin, Mail, Copy, Check, X, ExternalLink, Calendar } from "lucide-react";

export default function DotPatternPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("Experience");

  const email = "jallpatellco@gmail.com";
  const location = "IN / DXB";

  const experiences = [

    {
      id: 1,
      org: "UpWork",
      role: "Freelancer",
      stack: ["Node.js", "Typescript", "Docker", "Next.js"],
      details: " Built production off-chain Rust application for DeFi systematic trading implementing real-time pricing engine, order management system, and risk monitoring infrastructure directly matching GSR's DeFi team requirements. Engineered high-performance Rust backend using Tokio for concurrent WebSocket streaming, processing real-time price data points with parallel batch API optimization achieving <5ms response times. Implemented atomic transaction execution with JITO bundle integration for MEV protection, combining flash loan acquisition, multi-hop swaps, and repayment in single indivisible operations with profit-or-revert validation.  Implemented dynamic risk management with pool-size-optimized trading strategies, configurable spread thresholds, and price impact limits adapting to market volatility conditions", 
      start: "Jan 2025 ",
      end: " April 2025",
    },
    {
      id: 2,
      org: "Episodic Labs",
      role: "Backend Engineer Intern",
      stack: ["Typescript", "Node.js", "Hostinger", "Puppeteer"],
      details: "Designed and developed modular Node.js-based microservices to enable scalable and maintainable backend architecture, improving backend scalability by 30%. Implemented CI/CD pipelines using GitHub Actions, automating build, test, and deployment workflows for faster release cycles, reducing deployment time by 50%. Integrated stock market data, open-source APIs, and financial news feeds using Node.js to enhance data-driven analysis capabilities, enhancing application's data-driven insights by 35%",
      start: "May 2025 ",
      end: " July 2025",
    },
    {
      id: 3,
      org: "NaapBooks Limited",
      role: "SDE Intern",
      stack: ["React", "TypeScript", "Next"],
      details: "",
      start: "August 2025 ",
      end: " Present",
    },
    
    
  ];

  const projects = [
    {
      id: 1,
      name: "MetaGas: Live Gas Tracker",
      description: "Track live gas prices for multiple chains (similar to etherscan).",
      stack: ["TypeScript", "Redis", "WebSockets", "Next.js"],
      details: "With Live charting, you see not only averages, but real extremes (highs/lows) within each 15-minute window, giving you deeper control over your transaction timing.",
      link: "https://metagas.vercel.app/",
    },
    {
      id: 1,
      name: "GreenProject",
      description: "forked and optimised solana arbitrage bot into real-time trading engine based on arbitrage opportunities.",
      stack: ["RUst", "TypeScript", "WebSockets", "Solana SDKs", "#[tokio]"],
      details: "With Live charting, you see not only averages, but real extremes (highs/lows) within each 15-minute window, giving you deeper control over your transaction timing.",
      link: "https://github.com/jallpatell/GreenProject",
    },
    {
      id: 2,
      name: "Pulse",
      description: "Scrape down Zerodha Pulse",
      stack: ["Typescript", "Puppeteer"],
      details: "An internal instrument typescript web-crawler that scrapes Indian stock market news from https://pulse.zerodha.com/ to analyse markets for a larger system.",
      link: "https://github.com/jallpatell/pulse",
    },
    {
      id: 3,
      name: "CRYPTeX: Decentralized Wallet & Portfolio Tracker",
      description: "Web3 wallet and portfolio tracker (on devnet as of now)",
      stack: ["TypeScript", "React", "TailwindCSS", "@solana/web3.js"],
      details: "Developed a non-custodial web-based wallet enabling secure Ethereum and Solana asset management. Engineered Web3-ready architecture with multi-chain support using ethers.js and @solana/web3.js. Implemented secure seed phrase generation, key derivation, and transaction signing workflows. Designed API-driven transaction history viewer with JSON+RPC capabilities.",
      link: "https://cryptexe.vercel.app/",
    },
    {
      id: 4,
      name: "AI Product Advisor: product-recco",
      description: "AI-powered recommendation app",
      stack: ["React Native", "AsyncStorage", "NativewindCSS", "Gemini API"],
      details: "Built a cross-platform AI-powered recommendation app with backend integration, leveraging Gemini AI API for NLP-based personalized product suggestions. Implemented state management, RESTful API integrations, and secure local storage persistence for a smooth real-time user experience. Architected backend-ready design for future expansion with scalable databases and real APIs.",
      link: "https://snack.expo.dev/@jallpatell/product-recco",
    },
  ];

  const skills = [
    {
      category: "Languages",
      technologies: ["TypeScript", "Rust"]
    },
    {
      category: "Backend & APIs",
      technologies: ["Node.js & Express", "REST APIs & GraphQL", "WebSockets", "FastAPI", "RabbitMQ", "Kafka"]
    },
    {
      category: "Frontend",
      technologies: ["Next.js", "React Native", "Redux", "Tailwind CSS"]
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "Redis", "MongoDB", "Supabase"]
    },
    {
      category: "DevOps",
      technologies: ["Docker", "NGINX", "GitHub Actions (CI/CD)"]
    },
    {
      category: "Tools",
      technologies: ["Git", "Postman", "Jest"]
    },
    {
      category: "Web3",
      technologies: ["anchor", "solana-cli", "transactions", "web3.js", "Solana SDKs", "NFT Mints", "rust-sdk"]
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  useEffect(() => {
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const dots = useMemo(() => {
    const spacing = 30;
    const dotsPerRow = Math.ceil(windowSize.width / spacing) + 2;
    const dotsPerColumn = Math.ceil(windowSize.height / spacing) + 2;
    const result = [];

    for (let row = 0; row < dotsPerColumn; row++) {
      for (let col = 0; col < dotsPerRow; col++) {
        result.push({
          id: `${row}-${col}`,
          x: col * spacing,
          y: row * spacing,
        });
      }
    }
    return result;
  }, [windowSize]);

  return (
    <div className="relative min-h-screen cursor-none md:cursor-auto" style={{ backgroundColor: '#E2DDD8' }}>
      {/* Dot pattern background */}
      <div className="fixed inset-0">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              backgroundColor: '#d0cbc6'
            }}
          />
        ))}
      </div>

      {/* Gradient hover effect */}
      <div
        className="fixed w-24 h-24 md:w-32 md:h-32 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          left: `${mousePos.x - 64}px`,
          top: `${mousePos.y - 64}px`,
          background: "radial-gradient(circle, rgba(234,86,85,0.2) 0%, rgba(234,86,85,0.1) 50%, transparent 100%)",
          filter: "blur(0.9px)",
        }}
      />

      {/* Content area with border frame */}
      <div className="relative z-20 min-h-screen overflow-y-auto">
        <div className="w-full px-4 md:px-8">
          <div className="w-full pt-20 pb-24">
          
          {/* Header Section with decorative borders */}
          <div className="relative backdrop-blur-sm border p-6 w-full" style={{ backgroundColor: 'rgba(226, 221, 216, 0.6)', borderColor: '#403e3d' }}>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
            
            <div className="flex items-center justify-between w-full">
              <h1 className="text-lg md:text-xl font-bold font-mono" style={{ color: '#EA5655' }}>
                Jal Patel
              </h1>
              <div className="flex gap-3 md:gap-4">
                <a href="https://github.com/jallpatell" target="_blank" rel="noopener noreferrer">
                  <Github className="w-7 h-7 md:w-8 md:h-8 hover:scale-105 opacity-80 hover:opacity-100 transition" style={{ color: '#403e3d' }} />
                </a>
                <a href="mailto:11jal.edu@gmail.com" onClick={(e) => { e.preventDefault(); setEmailDialogOpen(true); }}>
                  <Mail className="w-7 h-7 md:w-8 md:h-8 hover:scale-105 opacity-80 hover:opacity-100 transition" style={{ color: '#403e3d' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Bio Section with borders */}
          <div className="mt-8 relative backdrop-blur-sm border p-6 w-full" style={{ backgroundColor: 'rgba(226, 221, 216, 0.6)', borderColor: '#403e3d' }}>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
            
            
            <p className="text-base md:text-lg font-mono mt-5 leading-relaxed" style={{ color: '#403e3d' }}>
            <h2 className="font-extrabold font-mono opacity-80 text-lg md:text-2xl" style={{ color: '#EA5655' }}>
              full-stack engineer
            </h2>
             with hands-on experience building scalable Node.js APIs and Rust APIs, microservices, real-time systems,
and cloud deployments (AWS, Docker, NGINX). Proficient in transaction builder optimization, compute unit management, and SDKs development API
integrations, token launchers, and DeFi protocol interactions. Strong ability to take ownership and design, and implement production-grade
applications with complex frontend states, RESTful APIs, caching strategies end-to-end and performance optimization.
            </p>
          </div>

          {/* Skills Section with grid borders */}
          <div className="mt-16 relative backdrop-blur-sm border p-6 w-full" style={{ backgroundColor: 'rgba(226, 221, 216, 0.6)', borderColor: '#403e3d' }}>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
            
            <h3 className="text-lg font-bold font-mono mb-8 uppercase tracking-wider" style={{ color: '#EA5655' }}>Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="relative backdrop-blur-sm border p-6" style={{ backgroundColor: 'rgba(226, 221, 216, 0.6)', borderColor: '#403e3d' }}>
                  {/* Corner decorations for each skill card */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
                  
                  <h4 className="text-sm font-bold mb-4 font-mono" style={{ color: '#EA5655' }}>{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, i) => (
                      <span key={i} className="font-mono text-xs px-2 py-1.5 rounded border" style={{ backgroundColor: 'rgba(234, 86, 85, 0.1)', color: '#403e3d', borderColor: '#403e3d' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Toggle */}
          <div className="mt-12 flex justify-center gap-4 border-t border-b py-6" style={{ borderColor: '#403e3d' }}>
            <button
              onClick={() => setActiveSection("Projects")}
              className={`px-6 py-3 font-mono font-bold text-sm border transition-all ${
                activeSection === "Projects"
                  ? "text-white shadow-lg"
                  : "hover:bg-opacity-20 font-mono"
              }`}
              style={activeSection === "Projects" 
                ? { background: 'linear-gradient(to right, #EA5655, #d84847)', borderColor: '#403e3d' }
                : { backgroundColor: 'rgba(234, 86, 85, 0.1)', color: '#EA5655', borderColor: '#403e3d' }
              }
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection("Experience")}
              className={`px-6 py-3 font-mono font-bold text-sm border transition-all ${
                activeSection === "Experience"
                  ? "text-white shadow-lg"
                  : "hover:bg-opacity-20 font-mono"
              }`}
              style={activeSection === "Experience" 
                ? { background: 'linear-gradient(to right, #EA5655, #d84847)', borderColor: '#403e3d' }
                : { backgroundColor: 'rgba(234, 86, 85, 0.1)', color: '#EA5655', borderColor: '#403e3d' }
              }
            >
              Experience
            </button>
          </div>

          {/* Content Section */}
          <div className="mt-12">
            {activeSection === "Experience" && (
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={exp.id} className="relative">
                    {/* Connector line */}
                    {idx !== experiences.length - 1 && (
                      <div className="absolute left-6 top-full h-6 w-px" style={{ backgroundColor: '#403e3d' }}></div>
                    )}
                    
                    <div
                      onClick={() => setExpandedCard(exp)}
                      className="cursor-pointer relative backdrop-blur-sm border p-6 transition"
                      style={{ backgroundColor: 'rgba(226, 221, 216, 0.6)', borderColor: '#403e3d' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#EA5655';
                        e.currentTarget.style.backgroundColor = 'rgba(226, 221, 216, 0.9)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#403e3d';
                        e.currentTarget.style.backgroundColor = 'rgba(226, 221, 216, 0.6)';
                      }}
                    >
                      {/* Corner decorations */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
                      
                      {/* Connector dot */}
                      <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full border-2" style={{ backgroundColor: '#403e3d', borderColor: '#E2DDD8' }}></div>
                      
                      <h3 className="text-lg font-bold font-mono" style={{ color: '#EA5655' }}>{exp.org}</h3>
                      <p className="text-sm font-mono mt-1" style={{ color: '#403e3d' }}>{exp.role}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.stack.map((tech, i) => (
                          <span key={i} className="font-mono text-xs px-2 py-1 border" style={{ backgroundColor: 'rgba(234, 86, 85, 0.1)', color: '#403e3d', borderColor: '#403e3d' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="absolute bottom-4 right-6 text-xs font-mono opacity-70" style={{color: '#403e3d'}}>{exp.start}-{exp.end}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "Projects" && (
              <div className="space-y-6">
                {projects.map((project, idx) => (
                  <div key={project.id} className="relative">
                    {/* Connector line */}
                    {idx !== projects.length - 1 && (
                      <div className="absolute left-6 top-full h-6 w-px" style={{ backgroundColor: '#403e3d' }}></div>
                    )}
                    
                    <div
                      onClick={() => setExpandedProject(project)}
                      className="cursor-pointer relative backdrop-blur-sm border p-6 transition"
                      style={{ backgroundColor: 'rgba(226, 221, 216, 0.6)', borderColor: '#403e3d' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#EA5655';
                        e.currentTarget.style.backgroundColor = 'rgba(226, 221, 216, 0.9)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#403e3d';
                        e.currentTarget.style.backgroundColor = 'rgba(226, 221, 216, 0.6)';
                      }}
                    >
                      {/* Corner decorations */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
                      
                      {/* Connector dot */}
                      <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full border-2" style={{ backgroundColor: '#403e3d', borderColor: '#E2DDD8' }}></div>
                      
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold font-mono" style={{ color: '#EA5655' }}>{project.name}</h3>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="border p-1.5 transition"
                          style={{ color: '#403e3d', borderColor: '#403e3d' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#EA5655';
                            e.currentTarget.style.borderColor = '#EA5655';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#403e3d';
                            e.currentTarget.style.borderColor = '#403e3d';
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-sm font-mono mt-1" style={{ color: '#403e3d' }}>{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.stack.map((tech, i) => (
                          <span key={i} className="font-mono text-xs px-2 py-1 border" style={{ backgroundColor: 'rgba(234, 86, 85, 0.1)', color: '#403e3d', borderColor: '#403e3d' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with border frame */}
          <div className="mt-20 border-t pt-12 pb-8" style={{ borderColor: '#403e3d' }}>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3" style={{ color: '#403e3d' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="font-medium text-sm font-mono" style={{ color: '#EA5655' }}>{location}</span>
              </div>
              
              <div className="flex items-center gap-6">
                <a href="https://linkedin.com/in/jallpatell" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <Linkedin className="w-6 h-6" style={{ color: '#403e3d' }} />
                </a>
                <a href="https://calendly.com/jallpatell" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <Calendar className="w-6 h-6" style={{ color: '#403e3d' }} />
                </a>
              </div>

              <div className="text-xs text-center font-mono" style={{ color: '#403e3d' }}>
                Flexible across all Time-Zones & Regions.
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Modals with border frames */}
      {expandedCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="relative border-2 shadow-2xl w-full max-w-2xl p-8" style={{ backgroundColor: '#E2DDD8', borderColor: '#403e3d', color: '#403e3d' }}>
            <button onClick={() => setExpandedCard(null)} className="absolute top-4 right-4 transition" style={{ color: '#403e3d' }} onMouseEnter={(e) => e.currentTarget.style.color = '#EA5655'} onMouseLeave={(e) => e.currentTarget.style.color = '#403e3d'}>
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold font-mono" style={{ color: '#EA5655' }}>{expandedCard.org}</h3>
            <p className="mt-2 font-mono" style={{ color: '#403e3d' }}>{expandedCard.role}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {expandedCard.stack.map((tech, i) => (
                <span key={i} className="font-mono text-xs px-2 py-1 border" style={{ backgroundColor: 'rgba(234, 86, 85, 0.1)', color: '#403e3d', borderColor: '#403e3d' }}>
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-mono leading-relaxed" style={{ color: '#403e3d' }}>{expandedCard.details}</p>
          </div>
        </div>
      )}

      {/* Expanded Project Modal */}
      {expandedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="relative border-2 shadow-2xl w-full p-8" style={{ backgroundColor: '#E2DDD8', borderColor: '#403e3d', color: '#403e3d' }}>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
            
            <button onClick={() => setExpandedProject(null)} className="absolute top-4 right-4 z-20 transition" style={{ color: '#403e3d' }} onMouseEnter={(e) => e.currentTarget.style.color = '#EA5655'} onMouseLeave={(e) => e.currentTarget.style.color = '#403e3d'}>
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col pr-0" style={{paddingBottom: '5rem'}}>
              <h3 className="text-2xl font-bold font-mono" style={{ color: '#EA5655' }}>{expandedProject.name}</h3>
              <p className="mt-2 font-mono" style={{ color: '#403e3d' }}>{expandedProject.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {expandedProject.stack.map((tech, i) => (
                  <span key={i} className="font-mono text-xs px-2 py-1 border" style={{ backgroundColor: 'rgba(234, 86, 85, 0.1)', color: '#403e3d', borderColor: '#403e3d' }}>
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm font-mono leading-relaxed" style={{ color: '#403e3d' }}>{expandedProject.details}</p>
            </div>
            {/* Visit Button - Bottom Right */}
            <a href={expandedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 border px-4 py-2 transition absolute bottom-8 right-8" style={{ color: '#403e3d', borderColor: '#403e3d', backgroundColor: 'rgba(234, 86, 85, 0.06)', borderRadius: '0.5rem' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#EA5655'; e.currentTarget.style.borderColor = '#EA5655'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#403e3d'; e.currentTarget.style.borderColor = '#403e3d'; }}>
              <span className="text-sm">Visit</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {emailDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className="relative border-2 p-6 w-full max-w-md" style={{ backgroundColor: '#E2DDD8', borderColor: '#403e3d', color: '#403e3d' }}>
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: '#403e3d' }}></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#403e3d' }}></div>
            
            <h3 className="text-lg font-extrabold font-mono mb-4" style={{ color: '#EA5655' }}>Contact Me</h3>
            <div className="flex items-center justify-between border px-3 py-2" style={{ backgroundColor: 'rgba(226, 221, 216, 0.8)', borderColor: '#403e3d' }}>
              <span className="text-sm font-mono" style={{ color: '#EA5655' }}>{email}</span>
              <button onClick={copyEmail} className="flex items-center gap-1 transition" style={{ color: '#EA5655' }}>
                {emailCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <button onClick={() => setEmailDialogOpen(false)} className="mt-4 w-full transition text-white py-2 border" style={{ backgroundColor: '#EA5655', borderColor: '#403e3d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d84847'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EA5655'}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Custom cursor pointer always on top */}
      <div
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out hidden md:block"
        style={{
          left: `${mousePos.x - 4}px`,
          top: `${mousePos.y - 4}px`,
          backgroundColor: '#EA5655',
        }}
      />
    </div>
  );
}