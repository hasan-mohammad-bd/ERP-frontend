export interface CustomerWiseItemProfitDataType {
  message: string;
  status: boolean;
  data: CustomerWiseItemProfitItem[];
  start_date: string;
  end_date: string;
  total: {
    quantity: string;
    sale_amount: string;
    net_profit: string;
  };
}

export interface CustomerWiseItemProfitItem {
  item_name: string;
  item_barcode: string;
  quantity: string;
  sale_amount: string;
  net_profit: string;
}
