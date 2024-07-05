import { Router } from "express";
import { orderController } from "./orders.controller";
import validateRequest from "../../middleware/validateRequest";
import orderValidateSchema from "./orders.validate";

const router=Router()
router.post('/',validateRequest(orderValidateSchema),orderController.createOrder)
router.get('/',orderController.retriveOrder)
const orderRouter=router
export default orderRouter;