export type SupplierWiseSaleItemType = {
  item_name: string;
  item_barcode: string;
  sale_date: string; // Consider changing to Date if you parse it into a Date object
  invoice_number: string;
  customer_name: string;
  quantity: number;
  item_price: number;
  total_amount: number;
  total_cost: number;
  profit: number;
};

export type SupplierWiseSaleSummaryType = {
  quantity: number;
  total_amount: number;
  profit: number;
};



