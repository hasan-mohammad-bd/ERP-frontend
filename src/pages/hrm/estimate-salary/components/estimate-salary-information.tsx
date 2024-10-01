"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Ensure you're importing from the correct path

type EmployeeSalaryData = {
  employee_name: string;
  allowance: number;
  deduction: number;
  total: number;
};

type EstimateSalaryInformationProps = {
  salaryData: EmployeeSalaryData[];
};

export default function EstimateSalaryInformation({
  salaryData,
}: EstimateSalaryInformationProps) {
  if (!salaryData || salaryData.length === 0) {
    return <p></p>;
  }

  // Calculate total estimate salary
  const totalEstimateSalary = salaryData.reduce((acc, employee) => {
    return acc + employee.total; // Summing up the total for each employee
  }, 0);

  return (
    <div className="w-full p-5 space-y-4">
      <Card className="p-5">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold ">Estimate Salary Information</h2>
        <div>
          Total : <span>{totalEstimateSalary}</span>
        </div>
      </div>

      <div className="rounded-md border mt-3">
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead className="">Employee Name</TableHead>
              <TableHead className="">Allowance</TableHead>
              <TableHead className="">Deduction</TableHead>
              <TableHead className="">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salaryData.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.employee_name}</TableCell>
                <TableCell>{employee.allowance}</TableCell>
                <TableCell>{employee.deduction}</TableCell>
                <TableCell>{employee.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Total Estimate Salary Section */}
      <div className="mt-4 grid place-items-end">
        <div className="flex gap-3">
          <h3 className="font-semibold ">Total Estimate Salary:</h3>
          <p className="font-semibold ">{totalEstimateSalary}</p>
        </div>
      </div>
      </Card>

    </div>
  );
}
