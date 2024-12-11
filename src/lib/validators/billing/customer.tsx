import { CityColumn, CountryColumn } from "@/lib/validators";
import { z } from "zod";

type Location = {
  id: number;
  name: string;
  parent_id: number | null;
  sorting_index: number | null;
};

export type CustomerColumn = {
  due: number;
  invoice_number: string;
  id: number;
  name: string;
  company_name: string;
  company_id: string;
  work_phone: string;
  phone: string;
  email: string;
  type: "Customer";
  opening_balance: string;
  date: string;
  note: string;
  parent_id: number | null;
  location: Location;
};

export const customerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company_name: z.string().optional(),
  company_id: z.string().optional(),
  work_phone: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  opening_balance: z.string().optional(),
  date: z.string().optional(),
  note: z.string().optional(),
  location_id: z.string(),
});

const customerSchemaForAPI = customerSchema.extend({
  opening_balance: z.number(),
  location_id: z.number(),
});

export type CustomerFormType = z.infer<typeof customerSchema>;
export type CustomerFormTypeForAPI = z.infer<typeof customerSchemaForAPI>;

export type Attachment = {
  id: number;
  file_name: string;
  path: string;
  thumbnail: string;
  file_type: string;
  created_at: string;
};

export type CustomerShowType = CustomerFormTypeForAPI & {
  parent_id: number | null;
  files: Attachment[]; // Replace `any` with actual file type if available
  addresses: AddressColumn[];
  location: {
    id: number;
    name: string;
    parent_id: number | null;
    sorting_index: number | null;
  };
  user: {
    id: number;
    name: string;
    username: string;
    image: string;
    phone: string;
    email: string;
    organization_id: number;
    location_id: number;
    role_id: number;
  };
  organization: {
    id: number;
    name: string;
    title: string;
    logo: string;
    banner: string;
    phone: string[];
    email: string[];
    address: string[];
    website: string[];
    g_map: string[];
    data: null;
    parent_id: number | null;
    sorting_index: number | null;
    created_at: string; // ISO date string
  };
};

export type AddressColumn = {
  id: number;
  country_id: number;
  attention: string;
  post_code: string;
  address: string;
  type: string;
  phone: string;
  state: string;
  country: CountryColumn;
  city: CityColumn;
};

// Define the schema
export const addressSchema = z.object({
  country_id: z.string({ required_error: "Country is required" }),
  city_id: z.string({ required_error: "City is required" }),
  post_code: z
    .string({ required_error: "Post code is required" })
    .min(1, "Post code is required"),
  address: z.string().optional().nullable(),
  phone: z.string().optional().nullable(), // Add regex for phone validation if needed
  attention: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
});

// Infer the TypeScript type from the schema
export type AddressType = z.infer<typeof addressSchema>;

export type AddressTypeApi = Omit<AddressType, "country_id" | "city_id"> & {
  country_id: number;
  city_id: number;
  type: string;
  contact_id: number;
};

export type UpdateAddressTypeApi = AddressTypeApi & {
  model_id: number; // New field added
};
