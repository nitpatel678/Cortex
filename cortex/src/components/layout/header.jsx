import { useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar.jsx"

export function Header({ userName = "John Doe" }) {
  const navigate = useNavigate()

  const handleAvatarClick = () => {
    navigate("/profile") // Redirect to profile page
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md relative">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 relative">
        <div className="ml-auto flex items-center gap-4 relative">
          <button onClick={handleAvatarClick} className="rounded-full overflow-hidden">
            <Avatar>
              <AvatarImage src="https://www.deviantart.com/zelrom/art/Mia-Kalifa-png-930326678" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>
    </header>
  )
}
