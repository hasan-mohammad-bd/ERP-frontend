import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RepresentativeWiseSaleReport, TotalSummary } from "@/store/services/billing/api/representative-wise-sale/type";

import { format } from "date-fns";

interface Props {
  reportData: RepresentativeWiseSaleReport[];
  totalData: TotalSummary;
  selectedDate?: Date;
  selectedEndDate?: Date;
}

const RepresentativeWiseSaleReportTable = ({
  reportData,
  totalData,
  selectedDate,
  selectedEndDate,
}: Props) => {
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
        </div>

        {/* Transaction Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Representative Name</TableHead>
              <TableHead>Invoice/Payment Slip No</TableHead>
              <TableHead>Item No</TableHead>
              <TableHead>Item Barcode</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Commission</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  {format(new Date(item.date), "dd-MM-yyyy")}
                </TableCell>
                <TableCell>{item.representative_name}</TableCell>
                <TableCell>{item.invoice_number}</TableCell>
                <TableCell>{item.item_name}</TableCell>
                <TableCell>{item.item_barcode}</TableCell>
                <TableCell className="text-right">{item.quantity}</TableCell>
                <TableCell className="text-right">{item.commission}</TableCell>
                <TableCell className="text-right">{item.total_amount}</TableCell>
              </TableRow>
            ))}
            <TableRow className="font-semibold">
              <TableCell colSpan={5} className="text-right">
                Total
              </TableCell>
              <TableCell className="text-right">{totalData.quantity}</TableCell>
              <TableCell className="text-right">{totalData.commission}</TableCell>
              <TableCell className="text-right">{totalData.total_amount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default RepresentativeWiseSaleReportTable;
