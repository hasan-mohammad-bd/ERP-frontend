import { NavItem } from "@/types";
import {
  AlignEndVertical,
  Blinds,
  BookOpenCheck,
  // BriefcaseBusiness,
  Building,
  CalendarCheck2,
  Captions,
  ClipboardType,
  Clock,
  // Disc,
  Fan,
  FileBadge2,
  LayoutDashboard,
  NotebookText,
  PlayIcon,
  ScrollText,
  Settings,
  Soup,
  SquarePen,
  // UserRoundCog,
  UserRoundSearch,
  Users,
  Vote,
} from "lucide-react";

const hrmNavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/hrm",
    color: "text-sky-500",
    permissions: ["dashboard-reports", "dashboard-reports.show"],
  },
  {
    title: "Employee",
    icon: Users,
    href: "/hrm",
    color: "text-sky-500",
    permissions: ["employees", "employee-classes", "employee-grades", "departments", "designations", "sections"],
    isChildren: true,
    children: [
      {
        title: "Employee List",
        icon: BookOpenCheck,
        color: "text-sky-500",
        href: "/hrm/employees-list",
        permissions: ["employees"],
      },

      {
        title: "Employee Classes",
        icon: Fan,
        href: "/hrm/employee-classes",
        color: "text-sky-500",
        permissions: ["employee-classes"],
      },
      {
        title: "Employee Grades",
        icon: Blinds,
        href: "/hrm/employee-grades",
        color: "text-sky-500",
        permissions: ["employee-grades"],
      },
      {
        title: "Departments",
        icon: Building,
        href: "/hrm/departments",
        color: "text-sky-500",
        permissions: ["departments"],
      },
      {
        title: "Designations",
        icon: FileBadge2,
        href: "/hrm/designations",
        color: "text-sky-500",
        permissions: ["designations"],
      },
      {
        title: "Sections",
        icon: AlignEndVertical,
        href: "/hrm/sections",
        color: "text-sky-500",
        permissions: ["sections"],
      },
    ],
  },

  {
    title: "Attendance",
    icon: CalendarCheck2,
    href: "/hrm",
    color: "text-sky-500",
    permissions: ["attendances"],
    isChildren: true,
    children: [
      {
        title: "Attendances List",
        icon: PlayIcon,
        href: "/hrm/attendances-list",
        color: "text-sky-500",
        permissions: ["attendances"],
      },

      {
        title: "Daily Attendance",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/daily-attendance",
        permissions: ["xyz-hide"],
      },
      {
        title: "Shifts",
        icon: Clock,
        href: "/hrm/shifts",
        color: "text-sky-500",
        permissions: ["schedules"],
      },
      {
        title: "Roster",
        icon: ScrollText,
        href: "/hrm/rosters",
        color: "text-sky-500",
        permissions: ["xyz-hide"],
      },
      {
        title: "Roster Employee",
        icon: Soup,
        href: "/hrm/roster-employee",
        color: "text-sky-500",
        permissions: ["xyz-hide"],
      },
      {
        title: "Attendance PM",
        icon: PlayIcon,
        href: "/hrm/attendance-policy-mapping",
        color: "text-sky-500",
        permissions: ["employee-attendance-policies"],
      },
    ],
  },

  {
    title: "Leave",
    icon: Clock,
    href: "/hrm",
    color: "text-sky-500",
    permissions: ["leaves", "leave-groups", "holidays"], 
    isChildren: true,
    children: [
      {
        title: "Leave Request",
        icon: Clock,
        href: "/hrm/leave-request",
        color: "text-sky-500",
        permissions: ["leaves"],
      },
      {
        title: "Leave Type",
        icon: Clock,
        href: "/hrm/leave-type",
        color: "text-sky-500",
        permissions: ["leaves"],
      },
      {
        title: "Leave Group",
        icon: Clock,
        href: "/hrm/leave-group",
        color: "text-sky-500",
        permissions: ["leave-groups"],
      },
      {
        title: "Holiday",
        icon: Soup,
        href: "/hrm/holidays",
        color: "text-sky-500",
        permissions: ["holidays"],
      },
    ],
  },

  {
    title: "Salary",
    icon: CalendarCheck2,
    href: "/hrm",
    color: "text-sky-500",
    permissions: ["hrm-report.salary-report", "hrm-report.pay-slip-report", "salaries.show", "salaries"],
    isChildren: true,
    children: [
      {
        title: "Employee Payslip",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/employee-salary-payslip",
        permissions: ["hrm-report.pay-slip-report"],
      },
      {
        title: "Bank Salary Advice",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/bank-salary-advice",
        permissions: ["salaries"],
      },
      {
        title: "Salary Breakup",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/salary_breakup",
        permissions: ["salaries"],
      },

      {
        title: "Salary Certificate",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/salary-certificate",
        permissions: ["salaries"],
      },
      {
        title: "Salary Sheet",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/salary-sheet",
        permissions: ["hrm-report.salary-report"],
      },
      {
        title: "Estimate Salary",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/estimate-salary",
        permissions: ["salaries"],
      },
    ],
  },

  {
    title: "Provident Fund",
    icon: Captions,
    href: "/hrm/new-route",
    color: "text-sky-500",
    permissions: ["xyz-hide"],
  },

  {
    title: "Tax",
    icon: ClipboardType,
    href: "/hrm/new-route",
    color: "text-sky-500",
    permissions: ["xyz-hide"],
  },

  {
    title: "Policies",
    icon: Vote,
    href: "/hrm",
    color: "text-sky-500",
    permissions: ["attendance-policy", "leave-policies", "overtime-policies", "deduction-policies"],
    isChildren: true,
    children: [
      {
        title: "Attendance Policy",
        icon: PlayIcon,
        href: "/hrm/attendance-policy",
        color: "text-sky-500",
        permissions: ["attendance-policy"],
      },
      {
        title: "Leave Policy",
        icon: SquarePen,
        href: "/hrm/leave-policy",
        color: "text-sky-500",
        permissions: ["leave-policies"],
      },
      {
        title: "Over Time Policy",
        icon: SquarePen,
        href: "/hrm/overtime-policy",
        color: "text-sky-500",
        permissions: ["xyz-hide"],
      },
      {
        title: "Deduction Policy",
        icon: SquarePen,
        href: "/hrm/deduction-policy",
        color: "text-sky-500",
        permissions: ["deduction-policies"],
      },
    ],
  },

  {
    title: "Recruitment",
    icon: UserRoundSearch,
    href: "hrm/new-route",
    color: "text-sky-500",
    permissions: ["xyz-hide"],
  },

  {
    title: "Reports",
    icon: NotebookText,
    href: "/hrm",
    color: "text-sky-500",
    permissions: ["hrm-report", "hrm-report.show"],
    isChildren: true,
    children: [
      {
        title: "Leave Summary",
        icon: UserRoundSearch,
        href: "leave-summary",
        color: "text-sky-500",
        permissions: ["hrm-report.leave-reports.summary"],
      },
      {
        title: "Leave Usages",
        icon: UserRoundSearch,
        href: "leave-usages",
        color: "text-sky-500",
        permissions: ["hrm-report.leave-reports.usages"],
      },
      {
        title: "Leave Balance",
        icon: UserRoundSearch,
        href: "leave-balance",
        color: "text-sky-500",
        permissions: ["hrm-report.leave-reports.balance"],
      },
      {
        title: "Leave Trend",
        icon: UserRoundSearch,
        href: "leave-trend",
        color: "text-sky-500",
        permissions: ["hrm-report.leave-reports.trend"],
      },
      {
        title: "Leave Type Summary",
        icon: UserRoundSearch,
        href: "leave-type-summary",
        color: "text-sky-500",
        permissions: ["hrm-report.leave-reports.type-summary"],
      },
      {
        title: "Attendance Summary",
        icon: UserRoundSearch,
        href: " ",
        color: "text-sky-500",
        permissions: ["hrm-report.attendance-summary-report"],
      },
      {
        title: "Salary Bill Report",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/hrm/salary-bill-report",
        permissions: ["hrm"],
      },
      {
        title: "Daily Attendance",
        icon: UserRoundSearch,
        href: "daily-attendance-report",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
    ],
  },
/*   {
    title: "Job",
    href: "/hrm",
    icon: BriefcaseBusiness,
    color: "text-sky-500",
    permissions: ["job-posts", "job-candidates", "job-applies", "vacancy-requisitions"],
    isChildren: true,
    children: [
      {
        title: "Vacancy Requisition",
        icon: Disc,
        href: "/hrm/vacancy-requisitions",
        color: "text-sky-500",
        permissions: ["vacancy-requisitions"],
      },
      {
        title: "Job Posts",
        icon: SquarePen,
        href: "/hrm/job-posts",
        color: "text-sky-500",
        permissions: ["job-posts"],
      },
      {
        title: "Job Candidates",
        icon: UserRoundCog,
        href: "/hrm/job-candidates",
        color: "text-sky-500",
        permissions: ["job-candidates"],
      },
      {
        title: "Job Apply",
        icon: BriefcaseBusiness,
        href: "/hrm/job-apply",
        color: "text-sky-500",
        permissions: ["job-applies"],
      },
    ],
  }, */

  {
    title: "HRM Setting",
    icon: Settings,
    href: "hrm/new-route",
    color: "text-sky-500",
    permissions: ["xyz-hide"],
  },
];

export default hrmNavItems;
