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
        title: "Units",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/units",
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
        title: "Child Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/child-category",
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
        href: "/billing/payments-received",
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
        title: "Manage Purchase",
        icon: Soup,
        href: "/billing/manage-purchase",
        color: "text-sky-500",
      },
      {
        title: "Purchase Receive",
        icon: Soup,
        href: "/billing/purchase-receive",
        color: "text-sky-500",
      },
      {
        title: "Payment Made",
        icon: Soup,
        href: "/billing/made-payment",
        color: "text-sky-500",
      },

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
        title: "Master Sales Report",
        icon: UserRoundSearch,
        href: "master-sales",
        color: "text-sky-500",
      },
      {
        title: "Product wise sales",
        icon: UserRoundSearch,
        href: "product-sales",
        color: "text-sky-500",
      },
      {
        title: "Purchase Report",
        icon: UserRoundSearch,
        href: "purchase-report",
        color: "text-sky-500",
      },
      // {
      //   title: "Product Wise Purchase",
      //   icon: UserRoundSearch,
      //   href: "leave-balance",
      //   color: "text-sky-500",
      // },
      {
        title: "Stock Summary",
        icon: UserRoundSearch,
        href: "stock-summary",
        color: "text-sky-500",
      },
      {
        title: "Stock Ledger",
        icon: UserRoundSearch,
        href: "stock-ledger",
        color: "text-sky-500",
      },
      {
        title: "Customer Summary",
        icon: UserRoundSearch,
        href: "customer-summary",
        color: "text-sky-500",
      },
      {
        title: "Customer Ledger",
        icon: UserRoundSearch,
        href: "customer-ledger",
        color: "text-sky-500",
      },
      {
        title: "Due Receivable Report",
        icon: UserRoundSearch,
        href: "due-receivable-report",
        color: "text-sky-500",
      },
      {
        title: "Due Received Report",
        icon: UserRoundSearch,
        href: "due-received-report",
        color: "text-sky-500",
      },
      // {
      //   title: "Supplier Summary",
      //   icon: UserRoundSearch,
      //   href: "leave-balance",
      //   color: "text-sky-500",
      // },
      // {
      //   title: "Supplier Ledger",
      //   icon: UserRoundSearch,
      //   href: "leave-balance",
      //   color: "text-sky-500",
      // },
      // {
      //   title: "Due Payable Report",
      //   icon: UserRoundSearch,
      //   href: "leave-balance",
      //   color: "text-sky-500",
      // },
      // {
      //   title: "Due Paid Report",
      //   icon: UserRoundSearch,
      //   href: "leave-balance",
      //   color: "text-sky-500",
      // },
      // {
      //   title: "Product wise Profit/Loss",
      //   icon: UserRoundSearch,
      //   href: "leave-balance",
      //   color: "text-sky-500",
      // },
      // {
      //   title: "Invoice wise Profit/Loss",
      //   icon: UserRoundSearch,
      //   href: "leave-balance",
      //   color: "text-sky-500",
      // },
      // {
      //   title: "Customer wise Profit/Loss",
      //   icon: UserRoundSearch,
      //   href: "leave-balance",
      //   color: "text-sky-500",
      // },
      // {
      //   title: "Sales Tax Report",
      //   icon: UserRoundSearch,
      //   href: "leave-balance",
      //   color: "text-sky-500",
      // },
      // {
      //   title: "Purchase Tax Report",
      //   icon: UserRoundSearch,
      //   href: "leave-balance",
      //   color: "text-sky-500",
      // },

    ],
  },

  {
    title: "Billing Setting",
    icon: Settings,
    href: "billing/new-route",
    color: "text-sky-500",
  },
];

export default billingNavItems;
