import { useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar.jsx"

export function Header({ userName = "John Doe" }) {
  const navigate = useNavigate()

  

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md relative">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 relative">
        <div className="ml-auto flex items-center gap-4 relative">
          <button  className="rounded-full overflow-hidden">
            <Avatar>
              <AvatarImage src="https://i.insider.com/5f21bd427924a1372e6e229b?width=1200&format=jpeg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>
    </header>
  )
}
