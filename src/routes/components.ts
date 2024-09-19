import { lazy } from "react";

export const Layout = lazy(() => import("@/layout"));
export const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
export const Dashboard = lazy(() => import("@/pages/dashboard"));
// HRM
export const Department = lazy(() => import("@/pages/hrm/department"));
export const Designation = lazy(() => import("@/pages/hrm/designation"));
export const Employee = lazy(() => import("@/pages/hrm/employee"));

export const DailyAttendance = lazy(
  () => import("@/pages/hrm/daily-attendance")
);
export const EmployeeClass = lazy(() => import("@/pages/hrm/employee-class"));
export const EmployeeGrade = lazy(() => import("@/pages/hrm/employee-grade"));

export const EmployeeSalary = lazy(() => import("@/pages/hrm/add-employee-salary"));

export const Holiday = lazy(() => import("@/pages/hrm/holiday"));
export const AttendancePolicy = lazy(
  () => import("@/pages/hrm/policy/attendance-policy")
);
export const DeductionPolicy = lazy(
  () => import("@/pages/hrm/policy/deduction-policy")
);
export const OverTimePolicy = lazy(
  () => import("@/pages/hrm/policy/overtime-policy")
);
export const JobApply = lazy(() => import("@/pages/hrm/job-apply"));
export const JobCandidate = lazy(() => import("@/pages/hrm/job-candidate"));
export const JobPost = lazy(() => import("@/pages/hrm/job-post"));
export const Roster = lazy(() => import("@/pages/hrm/roster"));
export const Schedule = lazy(() => import("@/pages/hrm/schedule"));
export const Section = lazy(() => import("@/pages/hrm/section"));
export const EmployeeRoster = lazy(() => import("@/pages/hrm/employee-roster"));
export const VacancyRequisition = lazy(
  () => import("@/pages/hrm/vacancy-requisitions")
);
export const LoginScreen = lazy(() => import("@/pages/login"));
export const Lobby = lazy(() => import("@/pages/lobby"));
export const PrivateOutlet = lazy(() => import("@/utils/private-outlet"));
export const AddBankSalary = lazy(() => import("@/pages/hrm/add-bank-salary"));

// Accounts
export const DashboardAccounts = lazy(
  () => import("@/pages/accounts/dashboard-accounts")
);
export const FinancialYears = lazy(
  () => import("@/pages/accounts/financial-year")
);
export const ChartOfAccounts = lazy(
  () => import("@/pages/accounts/chart-of-account")
);
export const SubAccounts = lazy(() => import("@/pages/accounts/sub-accounts"));
export const AccountSettings = lazy(
  () => import("@/pages/accounts/accounts-settings")
);

export const JournalVoucher = lazy(
  () => import("@/pages/accounts/journal-voucher")
);
export const ReceptVoucher = lazy(
  () => import("@/pages/accounts/receipt-voucher")
);
export const PaymentVoucher = lazy(
  () => import("@/pages/accounts/payment-voucher")
);
export const ContraVoucher = lazy(
  () => import("@/pages/accounts/contra-voucher")
);

export const Organization = lazy(() => import("@/pages/web/organization"));
export const Location = lazy(() => import("@/pages/web/location"));
export const LeaveRequest = lazy(
  () => import("@/pages/hrm/leave/leave-request")
);
export const LeaveType = lazy(() => import("@/pages/hrm/leave/leave-type"));
export const LeaveGroup = lazy(() => import("@/pages/hrm/leave/leave-group"));
export const AttendancesList = lazy(
  () => import("@/pages/hrm/attendance-list")
);
export const SalaryBreakUp  = lazy(()=> import("@/pages/hrm/salary/salary-breakup"))
