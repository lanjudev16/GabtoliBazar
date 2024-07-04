import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { productService } from "./products.service"
import sendResponse from "../../utils/sendResponse"

const createProduct=catchAsync(async(req:Request,res:Response)=>{
    const body=req.body
    const result=await productService.createProduct(req.body)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Product create successfully",
        data:result
    })
})
const retriveProduct=catchAsync(async(req:Request,res:Response)=>{
    const result=await productService.retriveProduct()
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Product create successfully",
        data:result
    })
})
export const productController={
    createProduct,
    retriveProduct
}