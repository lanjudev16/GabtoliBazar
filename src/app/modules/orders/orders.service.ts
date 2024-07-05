import { TOrder } from "./orders.interface"
import orderModel from "./orders.model"

const createOrder=async(payLoad:TOrder)=>{
    const result=await orderModel.create(payLoad)
    return result
}
export const orderService={
    createOrder
}