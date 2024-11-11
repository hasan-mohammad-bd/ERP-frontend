import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
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

export default function SalaryListFilters({ setFilterParams }: Props) {
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
    const filterParams = params.toString();
    setFilterParams(filterParams);
  }

  return (
    <Card className="p-6 my-4 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6 ">
          <div className="grid grid-cols-6 gap-5">
            <div className="space-y-2 flex flex-col">
              <label
                className={cn(
                  "text-sm font-medium mt-1",
                  form.formState.errors.salary_month && "text-red-500"
                )}
              >
                Select Month and Year
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
            <div className="pt-8">
              <Button variant="default" className="w-fit px-14">
                Apply
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </Card>
  );
}
