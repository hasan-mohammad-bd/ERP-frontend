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
  NotFoundPage,
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
import RoleAccessOutlet from "@/lib/access-control/role-access-outlet";
import RoleAccess from "@/lib/access-control/role-access";

const accountsRoutes = {
  path: "accounts/",
  element: withFallback(<Layout />),
  children: [
    {
      index: true,
      element: withFallback(
        <RoleAccess roles={["settings", "entries", "ledger-accounts", "reports"]} showUnauthorizedPage={true}>
          <DashboardAccounts />
        </RoleAccess>),
    },
    {
      path: "financial-year",
      element: withFallback(
        <RoleAccess roles={["financial-years"]} showUnauthorizedPage={true}>
          <FinancialYears />
        </RoleAccess>),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "chart-of-accounts",
      element: withFallback(
        <RoleAccess roles={["ledger-groups", "ledger-accounts"]} showUnauthorizedPage={true}>
          <ChartOfAccounts />
        </RoleAccess>
    ),
      errorElement: withFallback(<ErrorPage />),
    },

    // {
    //   path: "detailed-general-ledger/:ledgerId",
    //   element: withFallback(<DetailedGeneralLedger />),
    //   errorElement: <ErrorPage />,
    // },

    {
      path: "contact",
      element: withFallback(
        <RoleAccess roles={["sub-accounts"]} showUnauthorizedPage={true}>
          <SubAccounts />
        </RoleAccess>),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "cost-categories",
      element: withFallback(
        <RoleAccess roles={["cost-categories"]} showUnauthorizedPage={true}>
          <CostCategories />
        </RoleAccess>),
      errorElement: withFallback(<ErrorPage />),
    },
    {
      path: "cost-centers",
      element: withFallback(
        <RoleAccess roles={["cost-centers"]} showUnauthorizedPage={true}>
          <CostCenters />
        </RoleAccess>),
      errorElement: <ErrorPage />,
    },
    {
      path: "check-books",
      element: withFallback(
        <RoleAccess roles={["check-books"]} showUnauthorizedPage={true}>
          <CheckBooks />
        </RoleAccess>),
      errorElement: <ErrorPage />,
    },
    {
      path: "projects",
      element: withFallback(
        <RoleAccess roles={["projects"]} showUnauthorizedPage={true}>
          <Projects />
        </RoleAccess>),
      errorElement: <ErrorPage />,
    },
    {
      path: "accounts-settings",
      element: withFallback(
        <RoleAccess roles={["settings"]} showUnauthorizedPage={true}>
          <AccountSettings />
        </RoleAccess>),
      errorElement: <ErrorPage />,
    },
    /*     , */
    {
      path: "opening-balance/",
      // element: <RoleAccessOutlet roles={["entries"]}  />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(
            <RoleAccess roles={["entries"]} showUnauthorizedPage={true}>
              <OpeningBalance />
            </RoleAccess>),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["entries.create"]} showUnauthorizedPage={true}>
              <AddOpeningBalanceForm />
            </RoleAccess>),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["entries.edit"]} showUnauthorizedPage={true}>
              <AddOpeningBalanceForm />
            </RoleAccess>),
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
          element: withFallback(
            <RoleAccess roles={["budgets", "entries"]} requireAll showUnauthorizedPage={true}>
              <Budget />
            </RoleAccess>),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["budgets.create"]} showUnauthorizedPage={true}>
              <AddBudgetForm />
            </RoleAccess>),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["budgets.edit"]} showUnauthorizedPage={true}>
              <AddBudgetForm />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "journal-voucher/",
      // element: <RoleAccessOutlet roles={["entries"]}  />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(
            <RoleAccess roles={["entries"]} showUnauthorizedPage={true}>
              <JournalVoucher />
            </RoleAccess>),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["entries.create"]} showUnauthorizedPage={true}>
              <AddJournalForm />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["entries.edit"]} showUnauthorizedPage={true}>
              <AddJournalForm />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "receipt-voucher",
      // element: <RoleAccessOutlet roles={["entries"]}  />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(
            <RoleAccess roles={["entries"]} showUnauthorizedPage={true}>
              <ReceptVoucher />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["entries.create"]} showUnauthorizedPage={true}>
              <AddReceiptForm />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["entries.edit"]} showUnauthorizedPage={true}>
              <AddReceiptForm />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "payment-voucher",
      // element: <RoleAccessOutlet roles={["entries"]}  />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(
            <RoleAccess roles={["entries"]} showUnauthorizedPage={true}>
              <PaymentVoucher />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["entries.create"]} showUnauthorizedPage={true}>
              <AddPaymentForm />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["entries.edit"]} showUnauthorizedPage={true}>
              <AddPaymentForm />
            </RoleAccess>),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "contra-voucher",
      // element: <RoleAccessOutlet roles={["entries"]}  />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: withFallback(
            <RoleAccess roles={["entries"]} showUnauthorizedPage={true}>
              <ContraVoucher />
            </RoleAccess> ),
          errorElement: <ErrorPage />,
        },
        {
          path: "add",
          element: withFallback(
            <RoleAccess roles={["entries.create"]} showUnauthorizedPage={true}>
              <AddContraForm />
            </RoleAccess>),
          errorElement: <ErrorPage />,
        },
        {
          path: "edit/:id",
          element: withFallback(
            <RoleAccess roles={["entries.edit"]} showUnauthorizedPage={true}>
              <AddContraForm />
            </RoleAccess> ),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "reports/",
      element: <RoleAccessOutlet roles={["reports"]}  />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "general-ledger",
          element: withFallback(
            <RoleAccess roles={["reports.general.ledger"]} showUnauthorizedPage={true}>
              <GeneralLedger />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
        {
          path: "transaction",
          element: withFallback(
            <RoleAccess roles={["reports.transaction"]} showUnauthorizedPage={true}>
              <Transaction />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
        {
          path: "cash-book",
          element: withFallback(
            <RoleAccess roles={["reports.cash-book"]} showUnauthorizedPage={true}>
              <CashBook />
            </RoleAccess>),
          errorElement: <ErrorPage />,
        },
        {
          path: "trial-balance",
          element: withFallback(
            <RoleAccess roles={["reports.trial.balance"]} showUnauthorizedPage={true}>
              <TrialBalance />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
        {
          path: "income-statement",
          element: withFallback(
            <RoleAccess roles={["reports.income.statement"]} showUnauthorizedPage={true}>
              <IncomeStatement />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
        {
          path: "balance-sheet",
          element: withFallback(
            <RoleAccess roles={["reports.balance.sheet"]} showUnauthorizedPage={true}>
              <BalanceSheet />
            </RoleAccess>
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: "detailed-general-ledger/:ledgerId",
          element: withFallback(
            <RoleAccess roles={["reports.detailed.ledger"]} showUnauthorizedPage={true}>
              <DetailedGeneralLedger />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
        {
          path: "detailed-general-ledger",
          element: withFallback(
            <RoleAccess roles={["reports.detailed.ledger"]} showUnauthorizedPage={true}>
              <DetailedGeneralLedger />
            </RoleAccess>
        ),
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "*",
      element: withFallback(<NotFoundPage />),
    },
  ],
};

export default accountsRoutes;
