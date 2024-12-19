export interface TaxType {
    id: string;
    name: string;
  }

export const TAX_TYPES: TaxType[] = [
    { id: "inclusive", name: "Inclusive" },
    { id: "exclusive", name: "Exclusive" },
  ];