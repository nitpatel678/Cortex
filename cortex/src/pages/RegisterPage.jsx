import { RegisterForm } from "../components/auth/register-form.jsx"
import { AnimatedGradientBackground } from "../components/ui-components/animated-gradient-background.jsx"

export default function RegisterPage() {
  return (
    <AnimatedGradientBackground className="min-h-screen flex items-center justify-center p-4">
      <RegisterForm />
    </AnimatedGradientBackground>
  )
}
