import { Router } from "express";
import { productController } from "./products.controller";
import validateRequest from "../../middleware/validateRequest";
import porductValidateSchema from "./products.validate";

const router=Router()
router.post('/',validateRequest(porductValidateSchema),productController.createProduct)
router.get('/',validateRequest(porductValidateSchema),productController.retriveProduct)
const productRouter=router
export default productRouter;