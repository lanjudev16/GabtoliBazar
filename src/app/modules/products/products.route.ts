import { Router } from "express";
import { productController } from "./products.controller";
import validateRequest from "../../middleware/validateRequest";
import { productValidation } from "./products.validate";

const router=Router()
router.post('/',validateRequest(productValidation.porductValidateSchema),productController.createProduct)
router.get('/',productController.retriveProduct)
router.get('/:productId',productController.retriveSingleProduct)
router.put('/:productId',validateRequest(productValidation.porductUpdateValidateSchema),productController.updateProduct)
router.delete('/:productId',productController.deleteProduct)
const productRouter=router
export default productRouter;