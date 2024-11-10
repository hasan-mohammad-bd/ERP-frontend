import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import DatePicker from "react-datepicker";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { EmployeeColumn } from "@/lib/validators";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod"; // Import the resolver
import { z } from "zod";
import { cn } from "@/utils";

interface Props {
  setFilterParams: (params: string) => void;
}

// Zod schema for form validation
const EstimateSalaryFormSchema = z.object({
  employee_id: z.string().nonempty("Employee is required"), // Ensure employee_id is not empty
  estimateSalaryDate: z.date(), // Expect a formatted string
});

interface FormValues {
  employee_id: string;
  estimateSalaryDate: Date | null;
}

export default function EmployeeSalaryPayslipFilter({
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
    // Format the selectedDate and set it in form data
    const salaryMonth = format(String(data.estimateSalaryDate), "yyyy-MM");
    if (!salaryMonth || !data.employee_id) {
      return;
    }

    const params = new URLSearchParams();
    params.append("employee_id", data.employee_id);
    params.append("salary_month", salaryMonth);
    const filterParams = params.toString();
    setFilterParams(filterParams);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleEstimate)}
        className="w-full rounded-lg space-y-6"
      >
        <Card className="p-5">
          <div className="grid gap-5 md:grid-cols-5">
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

            {/* Month and Year Picker */}
            <div className="space-y-2 flex flex-col">
              <label
                className={cn(
                  "text-sm font-medium mt-1",
                  form.formState.errors.estimateSalaryDate && "text-red-500"
                )}
              >
                Month and Year
              </label>
              <DatePicker
                selected={form.watch("estimateSalaryDate")} // Watch for form updates
                onChange={(date) => {
                  form.setValue("estimateSalaryDate", date); // Set the value
                  form.trigger("estimateSalaryDate"); // Trigger validation for the field
                }}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                placeholderText="Select month and year"
                className="border rounded p-2 w-full bg-none bg_remove"
              />

              {form.formState.errors.estimateSalaryDate && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.estimateSalaryDate?.message}
                </p>
              )}
            </div>
            <div className="pt-7">
              <Button
                variant="default"
                type="submit"
                className="w-fit px-14 mt-[3px] capitalize"
              >
                {/* {employeeSalaryPayslipLoading ? "Applying..." : "Apply"} */}
                apply
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </Form>
  );
}
