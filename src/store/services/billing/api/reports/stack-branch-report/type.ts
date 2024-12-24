export type StockBatchDataType = {
  message: string;
  status: boolean;
  data: {
    item_name: string;
    item_barcode: string | null;
    supplier: string | null;
    stock_in_date: string | null;
    batch_code: string | null;
    warehouse: string;
    qty: string;
    price: string;
    stock_value: string;
  }[];
  total: {
    qty: string;
    price: string;
    stock_value: string;
  };
  start_date: string;
  end_date: string;
};
