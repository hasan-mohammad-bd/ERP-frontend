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

interface SearchProductProps {
  selectedProducts: ExtendedItemRow[];
  setSelectedProducts: Dispatch<SetStateAction<ExtendedItemRow[]>>;
}

// Add `unit` to the ExtendedItemRow interface
export interface ExtendedItemRow extends SearchBarcodeItem {
  quantity: number;
  subTotal: number;
  total: number;
  finalPrice: number;
  unit: SearchBarcodeItemUnit; // New field to store the selected unit
}

export default function SearchProduct({
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
  const itemsData = data?.data || [];

  const selectProduct = (product: ExtendedItemRow) => {
    const alreadySelected = selectedProducts.find(
      (prod) => prod.id === product.id
    );
    if (!alreadySelected) {
      const selectedUnit = product.primary_unit; // Default to primary unit
      const quantity = 1;
      const subTotal = selectedUnit.selling_price * quantity;
      const total = subTotal * (1 - selectedUnit.discount / 100);
      const finalPrice = total;

      setSelectedProducts((prev) => [
        ...prev,
        {
          ...product,
          unit: selectedUnit, // Store the selected unit
          quantity,
          subTotal,
          total,
          finalPrice,
        },
      ]);
    }
    setSearchTerm(""); // Clear search term after selection
  };

  const updateQuantity = (id: number, increment: boolean) => {
    setSelectedProducts((products) =>
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: increment
                ? product.quantity + 1
                : Math.max(1, product.quantity - 1),
              subTotal:
                product.unit.selling_price *
                (increment
                  ? product.quantity + 1
                  : Math.max(1, product.quantity - 1)),
              total:
                product.unit.selling_price *
                (increment
                  ? product.quantity + 1
                  : Math.max(1, product.quantity - 1)) *
                (1 - product.unit.discount / 100),
            }
          : product
      )
    );
  };

  const updateUnit = (id: number, newUnit: SearchBarcodeItemUnit) => {
    setSelectedProducts((products) =>
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              unit: newUnit, // Update the unit
              subTotal: newUnit.selling_price * product.quantity,
              total:
                newUnit.selling_price *
                product.quantity *
                (1 - newUnit.discount / 100),
            }
          : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setSelectedProducts((products) =>
      products.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container mx-auto p-4">
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
                  onClick={() =>
                    selectProduct({
                      ...item,
                      quantity: 1,
                      subTotal: item.primary_unit.selling_price,
                      total: item.primary_unit.selling_price,
                      finalPrice: item.primary_unit.selling_price,
                      unit: item.primary_unit, // Default to primary unit
                    })
                  }
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
              "Stock",
              "Purchase Price",
              "Selling Price",
              "P.O. Quantity",
              "Sub Total",
              "Discount",
              "Total",
              "Action",
            ].map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedProducts?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} className="text-center py-5">
                No products selected yet.
              </TableCell>
            </TableRow>
          ) : (
            <>
              {selectedProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    {product.name}
                    <br />
                    <span className="text-sm text-gray-500">
                      Barcode: {product.barcode}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Select
                      onValueChange={(value) =>
                        updateUnit(
                          product.id,
                          product.primary_unit.id === Number(value)
                            ? product.primary_unit
                            : product.secondary_unit
                        )
                      }
                      defaultValue={product.unit.id.toString()}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {[product.primary_unit, product.secondary_unit]?.map(
                          (unit: SearchBarcodeItemUnit) => (
                            <SelectItem key={unit.id} value={String(unit.id)}>
                              {unit.name}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>{product.unit.stock}</TableCell>
                  <TableCell>{product.unit.purchase_price}</TableCell>
                  <TableCell>{product.unit.selling_price}</TableCell>

                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.id, false)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span>{product.quantity}</span>
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={() => updateQuantity(product.id, true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{product.subTotal.toFixed(2)}</TableCell>
                  <TableCell>{product.unit.discount.toFixed(2)}</TableCell>
                  <TableCell>{product.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => removeProduct(product.id)}
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
