import { Layout } from "@/layout";
import ErrorPage from "@/pages/ErrorPage";
import Employee from "@/pages/employee";
import Department from "@/pages/hrm/department";
import Designation from "@/pages/hrm/designation";
import EmployeeClass from "@/pages/hrm/employee-class";
import EmployeeGrade from "@/pages/hrm/employee-grade";
import JobCandidate from "@/pages/hrm/job-candidate";
import JobPost from "@/pages/hrm/job-post";
import Schedule from "@/pages/hrm/schedule";
import Section from "@/pages/hrm/section";
import VacancyRequisition from "@/pages/hrm/vacancy-requisitions";
import Lobby from "@/pages/lobby";
import LoginScreen from "@/pages/login";
import Location from "@/pages/web/location";
import Organization from "@/pages/web/organization";
import { PrivateOutlet } from "@/utils/PrivateOutlet";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	// Route for /login
	{ path: "/login", element: <LoginScreen />, errorElement: <ErrorPage /> },
	// Private routes with outlet for nested routes
	{
		path: "*",
		element: <PrivateOutlet />,
		children: [
			// Index route within the outlet
			{ index: true, element: <Navigate to="dashboard/" /> },
			{
				path: "dashboard/",
				element: <Layout />,
				errorElement: <ErrorPage />,
				children: [{ index: true, element: <Lobby /> }],
			},
			{
				path: "hrm/",
				element: <Layout />,
				children: [
					{
						path: "employees-list",
						element: <Employee />,
						errorElement: <ErrorPage />,
					},
					{
						path: "departments",
						element: <Department />,
						errorElement: <ErrorPage />,
					},
					{
						path: "designations",
						element: <Designation />,
						errorElement: <ErrorPage />,
					},
					{
						path: "sections",
						element: <Section />,
						errorElement: <ErrorPage />,
					},
					{
						path: "employee-classes",
						element: <EmployeeClass />,
						errorElement: <ErrorPage />,
					},
					{
						path: "employee-grades",
						element: <EmployeeGrade />,
						errorElement: <ErrorPage />,
					},
					{
						path: "schedules",
						element: <Schedule />,
						errorElement: <ErrorPage />,
					},
					{
						path: "vacancy-requisitions",
						element: <VacancyRequisition />,
						errorElement: <ErrorPage />,
					},
					{
						path: "job-posts",
						element: <JobPost />,
						errorElement: <ErrorPage />,
					},
					{
						path: "job-candidates",
						element: <JobCandidate />,
						errorElement: <ErrorPage />,
					},
				],
			},
			
			{
				path: "web/",
				element: <Layout />,
				children: [

					{
						path: "organizations",
						element: <Organization />,
						errorElement: <ErrorPage />,
					},
					{
						path: "locations",
						element: <Location />,
						errorElement: <ErrorPage />,
					},
				],
			},
		],
	},
]);

export default router;
