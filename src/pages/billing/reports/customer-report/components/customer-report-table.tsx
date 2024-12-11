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
  name: string;
  mobile: string;
  area: string;
  sale: {
    total: number;
    pay: number;
    due: number;
    dismiss: number;
    advance: number;
  };
  saleReturn: {
    total: number;
    pay: number;
    due: number;
  };
  totalDue: number;
}

// Updated Props to match the new data structure
interface Props {
  tableData?: SalesDataRow[];
}

const CustomerReportTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2}>Name</TableHead>
            <TableHead rowSpan={2}>Mobile</TableHead>
            <TableHead rowSpan={2}>Area</TableHead>
            
            {/* Sale Section with Colspan */}
            <TableHead colSpan={5} className="text-center border">
              Sale
            </TableHead>

            {/* Sale Return Section with Colspan */}
            <TableHead colSpan={3} className="text-center border">
              Sale Return
            </TableHead>
            
            <TableHead rowSpan={2}>Total Due</TableHead>
            <TableHead rowSpan={2}>Action</TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="border">Total</TableHead>
            <TableHead className="border">Pay</TableHead>
            <TableHead className="border">Due</TableHead>
            <TableHead className="border">Dismiss</TableHead>
            <TableHead className="border">Advance</TableHead>

            <TableHead className="border">Total</TableHead>
            <TableHead className="border">Pay</TableHead>
            <TableHead className="border">Due</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.name}</TableCell>
                <TableCell className="">{item.mobile}</TableCell>
                <TableCell className="">{item.area}</TableCell>

                {/* Sale Section */}
                <TableCell className="">{item.sale.total}</TableCell>
                <TableCell className="">{item.sale.pay}</TableCell>
                <TableCell className="">{item.sale.due}</TableCell>
                <TableCell className="">{item.sale.dismiss}</TableCell>
                <TableCell className="">{item.sale.advance}</TableCell>

                {/* Sale Return Section */}
                <TableCell className="">{item.saleReturn.total}</TableCell>
                <TableCell className="">{item.saleReturn.pay}</TableCell>
                <TableCell className="">{item.saleReturn.due}</TableCell>

                <TableCell className="">{item.totalDue}</TableCell>
                <TableCell className="">
                  <button className="text-blue-500">Action</button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CustomerReportTable;
