
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { GithubIcon, Loader2, MailIcon, UserPlus } from "lucide-react"
import { Button } from "../ui/button.jsx"
import { Input } from "../ui/input.jsx"
import { Label } from "../ui/label.jsx"
import { GlassPanel } from "../ui-components/glass-panel.jsx"
import { GradientText } from "../ui-components/gradient-text.jsx"
import { GradientButton } from "../ui-components/gradient-button.jsx"

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration
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
            <h1 className="text-3xl font-bold">
              <GradientText gradient="cyan-blue">Create Account</GradientText>
            </h1>
            <p className="text-muted-foreground">Sign up for your AI productivity platform</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required className="bg-background/50 border-white/10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                required
                className="bg-background/50 border-white/10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required className="bg-background/50 border-white/10" />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create Account
                </>
              )}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="flex gap-2">
            <GradientButton variant="outline" className="w-full" onClick={() => navigate("/dashboard")}>
              <GithubIcon className="h-4 w-4 mr-2" />
              GitHub
            </GradientButton>
            <GradientButton variant="outline" className="w-full" onClick={() => navigate("/dashboard")}>
              <MailIcon className="h-4 w-4 mr-2" />
              Google
            </GradientButton>
          </div>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:text-blue-300">
              Sign in
            </Link>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
