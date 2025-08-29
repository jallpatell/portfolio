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

  const email = "11jal.edu@gmail.com";

  const experiences = [
    {
      id: 1,
      org: "OpenAI",
      role: "AI Research Intern",
      stack: ["Python", "PyTorch", "Transformers"],
      details:
        "Worked on fine-tuning LLMs for specialized domains and improved inference efficiency.",
    },
    {
      id: 2,
      org: "Ethereum Foundation",
      role: "Blockchain Developer",
      stack: ["Solidity", "Hardhat", "React", "Ethers.js"],
      details:
        "Developed smart contracts for DeFi protocols and optimized gas usage across transactions.",
    },
    {
      id: 3,
      org: "Google Summer of Code",
      role: "Contributor",
      stack: ["Go", "Kubernetes", "Docker"],
      details:
        "Built scalable backend tools and contributed to open-source infrastructure projects.",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "DeFi Yield Optimizer",
      description: "Automated yield farming across multiple protocols",
      stack: ["Solidity", "React", "Web3.js", "Node.js"],
      details:
        "Built a DeFi protocol that automatically moves user funds between different yield farming opportunities to maximize returns. Implemented smart contracts with security audits and created a responsive frontend with real-time analytics.",
      link: "https://example.com/defi-yield",
    },
    {
      id: 2,
      name: "NFT Marketplace",
      description: "Multi-chain NFT trading platform",
      stack: ["Ethereum", "Polygon", "IPFS", "Next.js"],
      details:
        "Developed a cross-chain NFT marketplace supporting Ethereum and Polygon. Implemented lazy minting, batch transactions, and royalty distribution features. Integrated with IPFS for decentralized storage.",
      link: "https://example.com/nft-market",
    },
    {
      id: 3,
      name: "DAO Governance Tool",
      description: "Voting and proposal system for decentralized organizations",
      stack: ["Solidity", "Hardhat", "The Graph", "React"],
      details:
        "Created a comprehensive governance platform for DAOs featuring proposal creation, voting mechanisms, and treasury management. Integrated with The Graph for efficient blockchain data querying.",
      link: "https://example.com/dao-tool",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "Go", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Blockchain",
      technologies: ["Solidity", "Ethereum", "Hardhat", "Web3.js", "IPFS", "The Graph"]
    },
    {
      category: "DevOps",
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Linux"]
    }
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
    <div className="fixed inset-0 bg-black cursor-none">
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
        className="fixed w-32 h-32 pointer-events-none z-10 transition-opacity duration-300"
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
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-20 transition-all duration-100 ease-out"
        style={{
          left: `${mousePos.x - 4}px`,
          top: `${mousePos.y - 4}px`,
        }}
      />

      {/* Content area */}
      <div className="relative z-20 h-screen -mt-10 overflow-y-auto">
        <div className="absolute top-30 left-50">
          {/* Name + Icons in same row */}
          <div className="flex items-center justify-between w-full max-w-full">
            <h1 className="text-xl text-blue-400 font-sans font-bold opacity-100">
              Jal Patel
            </h1>
            <div className="flex ml-180 gap-4">
              <a
                href="https://github.com/jallpatell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-8 h-8 hover:scale-105 text-white opacity-80 hover:opacity-100 transition" />
              </a>
              <a
                href="https://linkedin.com/in/jallpatell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-8 h-8 hover:scale-105 text-white opacity-80 hover:opacity-100 transition" />
              </a>
              <a
                href="https://twitter.com/jallpatell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-8 h-8 hover:scale-105 text-white opacity-80 hover:opacity-100 transition" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://calendly.com/jallpatell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-8 h-8 hover:scale-105 text-white opacity-80 hover:opacity-100 transition" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a
                href="mailto:11jal.edu@gmail.com"
                onClick={(e) => {
                  e.preventDefault();
                  setEmailDialogOpen(true);
                }}
              >
                <Mail className="w-8 h-8 hover:scale-105 text-white opacity-80 hover:opacity-100 transition" />
              </a>
            </div>
          </div>

          <h2 className="font-bold font-mono text-gray-500 opacity-80 mt-4 text-xl">
            21 | Full-Stack Engineer
          </h2>
          <h2 className="text-lg font-mono mt-5">
            I'm a Full Stack Blockchain Developer crafting cutting-edge dApps
            and DeFi solutions. <br />
            From writing secure smart contracts to building intuitive Web3
            interfaces,
            <br />
            I turn complex blockchain concepts into user-friendly experiences.
          </h2>
        </div>

        {/* Section slider */}
        <div className="flex mt-90 relative px-12 z-30">
          {/* Slider navigation */}
          <div className="ml-150 left-10 transform h-10 flex items-center gap-1 pointer-events-auto">
            <button
              onClick={() => setActiveSection("Experience")}
              aria-pressed={activeSection === "Experience"}
              className={`relative z-10 backdrop-blur-lg hover:backdrop-blur-md border transition-all hover:scale-102 duration-500 delay-100 rounded-3xl p-0.2 mt-5 px-5 py-2  pointer-events-auto ${
                activeSection === "Experience"
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-white border-white hover:bg-white'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveSection("Projects")}
              aria-pressed={activeSection === "Projects"}
              className={`relative z-10 backdrop-blur-lg hover:backdrop-blur-md border transition-all hover:scale-102 duration-500 delay-100 rounded-3xl p-0.2 mt-5 px-5 py-2 pointer-events-auto ${
                activeSection === "Projects"
                  ? 'bg-white text-black border-black'
                  : 'bg-white text-white border-white hover:bg-white'
              }`}
            >
              Projects
            </button>
          </div>

          {/* Slider container */}
          <div className=" -ml-80 rounded-xl ">
            <div className="flex transition-transform duration-500 ease-in-out">
              {/* Experience section - conditionally rendered */}
              {activeSection === "Experience" && (
                <div className="w-full flex-shrink-0">
                  <div className="flex flex-col gap-12 mt-25 w-full">
                    {experiences.map((exp) => (
                      <div
                        key={exp.id}
                        onClick={() => setExpandedCard(exp)}
                        className="cursor-pointer relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 w-96 hover:scale-105 transition transform"
                      >
                        <h3 className="text-lg font-bold text-white">{exp.org}</h3>
                        <p className="text-sm text-gray-300">{exp.role}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.stack.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {/* Connector dot */}
                        <div className="absolute -left-7 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-400 border-2 border-white rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects section - conditionally rendered */}
              {activeSection === "Projects" && (
                <div className="w-full flex-shrink-0">
                  <div className="flex flex-col gap-12 mt-25 w-full">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => setExpandedProject(project)}
                        className="cursor-pointer relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 w-96 hover:scale-105 transition transform"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-bold text-white">{project.name}</h3>
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
                        <p className="text-sm text-gray-300 mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.stack.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {/* Connector dot */}
                        <div className="absolute -left-7 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-400 border-2 border-white rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 px-12">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/20 text-blue-300 text-xs px-3 py-2 rounded-lg  border-blue-400/30"
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
                  className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-md"
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