import { TProduct } from "./products.interface"
import productModel from "./products.model"

const createProduct=async(payLoad:TProduct)=>{
    const result=await productModel.create(payLoad)
    return result;
}
const retriveProduct=async()=>{
    const result=await productModel.find()
    return result;
}
export const productService={
    createProduct,
    retriveProduct
}