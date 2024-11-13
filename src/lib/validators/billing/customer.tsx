import { z } from "zod";

type Location = {
  id: number;
  name: string;
  parent_id: number | null;
  sorting_index: number | null;
};

export type CustomerColumn = {
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

export type CustomerShowType = CustomerFormTypeForAPI & {
  parent_id: number | null;
  files: any[]; // Replace `any` with actual file type if available
  addresses: any[]; // Replace `any` with actual address type if available
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
