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
import { DepartmentColumn } from "@/lib/validators";
import { useForm } from "react-hook-form";

import { DateTimePicker } from "@/components/ui/dayTimePicker";
import MultipleSelector, { Option } from "@/components/ui/multiSelectSearch";
import { Textarea } from "@/components/ui/textarea";
import { AttendanceFormValues } from "@/lib/validators/hrm/attendance.vatidator";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import { useState } from "react";
import { Tab } from "..";

interface AddAttendanceFormProps {
  data?: DepartmentColumn;
  tab: Tab;
}

export function AddAttendanceForm({
  // data: previousData,
  tab,
}: AddAttendanceFormProps) {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState("");
  const [date, setDate] = useState<Date>();

  const { data: employeeList, isLoading: isLoadingEmployee } =
    useGetEmployeesQuery(`per_page=15&page=1&search=${employeeSearchTerm}`);

  const handleSearch = async (query: string): Promise<Option[]> => {
    setEmployeeSearchTerm(query);

    // Transform the API response to match the Option interface
    const options =
      employeeList?.data?.map((item: any) => ({
        value: String(item.id),
        label:
          item.first_name + " " + item.last_name + "" + "(" + item.id + ")",
      })) || [];

    return options;
  };
  const form = useForm<AttendanceFormValues>({
    // resolver: zodResolver(AttendanceFormSchema),
    defaultValues: {},
  });

  async function onSubmit(data: any) {
    const payload = {
      ...data,
      attendance_type: tab,
    };
    console.log("🚀 ~ onSubmit ~ data:", payload);

    // try {
    //   if (previousData) {
    //     await updateDepartment({

    //       departmentId: previousData.id,
    //       updatedDepartment: data,
    //     });
    //     toast.success("Department updated successfully");
    //   } else {
    //     await createDepartment(data);
    //     toast.success("Department created successfully");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }

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
                        // Update the form field value with the selected option values
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
                  <FormControl>
                    <DateTimePicker
                      {...field}
                      // {...form.register("date_time")}
                      value={date}
                      onChange={(date) => {
                        field.onChange(date);
                        setDate(date);
                      }}
                      granularity="minute"
                      // displayFormat={{ hour12: "hh:mm A" }}
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
                    <Textarea
                      {...form.register("note")}
                      // {...field}
                    />
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
              >
                {tab === "check-in" ? "Check In" : "Check Out"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
