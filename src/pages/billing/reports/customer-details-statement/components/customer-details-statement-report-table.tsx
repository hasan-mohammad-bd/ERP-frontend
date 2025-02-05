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
}: Props) => {
  return (
    <Card className="p-6 space-y-6">
      {/* Report Date Range */}
      <div className="">
        {/* <p>
          Report Period: {selectedDate ? format(selectedDate, "dd-MM-yyyy") : ""} to{" "}
          {selectedEndDate ? format(selectedEndDate, "dd-MM-yyyy") : format(new Date(), "dd-MM-yyyy")}
        </p> */}
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
          </div>
        </div>
        <div className="text-right space-y-2">
          <div className="flex justify-end gap-2">
            <span className="font-semibold">Previous Balance:</span>
            <span>{reportData.customer.previous_balance}</span>
          </div>
          {/* <div className="flex justify-end gap-2">
            <span className="font-semibold">Total Charge:</span>
            <span>{reportData.customer.total_charge}</span>
          </div> */}
        </div>
      </div>

      {/* Transactions Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Charge</TableHead>
            <TableHead className="text-right">Payment/Return</TableHead>
            <TableHead className="text-right">Balance</TableHead>
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
              {item.details && item.details.length > 0 && (
                <>
                  {/* Column Headers for Details */}
                  {/* <TableRow className="">
                    <TableCell></TableCell>
                    <TableCell className="font-medium text-sm">Item</TableCell>
                    <TableCell className="text-right font-medium text-sm">Quantity</TableCell>
                    <TableCell className="text-right font-medium text-sm">Unit Price</TableCell>
                    <TableCell className="text-right font-medium text-sm">Total Amount</TableCell>
                  </TableRow> */}
                  {/* Detail Items */}
                  {item.details.map((subItem, subIndex) => (
                    <TableRow key={`${index}-${subIndex}`} className="">
                      <TableCell></TableCell>
                      <TableCell className="">{subItem.item_name}</TableCell>
                      <TableCell className="text-right">{subItem.qty}</TableCell>
                      <TableCell className="text-right">{subItem.price}</TableCell>
                      <TableCell className="text-right">{subItem.total}</TableCell>
                    </TableRow>
                  ))}
                  {/* Sub Total Row */}
                  <TableRow className=" border-t border-gray-200">
                  
                    
                  </TableRow>
                  {/* Total Row */}
                  <TableRow className=" border-t border-gray-200">
                    <TableCell colSpan={4} className="text-right font-semibold">
                      Total
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {item.balance}
                    </TableCell>
                  </TableRow>
                </>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>

      {/* Final Account Balance Summary */}
      <div className="border-t pt-4">
        <div className="flex justify-end space-y-2">
          <div className="w-64 space-y-2">
           
            <div className="flex justify-between pt-2 border-t">
              <span className="font-semibold">Account Balance:</span>
              <span className="font-semibold">
                {(reportData.customer.total_charge) -
                  (reportData.customer.total_payment_or_return)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomerDetailsStatementReportTable;