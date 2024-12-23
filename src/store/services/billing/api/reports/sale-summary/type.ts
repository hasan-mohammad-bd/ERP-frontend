type ItemSummary = {
  item_name: string;
  item_barcode: string;
  quantity: string; // Assuming quantity as string
  sale_amount: string;
  cost: string;
  gross_profit: string;
};

export type TotalSummaryReport = {
  quantity: string;
  sale_amount: string;
  cost: string;
  gross_profit: string;
};

export type ItemSaleSummaryDataType = {
  items_summary: ItemSummary[];
  start_date: string; // ISO format date
  end_date: string;   // ISO format date
  total: TotalSummaryReport;
};
