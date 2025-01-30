export interface itemWiseSaleReportDataType {
  date: string | null;
  sale_slip_no: string | null;
  sold_to_customer: string | null;
  sell_qty: number;
  sell_price: number;
  sub_total_amount: number;
  gross_profit: number;
  item: string | null;
  item_barcode: string | null;
}
