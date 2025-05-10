
import { useState } from "react"
import { motion } from "framer-motion"
import { FileSearch, Loader2, Search } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"
import { Input } from "../ui/input.jsx"
import { Label } from "../ui/label.jsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select.jsx"

export function ResearchForm({ onStartResearch }) {
  const [topic, setTopic] = useState("")
  const [researchType, setResearchType] = useState("web")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onStartResearch(topic, researchType)
    }, 1500)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <FuturisticCard>
        <div className="flex items-center gap-2 mb-4">
          <FileSearch className="h-5 w-5 text-blue-400" />
          <h2 className="font-semibold">Research Assistant</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic">Research Topic</Label>
            <Input
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter a topic to research..."
              className="bg-gray-800/50 border-gray-700"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Research Type</Label>
            <Select value={researchType} onValueChange={setResearchType}>
              <SelectTrigger id="type" className="bg-gray-800/50 border-gray-700">
                <SelectValue placeholder="Select research type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Search</SelectItem>
                <SelectItem value="reddit">Reddit Discussions</SelectItem>
                <SelectItem value="academic">Academic Papers</SelectItem>
                <SelectItem value="mixed">Mixed Sources</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <GradientButton type="submit" disabled={isLoading || !topic} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Initializing Research
              </>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Start Research
              </>
            )}
          </GradientButton>
        </form>
      </FuturisticCard>
    </motion.div>
  )
}
