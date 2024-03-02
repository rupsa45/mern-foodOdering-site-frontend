import { SearchState } from "@/pages/SearchPage";
import { RestaurantSearchResponse } from "@/type";
import { useQuery } from "react-query";

const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants=(searchState: SearchState,city?:string)=>{
    const params = new URLSearchParams();
    params.set("searchQuery",searchState.searchQuery)
    params.set("page",searchState.page.toString())
    params.set("sortOption",searchState.sortOption)

    params.set("selectedCuisines",searchState.selectedCuisines.join(","));


   const createRestaurant=async():Promise<RestaurantSearchResponse>=>{
    const response = await fetch(
        `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if(!response.ok){
        throw new Error("Failed to get  restaurant");
    }
    return response.json()
   }


   const {
    data : results,
    isLoading
   }=useQuery(["searchRestaurants",searchState],createRestaurant,
   {enabled: !!city})



   return {
    results,isLoading
   }
}