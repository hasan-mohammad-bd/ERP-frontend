import {
  CityColumn,
  CountryColumn,
  OrganizationColumn,
} from "@/lib/validators";
import { ItemRow } from "@/lib/validators/billing/items";
import { User } from "@/store/services/erp-main/api/user/types";

export type PipelineStage = {
  id: number;
  name: string;
  probability: number;
  pipeline_id: number;
  created_at: string;
  updated_at: string;
};

export type LeadRow = {
  id: number;
  name: string;
  designation: string;
  phone: string;
  email: string;
  company_name: string;
  address: string | null;
  description: string;
  source: string;
  label: string;
  pipelineStage: PipelineStage;
  created_at: string;
};

export type Pipeline = {
  id: number;
  status: number;
  name: string;
  details: PipelineStage[];
  created_at: string; // ISO date string
};

export type LeadDetailsType = {
  id: number;
  name: string;
  designation: string;
  phone: string;
  email: string;
  company_name: string;
  address: string | null;
  description: string;
  source: string;
  status: "Active" | "Completed" | "Rejected";
  label: string;
  user: User;
  assignedUser: User;
  country: CountryColumn;
  city: CityColumn;
  item: ItemRow;
  pipeline: Pipeline;
  pipelineStage: PipelineStage;
  organization: OrganizationColumn;
  files: any[]; // Could be more specific if file structure is known
  created_at: string; // ISO date string
};
