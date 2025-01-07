import ReportsDashboard from "@/components/common/reports-dashboard";
import { ReportDashboardItem } from "@/types";

// Define the categories as a union type
type HRMReportCategory = "attendance" | "leave" | "salary";

// Map raw data to match the interface
const HRM_REPORTS: ReportDashboardItem<HRMReportCategory>[] = [
  // Attendance Reports
  {
    name: "Daily Attendance Report",
    category: "attendance",
    href: "/hrm/reports/daily-attendance-report",
  },
  {
    name: "Attendance Summary",
    category: "attendance",
    href: "/hrm/reports/attendance-summary",
  },

  // Leave Reports
  {
    name: "Leave Summary",
    category: "leave",
    href: "/hrm/reports/leave-summary",
  },
  {
    name: "Leave Usages",
    category: "leave",
    href: "/hrm/reports/leave-usages",
  },
  {
    name: "Leave Balance",
    category: "leave",
    href: "/hrm/reports/leave-balance",
  },
  {
    name: "Leave Trend",
    category: "leave",
    href: "/hrm/reports/leave-trend",
  },
  {
    name: "Leave Type Summary",
    category: "leave",
    href: "/hrm/reports/leave-type-summary",
  },

  // Salary Reports
  {
    name: "Salary Bill Report",
    category: "salary",
    href: "/hrm/reports/salary-bill-report",
  },
  {
    name: "Employee Payslip",
    category: "salary",
    href: "/hrm/employee-salary-payslip",
  },
  {
    name: "Bank Salary Advice",
    category: "salary",
    href: "/hrm/reports/bank-salary-advice",
  },
  {
    name: "Salary Certificate",
    category: "salary",
    href: "/hrm/reports/salary-certificate",
  },
];

export default function HRMReportsDashboard() {
  return <ReportsDashboard reports={HRM_REPORTS} />;
}
