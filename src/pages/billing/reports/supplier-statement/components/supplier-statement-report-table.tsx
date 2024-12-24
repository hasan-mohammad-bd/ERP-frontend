import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SupplierStatementReport } from "@/store/services/billing/api/supplier-statement/type";

import { format } from "date-fns";

interface Props {
  reportData: SupplierStatementReport;
  selectedDate?: Date;
  selectedEndDate?: Date;
}

const SupplierStatementReportTable = ({
  reportData,
  selectedDate,
  selectedEndDate,
}: Props) => {
  console.log("reportData", reportData);

  return (
    <Card className="p-6">
      <div className="space-y-4">
        {/* Header Information */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">
            From {selectedDate ? format(selectedDate, "dd-MM-yyyy") : ""} to{" "}
            {selectedEndDate
              ? format(selectedEndDate, "dd-MM-yyyy")
              : format(new Date(), "dd-MM-yyyy")}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-semibold">Name:</span>
                <span>{reportData.supplier.name}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Contact No:</span>
                <span>{reportData.supplier.work_phone}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Address:</span>
                <span>{reportData.supplier.address.name}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex justify-end gap-2">
                <span className="font-semibold">Previous Balance:</span>
                <span>{reportData.supplier.previous_balance}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Invoice/Payment Slip No</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Charge</TableHead>
              <TableHead className="text-right">Payment/Return</TableHead>
              <TableHead className="text-right">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.report.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  {format(new Date(item.date), "dd-MM-yyyy")}
                </TableCell>
                <TableCell>{item.slip_no}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right">
                  {parseFloat(item.charge)}
                </TableCell>
                <TableCell className="text-right">
                  {item.payment_or_return}
                </TableCell>
                <TableCell className="text-right">{item.balance}</TableCell>
              </TableRow>
            ))}
            <TableRow className="font-semibold">
              <TableCell colSpan={3} className="text-right">
                Total
              </TableCell>
              <TableCell className="text-right">
                {reportData.supplier.total_charge}
              </TableCell>
              <TableCell className="text-right">
                {reportData.supplier.total_payment_or_return}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Account Balance */}
        <div className="text-right">
          <p className="font-semibold">
            Account Balance:{" "}
            {parseFloat(reportData.supplier.total_charge) -
              parseFloat(reportData.supplier.total_payment_or_return)}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SupplierStatementReportTable;
