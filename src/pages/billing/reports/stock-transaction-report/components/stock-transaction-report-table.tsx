import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StockTransactionReportDataType } from "@/store/services/billing/api/reports/stock-transaction-report/type";

interface Props {
  tableData: StockTransactionReportDataType[];
  selectedDate?: Date;
  selectedEndDate?: Date;
}
const StockTransactionReportTable = ({ tableData }: Props) => {


    console.log("tableDataXYZ",tableData)

  return (
    <Card>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Customer/Supplier</TableHead>
            <TableHead>Transaction_on</TableHead>
            <TableHead>Warehouse</TableHead>
            <TableHead>Adjustment</TableHead>
            <TableHead>Purchase</TableHead>
            <TableHead>Sale</TableHead>
            <TableHead>In Hand</TableHead>
            <TableHead>Remark</TableHead>
          </TableRow>
        </TableHeader>

      <TableBody className="">
          {tableData &&
            tableData?.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell className="">{item.warehouse}</TableCell>

                <TableCell className="">{item.transaction_on}</TableCell>

                <TableCell className="">{item.warehouse}</TableCell>
                <TableCell className="">{item.adjustment}</TableCell>
                <TableCell className="">{item.purchase}</TableCell>
                <TableCell className="">{item.sale}</TableCell>
                <TableCell className="">{item.in_hand}</TableCell>
                <TableCell className="">{item.remark}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default StockTransactionReportTable;
