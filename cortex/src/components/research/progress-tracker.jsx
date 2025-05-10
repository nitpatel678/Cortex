
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Check, FileText, Link, Search, Sparkles } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { Progress } from "../ui/progress.jsx"

export function ProgressTracker({ isActive }) {
  const [steps, setSteps] = useState([
    {
      id: 1,
      name: "Search",
      description: "Searching for relevant sources",
      icon: <Search className="h-4 w-4" />,
      status: "pending",
      progress: 0,
    },
    {
      id: 2,
      name: "Scrape",
      description: "Extracting content from sources",
      icon: <Link className="h-4 w-4" />,
      status: "pending",
      progress: 0,
    },
    {
      id: 3,
      name: "Summarize",
      description: "Analyzing and summarizing information",
      icon: <FileText className="h-4 w-4" />,
      status: "pending",
      progress: 0,
    },
    {
      id: 4,
      name: "Generate",
      description: "Creating comprehensive report",
      icon: <Sparkles className="h-4 w-4" />,
      status: "pending",
      progress: 0,
    },
  ])

  useEffect(() => {
    if (!isActive) return

    let currentStep = 0

    const interval = setInterval(() => {
      setSteps((prevSteps) => {
        const newSteps = [...prevSteps]

        if (currentStep < newSteps.length) {
          const step = newSteps[currentStep]

          if (step.progress < 100) {
            step.status = "active"
            step.progress += 10

            if (step.progress >= 100) {
              step.status = "completed"
              currentStep++

              if (currentStep < newSteps.length) {
                newSteps[currentStep].status = "active"
              }
            }
          }
        } else {
          clearInterval(interval)
        }

        return newSteps
      })
    }, 500)

    return () => clearInterval(interval)
  }, [isActive])

  if (!isActive) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <FuturisticCard glowColor="purple">
        <h2 className="font-semibold mb-4">Research Progress</h2>

        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className={`p-1.5 rounded-full ${
                    step.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : step.status === "active"
                        ? "bg-blue-500/20 text-blue-400 animate-pulse"
                        : "bg-gray-800 text-gray-500"
                  }`}
                >
                  {step.status === "completed" ? <Check className="h-4 w-4" /> : step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{step.name}</span>
                    <span className="text-xs text-gray-400">{step.progress}%</span>
                  </div>
                  <Progress value={step.progress} className="h-1.5 mt-1" />
                </div>
              </div>
              <p className="text-xs text-gray-400 ml-8">{step.description}</p>
            </div>
          ))}
        </div>
      </FuturisticCard>
    </motion.div>
  )
}
