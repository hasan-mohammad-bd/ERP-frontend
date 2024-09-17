import withFallback from "@/utils/with-fallback";
import {
  Dashboard,
  Department,
  Designation,
  Employee,
  EmployeeClass,
  EmployeeGrade,
  ErrorPage,
  Attendance,
  DailyAttendance,
  Holiday,
  DeductionPolicy,
  OverTimePolicy,
  AttendancePolicy,
  JobApply,
  JobCandidate,
  JobPost,
  Layout,
  Roster,
  Schedule,
  Section,
  VacancyRequisition,
  EmployeeRoster,
  LeaveRequest,
  LeaveType,
  LeaveGroup,
} from "./components";

// import AttendancePolicy from "@/pages/hrm/attendance-policy";


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
      path: "daily-attendance",
      element: withFallback(<DailyAttendance />),
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
			element: withFallback(<EmployeeRoster />),
			errorElement: withFallback(<ErrorPage />),
		},
    {
      path: "holidays",
      element: withFallback(<Holiday />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "deduction-policy",
      element: withFallback(<DeductionPolicy />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "overtime-policy",
      element: withFallback(<OverTimePolicy />),
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
    {
      path: "attendance-policy",
      element: withFallback(<AttendancePolicy />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "leave-request",
      element: withFallback(<LeaveRequest />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "leave-group",
      element: withFallback(<LeaveGroup />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "leave-type",
      element: withFallback(<LeaveType />),
      errorElement: withFallback(<ErrorPage />),
    },
  ],
};

export default hrmRoutes;
