import withFallback from "@/utils/with-fallback";
import {
  ChartOfAccounts,
  Dashboard,
  ErrorPage,
  FinancialYears,
  Layout,
  SubAccounts,
  AccountSettings,
  JournalVoucher,
  ReceptVoucher,
  PaymentVoucher,
  ContraVoucher,
} from "./components";

import { AddJournalForm } from "@/pages/accounts/journal-voucher/components/add-journal-form";
import { AddReceiptForm } from "@/pages/accounts/receipt-voucher/components/add-receipt-form";
import { AddPaymentForm } from "@/pages/accounts/payment-voucher/components/add-payment-form";
import { AddContraForm } from "@/pages/accounts/contra-voucher/components/add-contra-form";
import OpeningBalance from "@/pages/accounts/opening-balance";
import { AddOpeningBalanceForm } from "@/pages/accounts/opening-balance/components/add-opeing-balance-form";
import GeneralLedger from "@/pages/accounts/general-ledger";
import DetailedGeneralLedger from "@/pages/accounts/detailed-general-ledger";
import TrialBalance from "@/pages/accounts/trial-balance";
import BalanceSheet from "@/pages/accounts/balance-sheet";

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
      path: "detailed-general-ledger/:ledgerId",
      element: withFallback(<DetailedGeneralLedger />),
      errorElement: <ErrorPage />,
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
      path: "opening-balance/",
      // element: withFallback(<JournalVoucher />),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(<OpeningBalance />),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(<AddOpeningBalanceForm />),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(<AddOpeningBalanceForm />),
          errorElement: <ErrorPage />,
        },
      ],
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
      // element: withFallback(<ReceptVoucher />),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(<ReceptVoucher />),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(<AddReceiptForm />),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(<AddReceiptForm />),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "payment-voucher",
      // element: withFallback(<PaymentVoucher />),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(<PaymentVoucher />),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(<AddPaymentForm />),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(<AddPaymentForm />),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "contra-voucher",
      // element: withFallback(<ContraVoucher />),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(<ContraVoucher />),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(<AddContraForm />),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(<AddContraForm />),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "reports/",
      // element: withFallback(<Reports />),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "general-ledger",
          element: withFallback(<GeneralLedger />),
          errorElement: <ErrorPage />,
        },
        {
          path: "trial-balance",
          element: withFallback(<TrialBalance />),
          errorElement: <ErrorPage />,
        },
        {
          path: "balance-sheet",
          element: withFallback(<BalanceSheet />),
          errorElement: <ErrorPage />,
        },
      ]
    }
  ],
};

export default accountsRoutes;
