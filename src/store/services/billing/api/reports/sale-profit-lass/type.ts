export type SaleProfitLassType = {
  date: string;
  invoice_number: string;
  customer: string;
  item_name: string;
  item_barcode: string;
  quantity: string | number; // number for totals, string for individual entries
  item_price: string;
  sub_total: string;
  cost_per_unit: string;
  total_cost: string;
  net_profit: string;
};

type TotalProfitLassType = {
  quantity: number;
  sub_total: number;
  total_cost: number;
  net_profit: number;
};

export type SaleWiseProfitLossDataType = {
  sales: SaleProfitLassType[];
  start_date: string;
  end_date: string;
  total: TotalProfitLassType;
};
