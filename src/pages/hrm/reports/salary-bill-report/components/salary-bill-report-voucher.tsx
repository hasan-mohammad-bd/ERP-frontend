import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmployeeBillReport } from "@/lib/validators/hrm/report/salary-bill-report";

import { format } from "date-fns";

interface Props {
  salaryCertificateData: EmployeeBillReport;
}

const SalaryBillReportVoucher = ({ salaryCertificateData }: Props) => {
  if (!salaryCertificateData) return;
  console.log(salaryCertificateData);
  return (
    <div>
      <div>
        <div className="p-7">
          <div className="flex flex-col items-center gap-8 mb-4">
            <h2 className="font-bold text-center text-2xl">
              Employee Salary Bill Report
            </h2>
            <p className="font-bold text-center text-lg underline capitalize">
              To whom it may concern
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-4">Date: {format(new Date(), "MM/dd/yyyy")}</p>
            {/* <p className="mb-3">
              This is Refers to{" "}
              {`${salaryCertificateData?.employee?.first_name} ${salaryCertificateData?.employee?.last_name}`}
              , has been employed with Akaar IT Ltd. for the past two years. He
              has been a dedicated and hardworking employee of our company.
            </p> */}
            <div className="space-y-3 mb-3">
              <p className="font-bold">Employee Details:</p>
              <p>
                Employee ID:{" "}
                {salaryCertificateData?.employee?.employee_unique_id}
              </p>
              <p>
                Name:{" "}
                {`${salaryCertificateData?.employee?.first_name} ${salaryCertificateData?.employee?.last_name}`}
              </p>
              <p>Employee Type: Permanent</p>
              <p>
                Designation:{" "}
                {salaryCertificateData?.employee?.designation?.name}
              </p>
              <p>
                Date of Joining:{" "}
                {format(
                  salaryCertificateData?.employee?.joining_date,
                  "MMM dd, yyy"
                )}
              </p>
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
                      Tk. {salaryCertificateData?.summery.total_allowance}
                    </TableCell>
                    <TableCell className="font-bold border border-black py-[5px]">
                      Total Deductions
                    </TableCell>
                    <TableCell className="font-bold border border-black py-[5px]">
                      Tk.
                      {salaryCertificateData?.summery.total_deduction}
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
                      Tk. {salaryCertificateData?.summery.total}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
          <p className="my-4">
            Mr.   {`${salaryCertificateData?.employee?.first_name} ${salaryCertificateData?.employee?.last_name}`} salary is paid on a monthly basis and includes
            all applicable allowances and deductions as per company policy. He
            has shown excellent performance throughout his tenure.
          </p>
          <p className="mb-4">
            If you have any questions or need further information, please feel
            free to contact us.
          </p>

          <p className="mb-10 font-medium">Sincerely,</p>
          <div className="space-y-2">
            <p>Md Ashiqur Rahman</p>
            <p>Chairman</p>
            <p>Akaar IT Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryBillReportVoucher;

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
  {
    earnings: "Conveyance Allowances",
    earningAmount: "100",
    deductions: "",
    deductionAmount: "123",
  },
  {
    earnings: "Medical Allowances",
    earningAmount: "100",
    deductions: "",
    deductionAmount: "123",
  },
  {
    earnings: "Other Allowances",
    earningAmount: "100",
    deductions: "",
    deductionAmount: "123",
  },
];