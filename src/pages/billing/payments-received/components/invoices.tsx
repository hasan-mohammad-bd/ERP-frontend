import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Invoices() {
  const [dateRange, setDateRange] = useState("all")

  const invoices = [
    { date: "2023-10-15", number: "INV-001", amount: 1500.00, amountDue: 1500.00, payment: 0 },
    { date: "2023-10-18", number: "INV-002", amount: 2300.00, amountDue: 1800.00, payment: 500 },
    { date: "2023-10-20", number: "INV-003", amount: 980.00, amountDue: 980.00, payment: 0 },
    { date: "2023-10-22", number: "INV-004", amount: 3500.00, amountDue: 2000.00, payment: 1500 },
    { date: "2023-10-25", number: "INV-005", amount: 1200.00, amountDue: 1200.00, payment: 0 },
  ]

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Unpaid Invoices</h2>
        <div className="flex items-center space-x-4">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="thisWeek">This Week</SelectItem>
              <SelectItem value="thisMonth">This Month</SelectItem>
              <SelectItem value="lastMonth">Last Month</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="link">Clear Applied Amount</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Invoice Number</TableHead>
            <TableHead className="text-right">Invoice Amount</TableHead>
            <TableHead className="text-right">Amount Due</TableHead>
            <TableHead className="text-right">Payment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.number}>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.number}</TableCell>
              <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
              <TableCell className="text-right">${invoice.amountDue.toFixed(2)}</TableCell>
              <TableCell className="text-right">${invoice.payment.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}