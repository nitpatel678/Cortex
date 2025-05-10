
import { useState } from "react"
import { motion } from "framer-motion"
import { Download, FileText, Link2 } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs.jsx"

export function ResearchReport({ isComplete, topic }) {
  const [activeTab, setActiveTab] = useState("summary")

  if (!isComplete) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <FuturisticCard glowColor="cyan">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-cyan-400" />
            <h2 className="font-semibold">Research Report: {topic}</h2>
          </div>
          <GradientButton size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </GradientButton>
        </div>

        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="sources">Sources</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Key Findings</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                <li>Artificial intelligence is transforming productivity tools across industries</li>
                <li>Large language models are becoming increasingly context-aware and capable</li>
                <li>Integration with existing workflows is key to adoption</li>
                <li>Privacy and data security remain significant concerns</li>
                <li>Personalization is becoming a key differentiator in AI tools</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Executive Summary</h3>
              <p className="text-sm text-gray-300">
                The landscape of AI productivity tools is rapidly evolving, with significant advancements in natural
                language processing and contextual understanding. These tools are increasingly being integrated into
                everyday applications, from email clients to project management software, offering personalized
                experiences that adapt to individual work patterns.
              </p>
              <p className="text-sm text-gray-300 mt-2">
                While adoption is growing, challenges remain around data privacy, security, and the need for seamless
                integration with existing workflows. Organizations that successfully implement these tools are seeing
                measurable improvements in efficiency and employee satisfaction.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Technological Trends</h3>
              <p className="text-sm text-gray-300">
                Recent advancements in large language models have significantly improved their ability to understand
                context, maintain coherent conversations, and generate high-quality content. Models like GPT-4 and
                Claude have demonstrated capabilities that approach human-level understanding in many domains.
              </p>
              <p className="text-sm text-gray-300 mt-2">
                These improvements are enabling more sophisticated AI assistants that can handle complex tasks, from
                drafting emails and summarizing meetings to conducting research and generating creative content.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Market Analysis</h3>
              <p className="text-sm text-gray-300">
                The market for AI productivity tools is growing rapidly, with both established tech companies and
                startups competing to offer the most effective solutions. Microsoft's integration of AI into Office 365,
                Google's AI features in Workspace, and specialized tools from companies like Notion and Anthropic are
                driving innovation in this space.
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Investment in AI productivity startups has increased by 45% year-over-year, indicating strong market
                confidence in the potential of these technologies.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Implementation Challenges</h3>
              <p className="text-sm text-gray-300">
                Organizations implementing AI productivity tools face several challenges, including integration with
                existing systems, employee training and adoption, and concerns about data privacy and security.
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Successful implementations typically involve a phased approach, starting with specific use cases that
                demonstrate clear value, followed by broader rollout with appropriate training and support.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="sources" className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Academic Sources</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">Journal of AI Research (2023)</span> - "The Impact of Large Language
                    Models on Productivity Applications"
                    <a href="#" className="text-blue-400 ml-2 inline-flex items-center">
                      <Link2 className="h-3 w-3 mr-1" />
                      Link
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">MIT Technology Review (2023)</span> - "AI Assistants: The Future of
                    Work"
                    <a href="#" className="text-blue-400 ml-2 inline-flex items-center">
                      <Link2 className="h-3 w-3 mr-1" />
                      Link
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Web Sources</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">TechCrunch (2023)</span> - "AI Productivity Tools Raise $2.5B in
                    Funding"
                    <a href="#" className="text-blue-400 ml-2 inline-flex items-center">
                      <Link2 className="h-3 w-3 mr-1" />
                      Link
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">Harvard Business Review (2023)</span> - "How AI is Changing Knowledge
                    Work"
                    <a href="#" className="text-blue-400 ml-2 inline-flex items-center">
                      <Link2 className="h-3 w-3 mr-1" />
                      Link
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">Gartner Research (2023)</span> - "AI Productivity Tools Market
                    Analysis"
                    <a href="#" className="text-blue-400 ml-2 inline-flex items-center">
                      <Link2 className="h-3 w-3 mr-1" />
                      Link
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Industry Reports</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">McKinsey Global Institute (2023)</span> - "The Economic Potential of
                    Generative AI"
                    <a href="#" className="text-blue-400 ml-2 inline-flex items-center">
                      <Link2 className="h-3 w-3 mr-1" />
                      Link
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">Deloitte (2023)</span> - "AI Productivity Tools: Implementation Guide"
                    <a href="#" className="text-blue-400 ml-2 inline-flex items-center">
                      <Link2 className="h-3 w-3 mr-1" />
                      Link
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </FuturisticCard>
    </motion.div>
  )
}
