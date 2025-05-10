
import { cn } from "../../lib/utils.js"
import { motion } from "framer-motion"

export function FuturisticCard({ children, className, glowColor = "blue", hoverEffect = true }) {
  const glowClasses = {
    blue: "glow",
    purple: "glow-purple",
    cyan: "glow-cyan",
    pink: "glow-pink",
  }

  return (
    <motion.div
      className={cn(
        "relative rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 p-4",
        hoverEffect && "hover:border-white/20 transition-all duration-300",
        glowClasses[glowColor],
        className,
      )}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              transition: { duration: 0.2 },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  )
}
