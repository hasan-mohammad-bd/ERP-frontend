export interface Role {
  id: number;
  name: string;
  organization_id: number;
  permissions: string[];
}

export interface Organization {
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
  // data: any | null; // To handle unknown data structures
  parent_id: number | null;
  // sorting_index: number | null;
  created_at: string; // ISO date string format
}

export interface User {
  id: number;
  name: string | null;
  image: string | null;
  phone: string | null;
  role_id: number;
  role: Role;
  organization_id: number;
  organization: Organization;
  location_id: number | null;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  data: User;
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LogoutResponse {
  message: string;
  status: boolean;
}
