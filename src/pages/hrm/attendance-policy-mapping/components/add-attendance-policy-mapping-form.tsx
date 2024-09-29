import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,

  FormField,
  FormItem,
  FormLabel,

} from "@/components/ui/form";


import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { Loading } from "@/components/common/loading";
import {
  employeeAttendancePolicyFormSchema,
  EmployeeAttendancePolicyFormValues,
  EmployeeAttendancePolicyRow,
} from "@/lib/validators/hrm/attendance-policy-mapping";
import { useUpdateEmployeeAttendancePolicyMutation } from "@/store/services/hrm/api/attendance-policy-mapping";
import { useGetAttendancePoliciesQuery } from "@/store/services/hrm/api/attendance-policy";
import { AttendancePolicyRow } from "@/lib/validators/hrm/attendance-policy";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { EmployeeColumn } from "@/lib/validators";

interface AddAttendancePolicyMappingFormProps {
  modalClose: () => void;
  data?: EmployeeAttendancePolicyRow;
}

export function AttendancePolicyForm({
  modalClose,
  data: previousData,
}: AddAttendancePolicyMappingFormProps ) {
  const [fromDate, setFromDate] = useState<Date | null | undefined>(null);
  const [openFromDate, setOpenFromDate] = useState(false);
  
  const { data, isLoading: isAttendancePolicyLoading } =
    useGetAttendancePoliciesQuery(`per_page=1000&page=1`);

  const {data: employeeData, isLoading: isPolicyLoading} = useGetEmployeesQuery(`per_page=1000&page=1`);

  const attendancePolicyData = data?.data || [];
  const employeeDataList = employeeData?.data || [];
  // const [createLeaveTypePolicy, { isLoading }] = useCreateLeaveTypeMutation();
  const [updateEmployeeAttendancePolicy, { isLoading: updateLoading }] =
    useUpdateEmployeeAttendancePolicyMutation();
  const form = useForm<EmployeeAttendancePolicyFormValues>({
    resolver: zodResolver(employeeAttendancePolicyFormSchema),
    defaultValues: {
      employee_id: previousData?.employee_id.toString(),
      attendance_policy_id: previousData?.attendance_policy_id.toString(),
      effective_date: previousData?.effective_date,
    },
  });

  const handleFromDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setFromDate(date);

    form.setValue("effective_date", `${format(date, "yyyy-MM-dd")}`);
    setOpenFromDate(false);
  };

  useEffect(() => {
    if (previousData) {
      setFromDate(new Date(previousData.effective_date));
    }
  }, [previousData]);

  async function onSubmit(data: EmployeeAttendancePolicyFormValues) {
    try {
      if (previousData) {
        await updateEmployeeAttendancePolicy({
          attendancePolicyId: previousData.id,
          updatedAttendancePolicy: data,
        }).unwrap();
        toast.success("Policy updated successfully");
        modalClose();
      } else {
        modalClose();
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }

  return (
    <>
      {updateLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
              <div className="w-full">
                <FormSearchSelect<EmployeeColumn>
                  loading={isPolicyLoading}
                  data={employeeDataList}
                  displayField="first_name"
                  valueField="id"
                  form={form}
                  name="employee_id"

                  title="Employee"
                  className="w-[460px]"
                />
              </div>
              <FormField
                control={form.control}
                name="effective_date"
                render={() => (
                  <FormItem>
                    <FormLabel>Effective Date</FormLabel>
                    <Popover open={openFromDate} onOpenChange={setOpenFromDate}>
                      <PopoverTrigger asChild className="">
                        <Button
                          variant={"outline"}
                          className={`w-full justify-start text-left font-normal ${
                            !fromDate && "text-muted-foreground"
                          }`}
                        >
                          {fromDate ? format(fromDate, "PP") : "Pick a date"}
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

            <div className="text-right">
              <Button variant="default" type="submit" className="w-fit mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
