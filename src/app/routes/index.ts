import { Router } from "express"
import productRouter from "../modules/products/products.route"

const router=Router()
const RoutesPath=[
    {
        path:"/products",
        route:productRouter
    }
]
RoutesPath.forEach(route=>router.use(route.path,route.route))