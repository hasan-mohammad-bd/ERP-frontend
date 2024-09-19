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


const BankSalaryVoucher = () => {
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
          <div className="mb-6">
            <div className="flex justify-between mb-3">
              <p>To</p>
              <p>Date: 10/06/2024</p>
            </div>
            <p>The Branch Manager</p>
            <p>Ductch Bangla Bank Ltd.</p>
            <p>Rabindra Sarami Branch</p>
            <p>Sub: Request for salary disbursment</p>
            <p className="mt-2">Dear Sir,</p>
            <p>
              We would like to request you to kindly transfer Taka to our
              following employee accounts by debiting our current account no
              3211100001988 in the name of employee's month salary of May. So,
              please pay the salaries of the above employees in these accounts
              and the total will be debited from our account.
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
                  {tableData.map((data, index) => {
                    return (
                      <TableRow className="border border-black " key={index}>
                        <TableCell className="border border-black py-[5px]">
                          {data.slNo}
                        </TableCell>
                        <TableCell className="border border-black py-[5px]">
                          {data.name}
                        </TableCell>
                        <TableCell className="border border-black py-[5px]">
                          {data.designation}
                        </TableCell>
                        <TableCell className="border border-black py-[5px]">
                          {data.accountNumber}
                        </TableCell>
                        <TableCell className="border border-black py-[5px]">
                          {data.salary}
                        </TableCell>
                      </TableRow>
                    );
                  })}
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
                      {1000?.toLocaleString("en-IN")}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
          <p className="mb-8">Sincerely</p>
          <div className="space-y-2">
            <p>Sheikh Rifat</p>
            <p>Managing Director</p>
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

export default BankSalaryVoucher;

const tableHeadings = [
  "SL.No",
  "Name",
  "Designation",
  "A/C Number",
  "Pay Salary",
];

const tableData = [
  {
    slNo: 1,
    name: "Anirban Saha",
    designation: "Graphic Designer",
    accountNumber: "321103019580",
    salary: "XXXX",
  },
  {
    slNo: 2,
    name: "Md. Arfan Ahmed",
    designation: "Marketing Manager",
    accountNumber: "321103019512",
    salary: "XXXX",
  },
  {
    slNo: 3,
    name: "Rifat Hossain",
    designation: "App Developer",
    accountNumber: "321103019479",
    salary: "XXXX",
  },
  {
    slNo: 4,
    name: "Muhammad Touhiduzzaman",
    designation: "Frontend Engineer",
    accountNumber: "321103019463",
    salary: "XXXX",
  },
  {
    slNo: 5,
    name: "Md. Aikash Ahmed",
    designation: "Office Assistant",
    accountNumber: "321103019527",
    salary: "XXXX",
  },
  {
    slNo: 6,
    name: "Fahim Rahman",
    designation: "Sr. Marketing Executive",
    accountNumber: "1031030131064",
    salary: "XXXX",
  },
  {
    slNo: 7,
    name: "Arfat Hossain",
    designation: "Software Developer",
    accountNumber: "103158002909",
    salary: "XXXX",
  },
  {
    slNo: 8,
    name: "Shahjalal Mahmud",
    designation: "Software Developer",
    accountNumber: "107103636860",
    salary: "XXXX",
  },
  // {
  //   slNo: 9,
  //   name: "Masud Rana Tapu",
  //   designation: "Software Developer",
  //   accountNumber: "107103636868",
  //   salary: "XXXX",
  // },
  // {
  //   slNo: 10,
  //   name: "Asif Al Razi",
  //   designation: "Marketing Executive",
  //   accountNumber: "321103002563",
  //   salary: "XXXX",
  // },
  // {
  //   slNo: 11,
  //   name: "Hasan Mohammad",
  //   designation: "Software Developer",
  //   accountNumber: "321103019334",
  //   salary: "XXXX",
  // },
  // {
  //   slNo: 12,
  //   name: "Md. Shahin",
  //   designation: "Software Developer",
  //   accountNumber: "321103015680",
  //   salary: "XXXX",
  // },
  // {
  //   slNo: 13,
  //   name: "Alik Hasan",
  //   designation: "Software Developer",
  //   accountNumber: "321103005548",
  //   salary: "XXXX",
  // },
  // {
  //   slNo: 14,
  //   name: "Nayeem Hossain",
  //   designation: "Sr. Marketing Executive",
  //   accountNumber: "321103003753",
  //   salary: "XXXX",
  // },
  // {
  //   slNo: 15,
  //   name: "Md. Habib Miah",
  //   designation: "Customer Support",
  //   accountNumber: "321103002838",
  //   salary: "XXXX",
  // },
];
