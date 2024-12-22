import { ItemBarCodeType } from "@/lib/validators/billing/items";
import { UnitRow } from "@/lib/validators/billing/unit";
import { WarehouseRow } from "@/lib/validators/billing/warehouse";

export type OpeningStockDataType = {
  id: number;
  date: string;
  item_id: number;
  item_barcode_id: number;
  unit_id: number;
  warehouse_id: number;
  qty: number;
  price: string;
  total: string;
  created_at: string;
  item_barcode: ItemBarCodeType;
  unit: UnitRow;
  warehouse: WarehouseRow;
};

type PrimaryUnit = {
  id: number;
  name: string;
  code: string;
  status: number;
};

export type ItemStockDataType = {
  item_id: number;
  item_name: string;
  warehouse_id: number;
  warehouse_name: string;
  stock_quantity: number;
  avg_price: number;
  primary_unit: PrimaryUnit;
};
