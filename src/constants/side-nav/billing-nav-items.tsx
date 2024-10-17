import { NavItem } from "@/types";
import {
  CalendarCheck2,
  Clock,
  LayoutDashboard,
  NotebookText,
  PlayIcon,
  ScrollText,
  Settings,
  Soup,
  UserRoundSearch,
  Users,

} from "lucide-react";

const billingNavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/billing",
    color: "text-sky-500",
  },
  {
    title: "Items",
    icon: Users,
    href: "/billing",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Unit",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/unit",
      },

      {
        title: "Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/category",
      },

      {
        title: "Sub Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/sub-category",
      },

      {
        title: "Class Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/class-category",
      },

      {
        title: "Brand",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/brand",
      },

      {
        title: "Items",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/items",
      },


    ],
  },

  {
    title: "Sales",
    icon: CalendarCheck2,
    href: "/billing",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Customers",
        icon: PlayIcon,
        href: "/billing/customers",
        color: "text-sky-500",
      },

      {
        title: "Quotes",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/quotes",
      },
      {
        title: "Invoices",
        icon: Clock,
        href: "/billing/invoices",
        color: "text-sky-500",
      },
      {
        title: "Sales Receipts",
        icon: ScrollText,
        href: "/billing/sales-receipts",
        color: "text-sky-500",
      },
      {
        title: "Payment Received",
        icon: Soup,
        href: "/billing/payment-received",
        color: "text-sky-500",
      },
      {
        title: "Recurring Invoice",
        icon: PlayIcon,
        href: "/billing/recurring-invoice",
        color: "text-sky-500",
      },
      {
        title: "Credit Notes",
        icon: PlayIcon,
        href: "/billing/credit-notes",
        color: "text-sky-500",
      },
    ],
  },

  {
    title: "Purchases",
    icon: Clock,
    href: "/billing",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Supplier",
        icon: Clock,
        href: "/billing/supplier",
        color: "text-sky-500",
      },
      {
        title: "Expenses",
        icon: Clock,
        href: "/billing/expenses",
        color: "text-sky-500",
      },
      {
        title: "Recurring expenses",
        icon: Clock,
        href: "/billing/recurring-expenses",
        color: "text-sky-500",
      },
      {
        title: "Bills",
        icon: Soup,
        href: "/billing/bills",
        color: "text-sky-500",
      },
      {
        title: "Payments made",
        icon: Soup,
        href: "/billing/payments-made",
        color: "text-sky-500",
      },
      {
        title: "Recurring Bills",
        icon: Soup,
        href: "/billing/recurring-bills",
        color: "text-sky-500",
      },
      {
        title: "Debit Note",
        icon: Soup,
        href: "/billing/debit-note",
        color: "text-sky-500",
      },
      {
        title: "Purchase Orders",
        icon: Soup,
        href: "/billing/purchase-orders",
        color: "text-sky-500",
      },
      {
        title: "Purchase Receive",
        icon: Soup,
        href: "/billing/purchase-receive",
        color: "text-sky-500",
      }
    ],
  },

  {
    title: "inventory",
    icon: CalendarCheck2,
    href: "/billing",
    color: "text-sky-500",
    isChildren: true,
    children: [
      {
        title: "Stock",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/employee-salary-payslip",
      },
      {
        title: "Adjustment",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/bank-salary-advice",
      },
      {
        title: "Transfer",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/salary_breakup",
      },

      {
        title: "Transfer list",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/salary-certificate",
      },
      {
        title: "Received list",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/salary-sheet",
      },

    ],
  },


  {
    title: "Reports",
    icon: NotebookText,
    href: "/billing",
    color: "text-sky-500",
    isChildren: true,

    children: [
      {
        title: "Leave Summary",
        icon: UserRoundSearch,
        href: "leave-summary",
        color: "text-sky-500",
      },
      {
        title: "Leave Balance",
        icon: UserRoundSearch,
        href: "leave-balance",
        color: "text-sky-500",
      },
    ],
  },

  {
    title: "billing Setting",
    icon: Settings,
    href: "billing/new-route",
    color: "text-sky-500",
  },
];

export default billingNavItems;
