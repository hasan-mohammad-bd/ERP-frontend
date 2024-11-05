import { Heading } from "@/components/common/heading";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useGetSalariesQuery } from "@/store/services/hrm/api/salaries";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loading } from "@/components/common/loading";
import { format, parseISO } from "date-fns";
import { useCreateSalaryAdjustmentMutation } from "@/store/services/hrm/api/salary-adjustment";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";

const formDataSchema = z.object({
  adjustments: z.array(
    z.object({
      employee_id: z.number().optional(),
      allowance_adjustment: z.number().optional(),
      allowance_adjustment_note: z.string().optional(),
      deduction_adjustment: z.number().optional(),
      deduction_adjustment_note: z.string().optional(),
    })
  ),
});

type SalaryAdjustmentFormData = z.infer<typeof formDataSchema>;

const SalaryAdjustment = () => {
  const [searchparams] = useSearchParams();
  const selectedIdsString = searchparams.get("employee_ids");
  const salary_month = searchparams.get("salary_month");
  const selectedIdsArray = selectedIdsString
    ? selectedIdsString.split(",").map((id) => Number(id))
    : [];

  // const [selectedEmployees, setSelectedEmployees] = useState<Option[]>([]);
  // const selectedEmployeeAction = useSelector(
  //   (state: any) => state.common.selectedEmployeeAction
  // );

  // useEffect(() => {
  //   if (selectedEmployeeAction.action === "salary-adjustment") {
  //     const uniqueEmployees = selectedEmployeeAction.payload.map(
  //       (item: any) => ({
  //         value: String(item.id),
  //         label: `${item.first_name} ${item.last_name} (${item.id})`,
  //       })
  //     );
  //     setSelectedEmployees(uniqueEmployees);
  //   }
  // }, [selectedEmployeeAction]);

  const [queryString, setQueryString] = useState<string>("");

  useEffect(() => {
    if (selectedIdsArray.length > 0) {
      const employeeIds = selectedIdsArray
        .map((emp) => `employee_ids[]=${emp}&salary_month=${salary_month}`)
        .join("&");
      setQueryString(`${employeeIds}`);
    }
  }, []);

  const [createSalaryAdjustment, { isLoading: isSalaryAdjustmentCreating }] =
    useCreateSalaryAdjustmentMutation();

  const { data, isLoading } = useGetSalariesQuery(queryString, {
    skip: queryString.length === 0,
  });
  const employeeSalaryData = data?.data || [];

  const form = useForm<SalaryAdjustmentFormData>({
    resolver: zodResolver(formDataSchema),
    defaultValues: {
      adjustments: employeeSalaryData.map((salary) => ({
        employee_id: salary?.employee.id,
        allowance_adjustment: 0,
        allowance_adjustment_note: "",
        deduction_adjustment: 0,
        deduction_adjustment_note: "",
      })),
    },
  });

  const { control, handleSubmit } = form;

  const handleFormSubmit = async (data: SalaryAdjustmentFormData) => {
    const formattedData = {
      salary_month: salary_month
        ? format(parseISO(salary_month), "yyyy-MM")
        : null,
      adjustments: employeeSalaryData.map((salary, index) => ({
        employee_id: salary.employee.id,
        allowance_adjustment:
          Number(data.adjustments[index]?.allowance_adjustment) || 0,
        allowance_adjustment_note:
          data.adjustments[index]?.allowance_adjustment_note || "",
        deduction_adjustment:
          Number(data.adjustments[index]?.deduction_adjustment) || 0,
        deduction_adjustment_note:
          data.adjustments[index]?.deduction_adjustment_note || "",
      })),
    };

    try {
      await createSalaryAdjustment(formattedData).unwrap();
      toast.success("Salary Adjustment Updated successfully");
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Heading title="Salary Adjustment" description="" />
      </div>
      <Separator />

      <Card className="px-4 py-6">
        <Form {...form}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex justify-end mb-4 gap-4">
              <Button
                type="button"
                variant={"outline"}
                onClick={() => window.history.back()}
              >
                Back
              </Button>
              <Button type="submit" className="bg-sky-500 hover:bg-sky-600">
                <Save className="mr-2 h-4 w-4" />{" "}
                {isSalaryAdjustmentCreating ? "Saving..." : "Save All"}
              </Button>
            </div>
            <Table className="border">
              <TableHeader className="border">
                <TableRow className="border h-0">
                  {tableHeadings.map((heading, index) => (
                    <TableHead
                      key={index}
                      className="border py-2 h-0 text-center text-black bg-gray-100 dark:bg-gray-900 dark:text-white"
                    >
                      {heading}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody className="border">
                {employeeSalaryData.map((salary, index) => {
                  return (
                    <TableRow className="border" key={index}>
                      <TableCell className="border py-[5px]">
                        {`${salary.employee.first_name} ${salary.employee.last_name}`}
                      </TableCell>
                      <TableCell className="border py-[5px]">
                        TK. {Number(salary.allowance_total).toFixed(2)}
                      </TableCell>
                      <TableCell className="border py-[5px]">
                        TK. {Number(salary.deduction_total).toFixed(2)}
                      </TableCell>
                      <TableCell className="border py-[5px]">
                        <FormField
                          control={control}
                          name={`adjustments.${index}.allowance_adjustment`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  className="text-right"
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    // Convert to number or set to 0 if empty
                                    field.onChange(value ? Number(value) : 0);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell className="border py-[5px]">
                        <FormField
                          control={control}
                          name={`adjustments.${index}.allowance_adjustment_note`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="text"
                                  {...field}
                                  className="text-right"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell className="border py-[5px]">
                        <FormField
                          control={control}
                          name={`adjustments.${index}.deduction_adjustment`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  className="text-right"
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    // Convert to number or set to 0 if empty
                                    field.onChange(value ? Number(value) : 0);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                      <TableCell className="border py-[5px]">
                        <FormField
                          control={control}
                          name={`adjustments.${index}.deduction_adjustment_note`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="text"
                                  {...field}
                                  className="text-right"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default SalaryAdjustment;

const tableHeadings = [
  "Employee Name",
  "Allowance",
  "Deduction",
  "Allowance Adjust",
  "Allowance Adjust Note",
  "Deduction Adjust",
  "Deduction Adjust Note",
];
