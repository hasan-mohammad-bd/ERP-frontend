import PrivateOutlet from "@/lib/access-control/private-outlet";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import webRoutes from "./web-routes";
import accountsRoutes from "./accounts-routes";
import hrmRoutes from "./hrm-routes";
import billingRoutes from "./billing-routes";
import withFallback from "@/utils/with-fallback";
import { ErrorPage, Lobby, LoginScreen, NotFoundPage } from "./components";
import crmRoutes from "./crm-routes";

// Define all available route objects
const allRoutes: Record<string, RouteObject> = {
  hrm: hrmRoutes,
  accounts: accountsRoutes,
  web: webRoutes,
  billing: billingRoutes,
  crm:crmRoutes
};

// Get modules from environment variables (comma-separated string)
const modulesEnv = import.meta.env.VITE_MODULES || "";
const enabledModules = modulesEnv.split(",").map((module: string) => module.trim().toLowerCase());

// Filter routes based on enabled modules
const filteredRoutes = Object.entries(allRoutes)
  .filter(([key]) => enabledModules.includes(key))
  .map(([, route]) => route);

// Define the router with filtered routes
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
      ...filteredRoutes, // Inject only enabled routes
      {
        path: "*",
        element: withFallback(<NotFoundPage />),
      },
    ],
  },
]);

export default router;
