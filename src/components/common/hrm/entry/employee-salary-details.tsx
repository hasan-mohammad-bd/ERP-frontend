import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,


  TableRow,
} from "@/components/ui/table";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { File, Printer } from "lucide-react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";









const EmployeeSalaryDetails = () => {
  const componentRef = useRef<HTMLDivElement>(null);



  const paySlipData = {
    employeeInfo: {
      name: "John Doe",
      employeeId: "184",
      designation: "Software Developer",
      department: "Software Development",
      bankAccount: "3211030019458",
      grossWage: "Tk. 50,000",
      totalWorkingDays: 31,
      lopDays: 0,
    },
    earnings: [
      { label: "Basic Wage", amount: "Tk. 30,000" },
      { label: "House Rent Allowance", amount: "Tk. 10,000" },
      { label: "Conveyance Allowance", amount: "Tk. 5,000" },
      { label: "Medical Allowance", amount: "Tk. 3,000" },
      { label: "Other Allowances", amount: "Tk. 2,000" },
      { label: "Total Earnings", amount: "Tk. 50,000" },
    ],
    deductions: [
      { label: "EPF", amount: "Tk. 5,000" },
      { label: "ESI/Health Insurance", amount: "Tk. 1,000" },
      { label: "Professional Tax", amount: "Tk. 500" },
      { label: "Loan Recovery", amount: "Tk. 0" },
      { label: "Total Deductions", amount: "Tk. 6,500" },
    ],
    netSalary: "Tk. 43,500",
  };


//   console.log(data);

//   const total = data.total as number;

  const handleDownloadPDF = async () => {
    if (!componentRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const canvas = await html2canvas(componentRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("employee-salary-details.pdf");
  };

  return (
    <div>
      <div ref={componentRef}>
        <div className="p-7">


          {/* <div className="grid grid-cols-4">

            <div className="w-[180px]">

            </div>

            <div className="text-center col-span-2">
              <div className="font-bold text-center text-[1px]">

              <div className="w-[180px]">  <img src="/image/logo.png" alt="" /></div>

              <div>
                <p>Salary Pay Slip For Sep-19</p>
             </div>
              </div>
              <div className="text-sm w-full">
                <div>Address: House 51C Road-13/B, Dhaka 1230</div>{" "}
                <div className="mb-2">Phone: 01712345678</div>
              </div>




            </div>
          </div> */}


          <div className="flex flex-col justify-center items-center">

               {/* <img src="/image/logo.png" alt="" className="w-[220px]" /> */}
               <p>Salary Pay Slip For Sep-19</p>


               <div className="text-sm w-full text-center">
                <div>Address: House 51C Road-13/B, Dhaka 1230</div>{" "}
                <div className="mb-2">Phone: 01712345678</div>
              </div>





          </div>


          <div className="text-center text-base mb-3 border border-spacing-1 w-fit mx-auto py-2 px-4 rounded-full">
            {/* {data.type} */}
          </div>
          <div className="text-right text-sm mb-3">
            <div className="flex justify-between items-start">
              <div>
                {/* {data?.project?.name && (
                  <div>
                    <span className="font-bold">Project:</span>{" "}
                    {data.project.name}
                  </div>
                )} */}
              </div>
              <div>
                <div>
                  <span className="font-bold">Voucher No:</span>{" "}
                  {/* {data.entry_number} */}
                </div>
                <div>
                  {/* <span className="font-bold">Date:</span> {data.date} */}
                </div>
              </div>
            </div>
          </div>
          <div>


          {/* main table card */}

          <Card className="max-w-[700px] mx-auto"> {/* Reduce overall table width */}
      <Table className="border border-black">
        {/* Employee Info Section */}
        <TableBody>
          <TableRow className="border border-black">
            <TableCell className="border border-black font-bold py-1 px-2">Name of the Employee</TableCell>
            <TableCell className="border border-black py-1 px-2" colSpan={3}>{paySlipData.employeeInfo.name}</TableCell>
          </TableRow>
          <TableRow className="border border-black">
            <TableCell className="border border-black font-bold py-1 px-2">Employee ID</TableCell>
            <TableCell className="border border-black py-1 px-2">{paySlipData.employeeInfo.employeeId}</TableCell>
            <TableCell className="border border-black font-bold py-1 px-2">Designation</TableCell>
            <TableCell className="border border-black py-1 px-2">{paySlipData.employeeInfo.designation}</TableCell>
          </TableRow>
          <TableRow className="border border-black">
            <TableCell className="border border-black font-bold py-1 px-2">Department</TableCell>
            <TableCell className="border border-black py-1 px-2">{paySlipData.employeeInfo.department}</TableCell>
            <TableCell className="border border-black font-bold py-1 px-2">Bank Account Number</TableCell>
            <TableCell className="border border-black py-1 px-2">{paySlipData.employeeInfo.bankAccount}</TableCell>
          </TableRow>
          <TableRow className="border border-black">
            <TableCell className="border border-black font-bold py-1 px-2">Gross Wage</TableCell>
            <TableCell className="border border-black py-1 px-2">{paySlipData.employeeInfo.grossWage}</TableCell>
            <TableCell className="border border-black font-bold py-1 px-2">Total Working Days</TableCell>
            <TableCell className="border border-black py-1 px-2">{paySlipData.employeeInfo.totalWorkingDays}</TableCell>
          </TableRow>
          <TableRow className="border border-black">
            <TableCell className="border border-black font-bold py-1 px-2">LOP Days</TableCell>
            <TableCell className="border border-black py-1 px-2">{paySlipData.employeeInfo.lopDays}</TableCell>
            <TableCell colSpan={2}></TableCell>
          </TableRow>
          
          {/* Earnings and Deductions Title Row */}
          <TableRow className="border border-black font-bold">
            <TableCell colSpan={2} className="text-center border border-black py-1 px-2">Earnings</TableCell>
            <TableCell colSpan={2} className="text-center border border-black py-1 px-2">Deductions</TableCell>
          </TableRow>

          {/* Earnings and Deductions Rows */}
          {paySlipData.earnings.map((earning, index) => (
            <TableRow key={index} className="border border-black">
              <TableCell className="border border-black py-1 px-2">{earning.label}</TableCell>
              <TableCell className="border border-black py-1 px-2">{earning.amount}</TableCell>
              {index < paySlipData.deductions.length ? (
                <>
                  <TableCell className="border border-black py-1 px-2">{paySlipData.deductions[index].label}</TableCell>
                  <TableCell className="border border-black py-1 px-2">{paySlipData.deductions[index].amount}</TableCell>
                </>
              ) : (
                <>
                  <TableCell className="border border-black py-1 px-2"></TableCell>
                  <TableCell className="border border-black py-1 px-2"></TableCell>
                </>
              )}
            </TableRow>
          ))}

          {/* Total Section */}
          <TableRow className="border border-black font-bold">
            <TableCell className="border border-black py-1 px-2">Total Earnings</TableCell>
            <TableCell className="border border-black py-1 px-2">{paySlipData.earnings[paySlipData.earnings.length - 1].amount}</TableCell>
            <TableCell className="border border-black py-1 px-2">Total Deductions</TableCell>
            <TableCell className="border border-black py-1 px-2">{paySlipData.deductions[paySlipData.deductions.length - 1].amount}</TableCell>
          </TableRow>

          {/* Net Salary */}
          <TableRow className="border border-black font-bold">
            <TableCell colSpan={3} className="border border-black text-right py-1 px-2">
              Net Salary
            </TableCell>
            <TableCell className="border border-black py-1 px-2">{paySlipData.netSalary}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>



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

        {/* <DataTableViewOptions table={table} /> */}
      </div>
    </div>
  );
};

export default EmployeeSalaryDetails;
