import { useState, useEffect, useMemo } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";

export default function DotPatternPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "11jal.edu@gmail.com";

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
      <div className="relative z-20 h-screen">
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
          <h2 className="text-sm font-mono mt-5">
            I'm a Full Stack Blockchain Developer crafting cutting-edge dApps
            and DeFi solutions. <br />
            From writing secure smart contracts to building intuitive Web3
            interfaces,
            <br />
            I turn complex blockchain concepts into user-friendly experiences.
          </h2>
        </div>
      </div>

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
                {emailCopied ? (
                  <>
                    <Check className="w-4 h-4" /> 
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> 
                  </>
                )}
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
