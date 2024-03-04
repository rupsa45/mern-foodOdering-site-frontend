import { useAuth0 } from "@auth0/auth0-react"
import { useLocation } from "react-router-dom"
import { Button } from "./ui/button";
import LoadingButtun from "./LoadingButton/LoadingBottun";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, { UserFormData } from "@/form/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

type Props={
    onCheckout : (userFormData: UserFormData)=>void;
    disabled : boolean;
    isLoading:boolean;
}


const CheckoutButton = ({onCheckout,disabled,isLoading}:Props) => {
    const {
        isAuthenticated,
        isLoading: isAuthLoading,
        loginWithRedirect
    }= useAuth0()
    const { pathname } =useLocation();

    const { currentUser,isLoading: isGetUserLoading } =useGetMyUser()

    // /details/54848468654854886huhu
    const onLogin =async()=>{
        await loginWithRedirect ({
            appState:{
                returnTo:pathname
            }
        })
    } 
    
    if (!isAuthenticated){
        return <Button
        onClick={onLogin}
         className="bg-purple-500 flex-1"
        >Log in Check out </Button>
    }
    if(isAuthLoading || !currentUser || isLoading){
        return <LoadingButtun/>
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button  disabled={disabled} className='bg-purple-600 flex-1'> Go to Checkout</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
                <UserProfileForm 
                   currentUser={currentUser} 
                   onSave={onCheckout}
                   isLoading={isGetUserLoading}
                   title="Please confirm your information before proceeding."
                   buttontext="continue to payment"
                />
            </DialogContent>
        </Dialog>
    )
}

export default CheckoutButton
