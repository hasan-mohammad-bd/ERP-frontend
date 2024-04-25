import {
	BookOpenCheck,
	LayoutDashboard,
	Building,
	Users,
	HandCoins,
	FileBadge2,
	AlignEndVertical,
	Fan,
	Blinds,
	Captions,
	Store,
	Clock
	
	
	
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
			{
				title: "Employee Classes",
				icon: Fan,
				href: "/hrm/employee-classes",
				color: "text-sky-500",
			},
			{
				title: "Employee Grades",
				icon: Blinds,
				href: "/hrm/employee-grades",
				color: "text-sky-500",
			},
		],
	},

	{
		title: "Catalog",
		icon: Captions,
		href:"/hrm",
		color: "text-sky-500",
		isChildren: true,
		children: [
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
			{
				title: "schedules",
				icon: Clock,
				href: "/hrm/schedules",
				color: "text-sky-500",
			},
		]
	},




	{
		title: "Organizations",
		icon: Store ,
		href: "/web/organizations",
		color: "text-sky-500",
	},
];
