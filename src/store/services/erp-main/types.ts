export interface User {
	id: number;
	name: string | null;
	image: string | null;
	phone: string | null;
	organization_id: number;
	location_id: number | null;
	role_id: number;
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
