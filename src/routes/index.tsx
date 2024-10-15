import PrivateOutlet from "@/utils/private-outlet";
import { createBrowserRouter } from "react-router-dom";
import webRoutes from "./web-routes";
import accountsRoutes from "./accounts-routes";
import hrmRoutes from "./hrm-routes";
import withFallback from "@/utils/with-fallback";
import { ErrorPage, Lobby, LoginScreen, NotFoundPage } from "./components";
import billingRoutes from "./billing-routes";


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
      billingRoutes,
      {
        path: "*",
        element: withFallback(<NotFoundPage />),
      }
    ],
  },
]);

export default router;
