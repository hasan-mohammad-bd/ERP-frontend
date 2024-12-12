import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LedgerAccountType, SalesRegisterType } from "@/store/services/billing/api/reports/sale-register/type";

interface Props {
  tableData?: SalesRegisterType[];
  ledgerAccounts?: LedgerAccountType[];
  totals?: {
    total_amount: number;
    total_tax: number;
    total_paid: number;
    total_due: number;
  };
}

const SaleRegisterTable = ({ tableData, ledgerAccounts, totals }: Props) => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Invoice Number</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Due</TableHead>
            {ledgerAccounts?.map((item, index) => (
              <TableHead key={index}>{item.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.invoice_number}</TableCell>
              <TableCell>{item.customer_name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.tax}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.due}</TableCell>
              {ledgerAccounts?.map((ledger) => {
                const payment = item.payment.find((p) => p.id === ledger.id);
                return <TableCell key={ledger.id}>{payment?.amount || 0}</TableCell>;
              })}
            </TableRow>
          ))}

          {/* Totals Row */}
          {totals && (
            <TableRow className="font-bold bg-gray-100">
              <TableCell colSpan={4}>Totals</TableCell>
              <TableCell>{totals.total_tax.toFixed(2)}</TableCell>
              <TableCell>{totals.total_amount.toFixed(2)}</TableCell>
              <TableCell>{totals.total_due.toFixed(2)}</TableCell>
              {ledgerAccounts?.map((ledger) => (
                <TableCell key={ledger.id}>
                  {totals[ledger.name] || 0}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default SaleRegisterTable;
