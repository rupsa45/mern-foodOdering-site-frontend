import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "../ui/button"
import UsernameMenu from "../UserMenu/UsernameMenu"
import { Link } from "react-router-dom"


const DesktopNav = () => {
    const {loginWithRedirect,isAuthenticated} =useAuth0()
    return (
        <span className="flex space-x-2 items-center">{
            isAuthenticated ?(
                <>
                <Link to="/order-status"  className='hover:text-purple-600 font-serif font-bold '>
                    Order Status
                </Link>
                <UsernameMenu/>
                </>
                ) : 
            <Button 
                variant="ghost"
                className="font-bold hover:text-purple-500 hover:bg-white"
                onClick={async()=>await  loginWithRedirect()}
            >
               Login
            </Button>
        }</span>
        
    )
}

export default DesktopNav
