
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Loader2, Save } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"
import { Input } from "../ui/input.jsx"
import { Label } from "../ui/label.jsx"
import { Switch } from "../ui/switch.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs.jsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select.jsx"

export function SettingsForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSaved(true)

      setTimeout(() => {
        setIsSaved(false)
      }, 3000)
    }, 1500)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <FuturisticCard>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="ai">AI Settings</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit}>
            <TabsContent value="profile" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" className="bg-gray-800/50 border-gray-700" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="bg-gray-800/50 border-gray-700"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc-8">
                  <SelectTrigger id="timezone" className="bg-gray-800/50 border-gray-700">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                    <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="utc+0">UTC</SelectItem>
                    <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                    <SelectItem value="utc+8">China Standard Time (UTC+8)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select defaultValue="dark">
                  <SelectTrigger id="theme" className="bg-gray-800/50 border-gray-700">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                    <SelectItem value="futuristic">Futuristic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accent-color">Accent Color</Label>
                <Select defaultValue="blue">
                  <SelectTrigger id="accent-color" className="bg-gray-800/50 border-gray-700">
                    <SelectValue placeholder="Select accent color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="purple">Purple</SelectItem>
                    <SelectItem value="cyan">Cyan</SelectItem>
                    <SelectItem value="pink">Pink</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="animations">Enable Animations</Label>
                <Switch id="animations" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="blur-effects">Blur Effects</Label>
                <Switch id="blur-effects" defaultChecked />
              </div>
            </TabsContent>

            <TabsContent value="connections" className="space-y-4">
              <div className="p-3 rounded-lg bg-gray-800/50 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Google Calendar</div>
                  <div className="text-xs text-gray-400">Connected as john.doe@gmail.com</div>
                </div>
                <GradientButton size="sm" variant="outline">
                  Disconnect
                </GradientButton>
              </div>

              <div className="p-3 rounded-lg bg-gray-800/50 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Gmail</div>
                  <div className="text-xs text-gray-400">Connected as john.doe@gmail.com</div>
                </div>
                <GradientButton size="sm" variant="outline">
                  Disconnect
                </GradientButton>
              </div>

              <div className="p-3 rounded-lg bg-gray-800/50 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Zoom</div>
                  <div className="text-xs text-gray-400">Not connected</div>
                </div>
                <GradientButton size="sm">Connect</GradientButton>
              </div>

              <div className="p-3 rounded-lg bg-gray-800/50 flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Microsoft Teams</div>
                  <div className="text-xs text-gray-400">Not connected</div>
                </div>
                <GradientButton size="sm">Connect</GradientButton>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ai-model">Default AI Model</Label>
                <Select defaultValue="gpt4">
                  <SelectTrigger id="ai-model" className="bg-gray-800/50 border-gray-700">
                    <SelectValue placeholder="Select AI model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt4">GPT-4</SelectItem>
                    <SelectItem value="gpt35">GPT-3.5</SelectItem>
                    <SelectItem value="claude">Claude</SelectItem>
                    <SelectItem value="llama">Llama</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="memory">Enable Agent Memory</Label>
                <Switch id="memory" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="proactive">Proactive Suggestions</Label>
                <Switch id="proactive" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="data-collection">Data Collection for Training</Label>
                <Switch id="data-collection" />
              </div>

              <div className="p-3 rounded-lg bg-gray-800/50">
                <div className="font-medium text-sm mb-1">Data Privacy</div>
                <div className="text-xs text-gray-400">
                  Your data is processed locally when possible. When cloud processing is required, data is encrypted and
                  not stored longer than necessary for the requested operation.
                </div>
              </div>
            </TabsContent>

            <div className="mt-6 flex justify-end">
              <GradientButton type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Saving...
                  </>
                ) : isSaved ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Saved
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </>
                )}
              </GradientButton>
            </div>
          </form>
        </Tabs>
      </FuturisticCard>
    </motion.div>
  )
}
