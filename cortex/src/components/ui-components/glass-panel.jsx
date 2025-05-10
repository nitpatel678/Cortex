import { cn } from "../../lib/utils.js"

export function GlassPanel({ children, className }) {
  return <div className={cn("glass rounded-xl border border-white/10 p-6", className)}>{children}</div>
}
