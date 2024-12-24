import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { File, Printer } from "lucide-react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { SalaryBatchMonthDataType } from "@/store/services/hrm/api/btach-list/type";
import { useAuth } from "@/store/hooks";

type BankSalaryVoucherProps = {
  salaryData: SalaryBatchMonthDataType[];
};

const BankSalaryVoucher = ({ salaryData }: BankSalaryVoucherProps) => {
  const { user } = useAuth();
  const componentRef = useRef<HTMLDivElement>(null);

  console.log("salaryData", salaryData);

  const handleDownloadPDF = async () => {
    if (!componentRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const canvas = await html2canvas(componentRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("bank-salary-voucher.pdf");
  };

  const dateToDisplay = salaryData.length > 0 ? salaryData[0].bank_date : "N/A";

  const bank_advice_no = salaryData[0]?.bank_advice_no;

  return (
    <div>
      <div ref={componentRef}>
        <div className="p-7">
          <div className="mb-6">
            <div className="flex justify-between mb-3">
              <p>To</p>
              <p>
                Date:{" "}
                {dateToDisplay
                  ? new Date(dateToDisplay).toLocaleDateString("en-IN")
                  : "N/A"}
              </p>{" "}
              {/* Display the date */}
            </div>
            <p>The Branch Manager</p>
            <p>Ducth Bangla Bank Ltd.</p>
            <p>Rabindra Sarani Branch</p>
            <p>Sub: Request for salary disbursement</p>
            <p className="mt-2">Dear Sir,</p>
            <p>
              We would like to request you to kindly transfer Taka to our
              following employee accounts by debiting our current account no{" "}
              {bank_advice_no} in the name of employee's month salary of May.
              So, please pay the salaryData of the above employees in these
              accounts and the total will be debited from our account.
            </p>
          </div>

          <div>
            <Card>
              <Table className="border border-black">
                <TableHeader className="border border-black">
                  <TableRow className="border border-black h-0">
                    {tableHeadings.map((heading, index) => (
                      <TableHead
                        key={index}
                        className="border border-black py-[5px] h-0"
                      >
                        {heading}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody className="border border-black">
                  {salaryData.length > 0 ? (
                    salaryData.map((salary, index) => (
                      <TableRow className="border border-black" key={index}>
                        <TableCell className="border border-black py-[5px]">
                          {index + 1} {/* Displaying SL.No */}
                        </TableCell>
                        <TableCell className="border border-black py-[5px]">
                          {salary.employee?.first_name}{" "}
                          {salary.employee?.last_name} {/* Full Name */}
                        </TableCell>
                        <TableCell className="border border-black py-[5px]">
                          {salary?.employee?.designation?.name}{" "}
                          {/* Designation */}
                        </TableCell>
                        <TableCell className="border border-black py-[5px]">
                          {salary?.employee?.account_number}{" "}
                          {/* Bank Account */}
                        </TableCell>
                        <TableCell className="border border-black py-[5px]">
                          {salary?.total} {/* Salary */}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center border border-black py-[5px]"
                      >
                        No data available
                      </TableCell>
                    </TableRow>
                  )}
                  {salaryData.length > 0 && (
                    <TableRow className="border border-black bg-gray-100">
                      <TableCell
                        colSpan={4}
                        className="text-right font-bold border border-black py-[5px]"
                      >
                        Total
                      </TableCell>
                      <TableCell
                        colSpan={2}
                        className="font-bold border border-black py-[5px]"
                      >
                        {salaryData &&
                          salaryData.length > 0 &&
                          salaryData
                            .reduce(
                              (acc: number, curr: SalaryBatchMonthDataType) =>
                                acc + (curr.allowance_total || 0),
                              0
                            )
                            .toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Card>
          </div>
          <p className="mb-8">Sincerely</p>
          <div className="space-y-2">
            <p>Sheikh Rifat</p>
            <p>Managing Director</p>
            <p>{user?.organization?.name}</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 items-center justify-end mt-8 print:hidden">
        <ReactToPrint
          trigger={() => (
            <Button size="input" variant="outline" className="h-8 lg:flex">
              Print <Printer className="ml-1" size={16} strokeWidth={1.2} />
            </Button>
          )}
          content={() => componentRef.current}
        />
        <Button
          variant="outline"
          size="input"
          className="h-8 lg:flex"
          onClick={handleDownloadPDF}
        >
          PDF <File className="ml-1" size={16} strokeWidth={1.2} />
        </Button>
      </div>
    </div>
  );
};

export default BankSalaryVoucher;

const tableHeadings = [
  "SL.No",
  "Name",
  "Designation",
  "A/C Number",
  "Pay Salary",
];
