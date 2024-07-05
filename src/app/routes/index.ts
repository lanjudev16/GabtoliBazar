import { Router } from "express"
import productRouter from "../modules/products/products.route"
import orderRouter from "../modules/orders/orders.route"

const router=Router()
const RoutesPath=[
    {
        path:"/products",
        route:productRouter
    },
    {
        path:"/orders",
        route:orderRouter
    }
]
RoutesPath.forEach(route=>router.use(route.path,route.route))
export default router;