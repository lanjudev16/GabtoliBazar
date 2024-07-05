import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { orderService } from "./orders.service"
import sendResponse from "../../utils/sendResponse";

const createOrder=catchAsync(async(req:Request,res:Response)=>{
    const body=req.body;
    const result=await orderService.createOrder(body)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Order created successfully!",
        data:result
    })
})
export const orderController={
    createOrder
}