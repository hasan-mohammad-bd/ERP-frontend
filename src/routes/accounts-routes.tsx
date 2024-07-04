import withFallback from "@/utils/with-fallback";
import {
  ChartOfAccounts,
  Dashboard,
  ErrorPage,
  FinancialYears,
  Layout,
  SubAccounts,
  AccountSettings,
} from "./components";
import JournalVoucher from "@/pages/accounts/journal-voucher";
import ReceptVoucher from "@/pages/accounts/receipt-voucher";
import PaymentVoucher from "@/pages/accounts/payment-voucher";
import ContraVoucher from "@/pages/accounts/contra-voucher";
import { AddJournalForm } from "@/pages/accounts/journal-voucher/components/add-journal-form";

const accountsRoutes = {
  path: "accounts/",
  element: withFallback(<Layout />),
  children: [
    {
      index: true,
      element: withFallback(<Dashboard title="Accounts" />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "financial-year",
      element: withFallback(<FinancialYears />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "chart-of-accounts",
      element: withFallback(<ChartOfAccounts />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "contact",
      element: withFallback(<SubAccounts />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "accounts-settings",
      element: withFallback(<AccountSettings />),
      errorElement: <ErrorPage />,
    },
    {
      path: "journal-voucher/",
      // element: withFallback(<JournalVoucher />),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(<JournalVoucher />),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(<AddJournalForm />),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(<AddJournalForm />),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "receipt-voucher",
      element: withFallback(<ReceptVoucher />),
      errorElement: <ErrorPage />,
    },
    {
      path: "payment-voucher",
      element: withFallback(<PaymentVoucher />),
      errorElement: <ErrorPage />,
    },
    {
      path: "contra-voucher",
      element: withFallback(<ContraVoucher />),
      errorElement: <ErrorPage />,
    },
  ],
};

export default accountsRoutes;
