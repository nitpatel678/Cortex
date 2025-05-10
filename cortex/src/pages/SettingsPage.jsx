import { SettingsForm } from "../components/settings/settings-form.jsx"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <SettingsForm />
    </div>
  )
}
