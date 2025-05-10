
import { motion } from "framer-motion"
import { Calendar, Clock, FileText, Search, Users } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { Input } from "../ui/input.jsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select.jsx"

const pastMeetings = [
  {
    id: 1,
    title: "Weekly Team Sync",
    date: "May 5, 2023",
    duration: "45 minutes",
    participants: 8,
    tags: ["Team", "Weekly"],
  },
  {
    id: 2,
    title: "Product Roadmap Planning",
    date: "May 3, 2023",
    duration: "60 minutes",
    participants: 5,
    tags: ["Product", "Planning"],
  },
  {
    id: 3,
    title: "Client Onboarding: Acme Inc",
    date: "April 28, 2023",
    duration: "30 minutes",
    participants: 4,
    tags: ["Client", "Onboarding"],
  },
  {
    id: 4,
    title: "Marketing Campaign Review",
    date: "April 25, 2023",
    duration: "45 minutes",
    participants: 6,
    tags: ["Marketing", "Review"],
  },
  {
    id: 5,
    title: "Engineering Sprint Planning",
    date: "April 21, 2023",
    duration: "60 minutes",
    participants: 10,
    tags: ["Engineering", "Sprint"],
  },
]

export function PastMeetings({ isVisible }) {
  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <FuturisticCard glowColor="cyan">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-cyan-400" />
            <h2 className="font-semibold">Past Meetings</h2>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <Input
              placeholder="Search meetings..."
              className="bg-gray-800/50 border-gray-700"
              prefix={<Search className="h-4 w-4 text-gray-400" />}
            />
          </div>
          <div className="w-40">
            <Select defaultValue="all">
              <SelectTrigger className="bg-gray-800/50 border-gray-700">
                <SelectValue placeholder="Filter by tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tags</SelectItem>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="client">Client</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          {pastMeetings.map((meeting) => (
            <div
              key={meeting.id}
              className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-1">
                <div className="font-medium text-sm">{meeting.title}</div>
                <div className="text-xs text-gray-400">{meeting.date}</div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{meeting.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{meeting.participants} participants</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  <span>Summary available</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {meeting.tags.map((tag, index) => (
                  <div key={index} className="px-2 py-0.5 text-xs rounded-full bg-gray-700 text-gray-300">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FuturisticCard>
    </motion.div>
  )
}
