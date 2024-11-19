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
  item_nature: z.string(),
  name: z.string(),
  images: files, 
  primary_unit_id: z.coerce.number(),
  secondary_unit_id: z.coerce.number(),
  primary_to_secondary_unit: z.coerce.number(),
  category_id: z.coerce.number(),
  sub_category_id: z.coerce.number(),
  child_category_id: z.coerce.number(),
  brand_id: z.coerce.number(),
  sku: z.string(),
  purchase_account_id: z.coerce.number(),
  purchase_account_tax_id: z.coerce.number(),
  sale_account_id: z.coerce.number(),
  sale_account_tax_id: z.coerce.number(),
  inventory_account_id: z.coerce.number(),
  inventory_account_tax_id: z.coerce.number(),
  track_inventory: z.boolean(),
  manufacture: z.boolean(),
  allow_sale: z.boolean(),
});

export type ItemFormValues = z.infer<typeof ItemSchema>;



// Define the main ItemSchema using CategorySchema
export const itemRow = z.object({
  id: z.coerce.number(),
  item_nature: z.string(),
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
});

export type ItemRow = z.infer<typeof itemRow>;
