import { TProduct } from "./products.interface"
import productModel from "./products.model"

const createProduct=async(payLoad:TProduct)=>{
    const result=await productModel.create(payLoad)
    return result;
}
const retriveProduct=async()=>{
    const result=await productModel.find({},{__v:0}).lean()
    return result;
}
const retriveSingleProduct=async(payLoad:string)=>{
    const result=await productModel.findById(payLoad,{_id:0,__v:0}).lean()
    return result;
}
const updateProduct=async(payLoad:Partial<TProduct>,productId:string)=>{
    // const {tags,variants,inventory,...remaining}=payLoad
    const result=await productModel.findByIdAndUpdate(productId,payLoad,{
        new:true,
        runValidators:true
    })
    return result;
}
const deleteProduct=async(productId:string)=>{
    const result=await productModel.findByIdAndDelete(productId)
    return null;
}
export const productService={
    createProduct,
    retriveProduct,
    retriveSingleProduct,
    updateProduct,
    deleteProduct
}