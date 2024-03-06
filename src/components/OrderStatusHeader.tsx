import { Order } from "@/type"
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Prosp ={
  order:Order;
}


const OrderStatusHeader = ({order}:Prosp) => {
    const getExpectedDeliveryTime = () => {
    const created = new Date(order.createdAt);
    created.setMinutes(created.getMinutes() + order.restaurant.estimatedDeliveryTime);
    const hours = created.getHours();
    const mins = created.getMinutes();
    
    // Pad the minutes with a leading zero if necessary
    const paddedMinutes = mins < 10 ? `0${mins}` : mins;
    
    return `${hours}:${paddedMinutes}`;
}

    const getOrderStatusInfo =()=>{
      return ORDER_STATUS.find((item)=> item.value===order.status) || ORDER_STATUS[0]
    }
  return (
    <div>
      <h1 className="text-2xl font-serif font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <span >Order Status : {getOrderStatusInfo().label}</span>
        <span>Expected delivery🕒 : {getExpectedDeliveryTime()} </span>
      </h1>
      <Progress 
        className=' animate-pulse mt-5' 
        value={getOrderStatusInfo().progressValue}   
      />
    </div>
  )
}

export default OrderStatusHeader
