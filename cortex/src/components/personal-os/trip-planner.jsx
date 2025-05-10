
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Loader2, MapPin, Plane } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"
import { Textarea } from "../ui/textarea.jsx"
import { Checkbox } from "../ui/checkbox.jsx"

export function TripPlanner() {
  const [tripDescription, setTripDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [checklist, setChecklist] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setChecklist([
        { id: "1", text: "Book flight to San Francisco", checked: false },
        { id: "2", text: "Reserve hotel in downtown area", checked: false },
        { id: "3", text: "Rent car for day trips", checked: false },
        { id: "4", text: "Research Golden Gate Park activities", checked: false },
        { id: "5", text: "Make dinner reservations", checked: false },
        { id: "6", text: "Check weather forecast", checked: false },
        { id: "7", text: "Pack appropriate clothing", checked: false },
        { id: "8", text: "Notify bank of travel plans", checked: false },
        { id: "9", text: "Download offline maps", checked: false },
        { id: "10", text: "Charge camera and devices", checked: false },
      ])
    }, 2000)
  }

  const toggleChecklist = (id) => {
    setChecklist(checklist.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <FuturisticCard glowColor="blue">
        <div className="flex items-center gap-2 mb-4">
          <Plane className="h-5 w-5 text-blue-400" />
          <h2 className="font-semibold">Trip Planner</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Describe your trip</label>
            <Textarea
              value={tripDescription}
              onChange={(e) => setTripDescription(e.target.value)}
              placeholder="I'm planning a 5-day trip to San Francisco in July..."
              className="min-h-[100px] bg-gray-800/50 border-gray-700"
            />
          </div>

          <GradientButton type="submit" disabled={isLoading || !tripDescription} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Generating Checklist
              </>
            ) : (
              <>
                <MapPin className="h-4 w-4 mr-2" />
                Plan My Trip
              </>
            )}
          </GradientButton>
        </form>

        {checklist.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700"
          >
            <h3 className="text-sm font-medium mb-2">Trip Checklist</h3>
            <div className="space-y-2">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <Checkbox
                    id={`item-${item.id}`}
                    checked={item.checked}
                    onCheckedChange={() => toggleChecklist(item.id)}
                  />
                  <label
                    htmlFor={`item-${item.id}`}
                    className={`text-sm cursor-pointer flex-1 ${
                      item.checked ? "line-through text-gray-500" : "text-gray-300"
                    }`}
                  >
                    {item.text}
                  </label>
                  {item.checked && <Check className="h-4 w-4 text-green-500" />}
                </div>
              ))}
            </div>
            <div className="mt-2 text-xs text-gray-400">
              {checklist.filter((item) => item.checked).length} of {checklist.length} tasks completed
            </div>
          </motion.div>
        )}
      </FuturisticCard>
    </motion.div>
  )
}
