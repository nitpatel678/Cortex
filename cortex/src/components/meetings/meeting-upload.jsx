
import { useState } from "react"
import { motion } from "framer-motion"
import { FileUp, Link2, Loader2, MessageSquare, Upload } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"
import { Input } from "../ui/input.jsx"
import { Label } from "../ui/label.jsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs.jsx"

export function MeetingUpload({ onProcessMeeting }) {
  const [isLoading, setIsLoading] = useState(false)
  const [uploadMethod, setUploadMethod] = useState("file")
  const [meetingPlatform, setMeetingPlatform] = useState("")
  const [meetingLink, setMeetingLink] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onProcessMeeting()
    }, 2000)
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <FuturisticCard>
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="h-5 w-5 text-blue-400" />
          <h2 className="font-semibold">Meeting Whisperer</h2>
        </div>

        <Tabs defaultValue="file" value={uploadMethod} onValueChange={setUploadMethod} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="file">Upload Audio</TabsTrigger>
            <TabsTrigger value="link">Connect Meeting</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit}>
            <TabsContent value="file" className="space-y-4">
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                <FileUp className="h-12 w-12 mx-auto text-gray-500 mb-2" />
                <div className="text-sm font-medium mb-2">Drag and drop audio file or</div>
                <Input type="file" accept="audio/*" className="hidden" id="file-upload" onChange={handleFileChange} />
                <Label
                  htmlFor="file-upload"
                  className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer text-sm inline-block"
                >
                  Browse Files
                </Label>
                {selectedFile && <div className="mt-4 text-sm text-gray-400">Selected: {selectedFile.name}</div>}
              </div>

              <GradientButton type="submit" disabled={isLoading || !selectedFile} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Processing Audio
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Process Meeting
                  </>
                )}
              </GradientButton>
            </TabsContent>

            <TabsContent value="link" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="platform">Meeting Platform</Label>
                <Select value={meetingPlatform} onValueChange={setMeetingPlatform}>
                  <SelectTrigger id="platform" className="bg-gray-800/50 border-gray-700">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zoom">Zoom</SelectItem>
                    <SelectItem value="gmeet">Google Meet</SelectItem>
                    <SelectItem value="teams">Microsoft Teams</SelectItem>
                    <SelectItem value="webex">Cisco Webex</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meeting-link">Meeting Link or ID</Label>
                <Input
                  id="meeting-link"
                  value={meetingLink}
                  onChange={(e) => setMeetingLink(e.target.value)}
                  placeholder="https://zoom.us/j/123456789 or meeting ID"
                  className="bg-gray-800/50 border-gray-700"
                />
              </div>

              <GradientButton type="submit" disabled={isLoading || !meetingPlatform || !meetingLink} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Connecting
                  </>
                ) : (
                  <>
                    <Link2 className="h-4 w-4 mr-2" />
                    Connect to Meeting
                  </>
                )}
              </GradientButton>
            </TabsContent>
          </form>
        </Tabs>
      </FuturisticCard>
    </motion.div>
  )
}
