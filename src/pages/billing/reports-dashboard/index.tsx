import ReportsDashboard from "@/components/common/reports-dashboard";
import { ReportDashboardItem } from "@/types";

 const BILLING_REPORTS:ReportDashboardItem<"trader" | "sales" | "purchase" | "inventory" | "test">[] = [
  // Trader Reports
  { name: "Supplier Statement", category: "trader", href: "/billing/reports/supplier-statement" },
  { name: "Supplier Detail Statement", category: "trader", href: "/billing/reports/supplier-details-statement" },
  { name: "Customer Collection", category: "trader", href: "/billing/reports/customer-collection" },
  { name: "Supplier Ledger", category: "trader", href: "/billing/reports/supplier-ledger" },
  { name: "Customer Ledger", category: "trader", href: "/billing/reports/customer-ledger" },
  { name: "Customer Detail Statement", category: "trader" , href: "/billing/reports/customer-details-statement-report"},
  { name: "Aged Receivable Report", category: "trader", href:"/billing/reports/aged-receivable-report" },
  { name: "Receivable Report", category: "trader", href: "/billing/reports/receivable-report" },
  { name: "Payable Report", category: "trader", href: "/billing/reports/payable-report" },
  { name: "Aged Payable Report", category: "trader", href: "/billing/reports/aged-payable-report" },
  { name: "Customer Statement", category: "trader", href: "/billing/reports/customer-statement-report" },

  // Sales Reports
  { name: "Month to Date Sales", category: "sales", href: "/billing/reports/month-to-date-sale-report" },
  { name: "Item Sale Summary", category: "sales", href: "/billing/reports/item-sale-summary" },
  { name: "Sale Wise Profit/Loss", category: "sales", href: "/billing/reports/sale-wise-profit-lass" },
  { name: "Representative Wise Sale", category: "sales", href: "/billing/reports/representative-wise-sale-report" },
  { name: "Supplier Wise Sale Report", category: "sales", href: "/billing/reports/supplier-wise-sales-report" },
  { name: "Customer Wise Item Profit", category: "sales", href: "/billing/reports/customer-wise-item-profit" },
  { name: "Item Wise Sales Report", category: "sales", href: "/billing/reports/item-wise-sales-report" },
  { name: "Top Sold Items", category: "sales", href: "/billing/reports/top-sold-items" },
  { name: "Sales Register", category: "sales", href: "/billing/reports/sales-register" },
  { name: "Warehouse wise item sales", category: "sales", href: "/billing/reports/warehouse-wise-item-sale-summary" },
  
  // Purchase Reports
  { name: "Purchase Register", category: "purchase", href: "/billing/reports/purchase-register" },
  { name: "Item wise Purchase", category: "purchase" , href: "/billing/reports/item-wise-purchase" },
  { name: "Supplier wise Purchase", category: "purchase", href: "/billing/reports/supplier-wise-purchase" },
  
  // Inventory Reports
  { name: "Stock Report", category: "inventory", href: "/billing/reports/stock-report" },
  { name: "Stock Batch Report", category: "inventory" , href: "/billing/reports/stock-batch-report" },
  { name: "Stock Item Summary Report", category: "inventory", href: "/billing/reports/stock-item-summary-report" },
  { name: "Stock Transaction Report", category: "inventory", href: "/billing/reports/stock-transaction-report" },
];


export default function BillingReportsDashboard() {
  return (
     <ReportsDashboard reports={BILLING_REPORTS} />
  )
}
