import { BookOpenCheck, LayoutDashboard } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
	{
		title: "Dashboard",
		icon: LayoutDashboard,
		href: "/dashboard",
		color: "text-sky-500",
	},
	{
		title: "Employee",
		icon: BookOpenCheck,
		href: "/hrm",
		color: "text-orange-500",
		isChidren: true,
		children: [
			{
				title: "Employee List",
				icon: BookOpenCheck,
				color: "text-red-500",
				href: "/hrm/employees-list",
			},
		],
	},
];
