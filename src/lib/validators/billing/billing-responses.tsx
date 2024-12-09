import { OrganizationColumn } from "@/lib/validators";
import { LedgerRow } from "../accounts";
import { TaxRow } from "../accounts/tax";
import { UsersRow } from "../web/users";
import { PaymentTermRow } from "./payment-terms";
import { UnitRow } from "./unit";
import { WarehouseRow } from "./warehouse";

export interface InvoiceLineItemType {
  id: number;
  qty: number;
  price: number;
  discount: number;
  after_discount: number;
  total: number;
  note: string;
  item: {
    id: number;
    name: string;
    item_nature: string;
    image: string;
    primary_to_secondary_unit: string;
    sku: string;
    purchase_account_id: number;
    purchase_account_tax_id: number;
    sale_account_id: number;
    sale_account_tax_id: number;
    inventory_account_id: number;
    inventory_account_tax_id: number;
    track_inventory: number;
    manufacture: number;
    allow_sale: number;
    created_at: string;
  };
  item_barcode: {
    id: number;
    barcode: string;
    barcode_attribute: string;
    purchase_price: number;
    selling_price: number;
    discount: number;
    discount_amount: number;
    after_discount: number;
    wholesale_price: number;
    organization_id: number;
  };
  unit: UnitRow;
  tax: TaxRow | null;
  ledger_account: LedgerRow;
}

interface Contact {
  id: number;
  name: string;
  company_name: string;
  company_id: string;
  work_phone: string;
  phone: string;
  email: string;
  type: string;
  opening_balance: string;
  date: string;
  note: string;
  parent_id: null | any;
}

export interface Invoice {
  id: number;
  invoice_prifix: string;
  invoice_suffix: number;
  invoice_number: string;
  reference: string;
  date: string;
  delivery_date: string;
  due_date: string;
  discount_type: string;
  tax_type: string;
  tax: number;
  sub_total: number;
  discount: number;
  shipping_charges: number;
  total: number;
  note: string;
  terms_conditions: string;
  status: number;
  contact: Contact;
  details: InvoiceLineItemType[];
  payment_term: PaymentTermRow;
  discount_account: LedgerRow;
  files: string[];
  user: UsersRow;
  organization: OrganizationColumn;
  created_at: string;
}

export type SaleOrderResponse = Omit<Invoice, "shipping_charges">;

export type SaleInvoiceResponse = Invoice & {
  adjustment: number;
  sales_person: UsersRow;
  warehouse: WarehouseRow;
  shipping_charge: number;
  sales_order: SaleOrderResponse;
};
