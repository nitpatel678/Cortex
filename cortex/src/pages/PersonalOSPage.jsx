import { MorningSummary } from "../components/personal-os/morning-summary.jsx"
import { EmailPreview } from "../components/personal-os/email-preview.jsx"
import { CalendarView } from "../components/personal-os/calendar-view.jsx"
import { ArticleSummarizer } from "../components/personal-os/article-summarizer.jsx"
import { TripPlanner } from "../components/personal-os/trip-planner.jsx"

export default function PersonalOSPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Personal OS Agent</h1>

      <MorningSummary />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EmailPreview />
        <CalendarView />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ArticleSummarizer />
        <TripPlanner />
      </div>
    </div>
  )
}
