
import { useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Brain,
  Calendar,
  ChevronLeft,
  ChevronRight,
  FileSearch,
  Home,
  LogOut,
  MessageSquare,
  Settings,
  User,
} from "lucide-react"
import { cn } from "../../lib/utils.js"
import { GradientText } from "../ui-components/gradient-text.jsx"

export function Sidebar({ className }) {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Personal OS",
      href: "/personal-os",
      icon: User,
    },
    {
      name: "Research Assistant",
      href: "/research",
      icon: FileSearch,
    },
    {
      name: "Meeting Whisperer",
      href: "/meetings",
      icon: MessageSquare,
    },
    {
      name: "Calendar",
      href: "/calendar",
      icon: Calendar,
    }
  ]

  return (
    <motion.div
      initial={{ width: collapsed ? 80 : 280 }}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn("h-screen bg-black/20 backdrop-blur-md border-r border-white/10 flex flex-col", className)}
    >
      <div className="p-4 flex items-center justify-between border-b border-white/10">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <Brain className="h-6 w-6 text-blue-400" />
            <h1 className="text-xl font-extrabold font-montserrat tracking-widest">
              <GradientText>Cortex</GradientText>
            </h1>
          </motion.div>
        )}
        {collapsed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto">
            <Brain className="h-6 w-6 text-blue-400" />
          </motion.div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <div className="flex-1 py-8 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  isActive ? "bg-blue-600/20 text-blue-400" : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-300",
                )}
              >
                <item.icon className={cn("h-5 w-5 flex-shrink-0")} />
                {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
                {isActive && !collapsed && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-white/10">
        <Link
          to="/login"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
            "text-gray-400 hover:bg-gray-800/50 hover:text-gray-300",
          )}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </Link>
      </div>
    </motion.div>
  )
}
