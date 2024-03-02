import { Restaurant } from "@/type"
import { Link } from "react-router-dom";
import { AspectRatio } from "../ui/aspect-ratio";
import { Banknote, Clock, Dot } from "lucide-react";

type Props={
    restaurant:Restaurant;
}

const SearchResultCard = ({restaurant}:Props) => {
  return (
    <Link 
       to={`/details/${restaurant._id}`}
       className="grid lg:grid-cols-[2fr_3fr] gap-5 group"
    >
        <AspectRatio ratio={16 / 6}>
            <img
            src={restaurant.imageUrl}
            className="rounded-md w-full h-full object-cover border border-purple-500"
            />
        </AspectRatio>
        <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline">
                {restaurant.restaurantName}
            </h3>
            <div id="card-content" className="grid md:grid-cols-2 gap-2">
                <div className="flex flex-row flex-wrap">
                    {
                        restaurant.cuisines.map((items,index)=>(
                            <span className="flex">
                                <span>{items}</span>
                                {
                                    index < restaurant.cuisines.length - 1 &&  <Dot/>
                                }
                            </span>
                        ))
                    }
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex items-center gap-1 text-green-500">
                        <Clock className='text-green-500'/>
                        {
                            restaurant.estimatedDeliveryTime
                        }mins
                    </div>
                    <div className="flex items-center gap-1">
                        <Banknote/>
                        Delivery price ₹{(restaurant.deliveryPrice/1).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default SearchResultCard
