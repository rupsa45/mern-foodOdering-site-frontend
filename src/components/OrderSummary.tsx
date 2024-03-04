import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/type"
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

type Props ={
  restauarant : Restaurant;
  cardItems:CartItem[];
  removeFromCart : (cartItem:CartItem)=>void;
}

const OrderSummary = ({restauarant: restaurant,cardItems,removeFromCart}:Props) => {
    const getTotalCost=()=>{
      const  totalPrice = cardItems.reduce((total,cartItem)=>total + cartItem.price * cartItem.quantity,0)
      const totalWithDelivery = totalPrice + restaurant.deliveryPrice

      return  `${(totalWithDelivery/1).toFixed(2)}`
    }
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
            <span>Your  order</span>
            <span>₹{getTotalCost()} </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cardItems.map((item)=>(
            <div className="flex justify-between">
                <span>
                    <Badge variant="outline" className="mr-2">
                        {item.quantity}
                    </Badge>
                    {item.name}
                </span>
                <span className="flex items-center gap-1">
                  <Trash className="cursor-pointer" color="red" size={20} onClick={()=>removeFromCart(item)}/>
                    ₹ {((item.price * item.quantity)/1).toFixed(2)}
                </span>
            </div>
        ))}
        <Separator/>
        <div className="flex justify-between">
            <span>Delivery</span>
            <span>₹{(restaurant.deliveryPrice / 1).toFixed(2)}</span>
        </div>
        <Separator/>
      </CardContent>
    </>
  )
}

export default OrderSummary
