import * as React from "react"
import { cn } from "../../lib/utils.js"

const Switch = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" ref={ref} className="peer sr-only" {...props} />
      <div
        className={cn(
          "peer h-[24px] w-[44px] cursor-pointer rounded-full bg-input transition-colors peer-checked:bg-primary",
          className,
        )}
      >
        <div className="h-[20px] w-[20px] translate-x-[2px] translate-y-[2px] rounded-full bg-background transition-transform peer-checked:translate-x-[22px]" />
      </div>
    </div>
  )
})
Switch.displayName = "Switch"

export { Switch }
