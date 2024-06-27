import PrivateOutlet from "@/utils/private-outlet";
import { createBrowserRouter } from "react-router-dom";
import webRoutes from "./web-routes";
import accountsRoutes from "./accounts-routes";
import hrmRoutes from "./hrm-routes";
import withFallback from "@/utils/with-fallback";
import { ErrorPage, Lobby, LoginScreen } from "./components";

const router = createBrowserRouter([
	{
		path: "/login",
		element: withFallback(<LoginScreen />),
		errorElement: withFallback(<ErrorPage />),
	},

	{
		path: "*",
		element: <PrivateOutlet />,
		children: [
			{
				index: true,
				element: withFallback(<Lobby />),
			},
			hrmRoutes,
			accountsRoutes,
			webRoutes,
		],
	},
]);

export default router;
