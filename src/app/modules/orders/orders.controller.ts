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
const retriveOrder=catchAsync(async(req:Request,res:Response)=>{
    
    const result=await orderService.retriveOrder(req.query)
    if(req.query.email){
        sendResponse(res,{
            statusCode:200,
            success:true,
            message:"Orders fetched successfully for user email!",
            data:result
        })
    }else{
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Orders fetched successfully!",
        data:result
    })
    }

})

export const orderController={
    createOrder,
    retriveOrder,
}