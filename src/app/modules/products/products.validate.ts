import {z} from 'zod'
const variantSchema = z.object({
    type: z.string({
      required_error: "type of the product is required",
    }),
    value: z.string({
      required_error: "Value is required",
    }),
  });
  
const inventorySchema = z.object({
    quantity: z.number({
      required_error: "Quantity is required",
    }).nonnegative("Quantity must be a non-negative number"),
    inStock: z.boolean({
      required_error: "inStock is required",
    }),
  });
  
const porductValidateSchema=z.object({
    body:z.object({
        name: z.string({
          required_error: "Name of the product is required",
        }),
        description: z.string({
          required_error: "Description is required",
        }),
        price: z.number({
          required_error: "Price of the product is required",
        }).nonnegative("Price must be a non-negative number"),
        category: z.string({
          required_error: "Category of the product is required",
        }),
        tags: z.array(z.string(), {
          required_error: "tags are required",
        }),
        variants: z.array(variantSchema, {
          required_error: "variants are required",
        }),
        inventory: inventorySchema,
      })
      
})
const porductUpdateValidateSchema=z.object({
    body:z.object({
        name: z.string({
          required_error: "Name of the product is required",
        }).optional(),
        description: z.string({
          required_error: "Description is required",
        }).optional(),
        price: z.number({
          required_error: "Price of the product is required",
        }).optional(),
        category: z.string({
          required_error: "Category of the product is required",
        }).optional(),
        tags: z.array(z.string(), {
          required_error: "tags are required",
        }).optional(),
        variants: z.array(variantSchema, {
          required_error: "variants are required",
        }).optional(),
        inventory: inventorySchema.optional(),
      })
      
})

export const productValidation={
  porductValidateSchema,
  porductUpdateValidateSchema
}