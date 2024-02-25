import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/form/user-profile-form/UserProfileForm"


const UserProfilePage = () => {
  const {currentUser,isLoading: isGetLoading}=useGetMyUser();
  const {updateUser,isLoading : isUpadateLoading}=useUpdateMyUser();
  if(isGetLoading) return <div>loading...</div>;

  if(!currentUser){
    return <span>Unable to load user profile </span>
  }
  
  return <UserProfileForm
    currentUser={currentUser}
   onSave={updateUser} 
   isLoading={isUpadateLoading}/>
  
}

export default UserProfilePage
