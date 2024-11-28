"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export interface StockItem {
  barcode_attribute: string;
  barcode: string;
  purchase_price: number | null;
  selling_price: number | null;
  discount: number | null;
  discount_amount: number | null;
  after_discount: number | null;
  wholesale_price: number | null;
}

interface PriceAndStockTableProps {
  responseData: StockItem[];
  items: any;
  setItems: any;
}

export default function PriceAndStockTable({
  responseData,
  items,
  setItems,
}: PriceAndStockTableProps) {
  const [topValues, setTopValues] = useState<Partial<StockItem>>({
    purchase_price: null,
    selling_price: null,
    discount: null,
    discount_amount: null,
    after_discount: null,
    wholesale_price: null,
  });
  const [activeFirstFiled, setActiveFirstField] = useState<string | null>(null);

  useEffect(() => {
    if (responseData.length > 0) {
      setItems(responseData);
    }
  }, [responseData, setItems]);

  const calculateValues = (values: Partial<StockItem>, field?: keyof StockItem): Partial<StockItem> => {
    const { selling_price, discount, discount_amount } = values;
    const newValues = { ...values };
  
    if (field === "selling_price" || field === "discount" || field === "discount_amount") {
      if (selling_price) {
        // Handle discount changes
        if (field === "discount" && typeof discount === "number" && discount >= 0) {
          !activeFirstFiled && setActiveFirstField("discount");
          newValues.discount_amount = selling_price * (discount / 100);
          newValues.after_discount = selling_price - newValues.discount_amount;
        }
  
        // Handle discount_amount changes
        if (field === "discount_amount" && typeof discount_amount === "number" && discount_amount >= 0) {
          !activeFirstFiled && setActiveFirstField("discount_amount");
          newValues.discount = (discount_amount / selling_price) * 100;
          newValues.after_discount = selling_price - discount_amount;
        }
  
        // Fallback: No discount or discount_amount provided
        if (
          (discount === null || discount === undefined) &&
          (discount_amount === null || discount_amount === undefined)
        ) {
          newValues.after_discount = selling_price;
        }
      }
    }
  
    // If the field isn't related to these calculations, no changes
    return newValues;
  };

  
  





  const handleApplyToAll = () => {
    const calculatedTopValues = calculateValues(topValues);
    setTopValues(calculatedTopValues);
    setItems(
      items.map((item: StockItem) => ({
        ...item,
        ...calculatedTopValues,
      }))
    );
  };

  const handleTopValueChange = (field: keyof StockItem, value: number | null) => {
    const newTopValues = { ...topValues, [field]: value };
    const calculatedValues = calculateValues(newTopValues, field);
    setTopValues(calculatedValues);
  };

  const handleItemChange = (
    index: number,
    field: keyof StockItem,
    value: any
  ) => {
    const newItems = [...items];
    const newItemValues = { ...newItems[index], [field]: value };
    const calculatedValues = calculateValues(newItemValues,  field);
    newItems[index] = calculatedValues;
    setItems(newItems);
  };

  return (
    <Card>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 items-end">
          <div>
            <Label htmlFor="purchase_price">Purchase Price</Label>
            <Input
              id="purchase_price"
              type="number"
              defaultValue={topValues.purchase_price ?? ""}
              onChange={(e) =>
                handleTopValueChange("purchase_price", e.target.value ? Number(e.target.value) : null)
              }
            />
          </div>
          <div>
            <Label htmlFor="selling_price">Selling Price</Label>
            <Input
              id="selling_price"
              type="number"
              defaultValue={topValues.selling_price ?? ""}
              onChange={(e) =>
                handleTopValueChange("selling_price", e.target.value ? Number(e.target.value) : null)
              }
            />
          </div>
          <div>
            <Label htmlFor="discount">Discount %</Label>
            <Input
              id="discount"
              type="number"
              defaultValue={topValues.discount ?? ""}
              onChange={(e) =>
                handleTopValueChange("discount", e.target.value ? Number(e.target.value) : null)
              }
              disabled={activeFirstFiled === "discount_amount"}
            />
          </div>
          <div>
            <Label htmlFor="discount_amount">Discount Amount</Label>
            <Input
              id="discount_amount"
              type="number"
              defaultValue={topValues.discount_amount ?? ""}
              onChange={(e) =>
                handleTopValueChange("discount_amount", e.target.value ? Number(e.target.value) : null)
              }
              disabled={activeFirstFiled === "discount"}
            />
          </div>
          <div>
            <Label htmlFor="after_discount">After Discount</Label>
            <Input
              id="after_discount"
              type="number"
              defaultValue={topValues.after_discount ?? ""}
              // readOnly
            />
          </div>
          <div>
            <Label htmlFor="wholesale_price">Wholesale Price</Label>
            <Input
              id="wholesale_price"
              type="number"
              defaultValue={topValues.wholesale_price ?? ""}
              onChange={(e) =>
                handleTopValueChange("wholesale_price", e.target.value ? Number(e.target.value) : null)
              }
            />
          </div>
          <Button
            onClick={handleApplyToAll}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Apply to All
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Barcode Attribute</TableHead>
                <TableHead>Barcode</TableHead>
                <TableHead>Purchase Price</TableHead>
                <TableHead>Selling Price</TableHead>
                <TableHead>Discount(%)</TableHead>
                <TableHead>Discount Amount</TableHead>
                <TableHead>After Discount</TableHead>
                <TableHead>Wholesale Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item: StockItem, index: number) => (
                <TableRow key={item.barcode_attribute}>
                  <TableCell>{item.barcode_attribute}</TableCell>
                  <TableCell>
                    <Input
                      value={item.barcode || ""}
                      onChange={(e) =>
                        handleItemChange(index, "barcode", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.purchase_price || ""}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          "purchase_price",
                          e.target.value ? Number(e.target.value) : null
                        )
                      }
                      type="number"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.selling_price || ""}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          "selling_price",
                          e.target.value ? Number(e.target.value) : null
                        )
                      }
                      type="number"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.discount || ""}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          "discount",
                          e.target.value ? Number(e.target.value) : null
                        )
                      }
                      type="number"
                      disabled={activeFirstFiled === "discount_amount"}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.discount_amount || ""}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          "discount_amount",
                          e.target.value ? Number(e.target.value) : null
                        )
                      }
                      type="number"
                      disabled={activeFirstFiled === "discount"}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      defaultValue={item.after_discount || ""}
                      // readOnly
                      type="number"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.wholesale_price || ""}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          "wholesale_price",
                          e.target.value ? Number(e.target.value) : null
                        )
                      }
                      type="number"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
}

