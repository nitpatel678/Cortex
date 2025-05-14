import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, FileSearch, Mail, MessageSquare, Sun, User } from "lucide-react"
import { WelcomeBanner } from "../components/dashboard/welcome-banner.jsx"
import { SummaryCard } from "../components/dashboard/summary-card.jsx"
import { AgentCard } from "../components/dashboard/agent-card.jsx"

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      <WelcomeBanner userName="John" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Today's Summary" icon={<Sun className="h-5 w-5 text-yellow-400" />} glowColor="blue">
          <div className="space-y-4">
            <div className="text-sm text-gray-400">{formatDate(currentTime)}</div>
            <div className="space-y-2 font-ubuntu">
              <div className="flex justify-between text-sm">
                <span>Weather</span>
                <span className="text-blue-400">72°F, Sunny</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Meetings</span>
                <span className="text-blue-400">3 today</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Unread Emails</span>
                <span className="text-blue-400">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tasks Due</span>
                <span className="text-blue-400">5</span>
              </div>
            </div>
          </div>
        </SummaryCard>

        <SummaryCard
          title="Upcoming Meetings"
          icon={<Calendar className="h-5 w-5 text-purple-400" />}
          glowColor="purple"
        >
          <div className="space-y-3 font-ubuntu">
            <div className="p-2 rounded-lg bg-gray-800/50 text-sm">
              <div className="font-medium">Weekly Team Sync</div>
              <div className="text-xs text-gray-400">10:00 AM - 11:00 AM</div>
            </div>
            <div className="p-2 rounded-lg bg-gray-800/50 text-sm">
              <div className="font-medium">Product Review</div>
              <div className="text-xs text-gray-400">1:30 PM - 2:30 PM</div>
            </div>
            <div className="p-2 rounded-lg bg-gray-800/50 text-sm">
              <div className="font-medium">Client Call: Acme Inc</div>
              <div className="text-xs text-gray-400">4:00 PM - 4:30 PM</div>
            </div>
          </div>
        </SummaryCard>

        <SummaryCard title="Recent Emails" icon={<Mail className="h-5 w-5 text-cyan-400" />} glowColor="cyan">
          <div className="space-y-3 font-ubuntu">
            <div className="p-2 rounded-lg bg-gray-800/50 text-sm">
              <div className="font-medium">Project Update</div>
              <div className="text-xs text-gray-400">from: sarah@example.com</div>
            </div>
            <div className="p-2 rounded-lg bg-gray-800/50 text-sm">
              <div className="font-medium">Meeting Agenda</div>
              <div className="text-xs text-gray-400">from: mike@example.com</div>
            </div>
            <div className="p-2 rounded-lg bg-gray-800/50 text-sm">
              <div className="font-medium">Quarterly Report</div>
              <div className="text-xs text-gray-400">from: finance@example.com</div>
            </div>
          </div>
        </SummaryCard>
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl font-semibold mt-8 mb-4 font-outfit"
      >
        Your AI Agents
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AgentCard
          title="Personal OS Agent"
          description="Manage your emails, calendar, and daily tasks with AI assistance."
          icon={<User className="h-5 w-5 text-blue-400" />}
          href="/personal-os"
          glowColor="blue"
        />

        <AgentCard
          title="Research Assistant"
          description="Conduct in-depth research on any topic with AI-powered analysis."
          icon={<FileSearch className="h-5 w-5 text-purple-400" />}
          href="/research"
          glowColor="purple"
        />

        <AgentCard
          title="Meeting Whisperer"
          description="Transcribe, summarize, and extract action items from your meetings."
          icon={<MessageSquare className="h-5 w-5 text-cyan-400" />}
          href="/meetings"
          glowColor="cyan"
        />
      </div>
    </div>
  )
}
