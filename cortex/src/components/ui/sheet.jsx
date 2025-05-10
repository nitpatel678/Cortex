import * as React from "react"
import { cn } from "../../lib/utils.js"

// Simplified version without Radix UI
const Sheet = ({ children, open, onOpenChange }) => {
  return <>{children}</>
}

const SheetTrigger = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button"
  return <Comp ref={ref} className={cn("", className)} {...props} />
})
SheetTrigger.displayName = "SheetTrigger"

const SheetContent = React.forwardRef(({ className, children, side = "right", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-y-0 z-50 h-full bg-background p-6 shadow-lg",
        {
          "left-0 border-r": side === "left",
          "right-0 border-l": side === "right",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent }
