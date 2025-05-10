
import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Link2, Loader2 } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"
import { Input } from "../ui/input.jsx"
import { Textarea } from "../ui/textarea.jsx"

export function ArticleSummarizer() {
  const [url, setUrl] = useState("")
  const [text, setText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [summary, setSummary] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setSummary(
        "This article discusses the latest advancements in artificial intelligence and their potential impact on productivity tools. Key points include:\n\n1. New large language models are becoming more context-aware\n2. AI assistants are being integrated into everyday productivity applications\n3. Personalization is becoming a key differentiator in AI tools\n4. Privacy concerns remain a challenge for widespread adoption",
      )
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <FuturisticCard glowColor="pink">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-pink-400" />
          <h2 className="font-semibold">Article Summarizer</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Enter URL to summarize</label>
            <div className="flex gap-2">
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/article"
                className="bg-gray-800/50 border-gray-700"
              />
              <GradientButton type="submit" disabled={isLoading || (!url && !text)}>
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Processing
                  </>
                ) : (
                  <>
                    <Link2 className="h-4 w-4 mr-2" />
                    Summarize
                  </>
                )}
              </GradientButton>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Or paste text to summarize</label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste article text here..."
              className="min-h-[100px] bg-gray-800/50 border-gray-700"
            />
          </div>
        </form>

        {summary && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700"
          >
            <h3 className="text-sm font-medium mb-2">Summary</h3>
            <div className="text-sm text-gray-300 whitespace-pre-line">{summary}</div>
          </motion.div>
        )}
      </FuturisticCard>
    </motion.div>
  )
}
