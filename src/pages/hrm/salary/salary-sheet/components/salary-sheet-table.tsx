import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  SalaryCategory,
  SalaryDepartmentColumn,
} from "@/lib/validators/hrm/salary-report";
import React from "react";

interface Props {
  data: SalaryDepartmentColumn[];
  salary_category: SalaryCategory[];
}
const SalarySheetTable = ({ data, salary_category }: Props) => {
  function calculateSubtotals(department: SalaryDepartmentColumn): number[] {
    const subtotals: { [categoryName: string]: number } = {};

    department?.employees.forEach((employee) => {
      employee?.salaries.forEach((salary) => {
        salary.salary_details.forEach((detail) => {
          if (subtotals[detail.category_name]) {
            subtotals[detail.category_name] += detail.total;
          } else {
            subtotals[detail.category_name] = detail.total;
          }
        });
      });
    });

    // Return only the values as an array
    return Object.values(subtotals);
  }

  function calculateTotalAcrossAllDepartments(
    data: SalaryDepartmentColumn[]
  ): number[] {
    const combinedTotals: { [categoryName: string]: number } = {};

    data.forEach((department) => {
      const departmentSubtotals = calculateSubtotals(department);

      Object.keys(department.employees[0]?.salaries[0].salary_details).forEach(
        (categoryName, index) => {
          if (combinedTotals[categoryName]) {
            combinedTotals[categoryName] += departmentSubtotals[index];
          } else {
            combinedTotals[categoryName] = departmentSubtotals[index];
          }
        }
      );
    });

    // Return the combined totals as an array
    return Object.values(combinedTotals);
  }

  // Calculate the total across all departments
  // const grandTotalArray = calculateTotalAcrossAllDepartments(data);
  // console.log("Total of all departments as an array:", grandTotalArray);
  // data.forEach((department) => {
  //   const subtotalValues = calculateSubtotals(department);
  //   console.log(`Subtotal values for Department: ${department.name}`);
  //   console.log(subtotalValues);
  // });

  // function calculateSubtotals(department: Department) {
  //   const subtotals: { [categoryName: string]: number } = {};

  //   department.employees.forEach((employee) => {
  //     employee.salaries.forEach((salary) => {
  //       salary.salary_details.forEach((detail) => {
  //         if (subtotals[detail.category_name]) {
  //           subtotals[detail.category_name] += detail.total;
  //         } else {
  //           subtotals[detail.category_name] = detail.total;
  //         }
  //       });
  //     });
  //   });

  //   return subtotals;
  // }

  // // Calculate and display subtotals for each department
  // data.forEach((department) => {
  //   const subtotals = calculateSubtotals(department);
  //   console.log(`Subtotals for Department: ${department.name}`);
  //   console.log(subtotals);
  // });

  // Reusable function to calculate subtotal for any key
  function calculateSubtotal(department: SalaryDepartmentColumn, key: string) {
    let subtotal = 0;

    department.employees.forEach((employee) => {
      employee.salaries.forEach((salary) => {
        subtotal += (salary as any)[key] || 0; // Use 'as any' to bypass type checking
      });
    });

    return subtotal;
  }

  function calculateGrandTotal(data: SalaryDepartmentColumn[], key: string) {
    return data.reduce((total, department) => {
      return total + calculateSubtotal(department, key);
    }, 0);
  }

  return (
    <ScrollArea className="w-[1567px] whitespace-nowrap">
      <Table className="border">
        <TableHeader className="border border-black">
          <TableRow className="border h-0 bg-gray-100 text-black">
            <TableHead className="border py-2.5 h-0 text-center text-black">
              SL
            </TableHead>
            <TableHead className="border py-2.5 h-0 text-center text-black">
              Name
            </TableHead>
            {salary_category.map((category, index) => (
              <TableHead
                key={index}
                title={category.name}
                className="border py-2.5 h-0 text-center text-black"
              >
                {category.short_code
                  ? category.short_code
                  : category.name
                      .split(" ")
                      .map((word) => word[0])
                      .join(".")}
              </TableHead>
            ))}
            <TableHead className="border py-2.5 h-0 text-center text-black">
              Tot AI
            </TableHead>
            <TableHead className="border py-2.5 h-0 text-center text-black">
              Tot Ded
            </TableHead>
            <TableHead className="border py-2.5 h-0 text-center text-black">
              Net
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((department, deptIndex) => {
            return (
              <React.Fragment key={deptIndex}>
                <TableRow>
                  <TableCell className="border py-2" colSpan={2}>
                    Department
                  </TableCell>
                  <TableCell className="border py-2" colSpan={12}>
                    {department?.name}
                  </TableCell>
                </TableRow>
                {department.employees.map((employee, empIndex) => (
                  <TableRow key={empIndex} className="border">
                    <TableCell className="border py-2 text-center">
                      {empIndex + 1}
                    </TableCell>
                    <TableCell className="border py-2">
                      <div className="flex flex-col">
                        <span>{`${employee.first_name} ${employee.last_name}`}</span>
                        <span className="ml-1.5">{employee.designation}</span>
                      </div>
                    </TableCell>

                    {employee?.salaries?.map((salary) => (
                      <>
                        {salary?.salary_details?.map((salaryDetail) => (
                          <TableCell className="border py-2 text-right">
                            {salaryDetail.total}
                          </TableCell>
                        ))}
                        <TableCell className="border py-2 text-right">
                          {salary.allowance_total}
                        </TableCell>
                        <TableCell className="border py-2 text-right">
                          {salary.deduction_total}
                        </TableCell>
                        <TableCell className="border py-2 text-right">
                          {salary.net_salary}
                        </TableCell>
                      </>
                    ))}
                  </TableRow>
                ))}
                <TableRow className="border">
                  <TableCell className="font-semibold border py-2"></TableCell>
                  <TableCell className="font-semibold border py-2">
                    Subtotal
                  </TableCell>
                  {calculateSubtotals(department).map((subtotal) => (
                    <TableCell className="font-semibold border py-2 text-right">
                      {subtotal}
                    </TableCell>
                  ))}
                  {["allowance_total", "deduction_total", "net_salary"].map(
                    (key, keyIndex) => (
                      <TableCell
                        key={keyIndex}
                        className="font-semibold border py-2 text-right"
                      >
                        {calculateSubtotal(department, key)}
                      </TableCell>
                    )
                  )}{" "}
                </TableRow>
              </React.Fragment>
            );
          })}
          <TableRow className="border bg-gray-100">
            <TableCell colSpan={2} className="font-bold border py-2">
              Total
            </TableCell>
            {calculateTotalAcrossAllDepartments(data).map((total, index) => (
              <TableCell
                key={index}
                className="font-bold border py-2 text-right"
              >
                {total?.toFixed(0)}
              </TableCell>
            ))}
            {["allowance_total", "deduction_total", "net_salary"].map(
              (key, keyIndex) => (
                <TableCell
                  key={keyIndex}
                  className="font-bold border py-2 text-right"
                >
                  {calculateGrandTotal(data, key)}
                </TableCell>
              )
            )}
          </TableRow>
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default SalarySheetTable;
