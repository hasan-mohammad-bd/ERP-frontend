import withFallback from "@/utils/with-fallback";
import {
  ChartOfAccounts,
  ErrorPage,
  FinancialYears,
  Layout,
  SubAccounts,
  AccountSettings,
  JournalVoucher,
  ReceptVoucher,
  PaymentVoucher,
  ContraVoucher,
  DashboardAccounts,
} from "./components";
import { AddJournalForm } from "@/pages/accounts/journal-voucher/components/add-journal-form";
import { AddReceiptForm } from "@/pages/accounts/receipt-voucher/components/add-receipt-form";
import { AddPaymentForm } from "@/pages/accounts/payment-voucher/components/add-payment-form";
import { AddContraForm } from "@/pages/accounts/contra-voucher/components/add-contra-form";
import OpeningBalance from "@/pages/accounts/opening-balance";
import { AddOpeningBalanceForm } from "@/pages/accounts/opening-balance/components/add-opeing-balance-form";
import GeneralLedger from "@/pages/accounts/general-ledger";

import TrialBalance from "@/pages/accounts/trial-balance";
import BalanceSheet from "@/pages/accounts/balance-sheet";
import IncomeStatement from "@/pages/accounts/income-statement";
import CostCategories from "@/pages/accounts/cost-categories";
import CostCenters from "@/pages/accounts/cost-centers";
import Projects from "@/pages/accounts/projects";
import Transaction from "@/pages/accounts/transaction";
import DetailedGeneralLedger from "@/pages/accounts/detailed-general-ledger";
import CashBook from "@/pages/accounts/cash-book";
import Budget from "@/pages/accounts/budget";
import { AddBudgetForm } from "@/pages/accounts/budget/components/add-budjet-form";
import CheckBooks from "@/pages/accounts/check-books";

const accountsRoutes = {
  path: "accounts/",
  element: withFallback(<Layout />),
  children: [
    {
      index: true,
      element: withFallback(<DashboardAccounts />),
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

    // {
    //   path: "detailed-general-ledger/:ledgerId",
    //   element: withFallback(<DetailedGeneralLedger />),
    //   errorElement: <ErrorPage />,
    // },

    {
      path: "contact",
      element: withFallback(<SubAccounts />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "cost-categories",
      element: withFallback(<CostCategories />),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "cost-centers",
      element: withFallback(<CostCenters />),
      errorElement: <ErrorPage />,
    },
    {
      path: "check-books",
      element: withFallback(<CheckBooks />),
      errorElement: <ErrorPage />,
    },
    {
      path: "projects",
      element: withFallback(<Projects />),
      errorElement: <ErrorPage />,
    },
    {
      path: "accounts-settings",
      element: withFallback(<AccountSettings />),
      errorElement: <ErrorPage />,
    },
    /*     , */
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
      path: "budget/",
      // element: withFallback(<JournalVoucher />),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(<Budget />),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(<AddBudgetForm />),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(<AddBudgetForm />),
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
          path: "transaction",
          element: withFallback(<Transaction />),
          errorElement: <ErrorPage />,
        },
        {
          path: "cash-book",
          element: withFallback(<CashBook />),
          errorElement: <ErrorPage />,
        },
        {
          path: "trial-balance",
          element: withFallback(<TrialBalance />),
          errorElement: <ErrorPage />,
        },
        {
          path: "income-statement",
          element: withFallback(<IncomeStatement />),
          errorElement: <ErrorPage />,
        },
        {
          path: "balance-sheet",
          element: withFallback(<BalanceSheet />),
          errorElement: <ErrorPage />,
        },

        {
          path: "detailed-general-ledger/:ledgerId",
          element: withFallback(<DetailedGeneralLedger />),
          errorElement: <ErrorPage />,
        },
        {
          path: "detailed-general-ledger",
          element: withFallback(<DetailedGeneralLedger />),
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
};

export default accountsRoutes;
