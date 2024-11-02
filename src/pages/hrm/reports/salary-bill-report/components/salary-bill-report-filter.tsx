import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { EmployeeColumn } from "@/lib/validators";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { zodResolver } from "@hookform/resolvers/zod"; // Import the resolver
import { z } from "zod";

interface Props {
  setFilterParams: (params: string) => void;
}

// Zod schema for form validation
const EstimateSalaryFormSchema = z.object({
  employee_id: z.string().nonempty("Employee is required"), // Ensure employee_id is not empty
});

interface FormValues {
  employee_id: string;
}

export default function SalaryBillReportFilter({
  setFilterParams,
}: Props) {
  const { data: employees, isLoading: employeeLoading } =
    useGetEmployeesQuery(`page=1&per_page=1000`);
  const employeeData = employees?.data || [];

  // Use Zod validation with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(EstimateSalaryFormSchema),
  });

  const handleEstimate = async (data: FormValues) => {
    setFilterParams(data.employee_id);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleEstimate)}
        className="w-full rounded-lg space-y-6"
      >
        <Card className="p-5">
          <div className="grid gap-6 md:grid-cols-5">
            {/* Employee Selector */}
            <div className="w-full">
              <FormSearchSelect<EmployeeColumn>
                loading={employeeLoading}
                data={employeeData}
                displayField="first_name"
                valueField="id"
                form={form}
                name="employee_id"
                title="Employee"
                className="w-[295px]"
              />
            </div>
          </div>
          <div className="pt-7 col-span-3 flex justify-end mt-auto">
            <Button
              variant="default"
              type="submit"
              className="w-fit px-14 mt-[3px] capitalize"
            >
              apply
            </Button>
          </div>
        </Card>
      </form>
    </Form>
  );
}