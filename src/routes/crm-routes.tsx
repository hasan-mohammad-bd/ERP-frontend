import withFallback from "@/utils/with-fallback";
import { ErrorPage, Layout, NotFoundPage } from "./components";
import CrmDashboard from "@/pages/crm/dashboard-crm";
import LeadGroups from "@/pages/crm/lead/lead-groups";

const crmRoutes = {
  path: "crm/",
  element: withFallback(<Layout />),
  children: [
    {
      index: true,
      element: withFallback(<CrmDashboard />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "*",
      element: withFallback(<NotFoundPage />),
    },

    {
      path: "lead/lead-groups",
      element: withFallback(<LeadGroups />),
      errorElement: withFallback(<ErrorPage />),
    },


  ],
};

export default crmRoutes;
