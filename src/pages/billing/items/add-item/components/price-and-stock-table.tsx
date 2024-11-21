"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { StockItem } from "./item-add-form"

export default function PriceAndStockTable({ responseData, items, setItems }: any) {
  console.log(responseData)
  const [topValues, setTopValues] = useState<Partial<StockItem>>({
    purchase_price: null,
    selling_price: null,
    discount: null,
    discount_amount: null,
    after_discount: null,
    wholesale_price: null,
  })

  console.log(items)

  useEffect(() => {
    if (responseData.length > 0) {
      setItems(responseData)
    }
  }, [responseData, setItems])

  const handleApplyToAll = () => {
    setItems(items.map((item: StockItem) => ({
      ...item,
      ...topValues,
    })))
  }

  const handleTopValueChange = (field: keyof StockItem, value: number) => {
    setTopValues(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleItemChange = (index: number, field: keyof StockItem, value: any) => {
    const newItems = [...items]
    newItems[index] = {
      ...newItems[index],
      [field]: value
    }
    setItems(newItems)
  }

  return (
    <Card>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 items-end">
          <div>
            <Label htmlFor="purchase_price">Purchase Price</Label>
            <Input
              id="purchase_price"
              type="number"
              value={topValues.purchase_price ?? ""}
              onChange={(e) => handleTopValueChange("purchase_price", Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="selling_price">Selling Price</Label>
            <Input
              id="selling_price"
              type="number"
              value={topValues.selling_price ?? ""}
              onChange={(e) => handleTopValueChange("selling_price", Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="discount">Discount %</Label>
            <Input
              id="discount"
              type="number"
              value={topValues.discount ?? ""}
              onChange={(e) => handleTopValueChange("discount", Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="discount_amount">Discount Amount</Label>
            <Input
              id="discount_amount"
              type="number"
              value={topValues.discount_amount ?? ""}
              onChange={(e) => handleTopValueChange("discount_amount", Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="after_discount">After Discount</Label>
            <Input
              id="after_discount"
              type="number"
              value={topValues.after_discount ?? ""}
              onChange={(e) => handleTopValueChange("after_discount", Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="wholesale_price">Wholesale Price</Label>
            <Input
              id="wholesale_price"
              type="number"
              value={topValues.wholesale_price ?? ""}
              onChange={(e) => handleTopValueChange("wholesale_price", Number(e.target.value))}
            />
          </div>
          <Button onClick={handleApplyToAll} className="bg-orange-500 hover:bg-orange-600">
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
                      value={item.barcode || ''}
                      onChange={(e) => handleItemChange(index, "barcode", e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.purchase_price || ''}
                      onChange={(e) => handleItemChange(index, "purchase_price", Number(e.target.value))}
                      type="number"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.selling_price || ''}
                      onChange={(e) => handleItemChange(index, "selling_price", Number(e.target.value))}
                      type="number"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.discount || ''}
                      onChange={(e) => handleItemChange(index, "discount", Number(e.target.value))}
                      type="number"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.discount_amount || ''}
                      onChange={(e) => handleItemChange(index, "discount_amount", Number(e.target.value))}
                      type="number"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.after_discount || ''}
                      onChange={(e) => handleItemChange(index, "after_discount", Number(e.target.value))}
                      type="number"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.wholesale_price || ''}
                      onChange={(e) => handleItemChange(index, "wholesale_price", Number(e.target.value))}
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
  )
}

