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

const SalaryCertificateVoucher = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!componentRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const canvas = await html2canvas(componentRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("bank-salary-boucher.pdf");
  };

  return (
    <div>
      <div ref={componentRef}>
        {/* <div> */}
        <div className="p-7">
          <div className="flex flex-col items-center gap-8 mb-4">
            <h2 className="font-bold text-center text-2xl">
              Salary Certificate
            </h2>
            <p className="font-bold text-center text-lg underline capitalize">
              To whom it may concern
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-4">Date: 10/06/2024</p>
            <p className="mb-3">
              This is to certify that Mr. Shaik Mahmud, has been employed with
              Akaar IT Ltd. for the past two years.
              {/* He has been a dedicated and
              hardworking employee of our company. */}
            </p>
            <div className="space-y-3 mb-3">
              <p className="font-bold">Employee Details:</p>
              <p>Employee ID: 1641</p>
              <p>Name: Redacted</p>
              <p>Employee Type: Permanent</p>
              <p>Designation: Software Developer</p>
              <p>Date of Joining: June 5, 2022</p>
            </div>
          </div>

          <div>
            <Card>
              <Table className="border border-black">
                <TableHeader className="border border-black">
                  <TableRow className="border border-black h-0">
                    <TableHead
                      colSpan={2}
                      className="border border-black py-[5px] h-0 text-center"
                    >
                      Earnings
                    </TableHead>
                    <TableHead
                      colSpan={2}
                      className="border border-black py-[5px] h-0 text-center"
                    >
                      Deductions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="border border-black">
                  {tableData.map((data, index) => {
                    return (
                      <TableRow className="border border-black " key={index}>
                        <TableCell className="border border-black py-[5px] w-1/4">
                          {data.earnings}
                        </TableCell>
                        <TableCell className="border border-black py-[5px] w-1/4">
                          Tk. {data.earningAmount}
                        </TableCell>
                        <TableCell className="border border-black py-[5px] w-1/4">
                          {data.deductions}
                        </TableCell>
                        <TableCell className="border border-black py-[5px] w-1/4">
                          Tk. {data.deductionAmount}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow className="border border-black bg-gray-100">
                    <TableCell className="font-bold border border-black py-[5px]">
                      Total Earnings
                    </TableCell>
                    <TableCell className="font-bold border border-black py-[5px]">
                      Tk. {1000?.toLocaleString("en-IN")}
                    </TableCell>
                    <TableCell className="font-bold border border-black py-[5px]">
                      Total Deductions
                    </TableCell>
                    <TableCell className="font-bold border border-black py-[5px]">
                      Tk. {1000?.toLocaleString("en-IN")}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-black bg-gray-100">
                    <TableCell
                      colSpan={3}
                      className="font-bold border border-black py-[5px] text-center"
                    >
                      Net Salary
                    </TableCell>
                    <TableCell className="font-bold border border-black py-[5px]">
                      Tk. {1000?.toLocaleString("en-IN")}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
          {/* <p className="my-4">
            Mr. Shaik Mahmud’s salary is paid on a monthly basis and includes
            all applicable allowances and deductions as per company policy. He
            has shown excellent performance throughout his tenure.
          </p> */}
          {/* <p className="mb-4">
            If you have any questions or need further information, please feel
            free to contact us.
          </p> */}

          <p className="mb-10 font-medium">Sincerely,</p>
          <div className="space-y-2">
            <p>Md Ashiqur Rahman</p>
            <p>Chairman</p>
            <p>Akaar IT Ltd.</p>
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

export default SalaryCertificateVoucher;

const tableData = [
  {
    earnings: "Basic Wage",
    earningAmount: "100",
    deductions: "EPF",
    deductionAmount: "123",
  },
  {
    earnings: "House Rent Allowance",
    earningAmount: "100",
    deductions: "",
    deductionAmount: "123",
  },
  // {
  //   earnings: "Conveyance Allowances",
  //   earningAmount: "100",
  //   deductions: "",
  //   deductionAmount: "123",
  // },
  // {
  //   earnings: "Medical Allowances",
  //   earningAmount: "100",
  //   deductions: "",
  //   deductionAmount: "123",
  // },
  // {
  //   earnings: "Other Allowances",
  //   earningAmount: "100",
  //   deductions: "",
  //   deductionAmount: "123",
  // },
];
