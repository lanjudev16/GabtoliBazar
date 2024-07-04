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
        message:"Product created successfully!",
        data:result
    })
})
const retriveProduct=catchAsync(async(req:Request,res:Response)=>{
    const query=req.query
    const result=await productService.retriveProduct(query)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Product fetched successfully!",
        data:result
    })
})
const retriveSingleProduct=catchAsync(async(req:Request,res:Response)=>{
    const productId=req.params.productId
    const result=await productService.retriveSingleProduct(productId)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Product fetched successfully!",
        data:result
    })
})
const updateProduct=catchAsync(async(req:Request,res:Response)=>{
    const productId=req.params.productId
    const body=req.body
    const result=await productService.updateProduct(body,productId)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Product updated successfully!",
        data:result
    })
})
const deleteProduct=catchAsync(async(req:Request,res:Response)=>{
    const productId=req.params.productId
    const result=await productService.deleteProduct(productId)
    sendResponse(res,{
        statusCode:200,
        success:true,
        message:"Product deleted successfully!",
        data:result
    })
})
export const productController={
    createProduct,
    retriveProduct,
    retriveSingleProduct,
    updateProduct,
    deleteProduct
}