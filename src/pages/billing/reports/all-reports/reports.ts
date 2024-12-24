export interface Report {
  name: string;
  category: "trader" | "sales" | "purchase";
  href?: string;
}

export const reports: Report[] = [
  // Trader Reports
  { name: "Customer Statement", category: "trader" },
  { name: "Customer Detail Statement", category: "trader" },
  { name: "Supplier Statement", category: "trader" },
  { name: "Customer Collection", category: "trader" },
  { name: "Aged Accounts Receivable", category: "trader" },
  { name: "Aged Accounts Payable", category: "trader" },
  { name: "Customer Ledger", category: "trader" },
  { name: "Supplier Ledger", category: "trader" },
  { name: "Supplier Detail Statement", category: "trader" },
  { name: "Receivable Report", category: "trader" },
  { name: "Payable Report", category: "trader" },

  // Sales Reports
  { name: "Customer Statement", category: "sales" },
  { name: "Customer Detail Statement", category: "sales" },
  { name: "Supplier Statement", category: "sales" },
  { name: "Customer Collection", category: "sales" },
  { name: "Aged Accounts Receivable", category: "sales" },
  { name: "Aged Accounts Payable", category: "sales" },
  { name: "Customer Ledger", category: "sales" },
  { name: "Supplier Ledger", category: "sales" },
  { name: "Supplier Detail Statement", category: "sales" },
  { name: "Receivable Report", category: "sales" },
  { name: "Payable Report", category: "sales" },

  // Purchase Reports
  { name: "Purchase Register Report", category: "purchase" },
  { name: "Supplier-wise Purchase Report", category: "purchase" },
  { name: "Item-wise Purchase Report", category: "purchase" },
];
