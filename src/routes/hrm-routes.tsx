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
  AddHolidayForm,
  EmployeeForm,
  EstimateSalary,
  LeaveBalance,
  LeaveUsagesReport,
  LeaveTrend,
  LeaveTypeSummary,
  AttendanceSummary,
  SalaryAdjustment,
} from "./components";

import DailyAttendanceReport from "@/pages/hrm/reports/daily-attendance-report";

// import AttendancePolicy from "@/pages/hrm/attendance-policy";
import RoleAccess from "@/lib/access-control/role-access";
import SalaryBillReport from "@/pages/hrm/reports/salary-bill-report";
import SalaryList from "@/pages/hrm/salary/salary-list";
import RoleAccessOutlet from "@/lib/access-control/role-access-outlet";
import HRM_PendingApprovals from "@/pages/hrm/approvals/hrm-pending-approvals";
import HRM_ApprovedApprovals from "@/pages/hrm/approvals/hrm-approved-approvals";
import HRM_RejectedApprovals from "@/pages/hrm/approvals/hrm-rejected-approvals";
import EmployeeProfile from "@/pages/hrm/employee/employee-list/components/employee-profile";
import HRMReportsDashboard from "@/pages/hrm/reports-dashboard";
import LoanType from "@/pages/hrm/loan/loan-type";
import LoanList from "@/pages/hrm/loan/loan-list-create";

const hrmRoutes = {
  path: "hrm/",
  element: withFallback(<Layout />),
  children: [
    {
      index: true,
      element: withFallback(
        <RoleAccess
          roles={["dashboard-reports", "dashboard-reports.show"]}
          showUnauthorizedPage={true}
        >
          <HRMDashboard />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "employees-list/",
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(
            <RoleAccess roles={["employees"]} showUnauthorizedPage={true}>
              <Employee />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess
              roles={["employees.create"]}
              showUnauthorizedPage={true}
            >
              <EmployeeForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["employees.edit"]} showUnauthorizedPage={true}>
              <EmployeeForm />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "show/:id",
          element: withFallback(
            <RoleAccess roles={["employees.show"]} showUnauthorizedPage={true}>
              <EmployeeProfile />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },

    // Our (new) dev task
    {
      path: "employee-salary-payslip",
      element: withFallback(
        <RoleAccess roles={["hrm"]} showUnauthorizedPage={true}>
          <EmployeeSalaryPayslip />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "daily-attendance",
      element: withFallback(
        <RoleAccess roles={["hrm"]} showUnauthorizedPage={true}>
          <DailyAttendance />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "departments",
      element: withFallback(
        <RoleAccess roles={["departments"]} showUnauthorizedPage={true}>
          <Department />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "designations",
      element: withFallback(
        <RoleAccess roles={["designations"]} showUnauthorizedPage={true}>
          <Designation />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "sections",
      element: withFallback(
        <RoleAccess roles={["sections"]} showUnauthorizedPage={true}>
          <Section />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "employee-classes",
      element: withFallback(
        <RoleAccess roles={["employee-classes"]} showUnauthorizedPage={true}>
          <EmployeeClass />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "employee-grades",
      element: withFallback(
        <RoleAccess roles={["employee-grades"]} showUnauthorizedPage={true}>
          <EmployeeGrade />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "shifts",
      element: withFallback(
        <RoleAccess roles={["schedules"]} showUnauthorizedPage={true}>
          <Schedule />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "rosters",
      element: withFallback(
        <RoleAccess roles={["rosters"]} showUnauthorizedPage={true}>
          <Roster />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "roster-employee",
      element: withFallback(
        <RoleAccess roles={["roster-employees "]} showUnauthorizedPage={true}>
          <EmployeeRoster />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "holidays/",
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(
            <RoleAccess roles={["holidays"]} showUnauthorizedPage={true}>
              <Holiday />
            </RoleAccess>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["holidays.create"]} showUnauthorizedPage={true}>
              <AddHolidayForm />
            </RoleAccess>
          ),
          errorElement: <ErrorPage />,
        },
      ],
    },

    {
      path: "deduction-policy",
      element: withFallback(
        <RoleAccess roles={["deduction-policies"]} showUnauthorizedPage={true}>
          <DeductionPolicy />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "overtime-policy",
      element: withFallback(
        <RoleAccess roles={["hrm"]} showUnauthorizedPage={true}>
          <OverTimePolicy />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "leave-policy",
      element: withFallback(
        <RoleAccess roles={["leave-policies"]} showUnauthorizedPage={true}>
          <LeavePolicy />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "vacancy-requisitions",
      element: withFallback(
        <RoleAccess
          roles={["vacancy-requisitions"]}
          showUnauthorizedPage={true}
        >
          <VacancyRequisition />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "job-posts",
      element: withFallback(
        <RoleAccess roles={["job-posts"]} showUnauthorizedPage={true}>
          <JobPost />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "job-candidates",
      element: withFallback(
        <RoleAccess roles={["job-candidates"]} showUnauthorizedPage={true}>
          <JobCandidate />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "job-apply",
      element: withFallback(
        <RoleAccess roles={["job-applies"]} showUnauthorizedPage={true}>
          <JobApply />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "attendance-policy",
      element: withFallback(
        <RoleAccess roles={["attendance-policy"]} showUnauthorizedPage={true}>
          <AttendancePolicy />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "attendance-policy-mapping",
      element: withFallback(
        <RoleAccess
          roles={["employee-attendance-policies"]}
          showUnauthorizedPage={true}
        >
          <AttendancePolicyMapping />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "leave-request",
      element: withFallback(
        <RoleAccess roles={["leaves"]} showUnauthorizedPage={true}>
          <LeaveRequest />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "leave-group",
      element: withFallback(
        <RoleAccess roles={["leave-groups"]} showUnauthorizedPage={true}>
          <LeaveGroup />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "leave-type",
      element: withFallback(
        <RoleAccess roles={["leaves"]} showUnauthorizedPage={true}>
          <LeaveType />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "attendances-list",
      element: withFallback(
        <RoleAccess roles={["attendances"]} showUnauthorizedPage={true}>
          <AttendancesList />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "salary_breakup",
      element: withFallback(
        <RoleAccess roles={["salaries"]} showUnauthorizedPage={true}>
          <SalaryBreakUp />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "salary-list",
      element: withFallback(
        <RoleAccess roles={["salaries"]} showUnauthorizedPage={true}>
          <SalaryList />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "salary-sheet",
      element: withFallback(
        <RoleAccess
          roles={["salaries", "salaries.show"]}
          showUnauthorizedPage={true}
        >
          <SalarySheet />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "salary-setup/:employee_id",
      element: withFallback(
        <RoleAccess
          roles={[
            "salary-settings.create",
            "salary-settings.edit",
            "salary-settings",
          ]}
          showUnauthorizedPage={true}
        >
          <SalarySetup />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

    {
      path: "estimate-salary",
      element: withFallback(
        <RoleAccess roles={["salary-settings"]} showUnauthorizedPage={true}>
          <EstimateSalary />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },

  //loan
  {
    path: "loan-type",
    element: withFallback(
      <RoleAccess roles={["hrm"]} showUnauthorizedPage={true}>
        <LoanType />
       </RoleAccess>
    ),
    errorElement: withFallback(<ErrorPage />),
  },
  {
    path: "loan-list",
    element: withFallback(
      <RoleAccess roles={["hrm"]} showUnauthorizedPage={true}>
        <LoanList />
       </RoleAccess>
    ),
    errorElement: withFallback(<ErrorPage />),
  },



    {
      path: "reports",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          path: "dashboard",
          element: withFallback(
            <RoleAccess roles={["reports"]}>
              <HRMReportsDashboard />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "daily-attendance-report",
          element: withFallback(
            <RoleAccess
              roles={["hrm-report.daily-attendance-report"]}
              showUnauthorizedPage={true}
            >
              <DailyAttendanceReport />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "attendance-summary",
          element: withFallback(
            <RoleAccess
              roles={["hrm-report.attendance-summary-report"]}
              showUnauthorizedPage={true}
            >
              <AttendanceSummary />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "leave-summary",
          element: withFallback(
            <RoleAccess
              roles={["hrm-report.leave-reports.summary"]}
              showUnauthorizedPage={true}
            >
              <LeaveSummary />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "leave-usages",
          element: withFallback(
            <RoleAccess
              roles={["hrm-report.leave-reports.usages"]}
              showUnauthorizedPage={true}
            >
              <LeaveUsagesReport />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "leave-balance",
          element: withFallback(
            <RoleAccess
              roles={["hrm-report.leave-reports.balance"]}
              showUnauthorizedPage={true}
            >
              <LeaveBalance />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
    
        {
          path: "leave-trend",
          element: withFallback(
            <RoleAccess
              roles={["hrm-report.leave-reports.trend"]}
              showUnauthorizedPage={true}
            >
              <LeaveTrend />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
    
        {
          path: "leave-type-summary",
          element: withFallback(
            <RoleAccess
              roles={["hrm-report.leave-reports.type-summary"]}
              showUnauthorizedPage={true}
            >
              <LeaveTypeSummary />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "salary-bill-report",
          element: withFallback(
            <RoleAccess
              roles={["hrm-report.pay-slip-report"]}
              showUnauthorizedPage={true}
            >
              <SalaryBillReport />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "bank-salary-advice",
          element: withFallback(
            <RoleAccess roles={["hrm"]} showUnauthorizedPage={true}>
              <BankSalaryAdvice />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
    
        {
          path: "salary-certificate",
          element: withFallback(
            <RoleAccess roles={["hrm"]} showUnauthorizedPage={true}>
              <SalaryCertificate />
            </RoleAccess>
          ),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "salary-adjustment",
      element: withFallback(
        <RoleAccess
          roles={["hrm-report.pay-slip-report"]}
          showUnauthorizedPage={true}
        >
          <SalaryAdjustment />
        </RoleAccess>
      ),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "approvals/",
      element: (
        <RoleAccessOutlet
          roles={[
            "leaves",
            "leaves.show",
            "salaries",
            "salaries.show",
            "attendances",
            "attendances.show",
          ]}
        />
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "pending",
          element: withFallback(
            <RoleAccess
              roles={[
                "leaves",
                "leaves.show",
                "salaries",
                "salaries.show",
                "attendances",
                "attendances.show",
              ]}
              showUnauthorizedPage={true}
            >
              <HRM_PendingApprovals />
            </RoleAccess>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "approved",
          element: withFallback(
            <RoleAccess
              roles={[
                "leaves",
                "leaves.show",
                "salaries",
                "salaries.show",
                "attendances",
                "attendances.show",
              ]}
              showUnauthorizedPage={true}
            >
              <HRM_ApprovedApprovals />
            </RoleAccess>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "rejected",
          element: withFallback(
            <RoleAccess
              roles={[
                "leaves",
                "leaves.show",
                "salaries",
                "salaries.show",
                "attendances",
                "attendances.show",
              ]}
              showUnauthorizedPage={true}
            >
              <HRM_RejectedApprovals />
            </RoleAccess>
          ),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "*",
      element: withFallback(<NotFoundPage />),
    },
  ],
};

export default hrmRoutes;
