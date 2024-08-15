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
import { TrialBalanceRow } from "@/lib/validators/accounts/trial-balance";
import { format } from "date-fns";

interface Props {
  tableData: TrialBalanceRow;
  totalCr: number;
  totalDr: number;
  reportFormate?: {
    startDate: Date | null;
    endDate: Date | null;
    company: string;
    reportType: string;
  };
}
const TrialBalanceTable = ({
  tableData,
  totalCr,
  totalDr,
  reportFormate,
}: Props) => {
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
      <Card>
        {" "}
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead>#Account</TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Account Code</TableHead>
              <TableHead>Debit</TableHead>
              <TableHead className="text-right">Credit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.keys(tableData).map((key) =>
              tableData[key as keyof TrialBalanceRow].map((item, index) => (
                <TableRow key={item.id}>
                  {index === 0 && (
                    <TableCell
                      rowSpan={tableData[key as keyof TrialBalanceRow].length}
                      className="font-bold"
                    >
                      {key}
                    </TableCell>
                  )}
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.dr_amount}</TableCell>
                  <TableCell className="text-right">{item.cr_amount}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="font-bold text-right" colSpan={3}>
                Total
              </TableCell>
              <TableCell className="text-left"> {totalDr} BDT</TableCell>
              <TableCell className="text-right">{totalCr} BDT</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </Card>
  );
};

export default TrialBalanceTable;
