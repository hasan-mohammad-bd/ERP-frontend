import { Card } from "@/components/ui/card";
import SalaryCertificateVoucher from "./components/salary-certificate-boucher";
import PrintPDFWrapper from "@/components/common";
import { Heading } from "@/components/common/heading";
import EmployeeSalaryCertificateFilter from "./components/employee-salary-certificate-filter";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useGetEmployeeSalaryCertificateQuery } from "@/store/services/hrm/api/salary-certificate";
import { Loading } from "@/components/common/loading";

const SalaryCertificateScreen = () => {
  const [employeeId, setEmployeeId] = useState("");

  const { data, isLoading, isError } = useGetEmployeeSalaryCertificateQuery(
    employeeId,
    {
      skip: !employeeId,
    }
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Heading title="Employee Salary Certificate" description="" />
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <EmployeeSalaryCertificateFilter setFilterParams={setEmployeeId} />

        {isLoading && <Loading />}
        {data && !isLoading && !isError && (
          <Card className="flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4">
            <PrintPDFWrapper
              className="space-y-4"
              fileName="employee-salary-certificate"
            >
              <SalaryCertificateVoucher salaryCertificateData={data} />
            </PrintPDFWrapper>
          </Card>
        )}

        {isError && !isLoading && (
          <Card className="flex-1 space-y-4 max-w-[950px] w-full mx-auto p-3 py-6 grid place-items-center">
            <h2 className="text-center">No Data Found</h2>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SalaryCertificateScreen;
