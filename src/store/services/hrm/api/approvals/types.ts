interface Sorce {
	id: number;
	organization_id: number;
	financial_year_id: number;
	user_id: number;
	location_id: number;
	entry_prifix: string;
	entry_suffix: number;
	entry_number: string;
	type: string;
	date: string;
	note: string | null;
	file: string | null;
	total: string;
	deleted_at: string | null;
	created_at: string;
	updated_at: string;
	project_id: number | null;
	status: number;
  }
  
  interface Location {
	id: number;
	name: string;
	parent_id: number | null;
	sorting_index: number | null;
  }
  
  interface User {
	id: number;
	name: string | null;
	username: string;
	image: string;
	phone: string;
	email: string;
	organization_id: number;
	location_id: number;
	role_id: number;
  }
  
  interface Approval {
	id: number;
	sorce_type: string;
	sorce_id: number;
	status: number;
	module: string;
	sorce: Sorce;
	location: Location;
	user: User;
	created_at: string;
  }
  
  export interface ApprovalRequestRow {
	id: number;
	level: number;
	status: number;
	user_id: number;
	approval_id: number;
	message: string;
	created_at: string;
	approval: Approval;
  }
  