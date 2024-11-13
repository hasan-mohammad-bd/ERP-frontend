"use client"

import { useState } from "react"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"

interface StockItem {
  sizeColor: string
  barcode: string
  purchasePrice: string
  sellingPrice: string
  discount: string
  discountAmount: string
  afterDiscount: string
  openingStock: string
  ospPrice: string
  commissionType: string
  commissionValue: string
}

export default function PriceAndStockTable() {
  const [topValues, setTopValues] = useState({
    purchasePrice: "",
    sellingPrice: "",
    discount: "",
    discountAmount: "",
    afterDiscount: "",
    openingStock: "",
    ospPrice: "",
    amount: "",
  })

  const [items, setItems] = useState<StockItem[]>([
    {
      sizeColor: "Black - s",
      barcode: "51437583",
      purchasePrice: "150",
      sellingPrice: "250",
      discount: "0",
      discountAmount: "0",
      afterDiscount: "250",
      openingStock: "10",
      ospPrice: "250",
      commissionType: "Amount $",
      commissionValue: "0",
    },
    {
      sizeColor: "Black - m",
      barcode: "51437598",
      purchasePrice: "150",
      sellingPrice: "250",
      discount: "0",
      discountAmount: "0",
      afterDiscount: "250",
      openingStock: "10",
      ospPrice: "250",
      commissionType: "Amount $",
      commissionValue: "0",
    },
    {
      sizeColor: "White - s",
      barcode: "51437601",
      purchasePrice: "150",
      sellingPrice: "250",
      discount: "0",
      discountAmount: "0",
      afterDiscount: "250",
      openingStock: "10",
      ospPrice: "250",
      commissionType: "Amount $",
      commissionValue: "0",
    },
    {
      sizeColor: "White - m",
      barcode: "51437605",
      purchasePrice: "150",
      sellingPrice: "250",
      discount: "0",
      discountAmount: "0",
      afterDiscount: "250",
      openingStock: "10",
      ospPrice: "250",
      commissionType: "Amount $",
      commissionValue: "0",
    },
  ])

  const handleApplyToAll = () => {
    setItems(items.map(item => ({
      ...item,
      purchasePrice: topValues.purchasePrice || item.purchasePrice,
      sellingPrice: topValues.sellingPrice || item.sellingPrice,
      discount: topValues.discount || item.discount,
      discountAmount: topValues.discountAmount || item.discountAmount,
      afterDiscount: topValues.afterDiscount || item.afterDiscount,
      openingStock: topValues.openingStock || item.openingStock,
      ospPrice: topValues.ospPrice || item.ospPrice,
    })))
  }

  const handleTopValueChange = (field: string, value: string) => {
    setTopValues(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleItemChange = (index: number, field: keyof StockItem, value: string) => {
    const newItems = [...items]
    newItems[index][field] = value
    setItems(newItems)
  }

  return (
    <Card>    <div className="p-4 space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-9 gap-4">
      <Input
        placeholder="Purchase Price"
        value={topValues.purchasePrice}
        onChange={(e) => handleTopValueChange("purchasePrice", e.target.value)}
      />
      <Input
        placeholder="Selling Price"
        value={topValues.sellingPrice}
        onChange={(e) => handleTopValueChange("sellingPrice", e.target.value)}
      />
      <Input
        placeholder="Discount %"
        value={topValues.discount}
        onChange={(e) => handleTopValueChange("discount", e.target.value)}
      />
      <Input
        placeholder="Discount Amount"
        value={topValues.discountAmount}
        onChange={(e) => handleTopValueChange("discountAmount", e.target.value)}
      />
      <Input
        placeholder="After Discount"
        value={topValues.afterDiscount}
        onChange={(e) => handleTopValueChange("afterDiscount", e.target.value)}
      />
      <Input
        placeholder="Opening Stock"
        value={topValues.openingStock}
        onChange={(e) => handleTopValueChange("openingStock", e.target.value)}
      />
      <Input
        placeholder="Opening Stock Purchase"
        value={topValues.ospPrice}
        onChange={(e) => handleTopValueChange("ospPrice", e.target.value)}
      />
      <Input
        placeholder="Amount"
        value={topValues.amount}
        onChange={(e) => handleTopValueChange("amount", e.target.value)}
      />
      <Button onClick={handleApplyToAll} className="bg-orange-500 hover:bg-orange-600">
        Apply to All
      </Button>
    </div>

    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Size-Color</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Purchase Price</TableHead>
            <TableHead>Selling Price</TableHead>
            <TableHead>Discount(%)</TableHead>
            <TableHead>Discount Amount</TableHead>
            <TableHead>After Discount</TableHead>
            <TableHead>Opening Stock</TableHead>
            <TableHead>O.S.P. Price</TableHead>
            <TableHead>Commission Type</TableHead>
            <TableHead>Commission Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={item.barcode}>
              <TableCell>{item.sizeColor}</TableCell>
              <TableCell>
                <Input
                  value={item.barcode}
                  onChange={(e) => handleItemChange(index, "barcode", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Input
                  value={item.purchasePrice}
                  onChange={(e) => handleItemChange(index, "purchasePrice", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Input
                  value={item.sellingPrice}
                  onChange={(e) => handleItemChange(index, "sellingPrice", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Input
                  value={item.discount}
                  onChange={(e) => handleItemChange(index, "discount", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Input
                  value={item.discountAmount}
                  onChange={(e) => handleItemChange(index, "discountAmount", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Input
                  value={item.afterDiscount}
                  onChange={(e) => handleItemChange(index, "afterDiscount", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Input
                  value={item.openingStock}
                  onChange={(e) => handleItemChange(index, "openingStock", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Input
                  value={item.ospPrice}
                  onChange={(e) => handleItemChange(index, "ospPrice", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Select 
                  value={item.commissionType}
                  onValueChange={(value) => handleItemChange(index, "commissionType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Amount $">Amount $</SelectItem>
                    <SelectItem value="Percentage">Percentage</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Input
                  value={item.commissionValue}
                  onChange={(e) => handleItemChange(index, "commissionValue", e.target.value)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div></Card>

  )
}