import {
	// BookOpenCheck,
	LayoutDashboard,
	Building,
	Users,
	// HandCoins,
	FileBadge2,
	AlignEndVertical,
	Fan,
	Blinds,
	Captions,
	Store,
	Clock,
	Volume2,
	Disc,
	MapPin,
	SquarePen,
	UserRoundCog,
	BriefcaseBusiness,
	BookOpenCheck,
	ScrollText,
	Soup,
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
			/* 			{
				title: "Employee Salary",
				icon: HandCoins,
				color: "text-sky-500",
				href: "/hrm/employees-salary",
			}, */
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
		href: "/hrm",
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
				icon: AlignEndVertical,
				href: "/hrm/sections",
				color: "text-sky-500",
			},
			{
				title: "Schedules",
				icon: Clock,
				href: "/hrm/schedules",
				color: "text-sky-500",
			},
			{
				title: "Roster",
				icon: ScrollText,
				href: "/hrm/rosters",
				color: "text-sky-500",
			},
			{
				title: "Holiday",
				icon: Soup,
				href: "/hrm/holidays",
				color: "text-sky-500",
			},
		],
	},

	{
		title: "Job",
		href: "/hrm",
		icon: Volume2,
		color: "text-sky-500",
		isChildren: true,
		children: [
			{
				title: "Vacancy Requisition",
				icon: Disc,
				href: "/hrm/vacancy-requisitions",
				color: "text-sky-500",
			},
			{
				title: "Job Posts",
				icon: SquarePen,
				href: "/hrm/job-posts",
				color: "text-sky-500",
			},
			{
				title: "Job Candidates",
				icon: UserRoundCog,
				href: "/hrm/job-candidates",
				color: "text-sky-500",
			},
			{
				title: "Job Apply",
				icon: BriefcaseBusiness,
				href: "/hrm/job-apply",
				color: "text-sky-500",
			},
		],
	},

	{
		title: "Accounts",
		icon: Fan,
		href: "/account",
		color: "text-sky-500",
		isChildren: true,
		children: [
			{
				title: "Financial Year",
				icon: Clock,
				href: "/account/financial-year",
				color: "text-sky-500",
			},
			{
				title: "Chart Of Account",
				icon: MapPin,
				href: "/account/chart-of-account",
				color: "text-sky-500",
			},
			{
				title: "COA Lists",
				icon: MapPin,
				href: "/account/chart-of-accounts",
				color: "text-sky-500",
			},
		],
	},

	{
		title: "Organizations",
		icon: Store,
		href: "/web/organizations",
		color: "text-sky-500",
	},

	{
		title: "Locations",
		icon: MapPin,
		href: "/web/locations",
		color: "text-sky-500",
	},
];
