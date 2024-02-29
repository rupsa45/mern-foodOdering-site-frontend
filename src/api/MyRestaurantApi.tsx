import { Restaurant } from "@/type";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurant = ()=>{
    const { getAccessTokenSilently } =useAuth0()

    const getMyRestaurantRequest = async(): Promise<Restaurant>=>{
        const accessToken=await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/v2/my/restaurant`,{
            method:"GET",
            headers:{
                "Authorization":  `Bearer ${accessToken}`
            }
        })
        if(!response.ok){
            throw new Error ("Failed to get restuarant")
        }
        return response.json();
    }
    const {
        data:restaurant,
        isLoading
    }=useQuery("fetchMyRestaurant",getMyRestaurantRequest)

    return {
        restaurant,isLoading
    }
}


export const useCreateMyRestaurant= () =>{
    const { getAccessTokenSilently } =useAuth0();

    const createMyRestaurantRequest=async(restuarantFormData : FormData) : Promise<Restaurant> =>{
        const accessToken=await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/v2/my/restaurant`,{
            method: "POST",
            headers:{
                Authorization: `Bearer ${accessToken}`,
            },
            body:restuarantFormData,
        })
        if(!response.ok){
            throw new Error("Could not create restaurant");
        }
        return response.json();
    };

    const {
        mutate: createRestaurant,
        isLoading,
        isSuccess,
        error
    }=useMutation(createMyRestaurantRequest)

    if(isSuccess){
        toast.success("Restaurant created!")
    }
    if(error){
        toast.error("Error creating restaurant");
    }
    return {
        createRestaurant,isLoading
    }
}

export const useUpdateRestaurant=()=>{
    const {getAccessTokenSilently} =useAuth0();

    const updateRestaurantRequest=async(restaurantFormData : FormData):Promise<Restaurant>=>{
        const accessToken= await getAccessTokenSilently();
        const response =  await fetch(`${API_BASE_URL}/api/v2/my/restaurant`,{
            method:"PUT",
            headers:{
                Authorization : `Bearer ${accessToken}`
            },
            body:restaurantFormData,
        })
        if(!response.ok){
            throw new Error ("Failed to update restaurant")
        }
        return response.json();
    }
    const {
        mutate:updateRestaurant,
        isLoading,error,
        isSuccess
    }=useMutation(updateRestaurantRequest)
    if(isSuccess){
        toast.success("Restaurant updated!");
    }
    if(error){
        toast.error("Unable to  update restaurant");
    }
    return {
        updateRestaurant,
        isLoading
    }
}