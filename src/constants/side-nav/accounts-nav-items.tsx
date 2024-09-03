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
  },

  {
    title: "Account Settings",
    icon: Settings,
    href: "/accounts",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Financial Year",
        icon: Clock,
        href: "/accounts/financial-year",
        color: "text-sky-500",
      },
      {
        title: "Chart Of Account",
        icon: MapPin,
        href: "/accounts/chart-of-accounts",
        color: "text-sky-500",
      },
      {
        title: "Contact",
        icon: MapPin,
        href: "/accounts/contact",
        color: "text-sky-500",
      },
      {
        title: "Cost Categories",
        icon: Construction,
        href: "/accounts/cost-categories",
        color: "text-sky-500",
      },
      {
        title: "Cost Centers",
        icon: Cone,
        href: "/accounts/cost-centers",
        color: "text-sky-500",
      },
      {
        title: "Projects",
        icon: Cone,
        href: "/accounts/projects",
        color: "text-sky-500",
      },
			{
				title: "Currency",
				icon: Settings,
				href: "/accounts/accounts-settings",
				color: "text-sky-500",
			},
    ],
  },


  {
    title: "Entries",
    icon: SquarePlus,
    href: "/accounts/entry",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Opening Balance",
        icon: Clock,
        href: "/accounts/opening-balance",
        color: "text-sky-500",
      },
      {
        title: "Budget",
        icon: Clock,
        href: "/accounts/budget",
        color: "text-sky-500",
      },
      {
        title: "Journal Voucher",
        icon: Clock,
        href: "/accounts/journal-voucher",
        color: "text-sky-500",
      },
      {
        title: "Receipt Voucher",
        icon: Clock,
        href: "/accounts/receipt-voucher",
        color: "text-sky-500",
      },
      {
        title: "Payment Voucher",
        icon: Clock,
        href: "/accounts/payment-voucher",
        color: "text-sky-500",
      },
      {
        title: "Contra Voucher",
        icon: Clock,
        href: "/accounts/contra-voucher",
        color: "text-sky-500",
      },
    ],
  },
  {
    title: "Reports",
    icon: BarChartBigIcon ,
    href: "/accounts/reports",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Cash Book",
        icon: Clock,
        href: "/accounts/reports/cash-book",
        color: "text-sky-500",
      },
      {
        title: "Transaction",
        icon: Clock,
        href: "/accounts/reports/transaction",
        color: "text-sky-500",
      },
      {
        title: "General Ledger",
        icon: Clock,
        href: "/accounts/reports/general-ledger",
        color: "text-sky-500",
      },
      {
        title: "GL Details",
        icon: Clock,
        href: "/accounts/reports/detailed-general-ledger",
        color: "text-sky-500",
      },
      {
        title: "Trail Balance",
        icon: Clock,
        href: "/accounts/reports/trial-balance",
        color: "text-sky-500",
      },
      {
        title: "Income Statement",
        icon: Clock,
        href: "/accounts/reports/income-statement",
        color: "text-sky-500",
      },
      {
        title: "Balance Sheet",
        icon: Clock,
        href: "/accounts/reports/balance-sheet",
        color: "text-sky-500",
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
];

export default accountsNavItems;
