
import { motion } from "framer-motion"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"

export function SummaryCard({ title, icon, children, glowColor = "blue" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <FuturisticCard glowColor={glowColor} className="h-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-gray-800/50">{icon}</div>
          <h2 className="font-semibold">{title}</h2>
        </div>
        <div>{children}</div>
      </FuturisticCard>
    </motion.div>
  )
}
