
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"

const meetings = [
  {
    id: 1,
    title: "Weekly Team Sync",
    time: "10:00 AM - 11:00 AM",
    participants: ["Sarah", "Mike", "Alex", "Emma"],
    location: "Conference Room A",
    conflict: false,
  },
  {
    id: 2,
    title: "Product Review",
    time: "1:30 PM - 2:30 PM",
    participants: ["Product Team", "Design Team"],
    location: "Zoom Meeting",
    conflict: false,
  },
  {
    id: 3,
    title: "Client Call: Acme Inc",
    time: "4:00 PM - 4:30 PM",
    participants: ["John", "Client Team"],
    location: "Phone Call",
    conflict: true,
    conflictWith: "Marketing Strategy Session",
  },
]

export function CalendarView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <FuturisticCard glowColor="cyan">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-cyan-400" />
          <h2 className="font-semibold">Today's Calendar</h2>
        </div>

        <div className="space-y-3">
          {meetings.map((meeting) => (
            <div
              key={meeting.id}
              className={`p-3 rounded-lg ${
                meeting.conflict ? "bg-red-900/20 border border-red-500/30" : "bg-gray-800/50"
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <div className="font-medium text-sm">{meeting.title}</div>
                {meeting.conflict && <div className="text-xs text-red-400 font-medium">Conflict</div>}
              </div>
              <div className="flex items-center text-xs text-gray-400 mb-1">
                <Clock className="h-3 w-3 mr-1" />
                {meeting.time}
              </div>
              <div className="text-xs text-gray-400 mb-1">Location: {meeting.location}</div>
              <div className="flex flex-wrap gap-1 mt-2">
                {meeting.participants.map((participant, index) => (
                  <div key={index} className="px-2 py-0.5 text-xs rounded-full bg-gray-700 text-gray-300">
                    {participant}
                  </div>
                ))}
              </div>

              {meeting.conflict && (
                <div className="mt-2 text-xs text-red-400">Conflicts with: {meeting.conflictWith}</div>
              )}
            </div>
          ))}
        </div>
      </FuturisticCard>
    </motion.div>
  )
}
