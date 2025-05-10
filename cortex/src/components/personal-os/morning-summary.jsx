
import { motion } from "framer-motion"
import { Calendar, Mail, Sun, Zap } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { GradientText } from "../ui-components/gradient-text.jsx"

export function MorningSummary() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <FuturisticCard className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sun className="h-5 w-5 text-yellow-400" />
            <h2 className="text-xl font-semibold">
              <GradientText>Good Morning, John</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="p-3 rounded-lg bg-gray-800/50 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Calendar className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-medium">3 Meetings</div>
                <div className="text-xs text-gray-400">Today</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-gray-800/50 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Mail className="h-4 w-4 text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-medium">12 Unread</div>
                <div className="text-xs text-gray-400">Emails</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-gray-800/50 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/20">
                <Zap className="h-4 w-4 text-cyan-400" />
              </div>
              <div>
                <div className="text-sm font-medium">5 Tasks</div>
                <div className="text-xs text-gray-400">Due Today</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gray-800/50">
            <h3 className="text-sm font-medium mb-2">Today's Focus</h3>
            <p className="text-sm text-gray-400">
              You have a presentation at 2:00 PM with the marketing team. I've prepared the slides based on last week's
              data and added the latest campaign results. Would you like me to review the key points with you?
            </p>
          </div>
        </div>
      </FuturisticCard>
    </motion.div>
  )
}
