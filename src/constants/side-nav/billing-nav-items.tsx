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
    permissions: ["hrm"],
  },
  {
    title: "Items",
    icon: Users,
    href: "/billing",
    color: "text-sky-500",
    permissions: ["hrm"],
    isChildren: true,
    children: [
      {
        title: "Units",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/units",
        permissions: ["hrm"],
      },

      {
        title: "Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/category",
        permissions: ["hrm"],
      },

      {
        title: "Sub Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/sub-category",
        permissions: ["hrm"],
      },

      {
        title: "Child Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/child-category",
        permissions: ["hrm"],
      },

      {
        title: "Brand",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/brand",
        permissions: ["hrm"],
      },

      {
        title: "Items",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/items",
        permissions: ["hrm"],
      },


    ],
  },

  {
    title: "Sales",
    icon: CalendarCheck2,
    href: "/billing",
    color: "text-sky-500",
    permissions: ["hrm"],
    isChildren: true,
    children: [
      {
        title: "Customers",
        icon: PlayIcon,
        href: "/billing/customers",
        color: "text-sky-500",
        permissions: ["hrm"],
      },

      {
        title: "Quotes",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/quotes",
        permissions: ["hrm"],
      },
      {
        title: "Invoices",
        icon: Clock,
        href: "/billing/invoices",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Sales Receipts",
        icon: ScrollText,
        href: "/billing/sales-receipts",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Payment Received",
        icon: Soup,
        href: "/billing/payments-received",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Recurring Invoice",
        icon: PlayIcon,
        href: "/billing/recurring-invoice",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Credit Notes",
        icon: PlayIcon,
        href: "/billing/credit-notes",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
    ],
  },

  {
    title: "Purchases",
    icon: Clock,
    href: "/billing",
    color: "text-sky-500",
    permissions: ["hrm"],
    isChildren: true,
    children: [
      {
        title: "Supplier",
        icon: Clock,
        href: "/billing/supplier",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Expenses",
        icon: Clock,
        href: "/billing/expenses",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Recurring expenses",
        icon: Clock,
        href: "/billing/recurring-expenses",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Bills",
        icon: Soup,
        href: "/billing/bills",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Payments made",
        icon: Soup,
        href: "/billing/payments-made",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Recurring Bills",
        icon: Soup,
        href: "/billing/recurring-bills",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Debit Note",
        icon: Soup,
        href: "/billing/debit-note",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Purchase Orders",
        icon: Soup,
        href: "/billing/purchase-orders",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Manage Purchase",
        icon: Soup,
        href: "/billing/manage-purchase",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Purchase Receive",
        icon: Soup,
        href: "/billing/purchase-receive",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Payment Made",
        icon: Soup,
        href: "/billing/made-payment",
        color: "text-sky-500",
        permissions: ["hrm"],
      },

    ],
  },

  {
    title: "inventory",
    icon: CalendarCheck2,
    href: "/billing",
    color: "text-sky-500",
    permissions: ["hrm"],
    isChildren: true,
    children: [
      {
        title: "Stock",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/employee-salary-payslip",
        permissions: ["hrm"],
      },
      {
        title: "Adjustment",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/bank-salary-advice",
        permissions: ["hrm"],
      },
      {
        title: "Transfer",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/salary_breakup",
        permissions: ["hrm"],
      },

      {
        title: "Transfer list",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/salary-certificate",
        permissions: ["hrm"],
      },
      {
        title: "Received list",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/salary-sheet",
        permissions: ["hrm"],
      },

    ],
  },


  {
    title: "Reports",
    icon: NotebookText,
    href: "/billing",
    color: "text-sky-500",
    permissions: ["hrm"],
    isChildren: true,
    children: [
      {
        title: "Master Sales Report",
        icon: UserRoundSearch,
        href: "master-sales",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Product wise sales",
        icon: UserRoundSearch,
        href: "product-sales",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Purchase Report",
        icon: UserRoundSearch,
        href: "purchase-report",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Stock Summary",
        icon: UserRoundSearch,
        href: "stock-summary",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Stock Ledger",
        icon: UserRoundSearch,
        href: "stock-ledger",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Customer Summary",
        icon: UserRoundSearch,
        href: "customer-summary",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Customer Ledger",
        icon: UserRoundSearch,
        href: "customer-ledger",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Due Receivable Report",
        icon: UserRoundSearch,
        href: "due-receivable-report",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Due Received Report",
        icon: UserRoundSearch,
        href: "due-received-report",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Supplier Summary",
        icon: UserRoundSearch,
        href: "supplier-summary",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Supplier Ledger",
        icon: UserRoundSearch,
        href: "supplier-ledger",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Due Payable Report",
        icon: UserRoundSearch,
        href: "due-payable-report",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Due Paid Report",
        icon: UserRoundSearch,
        href: "due-paid-report",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Product wise Profit/Loss",
        icon: UserRoundSearch,
        href: "product-profit-loss",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Invoice wise Profit/Loss",
        icon: UserRoundSearch,
        href: "invoice-profit-loss",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Customer wise Profit/Loss",
        icon: UserRoundSearch,
        href: "customer-profit-loss",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Sales Tax Report",
        icon: UserRoundSearch,
        href: "sales-tax-report",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Purchase Tax Report",
        icon: UserRoundSearch,
        href: "purchase-tax-report",
        color: "text-sky-500",
        permissions: ["hrm"],
      },

    ],
  },

  {
    title: "Billing Setting",
    icon: Settings,
    href: "billing/new-route",
    color: "text-sky-500",
    permissions: ["hrm"],
  },
];

export default billingNavItems;
