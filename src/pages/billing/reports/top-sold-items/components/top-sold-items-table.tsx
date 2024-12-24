import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TopSoldItemType } from "@/store/services/billing/api/reports/top-sold-items/type";

interface Props {
  tableData?: TopSoldItemType[];
}

const TopSoldItemsTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Sale Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.item_name}</TableCell>
                <TableCell>{item.item_barcode}</TableCell>
                <TableCell>{item.sell_qty}</TableCell>
                <TableCell>{item.sell_price}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TopSoldItemsTable;
