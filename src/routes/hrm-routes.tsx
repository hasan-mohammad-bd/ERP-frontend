import Attendance from "@/pages/hrm/attendance";
import withFallback from "@/utils/with-fallback";
import {
  Dashboard,
  Department,
  Designation,
  Employee,
  EmployeeClass,
  EmployeeGrade,
  ErrorPage,
  Holiday,
  JobApply,
  JobCandidate,
  JobPost,
  Layout,
  Roster,
  Schedule,
  Section,
  VacancyRequisition,
} from "./components";

const hrmRoutes = {
  path: "hrm/",
  element: withFallback(<Layout />),
  children: [
    {
      index: true,
      element: withFallback(<Dashboard title="HRM" />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "employees-list",
      element: withFallback(<Employee />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "create-attendance",
      element: withFallback(<Attendance />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "attendance-list",
      element: withFallback(<Attendance />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "departments",
      element: withFallback(<Department />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "designations",
      element: withFallback(<Designation />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "sections",
      element: withFallback(<Section />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "employee-classes",
      element: withFallback(<EmployeeClass />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "employee-grades",
      element: withFallback(<EmployeeGrade />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "schedules",
      element: withFallback(<Schedule />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "rosters",
      element: withFallback(<Roster />),
      errorElement: withFallback(<ErrorPage />),
    },
		{
			path: "roster-employee",
			element: withFallback(<Roster />),
			errorElement: withFallback(<ErrorPage />),
		},
    {
      path: "holidays",
      element: withFallback(<Holiday />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "vacancy-requisitions",
      element: withFallback(<VacancyRequisition />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "job-posts",
      element: withFallback(<JobPost />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "job-candidates",
      element: withFallback(<JobCandidate />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "job-apply",
      element: withFallback(<JobApply />),
      errorElement: withFallback(<ErrorPage />),
    },
  ],
};

export default hrmRoutes;
