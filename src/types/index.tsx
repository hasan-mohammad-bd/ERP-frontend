import { type LucideIcon } from "lucide-react";

export interface NavItem {
	title: string;
	href: string;
	icon: LucideIcon;
	color?: string;
	isChildren?: boolean;
	children?: NavItem[];
}

export interface DeleteResponse {
	success: boolean;
	message: string;
	data?: string;
}