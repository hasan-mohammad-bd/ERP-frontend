import { useLazyGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { EmployeeColumn } from "@/lib/validators";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchSelect from "@/components/common/search-select";
import { useState } from "react";

interface Props {
  setFilterParams: (params: string) => void;
}

export default function EmployeeSalaryCertificateFilter({
  setFilterParams,
}: Props) {
  const [employee, setEmployee] = useState<EmployeeColumn | undefined>();

  const [getEmployees, { data: employees }] = useLazyGetEmployeesQuery();
  const employeeData = employees?.data || [];

  const handleEstimate = () => {
    setFilterParams(String(employee?.id));
  };

  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        {/* Employee Selector */}
        <SearchSelect
          items={employeeData || []}
          labelKey="first_name"
          valueKey="id"
          value={employee}
          placeholder="Select Employee"
          onSelect={setEmployee}
          onChangeSearch={(searchText) => getEmployees(`text=${searchText}`)}
          className="w-[250px]"
        />
        <Button
          variant="default"
          className="w-fit px-14 capitalize"
          onClick={handleEstimate}
          size={"sm"}
        >
          apply
        </Button>
      </div>
    </Card>
  );
}
