export type PipelineStage = {
  id: number;
  name: string;
  probability: string;
  pipeline_id: number;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
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
  created_at: string; // ISO date string
};
