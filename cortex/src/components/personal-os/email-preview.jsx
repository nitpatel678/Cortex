
import { useState } from "react"
import { motion } from "framer-motion"
import { Archive, Mail, Reply, Star, Trash } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"

const emails = [
  {
    id: 1,
    sender: "Sarah Johnson",
    email: "sarah.j@example.com",
    subject: "Project Update: Q3 Marketing Campaign",
    preview:
      "Hi John, I wanted to share the latest updates on our Q3 marketing campaign. We've seen a 25% increase in...",
    time: "10:23 AM",
    read: false,
  },
  {
    id: 2,
    sender: "Michael Chen",
    email: "m.chen@example.com",
    subject: "Meeting Agenda for Tomorrow",
    preview:
      "Here's the agenda for tomorrow's product review meeting. Please let me know if you'd like to add anything to the...",
    time: "Yesterday",
    read: false,
  },
  {
    id: 3,
    sender: "Finance Team",
    email: "finance@example.com",
    subject: "Quarterly Budget Report",
    preview: "Attached is the quarterly budget report for your department. Please review and approve by Friday...",
    time: "Yesterday",
    read: true,
  },
]

export function EmailPreview() {
  const [selectedEmail, setSelectedEmail] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <FuturisticCard glowColor="purple">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="h-5 w-5 text-purple-400" />
          <h2 className="font-semibold">Email Inbox</h2>
        </div>

        <div className="space-y-3">
          {emails.map((email) => (
            <div
              key={email.id}
              className={`p-3 rounded-lg ${
                email.read ? "bg-gray-800/30" : "bg-gray-800/50"
              } cursor-pointer transition-all hover:bg-gray-700/50`}
              onClick={() => setSelectedEmail(email.id === selectedEmail ? null : email.id)}
            >
              <div className="flex justify-between items-start mb-1">
                <div className="font-medium text-sm flex items-center gap-2">
                  {!email.read && <div className="w-2 h-2 rounded-full bg-purple-400" />}
                  {email.sender}
                </div>
                <div className="text-xs text-gray-400">{email.time}</div>
              </div>
              <div className="text-sm font-medium mb-1">{email.subject}</div>
              <div className="text-xs text-gray-400 line-clamp-1">{email.preview}</div>

              {selectedEmail === email.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 pt-3 border-t border-gray-700"
                >
                  <div className="text-xs text-gray-300 mb-3">
                    <p>
                      From: {email.sender} &lt;{email.email}&gt;
                    </p>
                    <p>To: John Doe &lt;john.doe@example.com&gt;</p>
                    <p>Subject: {email.subject}</p>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    {email.preview} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="flex gap-2">
                    <GradientButton size="sm" variant="outline" className="flex-1">
                      <Reply className="h-3 w-3 mr-1" />
                      Reply
                    </GradientButton>
                    <GradientButton size="sm" variant="outline">
                      <Archive className="h-3 w-3" />
                    </GradientButton>
                    <GradientButton size="sm" variant="outline">
                      <Star className="h-3 w-3" />
                    </GradientButton>
                    <GradientButton size="sm" variant="outline">
                      <Trash className="h-3 w-3" />
                    </GradientButton>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </FuturisticCard>
    </motion.div>
  )
}
