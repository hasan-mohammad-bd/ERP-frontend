export interface Report {
  name: string;
  category: "trader" | "sales" | "purchase";
  href?: string;
}

export const reports: Report[] = [
  // Trader Reports
  { name: "Customer Statement", category: "trader", href: "/billing/customer-statement-report" },
  { name: "Customer Detail Statement", category: "trader" , href: "/billing/customer-details-statement-report"},
  { name: "Supplier Statement", category: "trader", href: "/billing/reports/supplier-statement" },
  { name: "Customer Collection", category: "trader", href: "/billing/customer-collection" },
  { name: "Aged Accounts Receivable", category: "trader", href:"/billing/aged-receivable-report" },
  { name: "Aged Accounts Payable", category: "trader", href: "/billing/aged-payable-report" },
  { name: "Customer Ledger", category: "trader", href: "/reports/customer-ledger" },
  { name: "Supplier Ledger", category: "trader", href: "/reports/supplier-ledger" },
  { name: "Supplier Detail Statement", category: "trader", href: "/billing/reports/supplier-details-statement" },
  { name: "Receivable Report", category: "trader", href: "/billing/receivable-report" },
  { name: "Payable Report", category: "trader", href: "/billing/payable-report" },

  // Sales Reports
  { name: "Customer Statement", category: "sales", href: "/billing/customer-statement-report" },
  { name: "Customer Detail Statement", category: "sales", href: "/billing/customer-details-statement-report" },
  { name: "Supplier Statement", category: "sales", href: "/billing/reports/supplier-statement" },
  { name: "Customer Collection", category: "sales", href: "/billing/customer-collection" },
  { name: "Aged Accounts Receivable", category: "sales", href: "/billing/aged-receivable-report" },
  { name: "Aged Accounts Payable", category: "sales", href: "/billing/aged-payable-report" },
  { name: "Customer Ledger", category: "sales", href: "/reports/customer-ledger" },
  { name: "Supplier Ledger", category: "sales", href: "/reports/supplier-ledger" },
  { name: "Supplier Detail Statement", category: "sales", href: "/billing/reports/supplier-details-statement" },
  { name: "Receivable Report", category: "sales", href: "/billing/receivable-report" },
  { name: "Payable Report", category: "sales", href: "/billing/payable-report" },

  // Purchase Reports
  { name: "Purchase Register Report", category: "purchase", href: "/billing/reports/purchase-register" },
  { name: "Supplier-wise Purchase Report", category: "purchase", href: "/billing/reports/supplier-wise-purchase-report" },
  { name: "Item-wise Purchase Report", category: "purchase" , href: "/billing/reports/item-wise-purchase-report" },
];
