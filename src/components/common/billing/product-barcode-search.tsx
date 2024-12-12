import { Dispatch, SetStateAction, useState } from "react";
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
import { useGetSearchBarcodeProductsQuery } from "@/store/services/billing/api/search-barcode";
import {
  SearchBarcodeItem,
  SearchBarcodeItemUnit,
} from "@/lib/validators/billing/search-barcode-item";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetTaxesQuery } from "@/store/services/accounts/api/tax";
import { TaxRow } from "@/lib/validators/accounts/tax";
import { UnitRow } from "@/lib/validators/billing/unit";

export interface BarcodeLineItemType {
  detailId?: number;
  barcodeId: number;
  barcode: string;
  barcodeAttribute: string;
  name: string;
  price: number;
  quantity: number;
  available_qty?: number;
  used_qty?: number;
  note?: string;
  units: SearchBarcodeItemUnit[];
  unit: SearchBarcodeItemUnit | UnitRow; // New field to store the selected unit
  tax?: TaxRow;
}

interface SearchProductProps {
  selectedProducts: BarcodeLineItemType[];
  setSelectedProducts: Dispatch<SetStateAction<BarcodeLineItemType[]>>;
}

export default function ProductBarcodeSearch({
  selectedProducts,
  setSelectedProducts,
}: SearchProductProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading, isError } = useGetSearchBarcodeProductsQuery(
    `text=${searchTerm}&type=molestiae`,
    {
      skip: !searchTerm,
    }
  );

  const { data: taxes } = useGetTaxesQuery(`per_page=1000&page=1`);

  const itemsData = data?.data || [];
  const taxData = taxes?.data || [];

  const selectProduct = (product: SearchBarcodeItem) => {
    const alreadySelected = selectedProducts.find(
      (prod) => prod.barcodeId === product.id // here product id is barcode id
    );
    if (!alreadySelected) {
      setSelectedProducts((prev) => [
        ...prev,
        {
          barcodeId: product.id,
          barcode: product.barcode,
          barcodeAttribute: product.barcode_attribute,
          name: product.name,
          price: product.primary_unit?.selling_price || 0,
          units: [product.primary_unit, product.secondary_unit],
          unit: product.primary_unit, // Store the selected unit
          quantity: 1,
        },
      ]);
    }
    setSearchTerm(""); // Clear search term after selection
  };

  const updateQuantity = (id: number, increment: boolean) => {
    setSelectedProducts((products) =>
      products.map((product) =>
        product.barcodeId === id
          ? {
              ...product,
              quantity: increment
                ? product.quantity + 1
                : Math.max(1, product.quantity - 1),
            }
          : product
      )
    );
  };

  const updateUnit = (id: number, unitId: number) => {
    setSelectedProducts((products) =>
      products.map((product) => {
        if (product.barcodeId === id) {
          const tempUnit = product.units.find(
            (unit) => unit.id === unitId
          ) as SearchBarcodeItemUnit;
          return {
            ...product,
            unit: tempUnit, // Assuming 'unit' is intended to store the found unit
            price: tempUnit.selling_price,
          };
        }
        return product;
      })
    );
  };

  const updatePrice = (id: number, price: number) => {
    setSelectedProducts((products) =>
      products.map((product) =>
        product.barcodeId === id
          ? {
              ...product,
              price: price,
            }
          : product
      )
    );
  };

  const updateTax = (id: number, taxId: number) => {
    setSelectedProducts((products) =>
      products.map((product) =>
        product.barcodeId === id
          ? {
              ...product,
              tax: taxData.find((tax: TaxRow) => tax.id === taxId) as TaxRow,
            }
          : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setSelectedProducts((products) =>
      products.filter((product) => product.barcodeId !== id)
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4 relative z-30">
        <div className="flex items-center space-x-2">
          <span className="h-4 px-4 py-[18px] border border-gray-300 flex justify-center items-center rounded-md">
            <Search className="h-4 w-4" />
          </span>
          <Input
            type="text"
            placeholder="Enter Product Name/Sku/scan barcode"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
        </div>
        {searchTerm && !isLoading && !isError && itemsData?.length > 0 && (
          <div className="mb-4 absolute ml-14 bg-gray-50 dark:bg-gray-900">
            <ul className="border rounded-lg p-2">
              {itemsData.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 text-sm"
                  onClick={() => selectProduct(item)}
                >
                  {item.name} (Barcode: {item.barcode})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Table>
        <TableHeader className="border rounded">
          <TableRow>
            {[
              "Product Name",
              "Unit",
              "Price",
              "Quantity",
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
                <TableRow key={product.barcodeId}>
                  <TableCell>
                    {`${product.name} (${product.barcodeAttribute})`}
                    <br />
                    <span className="text-sm text-gray-500">
                      Barcode: {product.barcode}
                    </span>
                  </TableCell>
                  <TableCell>
                    {product.unit && product.units.length === 0 ? (
                      product.unit.name
                    ) : (
                      <div className="w-64">
                        <Select
                          onValueChange={(value) =>
                            updateUnit(product.barcodeId, Number(value))
                          }
                          defaultValue={product.unit.id.toString()}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            {product.units?.map(
                              (unit: SearchBarcodeItemUnit) => (
                                <SelectItem
                                  key={unit.id}
                                  value={String(unit.id)}
                                >
                                  {unit.name}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="w-48">
                      <Input
                        id="price"
                        type="number"
                        className="w-full"
                        defaultValue={product.price}
                        // value={product.price} // Leave empty if no value
                        onChange={(e) =>
                          updatePrice(product.barcodeId, Number(e.target.value))
                        }
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        disabled={product.quantity === product.used_qty}
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.barcodeId, false)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span>{product.quantity}</span>
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.barcodeId, true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="w-64">
                      <Select
                        onValueChange={(value) =>
                          updateTax(product.barcodeId, Number(value))
                        }
                        defaultValue={product.tax?.id.toString()}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Tax" />
                        </SelectTrigger>
                        <SelectContent>
                          {taxData?.map((tax: TaxRow) => (
                            <SelectItem key={tax.id} value={String(tax.id)}>
                              {tax.name} ({tax.amount}%)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                        value={product.note || ""} // Leave empty if no value
                        onChange={(e) => {
                          setSelectedProducts((products) =>
                            products.map((p) =>
                              p.barcodeId === product.barcodeId
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
                      disabled={!!product.used_qty}
                      size="icon"
                      variant="destructive"
                      onClick={() => removeProduct(product.barcodeId)}
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
