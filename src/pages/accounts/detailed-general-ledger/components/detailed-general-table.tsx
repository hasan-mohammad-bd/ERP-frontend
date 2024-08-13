import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { DetailedGeneralLedgerRow, SummeryRow } from "@/lib/validators/accounts/general-ledger";


interface Props {
  tableData: DetailedGeneralLedgerRow[] ;
  summery: SummeryRow
  reportFormate?: {
    startDate: Date | null;
    endDate: Date | null;
    company: string;
    reportType: string;
  };
}
const DetailedGeneralTable = ({
  tableData,
  summery,
  reportFormate,
}: Props) => {
  console.log(summery, tableData)
  const formateStartDate =
    reportFormate && reportFormate.startDate
      ? format(new Date(reportFormate.startDate), "dd-MMM-yyyy")
      : null;
  const formateEndDate =
    reportFormate && reportFormate.endDate
      ? format(new Date(reportFormate.endDate), "dd-MMM-yyyy")
      : null;
  return (
    <Card className="p-3 w-full mx-auto">
      {reportFormate ? (
        <div className="flex-1 space-y-4 my-4">
          <div className=" text-center ">
            <h2>{reportFormate.company}</h2>
            <h3 className="text-xl">{reportFormate.reportType}</h3>
            <p className="text-sm">
              {formateStartDate} - {formateEndDate}
            </p>

          </div>
        </div>
      ) : null}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Account</TableHead>
            <TableHead>Transaction Details</TableHead>
            <TableHead>Transaction Type</TableHead>
            <TableHead>Journal Number</TableHead>
            {/* <TableHead>Reference</TableHead> */}
            <TableHead>Debit</TableHead>
            <TableHead>Credit</TableHead>
            <TableHead>Amount</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-gray-100">
           <TableCell>As On  {formateStartDate}</TableCell>
           <TableCell colSpan={6}>Opening Balance</TableCell>
           <TableCell colSpan={1}>{summery.opening_balance}</TableCell>
          </TableRow>
          {tableData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.entry.date}</TableCell>
              <TableCell>{item.ledger_account.name}</TableCell>
              <TableCell>{item.entry.note}</TableCell>
              <TableCell>{item.entry.type}</TableCell>
              <TableCell>{item.entry.entry_number}</TableCell>
              <TableCell>{item.dr_amount}</TableCell>
              <TableCell>{item.cr_amount}</TableCell>
              <TableCell>{item.cumulative_amount}</TableCell>

            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell className="font-bold text-right" colSpan={5}>Total Debits and Credits <span className="font-normal">({formateStartDate} - {formateEndDate})</span></TableCell>
            <TableCell className=""> {summery.dr_amount  || 0} </TableCell>
            <TableCell colSpan={2} className="">{summery.cr_amount || 0}  </TableCell>
            {/* <TableCell className="">{summery.cumulative_amount || 0}  </TableCell> */}
          </TableRow>
          <TableRow className="border-t border-gray-200">
            <TableCell>As On {formateEndDate}</TableCell>
            <TableCell className="font-bold text-right" colSpan={4}>Closing Balance</TableCell>
            {/* <TableCell className=""> {summery.dr_amount  || 0} </TableCell>
            <TableCell className="">{summery.cr_amount || 0}  </TableCell> */}
            <TableCell colSpan={3} className="">{summery.closeing_balance || 0}  </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  );
};

export default DetailedGeneralTable;
