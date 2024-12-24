type WarehouseReport = {
  stock_qty: number;
  warehouse: string;
  warehouse_id: number;
  unit_id: number;
  unit: string;
  sell_qty: number;
  sell_price: number;
};

export type WarehouseSaleItemBarcodeType = {
  item_barcode_id: number;
  item_id: number;
  item_name: string;
  item_barcode: string;
  warehouse_report: WarehouseReport[];
};
