import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButtun from "@/components/LoadingButton/LoadingBottun";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Restaurant } from "@/type";

const formSchema=z.object({
    restaurantName:z.string({
        required_error:"restaurant name is required",
    }),
    city:z.string({
        required_error:"city name is required",
    }),
    country:z.string({
        required_error:"country name is required",
    }),
    deliveryPrice:z.coerce.number({
        required_error:"delivery price is required",
        invalid_type_error:"must be a valid number",
    }),
    estimatedDeliveryTime:z.coerce.number({
        required_error:"estimated delivery time is required",
        invalid_type_error:"must be a valid number",
    }),

    cuisines:z.array(z.string()).nonempty({
        message:"please  select at least one cuisine"
    }),
    menuItems:z.array(z.object({
        name:z.string().min(1,"name is required"),
        price:z.coerce.number().min(1,"price is required")
    })),
    imageUrl:z.instanceof(File,{message:"image is required"})
})

type RestaurantFormData=z.infer<typeof formSchema>


type Props={
restuarant?:Restaurant
  onSave:(restaurantFormData : FormData)=>void ;
  isLoading:boolean;
}

const ManageRestaurantForm = ({onSave,isLoading,restuarant}:Props) => {
    const form=useForm<RestaurantFormData>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            cuisines:[],
            menuItems:[{name:"",price:0}]
        }
    })

    useEffect(()=>{
        if(!restuarant){
            return
        }
        const deliveryPriceFormatted = parseInt(
            restuarant.deliveryPrice.toFixed(2)
        );
        const menuItemsFormatted =restuarant.menuItems.map((item)=>({
            ...item,
            price: parseInt(item.price.toFixed(2)),
        }))
        const updatedRestaurant = {
            ...restuarant,
            deliveryPrice:deliveryPriceFormatted,
            menuItems:menuItemsFormatted,
            //imageUrl: new File([""], "placeholder.jpg", { type: "image/jpeg" }),
          };
        form.reset(updatedRestaurant)

    },[form,restuarant])


    const onSubmit=(formDataJson : RestaurantFormData)=>{
        const formData=new FormData();

        formData.append("restaurantName",formDataJson.restaurantName)
        formData.append("city",formDataJson.city)
        formData.append("country",formDataJson.country)

        formData.append(
            "deliveryPrice",
            (formDataJson.deliveryPrice*1).toString()
        )
        formData.append(
            "estimatedDeliveryTime",
            formDataJson.estimatedDeliveryTime.toString()
        )
        formDataJson.cuisines.forEach((cuisine,index)=>{
            formData.append(`cuisines[${index}]`,cuisine)
        })
        formDataJson.menuItems.forEach((menuItem,index)=>{
            formData.append(`menuItems[${index}][name]`,menuItem.name);
            formData.append(`menuItems[${index}][price]`,(menuItem.price*1).toString());
        })
        formData.append("imageUrl",formDataJson.imageUrl)
        onSave(formData)
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-300 p-10 rounded-lg">
            <DetailsSection/>
            <Separator/>
            <CuisinesSection/>
            <Separator/>
            <MenuSection/>
            <Separator/>
            <ImageSection/>
            {
                isLoading ? <LoadingButtun/> : <Button type="submit">
                    submit
                </Button>
            }
        </form>
    </Form>
  )
}

export default ManageRestaurantForm
