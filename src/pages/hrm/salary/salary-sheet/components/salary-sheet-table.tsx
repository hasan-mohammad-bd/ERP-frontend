import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

// Define types for the data structure
interface Employee {
  sl: number;
  name: string;
  bp: number;
  hra: number;
  ma: number;
  esa: number;
  tiff: number;
  wash: number;
  tot_ai: number;
  gpf: number;
  bf: number;
  tot_ded: number;
  net: number;
  signature: string;
  position: string;
}

interface Department {
  department: string;
  employees: Employee[];
}

// Define the type for the props
interface SalarySheetTableProps {
  data: Department[];
}

// Function to calculate totals and return as an array
const calculateTotals = (data: Department[]): number[] => {
  // Initialize totals
  let totalBp = 0;
  let totalHra = 0;
  let totalMa = 0;
  let totalEsa = 0;
  let totalTiff = 0;
  let totalWash = 0;
  let totalTotAi = 0;
  let totalGpf = 0;
  let totalBf = 0;
  let totalTotDed = 0;
  let totalNet = 0;

  // Iterate through each department
  data.forEach((department) => {
    // Iterate through each employee in the department
    department.employees.forEach((employee) => {
      totalBp += employee.bp;
      totalHra += employee.hra;
      totalMa += employee.ma;
      totalEsa += employee.esa;
      totalTiff += employee.tiff;
      totalWash += employee.wash;
      totalTotAi += employee.tot_ai;
      totalGpf += employee.gpf;
      totalBf += employee.bf;
      totalTotDed += employee.tot_ded;
      totalNet += employee.net;
    });
  });

  // Return totals as an array
  return [
    totalBp,
    totalHra,
    totalMa,
    totalEsa,
    totalTiff,
    totalWash,
    totalTotAi,
    totalGpf,
    totalBf,
    totalTotDed,
    totalNet,
  ];
};

const calculateDepartmentTotals = (employees: Employee[]) => {
  return employees.reduce(
    (totals, employee) => {
      totals.bp += employee.bp;
      totals.hra += employee.hra;
      totals.ma += employee.ma;
      totals.esa += employee.esa;
      totals.tiff += employee.tiff;
      totals.wash += employee.wash;
      totals.tot_ai += employee.tot_ai;
      totals.gpf += employee.gpf;
      totals.bf += employee.bf;
      totals.tot_ded += employee.tot_ded;
      totals.net += employee.net;
      return totals;
    },
    {
      bp: 0,
      hra: 0,
      ma: 0,
      esa: 0,
      tiff: 0,
      wash: 0,
      tot_ai: 0,
      gpf: 0,
      bf: 0,
      tot_ded: 0,
      net: 0,
    }
  );
};

const SalarySheetTable: React.FC<SalarySheetTableProps> = ({ data }) => {
  const totals = calculateTotals(data);
  return (
    <Table className="border">
      <TableHeader className="border border-black">
        <TableRow className="border h-0 bg-gray-100 text-black">
          {headings.map((heading, index) => (
            <TableHead
              key={index}
              className="border py-2.5 h-0 text-center text-black"
            >
              {heading}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((department, deptIndex) => {
          const departmentTotals = calculateDepartmentTotals(
            department.employees
          );
          return (
            <React.Fragment key={deptIndex}>
              <TableRow>
                <TableCell className="border py-2" colSpan={2}>
                  Department
                </TableCell>
                <TableCell className="border py-2" colSpan={12}>
                  {department.department}
                </TableCell>
              </TableRow>
              {department.employees.map((item, empIndex) => (
                <TableRow key={empIndex} className="border">
                  <TableCell className="border py-2 text-center">
                    {item.sl}
                  </TableCell>
                  <TableCell className="border py-2">
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="ml-1.5">{item.position}</span>
                    </div>
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.bp}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.hra}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.ma}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.esa}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.tiff}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.wash}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.tot_ai}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.gpf}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.bf}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.tot_ded}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.net}
                  </TableCell>
                  <TableCell className="border py-2 text-right">
                    {item.signature}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="border">
                <TableCell className="font-semibold border py-2"></TableCell>
                <TableCell className="font-semibold border py-2">
                  Subtotal
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.bp}
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.hra}
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.ma}
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.esa}
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.tiff}
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.wash}
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.tot_ai}
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.gpf}
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.bf}
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.tot_ded}
                </TableCell>
                <TableCell className="font-semibold border py-2 text-right">
                  {departmentTotals.net}
                </TableCell>
                <TableCell className="border py-2"></TableCell>
              </TableRow>
            </React.Fragment>
          );
        })}
        <TableRow className="border bg-gray-100">
          <TableCell colSpan={2} className="font-bold border py-2">
            Total
          </TableCell>
          {totals.map((total, index) => (
            <TableCell key={index} className="font-bold border py-2 text-right">
              {total}
            </TableCell>
          ))}
          <TableCell className="font-bold border py-2"></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SalarySheetTable;

const headings = [
  "SL",
  "Name",
  "B.P",
  "H.R.A",
  "M.A",
  "E.S.A",
  "Tiff",
  "Wash",
  "Tot AI",
  "G.P.F",
  "B.F",
  "Tot Ded",
  "Net",
  "Signature",
];
