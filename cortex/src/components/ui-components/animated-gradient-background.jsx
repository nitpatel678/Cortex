import { cn } from "../../lib/utils.js"

export function AnimatedGradientBackground({ children, className }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 animated-gradient opacity-30" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
