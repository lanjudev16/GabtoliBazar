import { Schema, model } from "mongoose";
import { TProduct, Tinventory, Tvariants } from "./products.interface";
const variantSchema=new Schema<Tvariants>({
    type:{
        type:String,
        required:[true,"type of the product is required"]
    },
    value:{
        type:String,
        required:[true,"Value is required"]
    }
}
,
{
_id:false
}
)
const inventorySchema=new Schema<Tinventory>({
    quantity:{
        type:Number,
        required:[true,"Quantity is required"]
    },
    inStock:{
        type:Boolean,
        required:[true,"inStock is required"]
    }
}
,
{
        _id:false
}
)
const productSchema=new Schema<TProduct>({
    name:{
        type:String,
        required:[true,"Name of the product is required"]
    },
    description:{
        type:String,
        required:[true,"inStock "]
    },
    price:{
        type:Number,
        required:[true,"Price of the product is required"]
    },
    category:{
        type:String,
        required:[true,"Category of the product is required"]
    },
    tags:{
        type:[String],
        required:[true,"tags are required"]
    },
    variants:{
        type:[variantSchema],
        required:[true,"variants is required"]
    },
    inventory:{
        type:inventorySchema,
        required:[true,"inventory is required"]
    }
})
const productModel=model('productModel',productSchema)
export default productModel;