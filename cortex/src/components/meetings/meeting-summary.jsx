
import { motion } from "framer-motion"
import { CheckCircle, Clock, FileText, Mail, Users } from "lucide-react"
import { FuturisticCard } from "../ui-components/futuristic-card.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs.jsx"

export function MeetingSummary({ isVisible }) {
  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <FuturisticCard glowColor="purple">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-400" />
            <h2 className="font-semibold">Meeting Summary</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Clock className="h-3 w-3" />
            <span>45 minutes</span>
            <Users className="h-3 w-3 ml-2" />
            <span>5 participants</span>
          </div>
        </div>

        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="action-items">Action Items</TabsTrigger>
            <TabsTrigger value="transcript">Transcript</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Meeting Overview</h3>
              <p className="text-sm text-gray-300">
                The product team met to discuss the Q3 roadmap and feature prioritization. The team reviewed user
                feedback from the beta program and agreed on key features to implement in the next release cycle.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Key Discussion Points</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                <li>User feedback indicates strong demand for improved dashboard analytics</li>
                <li>The mobile app redesign will be prioritized for Q3</li>
                <li>Integration with third-party tools needs further investigation</li>
                <li>Performance optimization will be addressed in parallel with new features</li>
                <li>Marketing team will prepare for a feature announcement in August</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gray-800/50">
              <h3 className="text-sm font-medium mb-2">Decisions Made</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                <li>Approved budget increase for additional developer resources</li>
                <li>Agreed to postpone the API redesign until Q4</li>
                <li>Decided to form a dedicated team for the mobile app redesign</li>
                <li>Approved the new feature prioritization framework</li>
              </ul>
            </div>

            <GradientButton className="w-full">
              <Mail className="h-4 w-4 mr-2" />
              Send Recap Email
            </GradientButton>
          </TabsContent>

          <TabsContent value="action-items" className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-gray-800/50 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Create mobile app redesign team</div>
                  <div className="text-xs text-gray-400 mt-1">Assigned to: Sarah (Design Lead)</div>
                  <div className="text-xs text-gray-400">Due: Next Monday</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-gray-800/50 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Prepare dashboard analytics requirements</div>
                  <div className="text-xs text-gray-400 mt-1">Assigned to: Michael (Product Manager)</div>
                  <div className="text-xs text-gray-400">Due: This Friday</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-gray-800/50 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Research third-party integration options</div>
                  <div className="text-xs text-gray-400 mt-1">Assigned to: Alex (Engineering)</div>
                  <div className="text-xs text-gray-400">Due: Two weeks</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-gray-800/50 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Draft feature announcement plan</div>
                  <div className="text-xs text-gray-400 mt-1">Assigned to: Emma (Marketing)</div>
                  <div className="text-xs text-gray-400">Due: End of month</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-gray-800/50 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Update Q3 roadmap document</div>
                  <div className="text-xs text-gray-400 mt-1">Assigned to: John (You)</div>
                  <div className="text-xs text-gray-400">Due: Tomorrow</div>
                </div>
              </div>
            </div>

            <GradientButton className="w-full">
              <Mail className="h-4 w-4 mr-2" />
              Send Action Items
            </GradientButton>
          </TabsContent>

          <TabsContent value="transcript" className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-800/50 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-400">John (00:00)</div>
                  <p className="text-sm text-gray-300">
                    Good morning everyone. Let's get started with our product roadmap discussion for Q3. I'd like to
                    begin by reviewing the user feedback from our beta program.
                  </p>
                </div>

                <div>
                  <div className="text-xs text-gray-400">Sarah (00:45)</div>
                  <p className="text-sm text-gray-300">
                    Thanks John. We've collected feedback from over 200 beta users, and there are some clear patterns
                    emerging. The most requested feature is improved dashboard analytics, with 65% of users mentioning
                    this specifically.
                  </p>
                </div>

                <div>
                  <div className="text-xs text-gray-400">Michael (01:30)</div>
                  <p className="text-sm text-gray-300">
                    That aligns with what we've been hearing from our enterprise customers as well. They need better
                    visualization tools and more customization options.
                  </p>
                </div>

                <div>
                  <div className="text-xs text-gray-400">Alex (02:15)</div>
                  <p className="text-sm text-gray-300">
                    From an engineering perspective, we can implement the dashboard improvements in parallel with the
                    mobile app redesign. But we might need to push the API redesign to Q4.
                  </p>
                </div>

                <div>
                  <div className="text-xs text-gray-400">Emma (03:00)</div>
                  <p className="text-sm text-gray-300">
                    Marketing would like to know which features we can announce in August. We're planning a major
                    campaign and need to highlight our most impressive new capabilities.
                  </p>
                </div>

                <div>
                  <div className="text-xs text-gray-400">John (03:45)</div>
                  <p className="text-sm text-gray-300">
                    Let's prioritize the dashboard analytics and mobile redesign for Q3. We should also discuss the
                    budget implications of these priorities.
                  </p>
                </div>

                <div className="text-xs text-gray-400 italic">[Transcript continues for 45 minutes...]</div>
              </div>
            </div>

            <GradientButton className="w-full">
              <FileText className="h-4 w-4 mr-2" />
              Download Full Transcript
            </GradientButton>
          </TabsContent>
        </Tabs>
      </FuturisticCard>
    </motion.div>
  )
}
