import { useCreateCheckoutSession } from "@/api/OrderApi";
import { useGetRestaurant } from "@/api/RestaurantApi";
import CheckoutButton from "@/components/CheckoutButton";
import MenuItems from "@/components/MenuItems";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import { UserFormData } from "@/form/user-profile-form/UserProfileForm";
import { MenuItem } from "@/type";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem ={
    _id:string;
    name : string;
    price :number;
    quantity: number;
}

const DetailPage = () => {
    const { restaurantId } = useParams();
    const {restaurant,isLoading}=useGetRestaurant(restaurantId)
    const {createCheckoutSession,isLoading : isCheckoutLoading} = useCreateCheckoutSession()

    const [cartItems,setCartItems] = useState<CartItem[]>(()=>{
        const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    //    [{
    //        _id:ITEM_1,
    //         name:Cheese Piza,
    //        price : 520,
    //        quantity:1
    //    }]

    const addToCart =(menuItem:MenuItem)=>{
        setCartItems((prevCartItems)=>{
            //1.check if the item  is already in cart
            const existingCartItem =prevCartItems.find((cartItem)=> cartItem._id === menuItem._id)
            let updatedCartItems;


            //2.if is in cart , update the quantity
            if(existingCartItem){
               updatedCartItems  =  prevCartItems.map((item)=> 
               item._id=== menuItem._id 
               ?{...item ,quantity: item.quantity +1}
               : item
               );
            }
            else{
                updatedCartItems =[
                    ...prevCartItems,{
                        _id : menuItem._id,
                        name:menuItem.name,
                        price : menuItem.price,
                        quantity : 1,
                    }
                ]
            }
            sessionStorage.setItem(`
                cartItems-${restaurantId}`,
                JSON.stringify(updatedCartItems)
            )
            return updatedCartItems;

            //3.if item is not in cart , add it as a new item

        })
    }
   const removeFromCart = (cartItem : CartItem)=>{
    setCartItems((prevCartItems)=>{
        const updatedCartItems = prevCartItems.filter(
            (eachItem) => cartItem._id !== eachItem._id
        );
        sessionStorage.setItem(`
                cartItems-${restaurantId}`,
                JSON.stringify(updatedCartItems)
            )
        return updatedCartItems
    })
   }
   const onCheckout =async(userFormData : UserFormData)=>{
    if(!restaurant){
        return ;
    }
    //console.log("USERFORMDATA",userFormData);  

    const checkoutData ={
        cartItems: cartItems.map((cartItem)=>({
            menuItemId : cartItem._id,
            name : cartItem.name,
            quantity :cartItem.quantity.toString(),
        })),
        restaurantId :restaurant._id,
        deliveryDetails :{
            name :userFormData.name,
            addressLine1:userFormData.addressLine1,
            city : userFormData.city,
            country : userFormData.country,
            email : userFormData.email as string
        }
    } 
    const  data = await createCheckoutSession(checkoutData)
    window.location.href=data?.url;
   }
    if(isLoading || !restaurant){
    return "Loading..."
   }

   return (
        <div className=" flex flex-col gap-10">
            <AspectRatio ratio={16/5}>
                <img src={restaurant.imageUrl} className="rounded-md object-cover h-full w-full" />
            </AspectRatio>
            <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
                <div className="flex flex-col gap-4">
                    <RestaurantInfo restaurant={restaurant}/>
                    <span className="text-2xl font-bold tracking-tight">Menu</span>
                    {
                        restaurant.menuItems.map((menuItem)=>(
                          <MenuItems 
                             menuItem={menuItem} 
                             addToCart={()=>addToCart(menuItem)}
                            />
                        ))
                    }
                </div>
                <div>
                    <Card>
                        <OrderSummary 
                          restauarant={restaurant}
                          cardItems={cartItems}
                          removeFromCart ={removeFromCart}
                          
                        />
                        <CardFooter>
                            <CheckoutButton
                            disabled={cartItems.length ===0} 
                            onCheckout={onCheckout}
                            isLoading={isCheckoutLoading}
                            />
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
   

}

export default DetailPage
