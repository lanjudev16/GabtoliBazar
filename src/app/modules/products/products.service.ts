import { TProduct } from "./products.interface"
import productModel from "./products.model"

const createProduct=async(payLoad:TProduct)=>{
    const result=await productModel.create(payLoad)
    return result;
}
export const productService={
    createProduct
}