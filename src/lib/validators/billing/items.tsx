import { z } from "zod";
import { brandRow } from "./brand";
import { unitRow } from "./unit";
import { files, userRow } from "../accounts/entry";
import { organizationColumn } from "@/lib/validators";

// Define the reusable CategorySchema
const CategorySchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  image: z.string().url(),
  description: z.string().nullable(),
  status: z.coerce.number(),
  sorting_index: z.coerce.number().nullable(),
  parent_id: z.coerce.number().nullable(),
});

export const ItemSchema = z.object({
  // item_nature: z.string({
  //   required_error: "Item nature is required",
  // }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  primary_unit_id: z.string({
    required_error: "Primary unit is required",
  }),
  secondary_unit_id: z.string().optional(),
  primary_to_secondary_unit: z.coerce.number().optional(),
  purchase_account_id: z.string({
    required_error: "Purchase account is required",
  }),
  purchase_account_tax_id: z.string({
    required_error: "Purchase account tax is required",
  }),
  sale_account_id: z.string({
    required_error: "Sale account is required",
  }),
  sale_account_tax_id: z.string({
    required_error: "Sale account tax is required",
  }),
  inventory_account_id: z.string({
    required_error: "Inventory account is required",
  }),
  inventory_account_tax_id: z.string({
    required_error: "Inventory account tax is required",
  }),
  track_inventory: z.coerce.number().optional(),
  manufacture: z.coerce.number().optional(),
  allow_sale: z.coerce.number().optional(),
  sku: z.string({
    required_error: "SKU is required",
  }),
  attribute_categories: z.any().optional(),
  // Optional fields
  images: z.any().optional(),
  category_id: z.string().optional(),
  sub_category_id: z.string().optional(),
  child_category_id: z.string().optional(),
  brand_id: z.string().optional(),
});

export type ItemFormValues = z.infer<typeof ItemSchema>;

export const itemBarcode = z.object({
  barcode_attribute: z.string().default("Default"), // Ensure it's a string and has a default value
  barcode: z.string().nullable(), // Allows null value
  id: z.coerce.number(), // Allows null value
  purchase_price: z.number().nullable(), // Allows null value
  selling_price: z.number().nullable(), // Allows null value
  discount: z.number().nullable(), // Allows null value
  discount_amount: z.number().nullable(), // Allows null value
  after_discount: z.number().nullable(), // Allows null value
  wholesale_price: z.number().nullable(), // Allows null value
  attribute_ids: z.array(z.number()).default([]), // Array of numbers with a default empty array
});

export type ItemBarCodeType = z.infer<typeof itemBarcode>;

// Define the main ItemSchema using CategorySchema
export const itemRow = z.object({
  id: z.coerce.number(),
  item_nature: z.enum(["Service", "Goods"]),
  name: z.string(),
  images: files,
  category: CategorySchema,
  sub_category: CategorySchema,
  child_category: CategorySchema,
  brand: brandRow,
  primary_unit: unitRow,
  secondary_unit: unitRow,
  primary_to_secondary_unit: z.coerce.number(),
  sku: z.string(),
  purchase_account_id: z.coerce.number(),
  purchase_account_tax_id: z.coerce.number(),
  sale_account_id: z.coerce.number(),
  sale_account_tax_id: z.coerce.number(),
  inventory_account_id: z.coerce.number(),
  inventory_account_tax_id: z.coerce.number(),
  track_inventory: z.coerce.number(),
  manufacture: z.coerce.number(),
  allow_sale: z.coerce.number(),
  created_at: z.string().datetime(),
  user: userRow,
  organization: organizationColumn,
  item_barcode: z.array(itemBarcode),
});

export type ItemRow = z.infer<typeof itemRow>;

export const setOpeningStockSchema = z.object({
  date: z.string(),
  warehouse_id: z.string({ required_error: "Warehouse is required" }),
  barcodes: z
    .array(
      z.object({
        item_barcode_id: z.number(),
        qty: z.coerce
          .number()
          .nonnegative()
          .refine((discount) => discount === undefined || discount !== 0, {
            message: "Stock cannot be 0.",
          }),
        price: z.coerce
          .number()
          .nonnegative()
          .refine((discount) => discount === undefined || discount !== 0, {
            message: "Price cannot be 0.",
          }),
      })
    )
    .min(1, "At least one barcode is required"),
});

export type SetOpeningStockFormValues = z.infer<typeof setOpeningStockSchema>;
