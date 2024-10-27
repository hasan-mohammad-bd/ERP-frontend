import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define a new interface for sales data
interface SalesDataRow {
  date: string;
  details: string;
  invoice_no: string;
  type: string;
  in_qty: number;
  out_qty: number;
  used_qty: number;
  available_qty: number;
  rate: number;
  total: number;
  profit_loss: number
}


interface Props {
  tableData?: SalesDataRow[]; // Update to use SalesDataRow[]
}

const StockLedgerTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Invoice No</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>In Qty</TableHead>
            <TableHead>Out Qty</TableHead>
            <TableHead>Used Qty</TableHead>
            <TableHead>Available Qty</TableHead>
            <TableHead>Rate</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Profit/Loss</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.date}</TableCell>
                {/* <TableCell className="">
                    <button className="text-blue-500"> {item.invoice}</button>
                </TableCell> */}
                <TableCell className="">{item.details}</TableCell>
                <TableCell className="">
                  <button className="text-blue-500">
                     {item.invoice_no}
                  </button>
                  </TableCell>
                <TableCell className="">{item.type}</TableCell>
                <TableCell className="">{item.in_qty}</TableCell>
                <TableCell className="">{item.out_qty}</TableCell>
                <TableCell className="">{item.used_qty}</TableCell>
                <TableCell className="">{item.available_qty}</TableCell>
                <TableCell className="">{item.rate}</TableCell>
                <TableCell className="">{item.total}</TableCell>
                <TableCell className="">{item.profit_loss}</TableCell>


              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default StockLedgerTable;
