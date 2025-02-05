import { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2, Search } from "lucide-react";

import { SearchBarcodeItemUnit } from "@/lib/validators/billing/search-barcode-item";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TaxRow } from "@/lib/validators/accounts/tax";
import { UnitRow } from "@/lib/validators/billing/unit";
import { InvoiceLineItemType } from "@/lib/validators/billing/billing-responses";

export interface ProductReturnLineItemType {
  detailId: number;
  barcode: string;
  barcodeAttribute: string;
  name: string;
  price: number;
  quantity: number;
  note?: string;
  // units: SearchBarcodeItemUnit[];
  unit: SearchBarcodeItemUnit | UnitRow; // New field to store the selected unit
  tax?: TaxRow;
}

interface SearchProductProps {
  selectedProducts: ProductReturnLineItemType[];
  setSelectedProducts: Dispatch<SetStateAction<ProductReturnLineItemType[]>>;
  details: InvoiceLineItemType[] | undefined;
}

export default function ProductReturnLineItems({
  selectedProducts,
  setSelectedProducts,
  details,
}: SearchProductProps) {
  console.log(selectedProducts, "selectedProducts");

  const selectProduct = (product: InvoiceLineItemType) => {
    const alreadySelected = selectedProducts.find(
      (prod) => prod.detailId === product.id // here product id is barcode id
    );
    if (!alreadySelected && product.available_qty > 0) {
      setSelectedProducts((prev) => [
        ...prev,
        {
          detailId: product.id,
          barcode: product.item_barcode.barcode,
          barcodeAttribute: product.item_barcode.barcode_attribute,
          name: product.item.name,
          price: product.price || 0,
          // units: [product.primary_unit, product.secondary_unit],
          unit: product.unit, // Store the selected unit
          quantity: product.available_qty,
          tax: product.tax || undefined,
        },
      ]);
    }
  };

  const updateQuantity = (id: number, increment: boolean) => {
    setSelectedProducts((products) =>
      products.map((product) => {
        if (product.detailId === id) {
          const availableQty =
            details?.find((item) => item.id === id)?.available_qty || 0;
          // const usedQty = details?.find((item) => item.id === id)?.used_qty || 0;
          const newQuantity = increment
            ? Math.min(product.quantity + 1, availableQty)
            : Math.max(0, product.quantity - 1);
          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
  };

  const removeProduct = (id: number) => {
    setSelectedProducts((products) =>
      products.filter((product) => product.detailId !== id)
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4 relative z-30">
        <div className="flex items-center space-x-2">
          <span className="h-4 px-4 py-[18px] border border-gray-300 flex justify-center items-center rounded-md">
            <Search className="h-4 w-4" />
          </span>
          <Select
            onValueChange={(value) => {
              const selectedItem = details?.find(
                (item) => String(item.id) === value
              );
              if (selectedItem) selectProduct(selectedItem);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select an item</SelectLabel>
                {details?.map((item) => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.item.name} (Barcode: {item.item_barcode.barcode})
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader className="border rounded">
          <TableRow>
            {[
              "Product Name",
              "Unit",
              "Price",
              "P.O. Quantity",
              "Tax",
              "Total",
              "Note",
              "Action",
            ].map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedProducts?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={11} className="text-center py-5">
                No products selected yet.
              </TableCell>
            </TableRow>
          ) : (
            <>
              {selectedProducts.map((product) => (
                <TableRow key={product.detailId}>
                  <TableCell>
                    {`${product.name} (${product.barcodeAttribute})`}
                    <br />
                    <span className="text-sm text-gray-500">
                      Barcode: {product.barcode}
                    </span>
                  </TableCell>
                  <TableCell>{product.unit && product.unit.name}</TableCell>
                  <TableCell>
                    <div className="w-48">{product.price && product.price}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.detailId, false)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        className="w-16 text-center"
                        type="number"
                        value={product.quantity}
                        min={0}
                        max={
                          details?.find((item) => item.id === product.detailId)
                            ?.available_qty || 0
                        }
                        onChange={(e) => {
                          const newQuantity = Number(e.target.value);
                          const availableQty =
                            details?.find(
                              (item) => item.id === product.detailId
                            )?.available_qty || 0;

                          setSelectedProducts((products) =>
                            products.map((p) =>
                              p.detailId === product.detailId
                                ? {
                                    ...p,
                                    quantity: Math.max(
                                      0,
                                      Math.min(newQuantity, availableQty)
                                    ),
                                  }
                                : p
                            )
                          );
                        }}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.detailId, true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="w-64">
                      {product.tax ? product.tax.name : 0.0}
                    </div>
                  </TableCell>

                  <TableCell>
                    {(product.price * product.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <div className="w-64">
                      <Input
                        id="note"
                        type="text"
                        style={{
                          MozAppearance: "textfield", // For Firefox
                          WebkitAppearance: "none", // For Chrome, Safari, etc.
                        }}
                        value={product.note || ""} // Leave empty if no value
                        onChange={(e) => {
                          setSelectedProducts((products) =>
                            products.map((p) =>
                              p.detailId === product.detailId
                                ? { ...p, note: e.target.value } // Update note
                                : p
                            )
                          );
                        }}
                      />
                    </div>
                  </TableCell>

                  <TableCell>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => removeProduct(product.detailId)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
