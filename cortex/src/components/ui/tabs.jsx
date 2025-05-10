
import * as React from "react"
import { cn } from "../../lib/utils.js"

// Simplified version without Radix UI
const Tabs = ({ defaultValue, value, onValueChange, className, children, ...props }) => {
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue)

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const handleValueChange = (newValue) => {
    if (onValueChange) {
      onValueChange(newValue)
    } else {
      setSelectedValue(newValue)
    }
  }

  return (
    <div className={cn("", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child

        if (child.type.displayName === "TabsContent") {
          return React.cloneElement(child, {
            value: child.props.value,
            isSelected: child.props.value === selectedValue,
          })
        }

        if (child.type.displayName === "TabsList") {
          return React.cloneElement(child, {
            onValueChange: handleValueChange,
            selectedValue,
          })
        }

        return child
      })}
    </div>
  )
}

const TabsList = React.forwardRef(({ className, onValueChange, selectedValue, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className,
      )}
      {...props}
    >
      {React.Children.map(props.children, (child) => {
        if (!React.isValidElement(child)) return child

        return React.cloneElement(child, {
          onSelect: onValueChange,
          isSelected: child.props.value === selectedValue,
        })
      })}
    </div>
  )
})
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef(({ className, value, onSelect, isSelected, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isSelected
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
        className,
      )}
      onClick={() => onSelect && onSelect(value)}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef(({ className, value, isSelected, ...props }, ref) => {
  if (!isSelected) return null

  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
