import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MonthToDateSaleReport } from "@/store/services/billing/api/reports/month-to-date-sale-report/type";

interface Props {
  tableData?: MonthToDateSaleReport[];
  // ledgerAccounts?: LedgerAccountType[]
  // totals?: TotalSummaryReport;
}

const SaleRegisterTable = ({ tableData }: Props) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sale Date</TableHead>
            <TableHead>Daily Sale</TableHead>
            <TableHead>Month-to-Date Sale</TableHead>
            <TableHead>Organization</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.sale_date}</TableCell>
              <TableCell>{item.daily_sale}</TableCell>
              <TableCell>{item.month_to_date_sale}</TableCell>
              <TableCell>{item.organization ? item.organization : "N/A"} </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Totals Row */}

      </Table>
    </Card>
  );
};

export default SaleRegisterTable;
