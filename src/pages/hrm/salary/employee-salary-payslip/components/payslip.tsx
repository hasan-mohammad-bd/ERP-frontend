import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

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

const Payslip = () => {
  return (
    <div className="p-7">
      <div className="mt-8">
        <p className="mt-4 font-bold text-center">Salary Pay Slip For Sep-19</p>

        <div className="text-sm w-full text-center">
          <div>Address: House 51C Road-13/B, Dhaka 1230</div>{" "}
          <div className="mb-2">Phone: 01712345678</div>
        </div>
      </div>

      <div className="text-right text-sm mb-3">
        <div className="flex justify-between items-start">
          <div></div>
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

        <Card className="mx-auto">
          {" "}
          {/* Reduce overall table width */}
          <Table className="border border-black">
            {/* Employee Info Section */}
            <TableBody>
              <TableRow className="border border-black">
                <TableCell className="border border-black font-bold py-1 px-2">
                  Name of the Employee
                </TableCell>
                <TableCell
                  className="border border-black py-1 px-2"
                  colSpan={3}
                >
                  {paySlipData.employeeInfo.name}
                </TableCell>
              </TableRow>
              <TableRow className="border border-black">
                <TableCell className="border border-black font-bold py-1 px-2">
                  Employee ID
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  {paySlipData.employeeInfo.employeeId}
                </TableCell>
                <TableCell className="border border-black font-bold py-1 px-2">
                  Designation
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  {paySlipData.employeeInfo.designation}
                </TableCell>
              </TableRow>
              <TableRow className="border border-black">
                <TableCell className="border border-black font-bold py-1 px-2">
                  Department
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  {paySlipData.employeeInfo.department}
                </TableCell>
                <TableCell className="border border-black font-bold py-1 px-2">
                  Bank Account Number
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  {paySlipData.employeeInfo.bankAccount}
                </TableCell>
              </TableRow>
              <TableRow className="border border-black">
                <TableCell className="border border-black font-bold py-1 px-2">
                  Gross Wage
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  {paySlipData.employeeInfo.grossWage}
                </TableCell>
                <TableCell className="border border-black font-bold py-1 px-2">
                  Total Working Days
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  {paySlipData.employeeInfo.totalWorkingDays}
                </TableCell>
              </TableRow>
              <TableRow className="border border-black">
                <TableCell className="border border-black font-bold py-1 px-2">
                  LOP Days
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  {paySlipData.employeeInfo.lopDays}
                </TableCell>
                <TableCell colSpan={2}></TableCell>
              </TableRow>

              {/* Earnings and Deductions Title Row */}
              <TableRow className="border border-black font-bold">
                <TableCell
                  colSpan={2}
                  className="text-center border border-black py-1 px-2"
                >
                  Earnings
                </TableCell>
                <TableCell
                  colSpan={2}
                  className="text-center border border-black py-1 px-2"
                >
                  Deductions
                </TableCell>
              </TableRow>

              {/* Earnings and Deductions Rows */}
              {paySlipData.earnings.map((earning, index) => (
                <TableRow key={index} className="border border-black">
                  <TableCell className="border border-black py-1 px-2">
                    {earning.label}
                  </TableCell>
                  <TableCell className="border border-black py-1 px-2">
                    {earning.amount}
                  </TableCell>
                  {index < paySlipData.deductions.length ? (
                    <>
                      <TableCell className="border border-black py-1 px-2">
                        {paySlipData.deductions[index].label}
                      </TableCell>
                      <TableCell className="border border-black py-1 px-2">
                        {paySlipData.deductions[index].amount}
                      </TableCell>
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
                <TableCell className="border border-black py-1 px-2">
                  Total Earnings
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  {paySlipData.earnings[paySlipData.earnings.length - 1].amount}
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  Total Deductions
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  {
                    paySlipData.deductions[paySlipData.deductions.length - 1]
                      .amount
                  }
                </TableCell>
              </TableRow>

              {/* Net Salary */}
              <TableRow className="border border-black font-bold">
                <TableCell
                  colSpan={3}
                  className="border border-black text-right py-1 px-2"
                >
                  Net Salary
                </TableCell>
                <TableCell className="border border-black py-1 px-2">
                  {paySlipData.netSalary}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Payslip;
