import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { format, parseISO  } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { Loading } from "@/components/common/loading";
import {
  LoanFormSchema,
  LoanFormValues,
  LoanRow,
} from "@/lib/validators/hrm/loan";
import {
  useCreateLoanMutation,
  useUpdateLoanMutation,
} from "@/store/services/hrm/api/loan";
import { useGetLoanTypeQuery } from "@/store/services/hrm/api/laon-type";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";

interface AddJobApplyFormProps {
  modalClose: () => void;
  data?: LoanRow;
  refetch?: () => void;
}

export function AttendancePolicyForm({
  modalClose,
  data: previousData,
}: // refetch,
AddJobApplyFormProps) {
  // const [getLoan, { data: LoanData }] =
  // useLazyGetLoansQuery();
  const [createLoan, { isLoading }] = useCreateLoanMutation();
  const [updateLoan, { isLoading: updateLoading }] = useUpdateLoanMutation();
  const { data: employeeData } = useGetEmployeesQuery(`per_page=10000&page=1`);
  const { data  } =
    useGetLoanTypeQuery(`per_page=1000&page=1`);

  const employees = employeeData?.data || [];
  const loanTypes = data?.data || [];
  // console.log(loanTypes);

  const form = useForm<LoanFormValues>({
    resolver: zodResolver(LoanFormSchema),
    defaultValues: {
      employee_id: previousData?.employee?.id.toString() || undefined,
      date: previousData?.date || new Date().toString(),
      start_date: previousData?.start_date || undefined,
      end_date: previousData?.end_date || undefined,
      subject: previousData?.subject || "",
      description: previousData?.description || "",
      loan_request_amount: previousData?.loan_request_amount || undefined,
      total_installments: previousData?.total_installments || undefined,
      pay_by: previousData?.pay_by || "salary",
      loan_type_id: previousData?.loan_type?.id.toString() || undefined,
    },
  });

  const [openFromDate, setOpenFromDate] = useState(false);
  const [openToDate, setOpenToDate] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null | undefined>(null);
  const [toDate, setToDate] = useState<Date | null | undefined>(null);

  async function onSubmit(data: LoanFormValues) {
    console.log(data);
    try {
      if (previousData) {
        await updateLoan({
          loanId: previousData.id,
          updatedLoan: data,
        }).unwrap();
        toast.success("Leave Request updated successfully");
        modalClose();
      } else {
        await createLoan(data).unwrap();
        toast.success("Leave Request created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }
  useEffect(() => {
    if (fromDate) {
     
      form.setValue(
        "start_date",
        `${format(fromDate, "yyyy-MM-dd")}`
      );
    }
  }, [fromDate, form]);

  useEffect(() => {
    if (toDate) {
      form.setValue(
        "end_date",
        `${format(toDate, "yyyy-MM-dd")}`
      );
    }
  }, [toDate, form]);

  // const [selectedEmployee, setSelectedEmployee] = useState();

  const handleFromDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setFromDate(date);
    setOpenFromDate(false); // Close popover after selecting a date
  };

  const handleToDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setToDate(date);
    setOpenToDate(false); // Close popover after selecting a date
  };



  // ...
  
  useEffect(() => {
    if (previousData?.start_date && previousData?.end_date) {
      const endDate = parseISO(previousData?.end_date);
      setToDate(endDate);
      const startDate = parseISO(previousData?.start_date);
      setFromDate(startDate);
    }
  }, [previousData]);

  return (
    <>
      {isLoading || updateLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="space-y-3">
              {/* Employee and Loan Type Select */}
              <div className="flex items-end space-x-4">
                <div className="w-full">
                  <FormSearchSelect<any>
                    data={employees}
                    displayField="first_name"
                    valueField="id"
                    form={form}
                    name="employee_id"
                    title="Employee"
                    className="w-[350px]"
                  />
                </div>
                <div className="w-full flex items-center">
                  <FormSearchSelect<any>
                    // loading={loanTypesLoading}
                    data={loanTypes}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name={`loan_type_id`}
                    title={`Loan Type`}
                    className="w-[350px]"
                  />
                </div>
              </div>

              {/* Start Date and End Date */}
              <div className="flex justify-between items-center gap-x-4">
                <div className="w-full flex items-center gap-x-4">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="start_date"
                      render={() => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <Popover
                            open={openFromDate}
                            onOpenChange={setOpenFromDate}
                          >
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={`w-full justify-start text-left font-normal ${
                                  !fromDate && "text-muted-foreground"
                                }`}
                              >
                                {fromDate
                                  ? format(fromDate, "PP")
                                  : "Pick a date"}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                disabled={(date) =>
                                  !!(fromDate && date < fromDate)
                                }
                                selected={fromDate ?? undefined}
                                onSelect={handleFromDateSelect}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="end_date"
                      render={() => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <Popover
                            open={openToDate}
                            onOpenChange={setOpenToDate}
                          >
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={`w-full justify-start text-left font-normal ${
                                  !toDate && "text-muted-foreground"
                                }`}
                              >
                                {toDate ? format(toDate, "PP") : "Pick a date"}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                disabled={(date) =>
                                  !!(fromDate && date < fromDate)
                                }
                                selected={toDate ?? undefined}
                                onSelect={handleToDateSelect}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Fields */}
              <div className="space-y-4">
                <div className="flex items-center gap-x-4">
                  {/* Pay By */}
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="pay_by"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pay By</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="w-full p-2 border rounded-lg"
                            >
                              <option value="salary">Salary</option>
                              <option value="cash">Cash</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Total Installments */}
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="total_installments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Installments</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              className=""
                              placeholder="Enter Total Installments"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-x-4">
                  {/* Loan Request Amount */}
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="loan_request_amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loan Request Amount</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              className=""
                              placeholder="Enter Loan Amount"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Date */}
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className=""
                              placeholder="Select Date"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Subject and Description */}
              <div className="flex items-center gap-x-4">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            className=""
                            placeholder="Enter Subject"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input
                            className=""
                            placeholder="Enter Description"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

              </div>
              <div className="text-right flex items-center justify-end gap-x-3">
                  <Button
                    variant="default"
                    type="submit"
                    className="w-fit mt-4"
                  >
                    {previousData ? "Update" : "Add"}
                  </Button>
                </div>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
