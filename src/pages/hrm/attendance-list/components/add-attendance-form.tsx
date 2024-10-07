import { Loading } from "@/components/common/loading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { DateTimePicker } from "@/components/ui/dayTimePicker";
import MultipleSelector, { Option } from "@/components/ui/multiSelectSearch";
import { Textarea } from "@/components/ui/textarea";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import {
  useCreateAttendanceCheckInMutation,
  useCreateAttendanceCheckOutMutation,
} from "@/store/services/hrm/api/attendance-list"; // Import both mutations
import { useState } from "react";
import { Tab } from "..";
import { attendanceCheckInFormValues } from "@/lib/validators/hrm/attendance-list";
import { EmployeeColumn } from "@/lib/validators";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { toast } from "sonner";
// import { toast } from "react-toastify"; // If using toast for notifications

interface AddAttendanceFormProps {
  tab: Tab;
  modalClose: () => void;
}

export function AddAttendanceForm({ tab, modalClose }: AddAttendanceFormProps) {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState("");

  const { data: employeeList, isLoading: isLoadingEmployee } =
    useGetEmployeesQuery(`per_page=15&page=1&search=${employeeSearchTerm}`);

  const [createAttendanceCheckIn, { isLoading: isSubmittingCheckIn }] =
    useCreateAttendanceCheckInMutation(); // Check-in mutation

  const [createAttendanceCheckOut, { isLoading: isSubmittingCheckOut }] =
    useCreateAttendanceCheckOutMutation(); // Check-out mutation

  const form = useForm<attendanceCheckInFormValues>({
    defaultValues: {},
  });

  const handleSearch = async (query: string): Promise<Option[]> => {
    setEmployeeSearchTerm(query);

    const options =
      employeeList?.data?.map((item: EmployeeColumn) => ({
        value: String(item.id),
        label: item.first_name + " " + item.last_name + " (" + item.id + ")",
      })) || [];

    return options;
  };

  const onSubmit = async (data: attendanceCheckInFormValues) => {
    try {
      if (tab === "check-in") {
        await createAttendanceCheckIn(data).unwrap(); // Call check-in mutation
        toast.success("CheckIn created successfully!");
      } else {
        await createAttendanceCheckOut(data).unwrap(); // Call check-out mutation
        toast.success("CheckOut created successfully!");
      }

      modalClose();
    } catch (error) {
      console.error("Error recording attendance:", error);
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <>
      {isLoadingEmployee ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="employee_ids"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Name</FormLabel>
                  <FormControl>
                    <MultipleSelector
                      {...field}
                      value={selectedOptions}
                      onSearch={handleSearch}
                      onChange={(options) => {
                        setSelectedOptions(options);
                        field.onChange(
                          options.map((option) => parseInt(option.value))
                        );
                      }}
                      hidePlaceholderWhenSelected
                      placeholder="Search and select options"
                      loadingIndicator={<span>Loading...</span>}
                      emptyIndicator={<span>No options found</span>}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Punch Time</FormLabel>
                  <FormControl className="">
                    <DateTimePicker
                      {...field}
                      displayFormat={{ hour12: "yyyy/MM/dd h:mm a" }}
                      value={field.value}
                      onChange={field.onChange}
                      granularity="minute"
                      hourCycle={12}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="note"
              render={() => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <Textarea {...form.register("note")} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button
                variant={tab === "check-in" ? "default" : "destructive"}
                type="submit"
                className="w-full mt-4"
                disabled={isSubmittingCheckIn || isSubmittingCheckOut}
              >
                {isSubmittingCheckIn || isSubmittingCheckOut
                  ? "Submitting..."
                  : tab === "check-in"
                  ? "Check In"
                  : "Check Out"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
