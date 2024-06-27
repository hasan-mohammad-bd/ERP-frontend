import { lazy } from "react";

export const Layout = lazy(() => import("@/layout"));
export const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
export const Dashboard = lazy(() => import("@/pages/dashboard"));
export const Department = lazy(() => import("@/pages/hrm/department"));
export const Designation = lazy(() => import("@/pages/hrm/designation"));
export const Employee = lazy(() => import("@/pages/hrm/employee"));
export const EmployeeClass = lazy(() => import("@/pages/hrm/employee-class"));
export const EmployeeGrade = lazy(() => import("@/pages/hrm/employee-grade"));
export const Holiday = lazy(() => import("@/pages/hrm/holiday"));
export const JobApply = lazy(() => import("@/pages/hrm/job-apply"));
export const JobCandidate = lazy(() => import("@/pages/hrm/job-candidate"));
export const JobPost = lazy(() => import("@/pages/hrm/job-post"));
export const Roster = lazy(() => import("@/pages/hrm/roster"));
export const Schedule = lazy(() => import("@/pages/hrm/schedule"));
export const Section = lazy(() => import("@/pages/hrm/section"));
export const VacancyRequisition = lazy(
	() => import("@/pages/hrm/vacancy-requisitions")
);
export const LoginScreen = lazy(() => import("@/pages/login"));
export const Lobby = lazy(() => import("@/pages/lobby"));
export const PrivateOutlet = lazy(() => import("@/utils/private-outlet"));
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

export const Organization = lazy(() => import("@/pages/web/organization"));
export const Location = lazy(() => import("@/pages/web/location"));
