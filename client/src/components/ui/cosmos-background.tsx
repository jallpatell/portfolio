import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
  size: number;
  color: string;
}

export function CosmosBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    const STAR_COUNT = 1500;
    const MAX_DEPTH = 2000;
    const SPEED = 2.5;
    const BASE_COLORS = [
      "rgba(255, 255, 255, ",
      "rgba(180, 200, 255, ",
      "rgba(255, 230, 200, ",
      "rgba(200, 180, 255, "
    ];

    let stars: Star[] = [];
    
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 4000,
        y: (Math.random() - 0.5) * 4000,
        z: Math.random() * MAX_DEPTH,
        pz: Math.random() * MAX_DEPTH,
        size: Math.random() * 1.5 + 0.1,
        color: BASE_COLORS[Math.floor(Math.random() * BASE_COLORS.length)]
      });
    }

    const drawNebula = () => {
      const time = Date.now() * 0.0002;
      
      const r1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time) * 200, height * 0.3 + Math.cos(time * 0.8) * 200, 0,
        width * 0.3 + Math.sin(time) * 200, height * 0.3 + Math.cos(time * 0.8) * 200, 800
      );
      r1.addColorStop(0, 'rgba(30, 10, 60, 0.15)');
      r1.addColorStop(1, 'rgba(0, 0, 0, 0)');

      const r2 = ctx.createRadialGradient(
        width * 0.7 + Math.cos(time * 1.1) * 300, height * 0.7 + Math.sin(time * 0.9) * 300, 0,
        width * 0.7 + Math.cos(time * 1.1) * 300, height * 0.7 + Math.sin(time * 0.9) * 300, 1000
      );
      r2.addColorStop(0, 'rgba(10, 30, 50, 0.1)');
      r2.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = r1;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = r2;
      ctx.fillRect(0, 0, width, height);
    };

    const render = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.fillRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const cx = width / 2 + (mouseX - width / 2) * 0.05;
      const cy = height / 2 + (mouseY - height / 2) * 0.05;

      drawNebula();

      ctx.globalCompositeOperation = 'screen';

      stars.forEach(star => {
        star.pz = star.z;
        star.z -= SPEED;

        if (star.z <= 0) {
          star.z = MAX_DEPTH;
          star.pz = MAX_DEPTH;
          star.x = (Math.random() - 0.5) * 4000;
          star.y = (Math.random() - 0.5) * 4000;
        }

        const factor = 800 / star.z;
        const px = star.x * factor + cx;
        const py = star.y * factor + cy;

        const pFactor = 800 / star.pz;
        const ppx = star.x * pFactor + cx;
        const ppy = star.y * pFactor + cy;

        const opacity = Math.max(0, 1 - (star.z / MAX_DEPTH));
        
        ctx.beginPath();
        ctx.moveTo(ppx, ppy);
        ctx.lineTo(px, py);
        
        ctx.lineWidth = star.size * Math.min(factor * 0.5, 3);
        ctx.strokeStyle = `${star.color}${opacity})`;
        ctx.stroke();

        if (star.size > 1.2 && star.z < 1000) {
          ctx.beginPath();
          ctx.arc(px, py, star.size * factor, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}${opacity * 0.5})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block bg-black pointer-events-none z-0"
    />
  );
}
