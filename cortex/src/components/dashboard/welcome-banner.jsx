
import { motion } from "framer-motion"
import { GradientText } from "../ui-components/gradient-text.jsx"
import { GlassPanel } from "../ui-components/glass-panel.jsx"

export function WelcomeBanner({ userName }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <GlassPanel className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Welcome back, <GradientText>{userName}</GradientText>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Your AI productivity suite is ready to help you organize your day, research topics, and manage your
            meetings. What would you like to accomplish today?
          </p>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
