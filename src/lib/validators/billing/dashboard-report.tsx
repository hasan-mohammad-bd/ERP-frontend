export interface DashboardReports {
  today_paid_amount: string;
  today_credit_amount: string;
  todays_expense: string;
  total_cash: {
    balance: string;
  };
  total_bank_balance: string;
  total_payable: string;
  total_receivable: string;
  accounts_assets: AccountBillingDashboard[];
  accounts_liabilities: AccountBillingDashboard[];
  top_five_customers: CustomerDashboard[];
  top_five_sales: SaleDashboard[];
  monthly_sales: MonthlySalesBilling[];
  monthly_profit_loss: MonthlyProfitLoss[];
}

export interface AccountBillingDashboard {
  id: number;
  code: string;
  name: string;
  balance: number;
}

export interface CustomerDashboard {
  id: number;
  name: string;
  company_name: string;
  phone: string;
  email: string;
  sale_amount: string;
}

export interface SaleDashboard {
  item_id: number;
  item_name: string;
  item_barcode_id: number;
  item_barcode: string;
  total_sell_qty: string;
  total_sell_price: string;
}

export interface MonthlySalesBilling {
  month_key: string;
  month_name: string;
  amount: string | number;
}

export interface MonthlyProfitLoss {
  month_key: string;
  month_name: string;
  total_sales: number;
  total_expenses: number;
  profit: number;
}
