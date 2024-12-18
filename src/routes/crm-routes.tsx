import withFallback from "@/utils/with-fallback";
import { ErrorPage, Layout, NotFoundPage } from "./components";
import CrmDashboard from "@/pages/crm/dashboard-crm";
import LeadGroups from "@/pages/crm/lead/lead-groups";
import { LeadsMailView } from "@/pages/crm/lead/leads";
import AddLeadForm from "@/pages/crm/lead/leads/components/lead-add-form";

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
      path: "lead/lead-groups",
      element: withFallback(<LeadGroups />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "lead/leads-view/:leadId?",
      element: withFallback(<LeadsMailView />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "lead/leads-view/add",
      element: withFallback(<AddLeadForm />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "*",
      element: withFallback(<NotFoundPage />),
    },
  ],
};

export default crmRoutes;
