import { Schema, model } from "mongoose";
import { TOrder } from "./orders.interface";

const orderSchema=new Schema<TOrder>({
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    productId:{
        type:Schema.Types.ObjectId,
        required:[true,"Product track is required"],
        ref:'productModel'
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
    },
    quantity:{
        type:Number,
        required:[true,"Quantity is required"]
    }
})
const orderModel=model('orderModel',orderSchema)
export default orderModel;