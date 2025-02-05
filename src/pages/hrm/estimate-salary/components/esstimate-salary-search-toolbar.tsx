import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { useEstimateSalaryMutation } from "@/store/services/hrm/api/estimate-salary";
import { useSalaryGenerateMutation } from "@/store/services/hrm/api/salary-generate";
import MultipleSelector, { Option } from "@/components/ui/multiSelectSearch";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { EmployeeColumn } from "@/lib/validators";
import { EstimateSalaryColumn } from "@/lib/validators/hrm/estimate-salary";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type EstimateSalarySearchToolbarProps = {
  onShowEstimateSalary: (salaryData: EstimateSalaryColumn[]) => void;
};

interface FormValues {
  employee_ids: string;
  bank_advice_no: string;
  bank_date: Date | null;
  note: string;
}

export default function EstimateSalarySearchToolbar({
  onShowEstimateSalary,
}: EstimateSalarySearchToolbarProps) {
  const [selectedEmployees, setSelectedEmployees] = useState<Option[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState("");
  const [estimateClicked, setEstimateClicked] = useState(false);
  const [estimateSalary] = useEstimateSalaryMutation();
  const [salaryGenerate] = useSalaryGenerateMutation();
  const navigate = useNavigate();

  const selectedEmployeeAction = useSelector(
    (state: any) => state.common.selectedEmployeeAction
  );

  useEffect(() => {
    if (selectedEmployeeAction.action === "salary-estimate-generate") {
      const uniqueEmployees = selectedEmployeeAction.payload.map(
        (item: any) => ({
          value: String(item.id),
          label: `${item.first_name} ${item.last_name} (${item.id})`,
        })
      );
      setSelectedEmployees(uniqueEmployees);
    }
  }, [selectedEmployeeAction]);

  const { data: employeeList } = useGetEmployeesQuery(
    `per_page=15&page=1&text=${employeeSearchTerm}`,
    {
      skip: !employeeSearchTerm,
    }
  );

  const form = useForm<FormValues>({
    defaultValues: {
      employee_ids: "",
      bank_advice_no: "",
      bank_date: null,
      note: "",
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const handleSearch = async (query: string): Promise<Option[]> => {
    setEmployeeSearchTerm(query);

    const options =
      employeeList?.data?.map((item: EmployeeColumn) => ({
        value: String(item.id),
        label: `${item.first_name} ${item.last_name} (${item.id})`,
      })) || [];

    return options;
  };

  const handleEstimate = async () => {
    if (!selectedDate || !selectedEmployees.length) {
      return;
    }

    const employeeIds = selectedEmployees.map((emp) => Number(emp.value));
    const salaryMonth = format(selectedDate, "yyyy-MM");

    try {
      const response = await estimateSalary({
        employee_ids: employeeIds,
        salary_month: salaryMonth,
      }).unwrap();
      if (response.data) {
        onShowEstimateSalary(response.data);
        setEstimateClicked(true);
      }
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  };

  const handleGenerate = async (data: FormValues) => {
    if (!selectedEmployees.length || !selectedDate || !data.bank_advice_no) {
      return;
    }

    const employeeIds = selectedEmployees.map((emp) => Number(emp.value));
    const salaryMonth = format(selectedDate, "yyyy-MM");

    try {
      await salaryGenerate({
        bank_advice_no: data.bank_advice_no,
        bank_date: format(data.bank_date!, "yyyy-MM-dd"),
        comment: data.note,
        employee_ids: employeeIds,
        salary_month: salaryMonth,
      }).unwrap();
      toast.success("Salary Generated Successfully");
      navigate("/hrm/salary-list");
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(
          estimateClicked ? handleGenerate : handleEstimate
        )}
        className="w-full p-4 rounded-lg space-y-6"
      >
        <h2 className="font-semibold mb-6">Estimate Salary</h2>

        <Card>
          <div className="grid gap-4  2xl:grid-cols-6 grid-cols-4 p-5">
            <div className="space-y-2">
              <label htmlFor="employees" className="text-sm font-medium">
                Employees *
              </label>

              <MultipleSelector
                value={selectedEmployees}
                className="min-h-16"
                onSearch={handleSearch}
                onChange={(options) => setSelectedEmployees(options)}
                hidePlaceholderWhenSelected
                placeholder="Search employees"
                loadingIndicator={<span>Loading...</span>}
                emptyIndicator={<span>No options found</span>}
              />
            </div>

            <div className="space-y-2 flex flex-col">
              <label className="text-sm font-medium mt-1">
                Month and Year *
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                placeholderText="Select month and year"
                className="border rounded p-2 w-full bg-none bg_remove"
              />
            </div>

            {!estimateClicked ? (
              <div className="pt-7">
                <Button
                  variant="default"
                  type="submit"
                  className="w-fit px-14 mt-[3px]"
                >
                  Estimate
                </Button>
              </div>
            ) : (
              <>
                <FormField
                  control={form.control}
                  name="bank_advice_no"
                  rules={{
                    required: "Bank Advice No is required",
                  }}
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Bank Advice No</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Bank Advice No"
                          {...field}
                          className={fieldState.invalid ? "border-red-500" : ""}
                        />
                      </FormControl>
                      {fieldState.error && (
                        <FormMessage>{fieldState.error.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bank_date"
                  rules={{
                    required: "Bank Date is required",
                  }}
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Bank Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full justify-start text-left font-normal ${
                              fieldState.invalid && "border-red-500"
                            }`}
                          >
                            {field.value
                              ? format(field.value, "PP")
                              : "Pick a date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value ?? undefined}
                            onSelect={(date) => field.onChange(date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      {fieldState.error && (
                        <FormMessage>{fieldState.error.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Comment</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your comment" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-8">
                  <Button
                    variant="default"
                    type="submit"
                    className="w-fit px-14"
                  >
                    Generate
                  </Button>
                </div>
              </>
            )}
          </div>
        </Card>
      </form>
    </Form>
  );
}
