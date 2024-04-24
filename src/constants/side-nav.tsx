import {
	BookOpenCheck,
	LayoutDashboard,
	Building,
	Users,
	HandCoins,
	FileBadge2,
	AlignEndVertical  
	
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
	{
		title: "Designations",
		icon: FileBadge2,
		href: "/hrm/designations",
		color: "text-sky-500",
	},
	{
		title: "Sections",
		icon: AlignEndVertical  ,
		href: "/hrm/sections",
		color: "text-sky-500",
	},
];
