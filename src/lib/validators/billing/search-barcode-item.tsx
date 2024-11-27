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
}

export interface UpdateSearchBarcodeItem
  extends Omit<SearchBarcodeItem, "primary_unit" | "secondary_unit"> {
  unit: SearchBarcodeItemUnit;
}
