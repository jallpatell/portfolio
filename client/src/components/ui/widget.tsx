import { HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface WidgetProps extends HTMLMotionProps<"div"> {
  padding?: string;
}

export function Widget({ children, className, padding = "p-5 md:p-6", onClick, ...props }: WidgetProps) {
  return (
    <motion.div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-[20px] border border-white/10",
        "bg-gradient-to-br from-[#1e1e24] to-[#14141a]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-1px_0_rgba(0,0,0,0.45),0_4px_24px_rgba(0,0,0,0.55)]",
        "transition-colors duration-300",
        onClick && "cursor-pointer hover:from-[#2c2c32] hover:to-[#202026]",
        padding,
        className
      )}
      {...props}
    >
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-0 rounded-t-[20px]" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
