import { TaxRow } from "../accounts/tax";

// Type for the unit object (primary and secondary unit share the same structure)
export interface SearchBarcodeItemUnit {
  id: number;
  name: string;
  selling_price: number;
  discount: number;
  discount_amount: number;
  after_discount: number;
  wholesale_price: number;
}

// Main product type
export interface SearchBarcodeItem {
  id: number;
  name: string;
  barcode: string;
  barcode_attribute: string;
  primary_unit: SearchBarcodeItemUnit;
  secondary_unit: SearchBarcodeItemUnit;
  sale_account_tax: TaxRow;
  purchase_account_tax: TaxRow;
  inventory_account_tax: TaxRow;
}

export interface UpdateSearchBarcodeItem
  extends Omit<SearchBarcodeItem, "primary_unit" | "secondary_unit"> {
  unit: SearchBarcodeItemUnit;
}
