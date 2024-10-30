import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";
import SalarySheetFilters from "./components/salary-sheet-filters";
import { Card } from "@/components/ui/card";
import SalarySheetTable from "./components/salary-sheet-table";
import PrintPDFWrapper from "@/components/common";
import { useState } from "react";
import { useGetSalaryReportQuery } from "@/store/services/hrm/api/salary-report";
import { Loading } from "@/components/common/loading";
import { useAuth } from "@/store/hooks";
import { format, parseISO } from "date-fns";

export default function SalarySheet() {
  const [filterParams, setFilterParams] = useState("");
  const { user } = useAuth();

  const {
    data,
    isLoading: salaryReportLoading,
    isError: salaryReportError,
  } = useGetSalaryReportQuery(`${filterParams}`, {
    skip: !filterParams,
  });
  // console.log(data);
  const salaryReportData = data?.data;

  const departmentNames =
    salaryReportData?.map((department) => department?.name) || [];

  const formattedDepartments =
    departmentNames.length > 1
      ? departmentNames.slice(0, -1).join(", ") +
        " and " +
        departmentNames.slice(-1)
      : departmentNames[0] || "";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Heading
          title="Salary Sheet"
          description="Manage job apply for you business"
        />
      </div>
      <Separator />
      <SalarySheetFilters setFilterParams={setFilterParams} />

      {salaryReportLoading && <Loading />}

      {salaryReportData &&
        salaryReportData?.length !== 0 &&
        !salaryReportLoading &&
        !salaryReportError && (
          <Card className="p-4">
            <PrintPDFWrapper
              className="space-y-4"
              fileName="employee-salary-payslip"
            >
              <div className="flex flex-col items-center mb-8 max-w-4xl mx-auto">
                <h3 className="text-lg font-semibold">
                  {user?.organization.name}
                </h3>
                <p>{user?.organization.address.join(", ")}</p>
                <p>
                  Salary Bill ({formattedDepartments}){" "}
                  {format(
                    parseISO(filterParams?.split("&")[0]?.split("=")[1]),
                    "MMM-yy"
                  )}
                </p>
              </div>
              <SalarySheetTable
                data={salaryReportData}
                salary_category={data?.salary_category}
              />
            </PrintPDFWrapper>
            {/* <div className="rounded-md overflow-hidden"></div> */}
          </Card>
        )}
      {salaryReportData?.length === 0 &&
        !salaryReportError &&
        !salaryReportLoading && (
          <Card className="flex-1 space-y-4 max-w-[950px] w-full mx-auto p-3 py-6 grid place-items-center">
            <h2 className="text-center">No Data Found</h2>
          </Card>
        )}
    </div>
  );
}
