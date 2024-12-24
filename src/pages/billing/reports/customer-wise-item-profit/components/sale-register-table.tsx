import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import { CustomerWiseItemProfitDataType } from "@/store/services/billing/api/reports/customer-wise-item-profit/type";

interface Props {
  tableData?: CustomerWiseItemProfitDataType;
  // ledgerAccounts?: LedgerAccountType[]
}

const SaleRegisterTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Sale Amount</TableHead>
            <TableHead>Net Profit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData?.data?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.item_name}</TableCell>
              <TableCell>{item.item_barcode}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.sale_amount}</TableCell>
              <TableCell>{item.net_profit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* tableData?.total Row */}
        {tableData?.total && (
          <TableFooter>
            <TableRow className="font-bold bg-gray-100">
              <TableCell className="text-right" colSpan={2}>
                Total
              </TableCell>
              <TableCell>{tableData?.total.quantity}</TableCell>
              <TableCell>{tableData?.total.sale_amount}</TableCell>
              <TableCell>{tableData?.total.net_profit}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </Card>
  );
};

export default SaleRegisterTable;
