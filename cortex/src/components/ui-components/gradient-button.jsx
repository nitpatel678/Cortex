
import { cn } from "../../lib/utils.js"
import { motion } from "framer-motion"

export function GradientButton({ children, className, variant = "primary", size = "md", icon, ...props }) {
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white",
    secondary: "bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white",
    outline: "bg-transparent border border-white/20 hover:border-white/40 text-white",
  }

  const sizeClasses = {
    sm: "text-xs py-1 px-3",
    md: "text-sm py-2 px-4",
    lg: "text-base py-3 px-6",
  }

  return (
    <motion.button
      className={cn(
        "rounded-lg font-medium flex items-center justify-center gap-2 transition-all",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </motion.button>
  )
}
