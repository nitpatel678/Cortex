
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"

export function AgentCard({ title, description, icon, href, glowColor = "blue" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <FuturisticCard glowColor={glowColor} className="h-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-gray-800/50">{icon}</div>
          <h2 className="font-semibold">{title}</h2>
        </div>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Link to={href}>
          <GradientButton className="w-full">
            Open Agent
            <ArrowRight className="ml-2 h-4 w-4" />
          </GradientButton>
        </Link>
      </FuturisticCard>
    </motion.div>
  )
}
