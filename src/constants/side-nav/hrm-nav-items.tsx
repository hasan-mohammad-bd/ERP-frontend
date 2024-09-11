import { NavItem } from "@/types";
import {
  AlignEndVertical,
  Blinds,
  BookOpenCheck,
  BriefcaseBusiness,
  Building,
  CalendarCheck2,
  Captions,
  Clock,
  Disc,
  Fan,
  FileBadge2,
  LayoutDashboard,
  ScrollText,
  Soup,
  SquarePen,
  UserRoundCog,
  Users,
  Volume2,
} from "lucide-react";

const hrmNavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/hrm",
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
    title: "Attendance",
    icon: CalendarCheck2,
    href: "/hrm",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Create Attendance",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/create-attendance",
      },
      {
        title: "Attendance List",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/attendance-list",
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
        title: "Roster Employee",
        icon: Soup,
        href: "/hrm/roster-employee",
        color: "text-sky-500",
      },
      {
        title: "Holiday",
        icon: Soup,
        href: "/hrm/holidays",
        color: "text-sky-500",
      },
      {
        title: "Deduction Policy",
        icon: SquarePen,
        href: "/hrm/deduction-policy",
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
];

export default hrmNavItems;
