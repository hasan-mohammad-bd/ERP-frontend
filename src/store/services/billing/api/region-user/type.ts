import { Region } from "@/lib/validators/billing/regions";

export interface RegionUserDataType {
  id: number;
  name: string;
  username: string;
  image: string;
  phone: string | null;
  email: string;
  organization_id: number;
  location_id: number;
  role_id: number;
  region_user: RegionUserType | null;
  current_target: CurrentTargetType | null;
  user_targets: UserTargetType[];
}

export interface RegionUserType {
  effective_date: string;
  region: Region;
}
export interface UserTargetType {
  id: number;
  user_id: number;
  target_amount: string;
  target_month: string;
  created_at: string;
}

export interface CurrentTargetType {
  id: number;
  user_id: number;
  target_amount: string;
  target_month: string;
  created_at: string;
}