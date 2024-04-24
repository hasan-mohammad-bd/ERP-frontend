import { Layout } from "@/layout";
import ErrorPage from "@/pages/ErrorPage";
import Employee from "@/pages/employee";
import Department from "@/pages/hrm/department";
import Designation from "@/pages/hrm/designation";
import Section from "@/pages/hrm/section";
import Lobby from "@/pages/lobby";
import LoginScreen from "@/pages/login";
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
				],
			},
		],
	},
]);

export default router;
