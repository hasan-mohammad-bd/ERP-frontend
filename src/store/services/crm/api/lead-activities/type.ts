import { User } from "@/store/services/erp-main/api/user/types";

export type LeadActivityTypes = {
    id: number;
    type: string;
    title: string;
    description: string;
    outcome: string;
    is_completed: number;
    start_date_time: string;
    end_date_time: string;
    reminder_date_time: string;
    created_at: string;
    user: User;
};

export type LeadActivityRow = {
    user: User;
    id: number;
    type: string;
    title: string;
    description: string;
    outcome: string;
    start_date_time: string;
    end_date_time: string;
    created_at: string;
    is_completed: number;
    lead_id: number;
    reminder_date_time: string;
    participants: Participant[];
};


export type Participant = {
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


