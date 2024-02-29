import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateRestaurant } from "@/api/MyRestaurantApi"
import ManageRestaurantForm from "@/form/manage-restaurant-form/ManageRestaurantForm"


const ManageRestaurantPage = () => {
  const { createRestaurant,isLoading : isCreateLoading} = useCreateMyRestaurant()
  const {restaurant}=useGetMyRestaurant()
  const {updateRestaurant,
    isLoading: isUpdateLoading }=useUpdateRestaurant()

    const isEditing = !!restaurant

  return (
    <ManageRestaurantForm 
      restuarant ={restaurant}
      onSave={isEditing ?updateRestaurant: createRestaurant}  
      isLoading={ isCreateLoading || isUpdateLoading}
    />
  )
}

export default ManageRestaurantPage
