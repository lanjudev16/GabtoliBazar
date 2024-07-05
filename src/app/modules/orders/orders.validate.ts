import { z } from "zod";

const orderValidateSchema = z.object({
    body:z.object({
        email: z.string().email("Invalid email address"),
        productId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid product ID"),
        price: z.number().min(0, "Price must be a positive number"),
        quantity: z.number().min(0, "Quantity must be a positive number"),
      })
});
export default orderValidateSchema;
