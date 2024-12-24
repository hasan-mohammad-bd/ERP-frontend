export interface RepresentativeWiseSaleReport {
  representative_name: string;
  date: string;
  invoice_number: string;
  item_name: string;
  item_barcode: string;
  commission: string;
  quantity: string;
  total_amount: string;
}

export interface TotalSummary {
  commission: string;
  quantity: string;
  total_amount: string;
}
