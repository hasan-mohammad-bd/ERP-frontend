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
import { BalanceSheetRow } from "@/lib/validators/accounts/balance-sheet";
// import BalanceSheetChild from "./balance-sheet-child";

interface Props {
  tableData?: BalanceSheetRow[];

  reportFormate?: {
    startDate: Date | null;
    endDate: Date | null;
    company: string;
    reportType: string;
  };
}


const BalanceSheetTable = ({ tableData, reportFormate }: Props) => {

  console.log(tableData)
  const formateStartDate =
    reportFormate && reportFormate.startDate
      ? format(new Date(reportFormate.startDate), "dd-MMM-yyyy")
      : null;
  const formateEndDate =
    reportFormate && reportFormate.endDate
      ? format(new Date(reportFormate.endDate), "dd-MMM-yyyy")
      : null;

  return (
    <Card className="p-3 w-full mx-auto ">
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

      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>#Account</TableHead>
            <TableHead>Account Code</TableHead>

            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>

        {tableData &&
          tableData.map((item) => (
            <TableBody className="" key={item.name}>
              <TableRow className="">
                <TableCell className="font-bold">{item.name}</TableCell>
                {/* <TableCell>{item.code}</TableCell> */}
                {/* <TableCell>{item.balance}</TableCell> */}
              </TableRow>

              {item.childs_group.length > 0 &&
                item.childs_group.map((child, index) => (
                  <>
                    <TableRow key={index + 1}>
                      <TableCell style={{ paddingLeft: "15px" }}>
                        {child.name}
                      </TableCell>
                      <TableCell>{child.code}</TableCell>
                    </TableRow>
                    {child.childs_group.length > 0 &&
                      child.childs_group.map((secondChild, subindex) => (
                        <TableRow key={subindex + 3}>
                          <TableCell style={{ paddingLeft: "30px" }}>
                            {secondChild.name}
                          </TableCell>
                          <TableCell>{secondChild.code}</TableCell>
                          <TableCell className="text-right">
                            {secondChild.balance}
                          </TableCell>
                        </TableRow>
                      ))}

                    <TableRow className="bg-gray-100 !mb-4">
                      <TableCell style={{ paddingLeft: "15px" }} className="font-semibold" colSpan={2}>
                        Total {child.name}
                      </TableCell>

                      <TableCell className="font-bold text-end">
                        {child.balance}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                    </TableRow>
                  </>
                ))}

              {/* <BalanceSheetChild group={item} depth={0} /> */}
              <TableRow className="bg-gray-100 !mb-4">
                <TableCell className="font-bold my-3" colSpan={2}>
                  Total {item.name}
                </TableCell>


                <TableCell className="font-bold text-end">
                  {item.balance}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          ))}
        <TableBody>
          {/* {tableData &&
            tableData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.code}</TableCell>
              </TableRow>
            ))} */}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </Card>
  );
};

export default BalanceSheetTable;
