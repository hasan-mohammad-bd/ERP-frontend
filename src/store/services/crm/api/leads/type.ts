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
