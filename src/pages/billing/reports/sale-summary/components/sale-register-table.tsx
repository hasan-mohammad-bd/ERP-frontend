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

import {
  ItemSaleSummaryDataType,
  TotalSummaryReport,
} from "@/store/services/billing/api/reports/sale-summary/type";

interface Props {
  tableData?: ItemSaleSummaryDataType;
  // ledgerAccounts?: LedgerAccountType[]
  totals?: TotalSummaryReport;
}

const SaleRegisterTable = ({ tableData, totals }: Props) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Sale Amount</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Gross Profit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData?.items_summary?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.item_name}</TableCell>
              <TableCell>{item.item_barcode}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.sale_amount}</TableCell>
              <TableCell>{item.cost}</TableCell>
              <TableCell>{item.gross_profit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Totals Row */}
        {totals && (
          <TableFooter>
            <TableRow className="font-bold bg-gray-100">
              <TableCell className="text-right" colSpan={2}>Total</TableCell>

              <TableCell>{totals.quantity}</TableCell>
              <TableCell>{totals.sale_amount}</TableCell>
              <TableCell>{totals.cost}</TableCell>
              <TableCell>{totals.gross_profit}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </Card>
  );
};

export default SaleRegisterTable;
