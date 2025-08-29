import { useState, useEffect, useMemo } from "react";

export default function DotPatternPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      <div className="relative z-20 flex items-center justify-center h-screen">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold font-mono mb-4 opacity-80">
            Dot Pattern Background
          </h1>
          <p className="text-lg font-mono opacity-60">
            Move your cursor around to see the gradient effect
          </p>
        </div>
      </div>
    </div>
  );
}
