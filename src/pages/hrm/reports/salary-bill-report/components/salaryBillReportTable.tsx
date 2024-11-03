// import { Card } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
// import { EmployeeSalaryPayslipData } from "@/lib/validators/hrm/employee-salary-payslip";
// import { format, parseISO } from "date-fns";

// interface PayslipProps {
//   employeeSalaryPayslipData: EmployeeSalaryPayslipData | null;
// }

// const SalaryBillReportTable = ({ employeeSalaryPayslipData }: PayslipProps) => {
//   if (!employeeSalaryPayslipData) return null;
//   return (
//     <div className="p-7">
//       <div className="mt-8 mb-5">
//         <p className="mt-4 font-bold text-center">
//           Salary Bill Report For{" "}
//           {format(parseISO(employeeSalaryPayslipData?.salary_month), "MMM-yy")}
//         </p>

//         <div className="text-sm w-full text-center">
//           <div>
//             Address:{" "}
//             {employeeSalaryPayslipData?.organization?.address?.join(", ")}
//           </div>{" "}
//           <div className="mb-2">
//             Phone: {employeeSalaryPayslipData?.organization?.phone?.join(", ")}
//           </div>
//         </div>
//       </div>

//       {/* <div className="text-right text-sm mb-3">
//         <div className="flex justify-between items-start">
//           <div></div>
//           <div>
//             <div>
//               <span className="font-bold">Voucher No:</span>{" "}
//               {data.entry_number}
//             </div>
//             <div>
//               <span className="font-bold">Date:</span> {data.date}
//             </div>
//           </div>
//         </div>
//       </div> */}
//       <div>
//         {/* main table card */}

//         <Card className="mx-auto">
//           {" "}
//           {/* Reduce overall table width */}
//           <Table className="border border-black">
//             {/* Employee Info Section */}
//             <TableBody>
//               <TableRow className="border border-black">
//                 <TableCell className="border border-black font-bold py-1 px-2">
//                   Name of the Employee
//                 </TableCell>
//                 <TableCell
//                   className="border border-black py-1 px-2"
//                   colSpan={3}
//                 >
//                   {`${employeeSalaryPayslipData?.employee?.first_name} 
//                   ${employeeSalaryPayslipData?.employee?.last_name}`}
//                 </TableCell>
//               </TableRow>
//               <TableRow className="border border-black">
//                 <TableCell className="border border-black font-bold py-1 px-2">
//                   Employee ID
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   {employeeSalaryPayslipData?.employee_id}
//                 </TableCell>
//                 <TableCell className="border border-black font-bold py-1 px-2">
//                   Designation
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   {employeeSalaryPayslipData?.employee?.designation?.name}
//                 </TableCell>
//               </TableRow>
//               <TableRow className="border border-black">
//                 <TableCell className="border border-black font-bold py-1 px-2">
//                   Department
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   {employeeSalaryPayslipData?.employee?.department?.name}
//                 </TableCell>
//                 <TableCell className="border border-black font-bold py-1 px-2">
//                   Bank Account Number
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   {employeeSalaryPayslipData?.employee?.account_number}
//                 </TableCell>
//               </TableRow>
//               <TableRow className="border border-black">
//                 <TableCell className="border border-black font-bold py-1 px-2">
//                   Gross Wage
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   TK.{" "}
//                   {Number(employeeSalaryPayslipData?.allowance_total)?.toFixed(
//                     2
//                   )}
//                 </TableCell>
//                 <TableCell className="border border-black font-bold py-1 px-2">
//                   Total Working Days
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   {employeeSalaryPayslipData?.working_days}
//                 </TableCell>
//               </TableRow>
//               {/* <TableRow className="border border-black">
//                 <TableCell className="border border-black font-bold py-1 px-2">
//                   LOP Days
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   {paySlipData.employeeInfo.lopDays}
//                 </TableCell>
//                 <TableCell colSpan={2}></TableCell>
//               </TableRow> */}

//               {/* Earnings and Deductions Title Row */}
//               <TableRow className="border border-black font-bold">
//                 <TableCell
//                   colSpan={1}
//                   className="text-center border border-black py-1 px-2"
//                 >
//                   Earnings
//                 </TableCell>
//                 <TableCell
//                   colSpan={2}
//                   className="text-center border border-black py-1 px-2"
//                 >
//                   Deductions
//                 </TableCell>
//               </TableRow>

//               {/* Table Rows for Earnings and Deductions */}
//               <TableRow>
//                 {/* Earnings Column */}
//                 <TableCell
//                   colSpan={2}
//                   className="align-top border border-black !p-0"
//                 >
//                   <Table>
//                     <TableBody>
//                       {employeeSalaryPayslipData?.salary_details
//                         ?.filter(
//                           (salary: any) =>
//                             salary?.salary_category?.type === "Allowance"
//                         )
//                         ?.map((earning: any, index: number) => (
//                           <TableRow key={index} className="group">
//                             <TableCell className="border border-black border-r-0 border-l-0 group-first:border-t-0 py-1 px-2 w-[70%]">
//                               {earning.salary_category.name}
//                             </TableCell>
//                             <TableCell className="border border-black border-r-0 group-first:border-t-0 py-1 px-2 w-[30%]">
//                               TK. {earning.amount}
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                     </TableBody>
//                   </Table>
//                 </TableCell>

//                 {/* Deductions Column */}
//                 <TableCell
//                   colSpan={2}
//                   className="align-top border border-black border-b-0 !p-0"
//                 >
//                   <Table>
//                     <TableBody>
//                       {employeeSalaryPayslipData?.salary_details
//                         ?.filter(
//                           (salary: any) =>
//                             salary?.salary_category?.type === "Deduction"
//                         )
//                         ?.map((deduction: any, index: number) => (
//                           <TableRow key={index} className="group">
//                             <TableCell className="border border-black border-r-0 border-l-0 group-first:border-t-0 group-last:border-b-0 py-1 px-2 w-[70%]">
//                               {deduction.salary_category.name}
//                             </TableCell>
//                             <TableCell className="border border-black border-r-0 group-first:border-t-0 group-last:border-b-0 py-1 px-2 w-[30%]">
//                               TK. {deduction.amount}
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                     </TableBody>
//                   </Table>
//                 </TableCell>
//               </TableRow>

//               {/* Total Section */}
//               <TableRow className="border border-black font-bold">
//                 <TableCell className="border border-black py-1 px-2">
//                   Total Earnings
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   TK.{" "}
//                   {Number(employeeSalaryPayslipData?.allowance_total)?.toFixed(
//                     2
//                   )}
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   Total Deductions
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   TK.{" "}
//                   {Number(employeeSalaryPayslipData?.deduction_total)?.toFixed(
//                     2
//                   )}
//                 </TableCell>
//               </TableRow>

//               {/* Net Salary */}
//               <TableRow className="border border-black font-bold">
//                 <TableCell
//                   colSpan={3}
//                   className="border border-black text-right py-1 px-2"
//                 >
//                   Net Salary
//                 </TableCell>
//                 <TableCell className="border border-black py-1 px-2">
//                   TK. {employeeSalaryPayslipData?.net_salary}
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SalaryBillReportTable;


import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { EmployeeSalaryPayslipData } from "@/lib/validators/hrm/employee-salary-payslip";
import { format, parseISO } from "date-fns";

interface PayslipProps {
  employeeSalaryPayslipData: EmployeeSalaryPayslipData | null;
}

const SalaryBillReportTable = ({ employeeSalaryPayslipData }: PayslipProps) => {
  if (!employeeSalaryPayslipData) return null;

  return (
    <div className="p-7">
      <div className="mt-8 mb-5">
        <p className="mt-4 font-bold text-center">
          Salary Bill Report For{" "}
          {format(parseISO(employeeSalaryPayslipData?.salary_month), "MMM-yy")}
        </p>

        <div className="text-sm w-full text-center">
          <div>
            Address:{" "}
            {employeeSalaryPayslipData?.organization?.address?.join(", ")}
          </div>{" "}
          <div className="mb-2">
            Phone: {employeeSalaryPayslipData?.organization?.phone?.join(", ")}
          </div>
        </div>
      </div>

      <Card className="mx-auto">
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
                {`${employeeSalaryPayslipData?.employee?.first_name}
                ${employeeSalaryPayslipData?.employee?.last_name}`}
              </TableCell>
            </TableRow>
            <TableRow className="border border-black">
              <TableCell className="border border-black font-bold py-1 px-2">
                Employee ID
              </TableCell>
              <TableCell className="border border-black py-1 px-2">
                {employeeSalaryPayslipData?.employee_id}
              </TableCell>
              <TableCell className="border border-black font-bold py-1 px-2">
                Designation
              </TableCell>
              <TableCell className="border border-black py-1 px-2">
                {employeeSalaryPayslipData?.employee?.designation?.name}
              </TableCell>
            </TableRow>
            <TableRow className="border border-black">
              <TableCell className="border border-black font-bold py-1 px-2">
                Department
              </TableCell>
              <TableCell className="border border-black py-1 px-2">
                {employeeSalaryPayslipData?.employee?.department?.name}
              </TableCell>
              <TableCell className="border border-black font-bold py-1 px-2">
                Bank Account Number
              </TableCell>
              <TableCell className="border border-black py-1 px-2">
                {employeeSalaryPayslipData?.employee?.account_number}
              </TableCell>
            </TableRow>
            <TableRow className="border border-black">
              <TableCell className="border border-black font-bold py-1 px-2">
                Gross Wage
              </TableCell>
              <TableCell className="border border-black py-1 px-2">
                TK.{" "}
                {Number(employeeSalaryPayslipData?.allowance_total)?.toFixed(2)}
              </TableCell>
              <TableCell className="border border-black font-bold py-1 px-2">
                Total Working Days
              </TableCell>
              <TableCell className="border border-black py-1 px-2">
                {employeeSalaryPayslipData?.working_days}
              </TableCell>
            </TableRow>

            {/* Earnings Section */}
            <TableRow className="border border-black font-bold">
              <TableCell className="py-1 px-2">
                Earnings
              </TableCell>
            </TableRow>
            {employeeSalaryPayslipData?.salary_details
              ?.filter((salary) => salary?.salary_category?.type === "Allowance")
              ?.map((earning, index) => (
                <TableRow key={index} className="group">
                  <TableCell
                    colSpan={2}
                    className="border border-black py-1 px-2"
                  >
                    {earning.salary_category.name}
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    className="border border-black py-1 px-2 text-right"
                  >
                    TK. {earning.amount}
                  </TableCell>
                </TableRow>
              ))}


              {/* total earning section */}
               <TableRow className="group">
                  <TableCell
                    colSpan={2}
                    className="border border-black py-1 px-2 font-bold"
                  >
                    Total Earnings
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    className="border border-black py-1 px-2 text-right font-bold"
                  >
                    {Number(employeeSalaryPayslipData?.allowance_total)?.toFixed(2)}
                  </TableCell>
                </TableRow>


            {/* Deductions Section */}
            <TableRow className="border border-black font-bold">
              <TableCell  className="py-1 px-2">
                Deductions
              </TableCell>
            </TableRow>
            {employeeSalaryPayslipData?.salary_details
              ?.filter((salary) => salary?.salary_category?.type === "Deduction")
              ?.map((deduction, index) => (
                <TableRow key={index} className="group">
                  <TableCell
                    colSpan={2}
                    className="border border-black py-1 px-2"
                  >
                    {deduction.salary_category.name}
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    className="border border-black py-1 px-2 text-right"
                  >
                    TK. {deduction.amount}
                  </TableCell>
                </TableRow>
              ))}

            {/* Total deduction Section */}
             {/* total earning section */}
             <TableRow className="group">
                  <TableCell
                    colSpan={2}
                    className="border border-black py-1 px-2 font-bold"
                  >
                    Total Deduction
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    className="border border-black py-1 px-2 text-right font-bold"
                  >
                    {Number(employeeSalaryPayslipData?.deduction_total)?.toFixed(2)}
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
                TK. {employeeSalaryPayslipData?.net_salary}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default SalaryBillReportTable;
