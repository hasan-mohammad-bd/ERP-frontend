import { NavItem } from "@/types";
import {
  BarChartBigIcon,
  Clock,
  Cone,
  Construction,
  LayoutDashboard,
  MapPin,
  Settings,
  SquarePlus,
} from "lucide-react";

const accountsNavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/accounts",
    color: "text-sky-500",
    permissions: ["settings", "entries", "ledger-accounts", "reports"],
  },

  {
    title: "Account Settings",
    icon: Settings,
    href: "/accounts",
    color: "text-sky-500",
    permissions: ["settings", "check-books", "ledger-accounts"],
    isChildren: true,
    children: [
      {
        title: "Financial Year",
        icon: Clock,
        href: "/accounts/financial-year",
        color: "text-sky-500",
        permissions: ["financial-years"],
      },
      {
        title: "Chart Of Account",
        icon: MapPin,
        href: "/accounts/chart-of-accounts",
        color: "text-sky-500",
        permissions: ["ledger-groups", "ledger-accounts"],
      },
      {
        title: "Contact",
        icon: MapPin,
        href: "/accounts/contact",
        color: "text-sky-500",
        permissions: ["sub-accounts"],
      },
      {
        title: "Cost Categories",
        icon: Construction,
        href: "/accounts/cost-categories",
        color: "text-sky-500",
        permissions: ["cost-categories"],
      },
      {
        title: "Cost Centers",
        icon: Cone,
        href: "/accounts/cost-centers",
        color: "text-sky-500",
        permissions: ["cost-centers"],
      },
      {
        title: "Check Books",
        icon: Cone,
        href: "/accounts/check-books",
        color: "text-sky-500",
        permissions: ["check-books"],
      },
      {
        title: "Projects",
        icon: Cone,
        href: "/accounts/projects",
        color: "text-sky-500",
        permissions: ["projects"],
      },
      {
        title: "Currency",
        icon: Settings,
        href: "/accounts/accounts-settings",
        color: "text-sky-500",
        permissions: ["settings"],
      },
      {
        title: "Tax",
        icon: Settings,
        href: "/accounts/tax",
        color: "text-sky-500",
        permissions: ["settings"],
      },
    ],
  },

  {
    title: "Entries",
    icon: SquarePlus,
    href: "/accounts/entry",
    color: "text-sky-500",
    permissions: ["entries"],
    isChildren: true,
    children: [
      {
        title: "Opening Balance",
        icon: Clock,
        href: "/accounts/opening-balance",
        color: "text-sky-500",
        permissions: ["entries"],
      },
      {
        title: "Budget",
        icon: Clock,
        href: "/accounts/budget",
        color: "text-sky-500",
        permissions: ["budgets"],
      },
      {
        title: "Journal Voucher",
        icon: Clock,
        href: "/accounts/journal-voucher",
        color: "text-sky-500",
        permissions: ["entries"],
      },
      {
        title: "Received Voucher",
        icon: Clock,
        href: "/accounts/receipt-voucher",
        color: "text-sky-500",
        permissions: ["entries"],
      },
      {
        title: "Payment Voucher",
        icon: Clock,
        href: "/accounts/payment-voucher",
        color: "text-sky-500",
        permissions: ["entries"],
      },
      {
        title: "Contra Voucher",
        icon: Clock,
        href: "/accounts/contra-voucher",
        color: "text-sky-500",
        permissions: ["entries"],
      },
    ],
  },
  {
    title: "Reports",
    icon: BarChartBigIcon,
    href: "/accounts/reports",
    color: "text-sky-500",
    permissions: ["reports"],
    isChildren: true,
    children: [
      {
        title: "Cash Book",
        icon: Clock,
        href: "/accounts/reports/cash-book",
        color: "text-sky-500",
        permissions: ["reports.cash-book"],
      },
      {
        title: "Transaction",
        icon: Clock,
        href: "/accounts/reports/transaction",
        color: "text-sky-500",
        permissions: ["reports.transaction"],
      },
      {
        title: "General Ledger",
        icon: Clock,
        href: "/accounts/reports/general-ledger",
        color: "text-sky-500",
        permissions: ["reports.general.ledger"],
      },
      {
        title: "GL Details",
        icon: Clock,
        href: "/accounts/reports/detailed-general-ledger",
        color: "text-sky-500",
        permissions: ["reports.detailed.ledger"],
      },
      {
        title: "Trail Balance",
        icon: Clock,
        href: "/accounts/reports/trial-balance",
        color: "text-sky-500",
        permissions: ["reports.trial.balance"],
      },
      {
        title: "Income Statement",
        icon: Clock,
        href: "/accounts/reports/income-statement",
        color: "text-sky-500",
        permissions: ["reports.income.statement"],
      },
      {
        title: "Balance Sheet",
        icon: Clock,
        href: "/accounts/reports/balance-sheet",
        color: "text-sky-500",
        permissions: ["reports.balance.sheet"],
      },
      /* 			{
				title: "Trial Balance",
				icon: Clock,
				href: "/accounts/trial-balance",
				color: "text-sky-500",
			},
			{
				title: "Balance Sheet",
				icon: Clock,
				href: "/accounts/balance-sheet",
				color: "text-sky-500",
			}, */
    ],
  },
  {
    title: "Approvals",
    icon: Settings,
    href: "/accounts",
    color: "text-sky-500",
    permissions: ["settings", "entries"],
    isChildren: true,
    children: [
      {
        title: "Pending for Approvals",
        icon: Clock,
        href: "/accounts/approvals/pending",
        color: "text-sky-500",
        permissions: ["settings", "entries"],
      },
      {
        title: "Approved List",
        icon: Clock,
        href: "/accounts/approvals/approved",
        color: "text-sky-500",
        permissions: ["settings", "entries"],
      },
      {
        title: "Rejected List",
        icon: Clock,
        href: "/accounts/approvals/rejected",
        color: "text-sky-500",
        permissions: ["settings", "entries"],
      },
    ],
  },
];

export default accountsNavItems;
