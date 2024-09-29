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
  PlayIcon,
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
    title: "Salary",
    icon: CalendarCheck2,
    href: "/hrm",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Employee Payslip",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/employee-salary-payslip",
      },
      {
        title: "Bank Salary Advice",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/bank-salary-advice",
      },
      {
        title: "Salary Breakup",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/salary_breakup",
      },

      {
        title: "Salary Certificate",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/salary-certificate",
      },
      {
        title: "Salary Sheet",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/salary-sheet",
      },
      // {
      //   title: "Salary Setup",
      //   icon: CalendarCheck2,
      //   color: "text-sky-500",
      //   href: "/hrm/salary-setup",
      // },
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
        title: "Attendances List",
        icon: PlayIcon,
        href: "/hrm/attendances-list",
        color: "text-sky-500",
      },

      {
        title: "Daily Attendance",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/daily-attendance",
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
  {
    title: "Policy",
    icon: PlayIcon,
    href: "/hrm",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Attendance Policy",
        icon: PlayIcon,
        href: "/hrm/attendance-policy",
        color: "text-sky-500",
      },

      {
        title: "Deduction Policy",
        icon: SquarePen,
        href: "/hrm/deduction-policy",
        color: "text-sky-500",
      },
      {
        title: "Over Time Policy",
        icon: SquarePen,
        href: "/hrm/overtime-policy",
        color: "text-sky-500",
      },
      {
        title: "Leave Policy",
        icon: SquarePen,
        href: "/hrm/leave-policy",
        color: "text-sky-500",
      },
    ],
  },
  {
    title: "Leave",
    icon: Clock,
    href: "/hrm",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Leave Request",
        icon: Clock,
        href: "/hrm/leave-request",
        color: "text-sky-500",
      },
      {
        title: "Leave Type",
        icon: Clock,
        href: "/hrm/leave-type",
        color: "text-sky-500",
      },
      {
        title: "Leave Group",
        icon: Clock,
        href: "/hrm/leave-group",
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
];

export default hrmNavItems;
