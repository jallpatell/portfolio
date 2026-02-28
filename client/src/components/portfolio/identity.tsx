import { motion } from "framer-motion";
import { Widget } from "@/components/ui/widget";

export function Identity() {
  return (
    <Widget padding="p-6 md:p-8" className="flex-shrink-0">

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-none mb-1.5 animate-shimmer">
        Hi! I'm Jal Patel
      </h1>
      
      <p className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 text-xl font-display font-bold tracking-tighter mb-6">
        Full-Stack Engineer 
      </p>

      <p className="font-sans text-[17px] md:text-sm leading-relaxed text-white/50 font-light tracking-tight">
        I build web applications with Node, TypeScript, React, Next.js, sometimes with Golang backed by solid APIs and zest to write complex frontend swiftly. I create intuitive and efficient digital experiences. When I'm not coding, you can find me stargazing or playing chess. I also fafo on L2 DeFi & dApps.
      </p>
    </Widget>
  );
}
