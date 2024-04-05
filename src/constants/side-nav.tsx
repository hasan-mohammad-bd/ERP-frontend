import {
	BookOpenCheck,
	LayoutDashboard,
	Building,
	Users,
	HandCoins,
} from "lucide-react";

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
		icon: Users,
		href: "/hrm",
		color: "text-sky-500",
		isChildren: true,
		children: [
			{
				title: "Employee List",
				icon: BookOpenCheck,
				color: "text-sky-500",
				href: "/hrm/employees-list",
			},
			{
				title: "Employee Salary",
				icon: HandCoins,
				color: "text-sky-500",
				href: "/hrm/employees-salary",
			},
		],
	},
	{
		title: "Departments",
		icon: Building,
		href: "/hrm/departments",
		color: "text-sky-500",
	},
];
