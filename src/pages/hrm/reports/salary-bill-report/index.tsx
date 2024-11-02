// import { Card } from "@/components/ui/card";
// import PrintPDFWrapper from "@/components/common";
// import { Heading } from "@/components/common/heading";
// import { Separator } from "@/components/ui/separator";
// import { useState } from "react";
// import SalaryBillCertificateFilter from "./components/salary-bill-report-filter";
// import SalaryBillReportVoucher from "./components/salary-bill-report-voucher";
// import { useGetSalaryReportApiQuery } from "@/store/services/hrm/api/salary-bill-report";


// const SalaryBillReport = () => {
//   const [employeeId, setEmployeeId] = useState("");

//   const { data } = useGetSalaryReportApiQuery(
//     employeeId,
//     {
//       skip: !employeeId,
//     }
//   );

//   console.log("Employee ID:", employeeId);
//   console.log("Fetched Data:", data);

//   return (
//     <div className="flex flex-col gap-4">
//       <div className="flex items-center justify-between">
//         <Heading title="Employee Salary Certificate" description="" />
//       </div>
//       <Separator />
//       <div className="flex flex-col gap-4">
//         <SalaryBillCertificateFilter setFilterParams={setEmployeeId} />
//         <Card className="flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4">
//           <PrintPDFWrapper
//             className="space-y-4"
//             fileName="employee-salary-certificate"
//           >
//             <SalaryBillReportVoucher salaryCertificateData={data} />
//           </PrintPDFWrapper>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SalaryBillReport;


// SalaryBillReport.tsx

// SalaryBillReport.tsx
import { Card } from "@/components/ui/card";
import PrintPDFWrapper from "@/components/common";
import { Heading } from "@/components/common/heading";
import { Separator } from "@/components/ui/separator";
import SalaryBillCertificateFilter from "./components/salary-bill-report-filter";
import SalaryBillReportVoucher from "./components/salary-bill-report-voucher";
import { useState, useEffect } from "react";
import { useGetSalaryReportApiQuery } from "@/store/services/hrm/api/salary-bill-report";

const SalaryBillReport = () => {
  const [employeeId, setEmployeeId] = useState<string | null>("1"); // Set a default employeeId for testing

  // Fetch data based on the selected employeeId
  const { data, error, isLoading } = useGetSalaryReportApiQuery(employeeId || "");

 console.log("data",data );

  useEffect(() => {
    console.log("Employee ID:", employeeId);
  }, [employeeId]);

  useEffect(() => {
    console.log("Bill Report Data:", data);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Heading title="Employee Salary Bill Report" description="" />
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <SalaryBillCertificateFilter setFilterParams={setEmployeeId} />
        <Card className="flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4">
          <PrintPDFWrapper
            className="space-y-4"
            fileName="employee-salary-certificate"
          >
            {data ? (
              <SalaryBillReportVoucher salaryCertificateData={data} />
            ) : (
              <p>No data available</p>
            )}
          </PrintPDFWrapper>
        </Card>
      </div>
    </div>
  );
};

export default SalaryBillReport;

