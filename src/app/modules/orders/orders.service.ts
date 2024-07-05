import AppError from "../../errors/AppError"
import { TProduct } from "../products/products.interface"
import productModel from "../products/products.model"
import { TOrder } from "./orders.interface"
import orderModel from "./orders.model"

const createOrder=async(payLoad:TOrder)=>{
    const quantity=payLoad.quantity
    const Product=await productModel.findById(payLoad.productId)
    const OrderProductQuantity=Product?.inventory?.quantity
    if(OrderProductQuantity===0){
        throw new AppError(404,"Insufficient quantity available in inventory")
    }
    if(quantity>(OrderProductQuantity as number)){
        throw new AppError(404,"Insufficient quantity available in inventory")
    }
    const result=await orderModel.create(payLoad)
    const stayQuantity=((OrderProductQuantity as number)-payLoad.quantity) as number
    if(stayQuantity===0){
        await productModel.findByIdAndUpdate(payLoad.productId,{
            "inventory.instock":false
        })
    }
    await productModel.findByIdAndUpdate(payLoad.productId,{
        "inventory.quantity":stayQuantity
    })
    return result
}
const retriveOrder=async(payLoad:Record<string,unknown>)=>{
    let email=""
    let result;
    if(payLoad?.email){
        email=payLoad.email as string
         result=await orderModel.find({email:email})
    }else{
        result=await orderModel.find()
    }
    return result
}

export const orderService={
    createOrder,
    retriveOrder,
}