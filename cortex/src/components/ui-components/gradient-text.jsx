import { cn } from "../../lib/utils.js"

export function GradientText({ children, className, gradient = "blue-purple" }) {
  const gradientClasses = {
    "blue-purple": "from-blue-400 via-indigo-500 to-purple-500",
    "cyan-blue": "from-cyan-400 via-blue-500 to-indigo-500",
    "pink-purple": "from-pink-500 via-fuchsia-500 to-purple-500",
  }

  return (
    <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", gradientClasses[gradient], className)}>
      {children}
    </span>
  )
}
