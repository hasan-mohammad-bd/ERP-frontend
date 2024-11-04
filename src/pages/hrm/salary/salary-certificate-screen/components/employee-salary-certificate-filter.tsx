import {
  useGetEmployeesQuery,
  // useLazyGetEmployeesQuery,
} from "@/store/services/hrm/api/employee-list";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { EmployeeColumn } from "@/lib/validators";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchSelect from "@/components/common/search-select";
import { useState } from "react";

interface Props {
  setFilterParams: (params: string) => void;
}

export default function EmployeeSalaryCeertificateFilter({
  setFilterParams,
}: Props) {
  const [employee, setEmployee] = useState<EmployeeColumn | undefined>();

  // const [getEmployees, { data: employees }] = useLazyGetEmployeesQuery();
  const { data: employees } = useGetEmployeesQuery(`page=1&per_page=1000`);
  const employeeData = employees?.data || [];

  const handleEstimate = () => {
    setFilterParams(String(employee?.id));
  };

  return (
    <div className="w-full rounded-lg space-y-6">
      <Card className="p-5">
        <div className="grid gap-6 md:grid-cols-5">
          {/* Employee Selector */}
          <div>
            <SearchSelect
              items={employeeData || []}
              labelKey="first_name"
              valueKey="id"
              value={employee}
              placeholder="Select Employee"
              onSelect={setEmployee}
              // onChangeSearch={(searchText) =>
              //   getEmployees(`text=${searchText}`)
              // }
              className="w-full"
            />
          </div>
        </div>
        <div className="pt-4 col-span-3 flex justify-end mt-auto">
          <Button
            variant="default"
            className="w-fit px-14 mt-[3px] capitalize"
            onClick={handleEstimate}
          >
            apply
          </Button>
        </div>
      </Card>
    </div>

    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(handleEstimate)}
    //     className="w-full rounded-lg space-y-6"
    //   >
    //     <Card className="p-5">
    //       <div className="grid gap-6 md:grid-cols-5">
    //         {/* Employee Selector */}
    //         <div className="w-full">
    //           <FormSearchSelect<EmployeeColumn>
    //             loading={employeeLoading}
    //             data={employeeData}
    //             displayField="first_name"
    //             valueField="id"
    //             form={form}
    //             name="employee_id"
    //             title="Employee"
    //             className="w-[295px]"
    //           />
    //         </div>
    //       </div>
    //       <div className="pt-4 col-span-3 flex justify-end mt-auto">
    //         <Button
    //           variant="default"
    //           type="submit"
    //           className="w-fit px-14 mt-[3px] capitalize"
    //         >
    //           apply
    //         </Button>
    //       </div>
    //     </Card>
    //   </form>
    // </Form>
  );
}
