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
    permissions: ["accounts"],
  },
  {
    title: "Items",
    icon: Users,
    href: "/billing",
    color: "text-sky-500",
    permissions: ["accounts"],
    isChildren: true,
    children: [
      {
        title: "Units",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/units",
        permissions: ["units"],
      },

      {
        title: "Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/category",
        permissions: ["categories"],
      },

      {
        title: "Sub Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/sub-category",
        permissions: ["categories"],
      },

      {
        title: "Child Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/child-category",
        permissions: ["categories"],
      },
      {
        title: "Attribute Category",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/attribute-category",
        permissions: ["attribute-categories"],
      },
      {
        title: "Attributes",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/attributes",
        permissions: ["attributes"],
      },

      {
        title: "Brand",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/brand",
        permissions: ["brands"],
      },

      {
        title: "Items",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/items",
        permissions: ["items"],
      },
    ],
  },

  {
    title: "Sales",
    icon: CalendarCheck2,
    href: "/billing",
    color: "text-sky-500",
    permissions: ["accounts"],
    isChildren: true,
    children: [
      {
        title: "Customers",
        icon: PlayIcon,
        href: "/billing/customers",
        color: "text-sky-500",
        permissions: ["customers"],
      },
      {
        title: "Quotes",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/quotes",
        permissions: ["accounts"],
      },
      {
        title: "Invoices",
        icon: Clock,
        href: "/billing/invoices",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Payment Received",
        icon: Soup,
        href: "/billing/payments-received",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Invoices Return",
        icon: Clock,
        href: "/billing/invoice-return",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Invoices Refund",
        icon: Soup,
        href: "/billing/invoice-refund",
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
    permissions: ["accounts"],
    isChildren: true,
    children: [
      {
        title: "Supplier",
        icon: Clock,
        href: "/billing/supplier",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Purchase Orders",
        icon: Soup,
        href: "/billing/purchase-orders",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Purchases",
        icon: Clock,
        href: "/billing/purchases",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Supplier Payment",
        icon: Soup,
        href: "/billing/supplier-payments",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Purchase Return",
        icon: Soup,
        href: "/billing/purchase-return",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Purchase Refund",
        icon: Soup,
        href: "/billing/purchase-refund",
        color: "text-sky-500",
        permissions: ["hrm"],
      },
      {
        title: "Expenses Category",
        icon: Clock,
        href: "/billing/expenses-category",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Expenses",
        icon: Clock,
        href: "/billing/expenses",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
    ],
  },

  {
    title: "Inventory",
    icon: CalendarCheck2,
    href: "/billing",
    color: "text-sky-500",
    permissions: ["accounts"],
    isChildren: true,
    children: [
      {
        title: "Stock List",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/stocks",
        permissions: ["stocks"],
      },
      {
        title: "Warehouse",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "/billing/warehouse",
        permissions: ["warehouses"],
      },
    ],
  },
  {
    title: "Others",
    icon: CalendarCheck2,
    href: "/billing",
    color: "text-sky-500",
    permissions:   [...import.meta.env.VITE_DEVELOPMENT_PERMISSIONS?.split(',') || ""], // under development
    isChildren: true,
    children: [
      {
        title: "Payment Terms",
        icon: Soup,
        href: "/billing/payment-terms",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Sales Receipts",
        icon: ScrollText,
        href: "/billing/sales-receipts",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Recurring Invoice",
        icon: PlayIcon,
        href: "/billing/recurring-invoice",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Credit Notes",
        icon: PlayIcon,
        href: "/billing/credit-notes",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Recurring expenses",
        icon: Clock,
        href: "/billing/recurring-expenses",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Bills",
        icon: Soup,
        href: "/billing/bills",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Recurring Bills",
        icon: Soup,
        href: "/billing/recurring-bills",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Debit Note",
        icon: Soup,
        href: "/billing/debit-note",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Manage Purchase",
        icon: Soup,
        href: "/billing/manage-purchase",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Purchase Receive",
        icon: Soup,
        href: "/billing/purchase-receive",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Payment Made",
        icon: Soup,
        href: "/billing/made-payment",
        color: "text-sky-500",
        permissions: ["accounts"],
      },

      {
        title: "Adjustment",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/bank-salary-advice",
        permissions: ["accounts"],
      },
      {
        title: "Transfer",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/salary_breakup",
        permissions: ["accounts"],
      },

      {
        title: "Transfer list",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/salary-certificate",
        permissions: ["accounts"],
      },
      {
        title: "Received list",
        icon: CalendarCheck2,
        color: "text-sky-500",
        href: "/billing/salary-sheet",
        permissions: ["accounts"],
      },
    ],
  },


  {
    title: "Reports",
    icon: NotebookText,
    href: "/billing",
    color: "text-sky-500",
    permissions: ["accounts"],
    isChildren: true,
    children: [
      {
        title: "All Reports",
        icon: UserRoundSearch,
        href: "reports/dashboard",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Supplier Statement",
        icon: UserRoundSearch,
        href: "reports/supplier-statement",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Supplier Details Statement",
        icon: UserRoundSearch,
        href: "reports/supplier-details-statement",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Customer Collection",
        icon: UserRoundSearch,
        href: "reports/customer-collection",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Supplier Ledger",
        icon: UserRoundSearch,
        href: "reports/supplier-ledger",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Customer Ledger",
        icon: UserRoundSearch,
        href: "reports/customer-ledger",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Customer Detail Statement",
        icon: UserRoundSearch,
        href: "reports/customer-details-statement-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Aged Receivable Report",
        icon: UserRoundSearch,
        href: "reports/aged-receivable-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Receivable Report",
        icon: UserRoundSearch,
        href: "reports/receivable-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Payable Report",
        icon: UserRoundSearch,
        href: "reports/payable-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      
      {
        title: "Aged Payable Report",
        icon: UserRoundSearch,
        href: "reports/aged-payable-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Customer Statement",
        icon: UserRoundSearch,
        href: "reports/customer-statement-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Sales Register",
        icon: UserRoundSearch,
        href: "reports/sales-register",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Item Sale Summary Report",
        icon: UserRoundSearch,
        href: "reports/item-sale-summary",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Sale Wise Profit/Loss",
        icon: UserRoundSearch,
        href: "reports/sale-wise-profit-lass",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Customer Wise Item Profit",
        icon: UserRoundSearch,
        href: "reports/customer-wise-item-profit",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Item Wise Sales Report",
        icon: UserRoundSearch,
        href: "reports/item-wise-sales-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Warehouse wise item sales",
        icon: UserRoundSearch,
        href: "reports/warehouse-wise-item-sale-summary",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Top Sold Items",
        icon: UserRoundSearch,
        href: "reports/top-sold-items",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Purchase Register",
        icon: UserRoundSearch,
        href: "reports/purchase-register",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Item Wise Purchase",
        icon: UserRoundSearch,
        href: "reports/item-wise-purchase",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Supplier Wise Purchase",
        icon: UserRoundSearch,
        href: "reports/supplier-wise-purchase",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Representative Wise Sale",
        icon: UserRoundSearch,
        href: "reports/representative-wise-sale-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      
      {
        title: "Stock Report",
        icon: UserRoundSearch,
        href: "reports/stock-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Stock Batch Report",
        icon: UserRoundSearch,
        href: "reports/stock-batch-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Stock Item Summary Report",
        icon: UserRoundSearch,
        href: "reports/stock-item-summary-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Stock Transaction Report",
        icon: UserRoundSearch,
        href: "reports/stock-transaction-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
    ],
  },
  {
    title: "Other Reports",
    icon: CalendarCheck2,
    href: "/billing",
    color: "text-sky-500",
    permissions: [...import.meta.env.VITE_DEVELOPMENT_PERMISSIONS?.split(',') || ""],
    isChildren: true,
    children: [
      {
        title: "Stock Ledger",
        icon: UserRoundSearch,
        href: "reports/stock-ledger",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Customer Summary",
        icon: UserRoundSearch,
        href: "reports/customer-summary",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Supplier Summary",
        icon: UserRoundSearch,
        href: "reports/supplier-summary",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Product wise Profit/Loss",
        icon: UserRoundSearch,
        href: "reports/product-profit-loss",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Invoice wise Profit/Loss",
        icon: UserRoundSearch,
        href: "reports/invoice-profit-loss",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Customer wise Profit/Loss",
        icon: UserRoundSearch,
        href: "reports/customer-profit-loss",
        color: "text-sky-500",
        permissions: ["accounts"],
      },

      {
        title: "Sales Tax Report",
        icon: UserRoundSearch,
        href: "reports/sales-tax-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Purchase Tax Report",
        icon: UserRoundSearch,
        href: "reports/purchase-tax-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Due Receivable Report",
        icon: UserRoundSearch,
        href: "reports/due-receivable-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Due Received Report",
        icon: UserRoundSearch,
        href: "reports/due-received-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Due Payable Report",
        icon: UserRoundSearch,
        href: "reports/due-payable-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
      {
        title: "Due Paid Report",
        icon: UserRoundSearch,
        href: "reports/due-paid-report",
        color: "text-sky-500",
        permissions: ["accounts"],
      },
    ],
  },
  {
    title: "Billing Setting",
    icon: Settings,
    href: "billing/new-route",
    color: "text-sky-500",
    permissions: [...import.meta.env.VITE_DEVELOPMENT_PERMISSIONS?.split(',') || ""],
  },
];

export default billingNavItems;
