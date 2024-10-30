import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  DepartmentColumn,
  EmployeeColumn,
  EmployeeClassColumn,
} from "@/lib/validators";

import { useGetDepartmentsQuery } from "@/store/services/hrm/api/department";
import { Card } from "@/components/ui/card";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { useGetEmployeeClassesQuery } from "@/store/services/hrm/api/employee-class";
import DatePicker from "react-datepicker";
import { z } from "zod";
import { format } from "date-fns";
import { cn } from "@/utils";

interface Props {
  setFilterParams: (params: string) => void;
}

const SalaryFilterFormSchema = z.object({
  employee_ids: z.string().optional(), // Ensure employee_id is not empty
  salary_month: z.date(), // Expect a formatted string
  department_id: z.string().optional(),
  employee_class_id: z.string().optional(),
});

interface SalaryFilterFormValues {
  employee_ids: string;
  salary_month: Date | null;
  department_id: string;
  employee_class_id: string;
}

export default function SalarySheetFilters({ setFilterParams }: Props) {
  const { data: departments, isLoading: departmentLoading } =
    useGetDepartmentsQuery("page=1&per_page=1000");
  const { data: employees, isLoading: employeeLoading } =
    useGetEmployeesQuery(`page=1&per_page=1000`);
  const { data: employeeClasses, isLoading: employeeClassLoading } =
    useGetEmployeeClassesQuery("per_page=1000");

  const employeeData = employees?.data || [];
  const departmentData = departments?.data || [];
  const employeeClassesData = employeeClasses?.data || [];

  const form = useForm<SalaryFilterFormValues>({
    resolver: zodResolver(SalaryFilterFormSchema),
  });

  async function onSubmit(data: SalaryFilterFormValues) {
    const salaryMonth = format(String(data.salary_month), "yyyy-MM");
    if (!salaryMonth) {
      return;
    }

    const params = new URLSearchParams();
    params.append("salary_month", salaryMonth);
    params.append("employee_ids", data.employee_ids ? data.employee_ids : "");
    params.append(
      "department_id",
      data.department_id ? data.department_id : ""
    );
    params.append(
      "employee_class_id",
      data.employee_class_id ? data.employee_class_id : ""
    );
    const filterParams = params.toString();
    setFilterParams(filterParams);
  }

  return (
    <Card className="p-6 my-4 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6 ">
          <div className="grid grid-cols-4 gap-5">
            <div className="space-y-2 flex flex-col">
              <label
                className={cn(
                  "text-sm font-medium mt-1",
                  form.formState.errors.salary_month && "text-red-500"
                )}
              >
                Month and Year
              </label>
              <DatePicker
                selected={form.watch("salary_month")} // Watch for form updates
                onChange={(date) => {
                  form.setValue("salary_month", date); // Set the value
                  form.trigger("salary_month"); // Trigger validation for the field
                }}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                placeholderText="Select month and year"
                className="border rounded p-2 w-full bg-none bg_remove"
              />

              {form.formState.errors.salary_month && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.salary_month?.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <FormSearchSelect<EmployeeColumn>
                loading={employeeLoading}
                data={employeeData}
                displayField="first_name"
                valueField="id"
                form={form}
                name="employee_ids"
                title="Select Employee"
                className="w-[245px]"
              />
            </div>

            <div className="w-full">
              <FormSearchSelect<DepartmentColumn>
                loading={departmentLoading}
                data={departmentData}
                displayField="name"
                valueField="id"
                form={form}
                name="department_id"
                title="Select Department"
                className="w-[245px]"
              />
            </div>
            <div className="w-full">
              <FormSearchSelect<EmployeeClassColumn>
                loading={employeeClassLoading}
                data={employeeClassesData}
                displayField="name"
                valueField="id"
                form={form}
                name="employee_class_id"
                title="Select Employee Class"
                className="w-[245px]"
              />
            </div>

            {/* <FormField
              control={form.control}
              name="organization_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Report Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.organization?.id
                        ? String(previousData.organization.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Bill Horizontal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organizationLoading ? (
                        <Loading />
                      ) : (
                        organizationData?.map(
                          (organization: OrganizationDropdownColumn) => (
                            <SelectItem
                              key={organization.id}
                              value={String(organization.id)}
                            >
                              {organization.name}
                            </SelectItem>
                          )
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organization_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Earn Deduction</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.organization?.id
                        ? String(previousData.organization.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Any" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organizationLoading ? (
                        <Loading />
                      ) : (
                        organizationData?.map(
                          (organization: OrganizationDropdownColumn) => (
                            <SelectItem
                              key={organization.id}
                              value={String(organization.id)}
                            >
                              {organization.name}
                            </SelectItem>
                          )
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="default" className="w-fit px-14">
              Apply
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
