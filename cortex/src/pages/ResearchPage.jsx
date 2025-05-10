import { useState } from "react"
import { ResearchForm } from "../components/research/research-form.jsx"
import { ProgressTracker } from "../components/research/progress-tracker.jsx"
import { ResearchReport } from "../components/research/research-report.jsx"

export default function ResearchPage() {
  const [isResearching, setIsResearching] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [topic, setTopic] = useState("")
  const [researchType, setResearchType] = useState("")

  const handleStartResearch = (newTopic, type) => {
    setTopic(newTopic)
    setResearchType(type)
    setIsResearching(true)
    setIsComplete(false)

    // Simulate research completion
    setTimeout(() => {
      setIsComplete(true)
    }, 12000) // After all progress steps complete
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Research Assistant</h1>

      <ResearchForm onStartResearch={handleStartResearch} />

      <ProgressTracker isActive={isResearching} />

      <ResearchReport isComplete={isComplete} topic={topic} />
    </div>
  )
}
