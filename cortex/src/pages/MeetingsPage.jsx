import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Calendar, CheckCircle, Clock, FileText, Headphones, MessageSquare, Mic, Users } from "lucide-react"
import { FuturisticCard } from "../components/ui-components/futuristic-card.jsx"
import { GlassPanel } from "../components/ui-components/glass-panel.jsx"
import { GradientButton } from "../components/ui-components/gradient-button.jsx"
import { GradientText } from "../components/ui-components/gradient-text.jsx"
import { Input } from "../components/ui/input.jsx"

export default function MeetingsPage() {
  const [email, setEmail] = useState("")
  const [notified, setNotified] = useState(false)

  const handleNotifyMe = (e) => {
    e.preventDefault()
    if (email) {
      setNotified(true)
      // In a real app, you would send this to your backend
      console.log("Notify email:", email)
      setTimeout(() => setNotified(false), 3000)
    }
  }

  // Features that will be available
  const upcomingFeatures = [
    {
      title: "Meeting Transcription",
      description: "Automatic transcription of all your meetings with speaker identification",
      icon: <Mic className="h-5 w-5 text-cyan-400" />,
      progress: 60,
    },
    {
      title: "AI Summaries",
      description: "Get concise summaries of your meetings with key points highlighted",
      icon: <FileText className="h-5 w-5 text-purple-400" />,
      progress: 45,
    },
    {
      title: "Action Item Extraction",
      description: "Automatically extract action items and assign them to team members",
      icon: <CheckCircle className="h-5 w-5 text-green-400" />,
      progress: 35,
    },
    {
      title: "Calendar Integration",
      description: "Seamless integration with your calendar for scheduling and reminders",
      icon: <Calendar className="h-5 w-5 text-blue-400" />,
      progress: 72,
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center font-outfit">
        <MessageSquare className="mr-2 h-6 w-6 text-cyan-400" />
        Meeting Whisperer
      </h1>

      {/* Hero section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <GlassPanel className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-outfit">
                <GradientText gradient="cyan-blue">Coming Soon</GradientText>
              </h2>
              <p className="text-gray-300 mb-6 font-ubuntu">
                We're building a powerful AI meeting assistant that will transcribe, summarize, and extract action items
                from your meetings. Never miss an important detail again!
              </p>

              {notified ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-green-400 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Thanks! We'll notify you when this feature launches.</span>
                </div>
              ) : (
                <form onSubmit={handleNotifyMe} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800/50 border-gray-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <GradientButton type="submit">
                    <Bell className="h-4 w-4 font-poppins" />
                    Notify Me
                  </GradientButton>
                </form>
              )}
            </div>

            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full animate-pulse" />
                <div
                  className="absolute inset-4 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <Headphones className="h-24 w-24 text-cyan-400 relative z-10" />
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Features preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upcomingFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <FuturisticCard glowColor={index % 2 === 0 ? "cyan" : "purple"}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gray-800/50">{feature.icon}</div>
                <h3 className="font-semibold font-poppins">{feature.title}</h3>
              </div>

              <p className="text-gray-400 text-sm mb-4 font-ubuntu">{feature.description}</p>

              <div className="w-full bg-gray-800/50 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${index % 2 === 0 ? "bg-cyan-500" : "bg-purple-500"}`}
                  style={{ width: `${feature.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>Development Progress</span>
                <span>{feature.progress}%</span>
              </div>
            </FuturisticCard>
          </motion.div>
        ))}
      </div>

      {/* Preview mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <FuturisticCard>
          <h3 className="text-lg font-semibold mb-4 flex items-center font-poppins">
            <FileText className="h-5 w-5 mr-2 text-cyan-400" />
            Preview: Meeting Summary
          </h3>

          <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 mb-4">
            <div className="flex justify-between items-center mb-3">
              <div className="font-medium font-poppins">Product Roadmap Discussion</div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock className="h-3 w-3" />
                <span>45 minutes</span>
                <Users className="h-3 w-3 ml-2" />
                <span>5 participants</span>
              </div>
            </div>

            <div className="space-y-3 opacity-60">
              <div className="p-3 rounded-lg bg-gray-800/50">
                <h4 className="text-sm font-medium mb-2">Key Discussion Points</h4>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 blur-[1px]">
                  <li>User feedback indicates strong demand for improved dashboard analytics</li>
                  <li>The mobile app redesign will be prioritized for Q3</li>
                  <li>Integration with third-party tools needs further investigation</li>
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-gray-800/50">
                <h4 className="text-sm font-medium mb-2">Action Items</h4>
                <div className="space-y-2 blur-[1px]">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div className="text-sm">Create mobile app redesign team (Sarah)</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div className="text-sm">Prepare dashboard analytics requirements (Michael)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-medium text-white font-poppins">
                Coming Soon
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400 font-ubuntu">
            Our AI will automatically generate comprehensive meeting summaries, extract action items, and help you stay
            on top of your commitments.
          </div>
        </FuturisticCard>
      </motion.div>
    </div>
  )
}
