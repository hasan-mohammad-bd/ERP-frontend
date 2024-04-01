import { Layout } from "@/layout";
import ErrorPage from "@/pages/ErrorPage";
import Lobby from "@/pages/lobby";
import LoginScreen from "@/pages/login";
import { PrivateOutlet } from "@/utils/PrivateOutlet";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	// Route for /login
	{ path: "/login", element: <LoginScreen />, errorElement: <ErrorPage /> },
	// Private routes with outlet for nested routes
	{
		path: "*",
		element: <PrivateOutlet />,
		children: [
			// Index route within the outlet
			{
				index: true,
				element: (
					<Layout>
						<Lobby />
					</Layout>
				),
			},
		],
	},
]);

export default router;
