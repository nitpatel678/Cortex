
import { useState } from "react"
import { MeetingUpload } from "../components/meetings/meeting-upload.jsx"
import { MeetingSummary } from "../components/meetings/meeting-summary.jsx"
import { PastMeetings } from "../components/meetings/past-meetings.jsx"

export default function MeetingsPage() {
  const [showSummary, setShowSummary] = useState(false)

  const handleProcessMeeting = () => {
    setShowSummary(true)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Meeting Whisperer</h1>

      <MeetingUpload onProcessMeeting={handleProcessMeeting} />

      <MeetingSummary isVisible={showSummary} />

      <PastMeetings isVisible={true} />
    </div>
  )
}
