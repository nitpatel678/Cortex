
import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Menu, Search, X } from "lucide-react"
import { Button } from "../ui/button.jsx"
import { Input } from "../ui/input.jsx"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet.jsx"
import { Sidebar } from "./sidebar.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar.jsx"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu.jsx"

export function Header({ userName = "John Doe" }) {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-400">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 bg-transparent">
            <Sidebar />
          </SheetContent>
        </Sheet>

        <div className="ml-auto flex items-center gap-4">
          {showSearch ? (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative md:w-64 lg:w-80"
            >
              <Input placeholder="Search..." className="bg-gray-900/50 border-gray-700 pr-8" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1 text-gray-400"
                onClick={() => setShowSearch(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </motion.div>
          ) : (
            <Button variant="ghost" size="icon" className="text-gray-400" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                <DropdownMenuItem className="py-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">Meeting summary ready</p>
                    <p className="text-xs text-gray-500">Your weekly team meeting summary is ready to view</p>
                    <p className="text-xs text-gray-500">5 minutes ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">Research completed</p>
                    <p className="text-xs text-gray-500">Your research on "AI Trends 2025" is complete</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">Calendar update</p>
                    <p className="text-xs text-gray-500">New meeting scheduled for tomorrow at 2:00 PM</p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full overflow-hidden">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{userName}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
