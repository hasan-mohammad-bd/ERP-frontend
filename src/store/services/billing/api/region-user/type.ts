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
  }
  
  export interface RegionUserType {
    effective_date: string;
    region: RegionType;
  }
  
  export interface RegionType {
    id: number;
    name: string;
    parent_id: number | null;
    sorting_index: number | null;
  }
  