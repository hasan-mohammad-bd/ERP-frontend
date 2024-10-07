import withFallback from "@/utils/with-fallback";
import {

  Department,
  Designation,
  Employee,
  EmployeeClass,
  EmployeeGrade,
  ErrorPage,
  DailyAttendance,
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
  EmployeeSalaryPayslip,
  AttendancesList,
  BankSalaryAdvice,
  SalaryBreakUp,
  SalaryCertificate,
  SalarySheet,
  Holiday,
  SalarySetup,
  LeavePolicy,
  AttendancePolicyMapping,
  NotFoundPage,
  HRMDashboard,
  LeaveSummary,
} from "./components";

import { AddHolidayForm } from "@/pages/hrm/holiday/components/add-holiday-form";
import EstimateSalary from "@/pages/hrm/estimate-salary";




// import AttendancePolicy from "@/pages/hrm/attendance-policy";

const hrmRoutes = {
  path: "hrm/",
  element: withFallback(<Layout />),
  children: [
    {
      index: true,
      element: withFallback(<HRMDashboard/>),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "employees-list",
      element: withFallback(<Employee />),
      errorElement: withFallback(<ErrorPage />),
    },

    //our(new) dev task
    {
      path: "employee-salary-payslip",
      element: withFallback(<EmployeeSalaryPayslip />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "bank-salary-advice",
      element: withFallback(<BankSalaryAdvice />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "salary-certificate",
      element: withFallback(<SalaryCertificate />),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "daily-attendance",
      element: withFallback(<DailyAttendance />),
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
      path: "holidays/",
      // element: withFallback(<Holiday />),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(<Holiday />),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(<AddHolidayForm />),
          errorElement: <ErrorPage />,
        },
      ],
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
      path: "leave-policy",
      element: withFallback(<LeavePolicy />),
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
      path: "attendance-policy-mapping",
      element: withFallback(<AttendancePolicyMapping />),
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
    {
      path: "attendances-list",
      element: withFallback(<AttendancesList />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "salary_breakup",
      element: withFallback(<SalaryBreakUp />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "salary-sheet",
      element: withFallback(<SalarySheet />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "salary-setup/:employye_id",
      element: withFallback(<SalarySetup />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "*",
      element: withFallback(<NotFoundPage />),
    },


    {
      path: "estimate-salary",
      element: withFallback(<EstimateSalary />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "hrm/leave-summary",
      element: withFallback(<LeaveSummary />),
      errorElement: withFallback(<ErrorPage />),
    }


  ],
};

export default hrmRoutes;
