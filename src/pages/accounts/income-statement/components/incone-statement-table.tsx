import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  IncomeStatementRow,
  SummeryRow,
} from "@/lib/validators/accounts/income-statement";
import React from "react";

// import BalanceSheetChild from "./balance-sheet-child";

interface Props {
  tableData?: IncomeStatementRow[];
  summery?: SummeryRow;

  reportFormate?: {
    startDate: Date | null;
    endDate: Date | null;
    company: string;
    reportType: string;
  };
}
const IncomeStatementTable = ({ tableData, reportFormate, summery }: Props) => {
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
      <Card>
        {" "}
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead>#Account</TableHead>
              <TableHead>Account Code</TableHead>

              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableRow>
            <TableCell>Product Sales</TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right">
              {summery?.product_sale.toLocaleString("en-IN")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>COGS</TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right">{summery?.cogs.toLocaleString("en-IN")}</TableCell>
          </TableRow>
          <TableRow className="bg-gray-100">
            <TableCell className="font-bold">Gross Profit</TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right font-bold">
              {summery?.gros_profit.toLocaleString("en-IN")}
            </TableCell>
          </TableRow>

          {tableData &&
            tableData.map((item) => (
              <TableBody className="" key={item.name}>
                <TableRow className="">
                  <TableCell className="font-bold">{item.name}</TableCell>
                  {/* <TableCell>{item.code}</TableCell> */}
                  {/* <TableCell>{item.balance}</TableCell> */}
                </TableRow>

                {item.childs_group.length > 0 &&
                  item.childs_group.map((child) => (
                    <React.Fragment key={child.name}>
                      <TableRow>
                        <TableCell style={{ paddingLeft: "15px" }}>
                          {child.name}
                        </TableCell>
                        <TableCell>{child.code}</TableCell>
                      </TableRow>

                      {child.ledgers.length > 0 &&
                        child.ledgers.map((secondChild) => (
                          <TableRow key={secondChild.name}>
                            <TableCell style={{ paddingLeft: "30px" }}>
                              {secondChild.name}
                            </TableCell>
                            <TableCell>{secondChild.code}</TableCell>
                            <TableCell className="text-right">
                              {secondChild.balance.toLocaleString(`en-IN`)}
                            </TableCell>
                          </TableRow>
                        ))}

                      <TableRow className="bg-gray-100 !mb-4">
                        <TableCell
                          style={{ paddingLeft: "15px" }}
                          className="font-semibold"
                          colSpan={2}
                        >
                          Total {child.name}
                        </TableCell>

                        <TableCell className="font-bold text-end">
                          {child.balance.toLocaleString(`en-IN`)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow></TableRow>
                    </React.Fragment>
                  ))}

                {/* <BalanceSheetChild group={item} depth={0} /> */}
                <TableRow className="bg-gray-100 !mb-4">
                  <TableCell className="font-bold my-3" colSpan={2}>
                    Total {item.name}
                  </TableCell>

                  <TableCell className="font-bold text-end">
                    {item.balance.toLocaleString(`en-IN`)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            ))}

          <TableRow className="">
            <TableCell className="font-bold">Depreciation</TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right font-bold ">
              {summery?.deprecetaion.toLocaleString(`en-IN`)}
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-100">
            <TableCell className="font-bold">Profit before tax</TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right font-bold ">
              {summery?.profit_befor_tax.toLocaleString(`en-IN`)}
            </TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="">Tax</TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right">{summery?.tax}</TableCell>
          </TableRow>
          <TableRow className="bg-gray-100">
            <TableCell className="font-bold">Profit</TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right font-bold ">
              {summery?.profit.toLocaleString(`en-IN`)}
            </TableCell>
          </TableRow>
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
    </Card>
  );
};

export default IncomeStatementTable;
