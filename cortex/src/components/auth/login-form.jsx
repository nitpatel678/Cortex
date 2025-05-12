
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { GithubIcon, Loader2, LogInIcon, MailIcon } from "lucide-react"
import { Button } from "../ui/button.jsx"
import { Input } from "../ui/input.jsx"
import { Label } from "../ui/label.jsx"
import { GlassPanel } from "../ui-components/glass-panel.jsx"
import { GradientText } from "../ui-components/gradient-text.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      navigate("/dashboard")
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <GlassPanel className="w-full">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold font-outfit">
              <GradientText>Welcome Back</GradientText>
            </h1>
            <p className="text-muted-foreground font-poppins">Sign in to your AI productivity platform</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-ubuntu">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                required
                className="bg-background/50 border-white/10"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="font-ubuntu">Password</Label>
                <a href="#" className="text-xs text-blue-400 hover:text-blue-300">
                  Forgot password?
                </a>
              </div>
              <Input id="password" type="password" required className="bg-background/50 border-white/10" />
            </div>

            <Button
              type="submit"
              className="w-full font-outfit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogInIcon className="mr-2 h-4 w-4" />
                  Sign In
                </>
              )}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground font-poppins">Or continue with</span>
            </div>
          </div>

          <div className="flex gap-2">
            <GradientButton variant="outline" className="w-full font-poppins" onClick={() => navigate("/dashboard")}>
              <MailIcon className="h-4 w-4 mr-2" />
              Google
            </GradientButton>
          </div>

          <div className="text-center text-sm font-poppins">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
