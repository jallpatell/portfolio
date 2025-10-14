import { useState, useEffect, useMemo } from "react";
import { Github, Linkedin, Mail, Copy, Check, X, ExternalLink, Calendar } from "lucide-react";

export default function DotPatternPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("Experience"); // "Experience" or "Projects"

  const email = "jallpatellco@gmail.com";
  const location = "IN / DXB";

  const experiences = [
    {
      id: 1,
      org: "NaapBooks Limited",
      role: "SDE Intern",
      stack: ["React", "TypeScript", "Next"],
      details:
        "",
    },
    {
      id: 2,
      org: "Episodic Labs",
      role: "Backend Engineer Intern",
      stack: ["Typescript", "Node.js", "Hostinger", "Puppeteer"],
      details:
        "Designed and developed modular Node.js-based microservices to enable scalable and maintainable backend architecture, improving backend scalability by 30%. Implemented CI/CD pipelines using GitHub Actions, automating build, test, and deployment workflows for faster release cycles, reducing deployment time by 50%. Integrated stock market data, open-source APIs, and financial news feeds using Node.js to enhance data-driven analysis capabilities, , enhancing application’s data-driven insights, by 35%"
    },
    {
      id: 3,
      org: "UpWork",
      role: "Freelancer",
      stack: ["Node.js", "Typescript", "Docker", "Next.js"],
      details:
        "Built & deployed scalable systems and contributed to open-source infrastructure projects.",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "MetaGas: Live Gas Tracker",
      description: "Track live gas prices for multiple chains (similar to etherscan).",
      stack: ["TypeScript", "Redis", "WebSockets", "Next.js"],
      details:
        "With Live charting, you see not only averages, but real extremes (highs/lows) within each 15-minute window, giving you deeper control over your transaction timing.",
      link: "https://metagas.vercel.app/",
    },
    {
      id: 1,
      name: "Pulse",
      description: "Scrape down Zerodha Pulse",
      stack: ["Typescript", "Puppeteer"],
      details:
        "An internal instrument typescript web-crawler that scrapes Indian stock market news from https://pulse.zerodha.com/ to analyse markets for a larger system.",
      link: "https://github.com/jallpatell/pulse",
    },
    {
      id: 2,
      name: "CRYPTeX:  Decentralized Wallet & Portfolio Tracker",
      description: "Web3 wallet and portfolio tracker ( on devnet as of now)",
      stack: ["TypeScript", "React", "TailwindCSS", " @solana/web3.js"],
      details:
        "Developed a non-custodial web-based wallet enabling secure Ethereum and Solana asset management. Engineered Web3-ready architecture with multi-chain support using ethers.js and @solana/web3.js. Implemented secure seed phrase generation, key derivation, and transaction signing workflows. Designed API-driven transaction history viewer with JSON+RPC capabilities.",
      link: "https://cryptexe.vercel.app/",
    },
    {
      id: 3,
      name: "AI Product Advisor: product-recco",
      description: "AI-powered recommendation app",
      stack: ["React Native", "AsyncStorage", "NativewindCSS", "Gemini API(Gemini 2.5 Pro )"],
      details:
        "Built a cross-platform AI-powered recommendation app with backend integration, leveraging Gemini AI API for NLP-based personalized product suggestions. – Implemented state management, RESTful API integrations, and secure local storage persistence for a smooth real-time user experience. Architected backend-ready design for future expansion with scalable databases and real APIs.",
      link: "https://snack.expo.dev/@jallpatell/product-recco",
    },
  ];

  const skills = [
    {
      category: "",
      technologies: [
        "Node.js",
        "Express",
        "REST APIs",
        "WebSockets",
        "PubSubs",
        "Content Delivery Network (CDN)",
        "Redis (Cache)",
        "RabbitMQ",
        "Kafka"
      ]
    },
    {
      category: "",
      technologies: [
        "React",
        "Next.js",
        "React Native",
        "TailwindCSS",
        "Redux",
        "NativewindCSS",
        "UI/UX principles"
      ]
    },
    {
      category: "",
      technologies: [
        "PostgreSQL",
        "Redis",
        "MongoDB",
        "MySQL",
        "Elasticsearch"
      ]
    },
    {
      category: "",
      technologies: [
        "CI/CD Pipelines",
        "Docker",
        "AWS (EC2, Lambda)",
        "NGINX",
        "Git",
        "GitHub Actions",
        "Postman"
      ]
    },
    {
      category: "",
      technologies: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Database Management Systems"
      ]
    },
    
  ];
  

  // Track mouse
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

  // Track window size
  useEffect(() => {
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Generate dots only when window size changes
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
    <div className="fixed inset-0 bg-black cursor-none md:cursor-auto">
      {/* Dot pattern background */}
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-0.5 h-0.5 bg-gray-700 rounded-full"
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
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
          background:
            "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.3) 40%, rgba(236,72,153,0.1) 70%, transparent 100%)",
          filter: "blur(0.9px)",
        }}
      />

      {/* Custom cursor */}
      <div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-20 transition-all duration-100 ease-out hidden md:block"
        style={{
          left: `${mousePos.x - 4}px`,
          top: `${mousePos.y - 4}px`,
        }}
      />

      {/* Content area */}
      <div className="relative z-20 h-screen -mt-10 overflow-y-auto">
        <div className="w-full mt-10 md:mt-20">
          <div className="max-w-5xl mx-auto px-6 md:px-0">
            {/* Name + Icons in same row */}
            <div className="flex items-center justify-between w-full max-w-full">
              <h1 className="text-lg md:text-xl text-blue-500 font-sans font-bold opacity-100">
                Jal Patel
              </h1>
              <div className="flex md:ml-0 gap-3 md:gap-4">
                <a
                  href="https://github.com/jallpatell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-7 h-7 md:w-8 md:h-8 hover:scale-105 text-white opacity-80 hover:opacity-100 transition" />
                </a>
                <a
                  href="mailto:11jal.edu@gmail.com"
                  onClick={(e) => {
                    e.preventDefault();
                    setEmailDialogOpen(true);
                  }}
                >
                  <Mail className="w-7 h-7 md:w-8 md:h-8 hover:scale-105 text-white opacity-80 hover:opacity-100 transition" />
                </a>
              </div>
            </div>

            <h2 className="font-extrabold font-mono text-blue-300 opacity-80 mt-3 md:mt-4 text-lg md:text-2xl">
              full-stack engg. | system design
            </h2>
            <h2 className="text-base md:text-lg font-mono mt-4 md:mt-5 max-w-[90vw] md:max-w-none">
            primarily in TypeScript, React, and Node.js with hands-on experience in AI, Web3, and real-time systems.
            Flexible to switch across any tech-stack & Programming languages if the Product excites me. Experienced in microservices, scalable backend
            architectures, and DevOps workflows. Seeking remote Software Engineering opportunities to contribute to high-impact teams.
            </h2>
          </div>
        </div>

        {/* Section slider */}
        <div className="flex mt-2 md:mt-9 relative px-6 md:px-12 z-30">
          <div className="max-w-5xl mx-auto w-full">
            {/* Slider navigation */}
            <div className="w-full mt-5 flex items-center justify-center gap-3 md:gap-5 pointer-events-auto">
            <button
                onClick={() => setActiveSection("Projects")}
                aria-pressed={activeSection === "Projects"}
                className={`relative z-10 backdrop-blur-lg font-mono hover:backdrop-blur-md border transition-all hover:scale-105 duration-300 rounded-xl px-4 md:px-6 py-2.5 md:py-3 pointer-events-auto font-medium ${
                  activeSection === "Projects" 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-400 shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection("Experience")}
                aria-pressed={activeSection === "Experience"}
                className={`relative z-10 backdrop-blur-lg font-mono hover:backdrop-blur-md border transition-all hover:scale-105 duration-300 rounded-xl px-4 md:px-6 py-2.5 md:py-3 pointer-events-auto font-medium ${
                  activeSection === "Experience"
                    ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white border-blue-400 shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50'
                }`}
              >
                Experience
              </button>
              
            </div>

            {/* Slider container */}
            <div className="rounded-xl w-full max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row transition-transform duration-500 ease-in-out">
                {/* Experience section - conditionally rendered */}
                {activeSection === "Experience" && (
                  <div className="w-full flex-shrink-0">
                    <div className="flex flex-col gap-6 md:gap-12 mt-10 md:mt-5 w-full items-center">
                      {experiences.map((exp) => (
                        <div
                          key={exp.id}
                          onClick={() => setExpandedCard(exp)}
                          className="cursor-pointer relative bg-gray-900/15 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-5 md:p-6 w-full md:w-96 hover:scale-105 transition transform"
                        >
                          <h3 className="text-base md:text-lg font-bold text-white">{exp.org}</h3>
                          <p className="text-xs md:text-sm text-gray-300">{exp.role}</p>
                          <div className="flex flex-wrap gap-2 mt-5">
                            {exp.stack.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-blue-500/20 text-blue-300 text-[10px] md:text-xs px-2 py-1 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          {/* Connector dot */}
                          <div className="hidden md:block absolute -left-7 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-400 border-2 border-white rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects section - conditionally rendered */}
                {activeSection === "Projects" && (
                  <div className="w-full flex-shrink-0">
                    <div className="flex flex-col gap-6 md:gap-12 md:mt-5 w-full items-center">
                      {projects.map((project) => (
                        <div
                          key={project.id}
                          onClick={() => setExpandedProject(project)}
                          className="cursor-pointer relative bg-blue-900/15 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-5 md:p-6 w-full md:w-96 hover:scale-105 transition transform"
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-base md:text-lg font-bold text-white">{project.name}</h3>
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                          <p className="text-xs md:text-sm text-gray-300 mt-1">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.stack.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-blue-500/20 text-blue-300 text-[10px] md:text-xs px-2 py-1 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          {/* Connector dot */}
                          <div className="hidden md:block absolute -left-7 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-400 border-2 border-white rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-14 md:mt-20 px-6 md:px-12">
          <div className="bg-gray-900/10 backdrop-blur-md rounded-2xl shadow-lg p-5 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 md:gap-3">
              {skills.map((skillGroup, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <h3 className="text-base md:text-lg font-bold text-white border-b font-mono border-white/20 pb-2">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/20 text-blue-300 font-mono text-[10px] md:text-xs px-2 md:px-3 py-1.5 md:py-2 rounded-lg border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 md:mt-20 px-6 md:px-12 pb-8">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            {/* Location */}
            <div className="flex items-center gap-2 md:gap-3 text-gray-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="font-medium text-sm md:text-base">{location}</span>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5 md:gap-6">
              <a
                href="https://linkedin.com/in/jallpatell"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <Linkedin className="w-6 h-6 md:w-7 md:h-7 text-gray-300 hover:text-white transition-colors" />
              </a>
              {/* <a
                href="https://twitter.com/jallpatell"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-300 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a> */}
              <a
                href="https://calendly.com/jallpatell"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-300 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>

            <div className="text-gray-400 text-xs md:text-sm text-center">
              Flexible across all Time-Zones & Regions.
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Experience Modal */}
      {expandedCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-[600px] p-8 text-white">
            <button
              onClick={() => setExpandedCard(null)}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold">{expandedCard.org}</h3>
            <p className="mt-2 text-gray-300">{expandedCard.role}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {expandedCard.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              {expandedCard.details}
            </p>
          </div>
        </div>
      )}

      {/* Expanded Project Modal */}
      {expandedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-[600px] p-8 text-white">
            <button
              onClick={() => setExpandedProject(null)}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold">{expandedProject.name}</h3>
              <a 
                href={expandedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center gap-1"
              >
                <span className="text-sm">Visit</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-2 text-gray-300">{expandedProject.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {expandedProject.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              {expandedProject.details}
            </p>
          </div>
        </div>
      )}

      {/* Email Dialog */}
      {emailDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-96 text-white">
            <h3 className="text-lg font-extrabold font-mono mb-4">Contact Me</h3>
            <div className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
              <span className="text-sm font-mono">{email}</span>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
              >
                {emailCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <button
              onClick={() => setEmailDialogOpen(false)}
              className="mt-4 w-full bg-red-500 hover:bg-blue-600 transition text-white rounded-lg py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
