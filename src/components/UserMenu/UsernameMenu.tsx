import { CircleUserRound } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"


const UsernameMenu = () => {
const {user,logout} =useAuth0()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-purple-500 gap-2">
        <CircleUserRound className="text-purple-500"/>
        {user?.nickname}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
        <Link 
         to='/manage-restaurant'
         className="font-bold  hover:text-purple-600"
        >
          Manage Restaurant
        </Link> 
        </DropdownMenuItem>
        <DropdownMenuItem>
        <Link 
         to='/user-profile'
         className="font-bold  hover:text-purple-600"
        >
          View Profile
        </Link> 
        </DropdownMenuItem>
        <Separator/>
        <DropdownMenuItem>
            <Button 
               onClick={()=>logout()} 
               className="flex flex-1 font-bold bg-purple-600"
            >
                Logout
            </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu
