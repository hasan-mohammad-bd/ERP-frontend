import { type LucideIcon } from "lucide-react";

export interface NavItem {
	title: string;
	href: string;
	icon: LucideIcon;
	image?: string;
	color?: string;
	isChildren?: boolean;
	children?: NavItem[];
}

export interface DeleteResponse {
	success: boolean;
	message: string;
	data?: string;
}

export interface PaginationLink {
	url: string | null;
	label: string;
	active: boolean;
}

export interface PaginationInfo {
	current_page: number;
	from: number;
	last_page: number;
	links: PaginationLink[];
	path: string;
	per_page: number;
	to: number;
	total: number;
}


export interface ErrorResponse {
    status: number;
    data: {
        success: boolean;
        message: string;
        data: {
            [key: string]: string[];
        };
    };
}