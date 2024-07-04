import AppError from "../../errors/AppError";
import { TProduct } from "./products.interface"
import productModel from "./products.model"

const createProduct=async(payLoad:TProduct)=>{
    const result=await productModel.create(payLoad)
    return result;
}
const retriveProduct=async(query:Record<string,unknown>)=>{
    let searchTerm='';
    if(query?.searchTerm){
        searchTerm=query?.searchTerm as string;
    }
    const result=await productModel.find({
        $or:['name','description','category'].map((field)=>({
            [field]:{$regex:searchTerm,$options:'i'}
        }))
    },{__v:0}).lean()
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
    if(!result){
        throw new AppError(404,"Product not found")
    }
    return null;
}

export const productService={
    createProduct,
    retriveProduct,
    retriveSingleProduct,
    updateProduct,
    deleteProduct
}