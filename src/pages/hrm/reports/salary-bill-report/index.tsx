import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/common/heading";
import PrintPDFWrapper from "@/components/common/print-pdf-wrapper";
import { Loading } from "@/components/common/loading";
import { useGetEmployeesEstimateSalaryPayslipQuery } from "@/store/services/hrm/api/employee-salary-payslip";
import SalaryBillReportTable from "./components/salaryBillReportTable";
import EmployeeSalaryBillReportFilter from "./components/employee-salary-billReport-filter";

const SalaryBillReport = () => {
  const [filterParams, setFilterParams] = useState("");

  const {
    data,
    isLoading: employeeSalaryPayslipLoading,
    isError: employeeSalaryPayslipError,
  } = useGetEmployeesEstimateSalaryPayslipQuery(`${filterParams}`, {
    skip: !filterParams,
  });
  const employeeSalaryPayslipData = data?.data;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Employee Salary Bill Report"
          description="Manage job apply for you business"
        />
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <EmployeeSalaryBillReportFilter setFilterParams={setFilterParams} />

        {employeeSalaryPayslipLoading && <Loading />}

        {employeeSalaryPayslipData &&
          !employeeSalaryPayslipLoading &&
          !employeeSalaryPayslipError && (
            <Card className="flex-1 space-y-4 max-w-[950px] w-full mx-auto p-3 pb-4">
              <PrintPDFWrapper
                className="space-y-4"
                fileName="employee-salary-bill-report"
              >
                <SalaryBillReportTable
                  employeeSalaryPayslipData={employeeSalaryPayslipData}
                />
              </PrintPDFWrapper>
            </Card>
          )}
        {employeeSalaryPayslipError && !employeeSalaryPayslipLoading && (
          <Card className="flex-1 space-y-4 max-w-[950px] w-full mx-auto p-3 py-6 grid place-items-center">
            <h2 className="text-center">No Data Found</h2>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SalaryBillReport;
