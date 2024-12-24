export type WarehouseSaleItemBarcodeType = {
  item_name: string;
  barcode: string;
  warehouse_name: string;
  unit: string;
  opening_qty: number;
  in_qty: number;
  out_qty: number;
  closing_qty: number;
};

export type WarehouseSaleItemBarcodeTotals = {
  total_opening_qty: number;
  total_in_qty: number;
  total_out_qty: number;
  total_closing_qty: number;
};

export type StockItemSummaryReportType = {
  message: string;
  status: boolean;
  data: WarehouseSaleItemBarcodeType[];
  totals: WarehouseSaleItemBarcodeTotals;
  start_date?: string;
  end_date?: string
};
