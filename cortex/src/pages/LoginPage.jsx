import { LoginForm } from "../components/auth/login-form.jsx"
import { AnimatedGradientBackground } from "../components/ui-components/animated-gradient-background.jsx"

export default function LoginPage() {
  return (
    <AnimatedGradientBackground className="min-h-screen flex items-center justify-center p-4">
      <LoginForm />
    </AnimatedGradientBackground>
  )
}
