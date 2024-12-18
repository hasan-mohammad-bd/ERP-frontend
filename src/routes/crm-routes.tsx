import withFallback from "@/utils/with-fallback";
import { AddPipelineForm, ErrorPage, Layout, NotFoundPage, PipelineList } from "./components";
import CrmDashboard from "@/pages/crm/dashboard-crm";
import LeadGroups from "@/pages/crm/lead/lead-groups";
import { LeadsMailView } from "@/pages/crm/lead/leads";

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
      path: "lead/pipelines",
      // element: withFallback(<Invoice />),
      errorElement: withFallback(<ErrorPage />),
      children: [
        {
          index: true,
          element: withFallback(<PipelineList />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "add",
          element: withFallback(<AddPipelineForm />),
          errorElement: withFallback(<ErrorPage />),
        },
        {
          path: "edit/:id",
          element: withFallback(<AddPipelineForm />),
          errorElement: withFallback(<ErrorPage />),
        },
      ],
    },
    {
      path: "lead/leads-view/:leadId?",
      element: withFallback(<LeadsMailView />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "*",
      element: withFallback(<NotFoundPage />),
    },
  ],
};

export default crmRoutes;
