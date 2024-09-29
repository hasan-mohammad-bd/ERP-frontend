import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { EmployeeColumn } from "@/lib/validators";
import { useCreateEmployeeAttendancePolicyMutation } from "@/store/services/hrm/api/attendance-policy-mapping";
import {
  employeeAttendancePolicyFormSchema,
  EmployeeAttendancePolicyFormValues,
} from "@/lib/validators/hrm/attendance-policy-mapping";
import { useGetAttendancePoliciesQuery } from "@/store/services/hrm/api/attendance-policy";
import { zodResolver } from "@hookform/resolvers/zod";
import { AttendancePolicyRow } from "@/lib/validators/hrm/attendance-policy";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { Loading } from "@/components/common/loading";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

interface AddAttendancePolicyMappingFormProps {
  payload?: EmployeeColumn[];
  modelClose?: () => void;
}

export function AddAttendancePolicyMappingForm({
  payload,
  modelClose,
}: AddAttendancePolicyMappingFormProps) {
  const [openFromDate, setOpenFromDate] = useState(false);
  const [createEmployeeAttendancePolicy, { isLoading }] =
    useCreateEmployeeAttendancePolicyMutation();
  const [fromDate, setFromDate] = useState<Date | null | undefined>(null);

  const navigate = useNavigate();

  const { data, isLoading: isAttendancePolicyLoading } =
    useGetAttendancePoliciesQuery(`per_page=1000&page=1`);

  const attendancePolicyData = data?.data || [];

  const form = useForm<EmployeeAttendancePolicyFormValues>({
    resolver: zodResolver(employeeAttendancePolicyFormSchema),
    defaultValues: {
      employee_ids: payload?.map((data) => data.id),
      effective_date: new Date().toISOString().split("T")[0],
    },
  });

  const handleFromDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setFromDate(date);

    form.setValue("effective_date", `${format(date, "yyyy-MM-dd")}`);
    setOpenFromDate(false);
  };



  async function onSubmit(data: EmployeeAttendancePolicyFormValues) {
    const formattedData: EmployeeAttendancePolicyFormValues = {
      ...data,
      employee_ids: payload?.map((data) => data.id) || [],
    };
    try {
      await createEmployeeAttendancePolicy(formattedData);
      toast.success("Employee Attendance Policy created successfully");
      if (modelClose) {
        modelClose();
      }

      navigate("/hrm/attendance-policy-mapping");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="h-[535px]">
          <Loading />
        </div>
      ) : (
        <div className="flex gap-x-4">
          <div className={` w-full `}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="grid grid-cols-1 gap-2">
                  <div className="w-full">
                    <FormSearchSelect<AttendancePolicyRow>
                      loading={isAttendancePolicyLoading}
                      data={attendancePolicyData}
                      displayField="name"
                      valueField="id"
                      form={form}
                      name="attendance_policy_id"
                      title="Attendance Policy"
                      className="w-[460px]"
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="effective_date"
                    render={() => (
                      <FormItem>
                        <FormLabel>Effective Date</FormLabel>
                        <Popover
                          open={openFromDate}
                          onOpenChange={setOpenFromDate}
                        >
                          <PopoverTrigger asChild className="">
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
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
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

                <div>
                  <Button
                    variant="default"
                    type="submit"
                    className="w-full mt-4"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
