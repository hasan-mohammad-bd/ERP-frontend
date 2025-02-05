import { lazy } from "react";

export const Layout = lazy(() => import("@/layout"));
export const LoginScreen = lazy(() => import("@/pages/login"));
export const Lobby = lazy(() => import("@/pages/lobby"));
export const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
export const Dashboard = lazy(() => import("@/pages/dashboard"));
export const NotFoundPage = lazy(() => import("@/pages/not-found"));
export const PrivateOutlet = lazy(
  () => import("@/lib/access-control/private-outlet")
);

// HRM
export const Department = lazy(() => import("@/pages/hrm/department"));
export const Designation = lazy(() => import("@/pages/hrm/designation"));
export const Employee = lazy(
  () => import("@/pages/hrm/employee/employee-list")
);
export const Holiday = lazy(() => import("@/pages/hrm/holiday"));
export const DailyAttendance = lazy(
  () => import("@/pages/hrm/daily-attendance")
);
export const EmployeeClass = lazy(
  () => import("@/pages/hrm/employee/employee-class")
);
export const EmployeeGrade = lazy(
  () => import("@/pages/hrm/employee/employee-grade")
);
// export const EmployeeSalary = lazy(
//   () => import("@/pages/hrm/add-employee-salary")
// );
export const EmployeeSalaryPayslip = lazy(
  () => import("@/pages/hrm/salary/employee-salary-payslip")
);
export const AttendancePolicy = lazy(
  () => import("@/pages/hrm/policy/attendance-policy")
);
export const DeductionPolicy = lazy(
  () => import("@/pages/hrm/policy/deduction-policy")
);
export const OverTimePolicy = lazy(
  () => import("@/pages/hrm/policy/overtime-policy")
);
export const LeavePolicy = lazy(
  () => import("@/pages/hrm/policy/leave-policy")
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
export const BankSalaryAdvice = lazy(
  () => import("@/pages/hrm/salary/bank-salary-advice")
);
export const SalaryCertificate = lazy(
  () => import("@/pages/hrm/salary/salary-certificate-screen")
);
export const SalarySetup = lazy(
  () => import("@/pages/hrm/salary/salary-setup")
);
export const SalarySheet = lazy(
  () => import("@/pages/hrm/salary/salary-sheet")
);
export const LeaveRequest = lazy(
  () => import("@/pages/hrm/leave/leave-request")
);
export const LeaveType = lazy(() => import("@/pages/hrm/leave/leave-type"));
export const LeaveGroup = lazy(() => import("@/pages/hrm/leave/leave-group"));
export const AttendancesList = lazy(
  () => import("@/pages/hrm/attendance-list")
);
export const SalaryBreakUp = lazy(
  () => import("@/pages/hrm/salary/salary-breakup")
);
export const AttendancePolicyMapping = lazy(
  () => import("@/pages/hrm/attendance-policy-mapping")
);
export const HRMDashboard = lazy(() => import("@/pages/hrm/dashboard-hrm"));
export const LeaveSummary = lazy(
  () => import("@/pages/hrm/reports/leave-reports/leave-summary")
);
export const AddHolidayForm = lazy(
  () => import("@/pages/hrm/holiday/components/add-holiday-form")
);
export const EstimateSalary = lazy(() => import("@/pages/hrm/estimate-salary"));
export const LeaveBalance = lazy(
  () => import("@/pages/hrm/reports/leave-reports/leave-balance")
);
export const LeaveUsagesReport = lazy(
  () => import("@/pages/hrm/reports/leave-reports/leave-usages")
);
export const LeaveTrend = lazy(
  () => import("@/pages/hrm/reports/leave-reports/leave-trend")
);
export const LeaveTypeSummary = lazy(
  () => import("@/pages/hrm/reports/leave-reports/leave-type-summary")
);
export const EmployeeForm = lazy(
  () => import("@/pages/hrm/employee/employee-list/components/employee-form")
);
export const AttendanceSummary = lazy(
  () => import("@/pages/hrm/reports/attendance-summary")
);
export const SalaryAdjustment = lazy(
  () => import("@/pages/hrm/salary/salary-adjustment")
);

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

//BILLING
export const EditCustomerForm = lazy(
  () => import("@/pages/billing/customers/edit-customer")
);
export const EditSupplierForm = lazy(
  () => import("@/pages/billing/supplier/edit-supplier")
);
export const ExpensesList = lazy(() => import("@/pages/billing/expenses"));
export const AddExpense = lazy(
  () => import("@/pages/billing/expenses/add-expenses")
);
export const EditExpense = lazy(
  () => import("@/pages/billing/expenses/edit-expenses")
);
export const PaymentTerms = lazy(() => import("@/pages/billing/payment-terms"));
export const SalesOrderList = lazy(() => import("@/pages/billing/sales-order"));
export const AddSalesOrder = lazy(
  () => import("@/pages/billing/sales-order/components/add-sales-order")
);
export const PurchaseList = lazy(() => import("@/pages/billing/purchases"));
export const AddPurchaseForm = lazy(
  () => import("@/pages/billing/purchases/components/add-purchase-form")
);
export const SupplierPayments = lazy(
  () => import("@/pages/billing/supplier-payments")
);

export const Stocks = lazy(() => import("@/pages/billing/stock"));
export const PurchaseRefunds = lazy(
  () => import("@/pages/billing/puchase-refund")
);
export const InvoiceRefunds = lazy(
  () => import("@/pages/billing/invoice-refund")
);
// export const EditSalesOrder = lazy(
//   () => import("@/pages/billing/sales-order/components/edit-sales-order")
// );


// crm components

export const PipelineList = lazy(() => import("@/pages/crm/lead/pipelines"));
export const AddPipelineForm = lazy(
  () => import("@/pages/crm/lead/pipelines/components/add-pipeline-form")
);

//All We Routes
export const Organization = lazy(() => import("@/pages/web/organization"));
export const Location = lazy(() => import("@/pages/web/location"));
