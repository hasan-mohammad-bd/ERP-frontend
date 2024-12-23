/* The above code is a TypeScript React component that displays a customer details statement report in
a tabular format. Here is a breakdown of what the code is doing: */
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CustomerDetailsStatementReport } from "@/store/services/billing/api/customer-details-statement/type";
import { format } from "date-fns";
import React from "react";

interface Props {
  reportData: CustomerDetailsStatementReport;
  selectedDate?: Date;
  selectedEndDate?: Date;
}

const CustomerDetailsStatementReportTable = ({
  reportData,
  selectedDate,
  selectedEndDate,
}: Props) => {
  return (
    <Card className="p-6 space-y-6">
      {/* Organization Header */}
     
      {/* Report Date Range */}
      <div className="">
        <p>
          Report Period: {selectedDate ? format(selectedDate, "dd-MM-yyyy") : ""} to {" "}
          {selectedEndDate ? format(selectedEndDate, "dd-MM-yyyy") : format(new Date(), "dd-MM-yyyy")}
        </p>
      </div>

      {/* Customer Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex gap-2">
            <span className="font-semibold">Name:</span>
            <span>{reportData.customer.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Contact No:</span>
            <span>{reportData.customer.work_phone}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Address:</span>
            {/* <span>{reportData.customer.address[0].address}</span> */}
          </div>
        </div>
        <div className="text-right space-y-2">
          <div className="flex justify-end gap-2">
            <span className="font-semibold">Previous Balance:</span>
            <span>{reportData.customer.previous_balance}</span>
          </div>
          <div className="flex justify-end gap-2">
            <span className="font-semibold">Total Charge:</span>
            <span>{reportData.customer.total_charge}</span>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
           
            <TableHead className="text-right">Charge </TableHead>
            <TableHead className="text-right">Payment/Return </TableHead>
            <TableHead className="text-right">Balance </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
  {reportData.report.map((item, index) => (
    <React.Fragment key={index}>
      {/* Main Row */}
      <TableRow>
        <TableCell>{format(new Date(item.date), "dd-MM-yyyy")}</TableCell>
        <TableCell>{item.description}</TableCell>
        <TableCell className="text-right">{item.charge}</TableCell>
        <TableCell className="text-right">{item.payment_or_return}</TableCell>
        <TableCell className="text-right">{item.balance}</TableCell>
      </TableRow>

      {/* Sub-Details Rows */}
      {item.details && item.details.length > 0 &&
        item.details.map((subItem, subIndex) => (
          <TableRow key={`${index}-${subIndex}`}>
            <TableCell></TableCell> {/* Empty cell for the date column */}
            <TableCell className="pl-6">
              {/* Indented Item name under Description column */}
              {subItem.item_name}
            </TableCell>
            <TableCell className="text-right">
              {/* Quantity under Charge column */}
              {subItem.qty}
            </TableCell>
            <TableCell className="text-right">
              {/* Unit Price under Payment/Return column */}
              {subItem.price}
            </TableCell>
            <TableCell className="text-right">
              {/* Total Amount under Balance column */}
              {subItem.total}
            </TableCell>
          </TableRow>
        ))}
    </React.Fragment>
  ))}
</TableBody>

      </Table>

      {/* Account Balance Summary */}
      {/* <div className="text-right">
        <p className="font-semibold">
          Account Balance : {" "}
          {(
            parseFloat(reportData.customer.total_charge) -
            parseFloat(reportData.customer.total_payment_or_return)
          ).toFixed(2)}
        </p>
      </div> */}
      <div className="text-right">
          <p className="font-semibold">
            Account Balance:{" "}
            {(reportData.customer.total_charge) -
              (reportData.customer.total_payment_or_return)}
          </p>
        </div>
    </Card>
  );
};

export default CustomerDetailsStatementReportTable;
