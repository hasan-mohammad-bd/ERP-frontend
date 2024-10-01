import { useState } from "react";
import EstimateSalarySearchToolbar from "./components/esstimate-salary-search-toolbar";
import EstimateSalaryInformation from "./components/estimate-salary-information";
import { EstimateSalaryColumn } from "@/lib/validators/hrm/estimate-salary";

export default function EstimateSalary() {
  const [salaryData, setSalaryData] = useState<EstimateSalaryColumn[]>([]);

  const handleShowEstimateSalary = (data: EstimateSalaryColumn[]) => {
    setSalaryData(data); // Update the salary data when Estimate button is clicked
  };

  return (
    <div>
      <EstimateSalarySearchToolbar
        onShowEstimateSalary={handleShowEstimateSalary}
      />
      <EstimateSalaryInformation salaryData={salaryData} />
    </div>
  );
}
