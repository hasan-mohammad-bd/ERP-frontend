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
    supplier_name: string,
    supplier_phone: string,
    purchase: number,
    tax: number,

}


interface Props {
  tableData?: SalesDataRow[]; // Update to use SalesDataRow[]
}

const PurchaseTaxReportTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Customer Name</TableHead>
            <TableHead>Customer Phone</TableHead>
            <TableHead>Sales</TableHead>
            <TableHead>Tax</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.supplier_name}</TableCell>
                <TableCell className="">{item.supplier_phone}</TableCell>
                <TableCell className="">{item.purchase}</TableCell>
                <TableCell className="">{item.tax}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default PurchaseTaxReportTable;
