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
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  AttendancePolicyFormValues,
  AttendancePolicyRow,
  attendancePolicySchema,
} from "@/lib/validators/hrm/attendance-policy";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  useCreateAttendancePolicyMutation,
  useUpdateAttendancePolicyMutation,
} from "@/store/services/hrm/api/attendance-policy";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { Loading } from "@/components/common/loading";

const DAYS = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

// interface AttendancePolicyFormValues {
//   policy_name: string;
//   in_time: string;
//   working_hours: string;
//   delay_buffer: string;
//   ex_delay_buffer: string;
//   break_time: string;
//   effect_from: string;
// }

interface AddJobApplyFormProps {
  modalClose: () => void;
  data?: AttendancePolicyRow;
}

export function AttendancePolicyForm({
  modalClose,
  data: previousData,
}: AddJobApplyFormProps) {
  const [createAttendancePolicy, { isLoading }] =
    useCreateAttendancePolicyMutation();
  const [updateAttendancePolicy, { isLoading: updateLoading }] =
    useUpdateAttendancePolicyMutation();
  const form = useForm<AttendancePolicyFormValues>({
    resolver: zodResolver(attendancePolicySchema),
    defaultValues: {
      name: previousData?.name || "",
      in_time: previousData?.in_time || "",
      delay_buffer_time: previousData?.delay_buffer_time || "",
      ex_delay_buffer_time: previousData?.ex_delay_buffer_time || "",
      break_time: previousData?.break_time || 0,
      // effective_from: previousData?.effective_from || new Date().toISOString(),
      working_hour: previousData?.working_hour || 0,
      out_time: previousData?.out_time || "",
      ignore_overtime: previousData?.ignore_overtime || 0,
      exclude_attendance_report: previousData?.exclude_attendance_report || 0,
      discard_weekend_attendance: previousData?.discard_weekend_attendance || 0,
      days: DAYS.map((day) => ({
        day: day,
        in_time: previousData?.days?.find((d) => d.day === day)?.in_time || "",
        delay_buffer_time: previousData?.days?.find((d) => d.day === day) ?.delay_buffer_time || "",
        ex_delay_buffer_time: previousData?.days?.find((d) => d.day === day)?.ex_delay_buffer_time || "",
        break_time: previousData?.days?.find((d) => d.day === day)?.break_time || 0,
        working_hour: previousData?.days?.find((d) => d.day === day)?.working_hour || 0,
        out_time: previousData?.days?.find((d) => d.day === day)?.out_time || "",
      })),
    },
  });

  // Function to copy form values into the table for all days
  const copyTo7Days = () => {
    const values = form.getValues();
    const fieldNames = Object.keys(attendancePolicySchema.shape);
    DAYS.forEach((day, index) => {
      fieldNames.forEach((fieldName) => {
        form.setValue(
          `days.${index}.${fieldName}` as keyof typeof attendancePolicySchema.shape,
          values[fieldName as keyof AttendancePolicyFormValues]
        );
      });
    });
  };
  // const { fields } = useFieldArray({
  //   control: form.control,
  //   name: "days",
  // });

  // async function onSubmit(data: AttendancePolicyFormValues) {
  //   console.log("Form Submitted:", data);

  //   modalClose();
  // }

  async function onSubmit(data: AttendancePolicyFormValues) {
    try {
      if (previousData) {
        await updateAttendancePolicy({
          attendancePolicyId: previousData.id,
          updatedAttendancePolicy: data,
        }).unwrap();
        toast.success("Policy updated successfully");
        modalClose();
      } else {
        await createAttendancePolicy(data).unwrap();
        toast.success("Policy created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              {/* Form Fields */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Policy Name</FormLabel>
                    <FormControl>
                      <Input
                        className="h-7"
                        placeholder="Enter Policy Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="in_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>In Time</FormLabel>
                    <FormControl>
                      <Input type="time" className="h-7" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="delay_buffer_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delay Buffer Time</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        className="h-7"
                        {...field}
                        placeholder="Enter Delay Buffer"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ex_delay_buffer_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Extra Delay Buffer</FormLabel>
                    <FormControl>
                      <Input className="h-7" type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="break_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Break Time (in minutes)</FormLabel>
                    <FormControl>
                      <Input
                        className="h-7"
                        type="number"
                        {...field}
                        placeholder="Enter Break Time"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
          control={form.control}
          name="effect_from"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Effect From</FormLabel>
              <FormControl>
                <Input type="date" className="h-7" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
              <FormField
                control={form.control}
                name="working_hour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Working Hours</FormLabel>
                    <FormControl>
                      <Input
                        className="h-7"
                        type="text"
                        {...field}
                        placeholder="Enter Working Hours"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="out_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Out Time</FormLabel>
                    <FormControl>
                      <Input
                        className="h-7"
                        type="time"
                        {...field}
                        placeholder="Enter Out Time"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div></div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FormField
                control={form.control}
                name="ignore_overtime"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10">
                    <div className="space-y-0.5">
                      <FormLabel>Ignore Overtime</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        className="!mt-0 "
                        checked={field.value === 1}
                        onCheckedChange={(checked: boolean) =>
                          field.onChange(checked ? 1 : 0)
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="discard_weekend_attendance"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10">
                    <div className="space-y-0.5">
                      <FormLabel>Discard attendance on weekend</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        className="!mt-0 "
                        checked={field.value === 1}
                        onCheckedChange={(checked: boolean) =>
                          field.onChange(checked ? 1 : 0)
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="exclude_attendance_report"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10">
                    <div className="space-y-0.5">
                      <FormLabel>Exclude from attendance report</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        className="!mt-0 "
                        checked={field.value === 1}
                        onCheckedChange={(checked: boolean) =>
                          field.onChange(checked ? 1 : 0)
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Button to copy data to all 7 days */}
            <Button variant="default" type="button" onClick={copyTo7Days}>
              Copy to 7 days
            </Button>

            {/* Table for 7 days */}
            <Card>
              <Table>
                <TableHeader>
                  <TableRow className="text-left text-xs">
                    <TableCell className="p-1 text-xs">Day</TableCell>
                    <TableCell className="p-1 text-xs">In Time</TableCell>
                    <TableCell className="p-1 text-xs">
                      Delay Buffer Time
                    </TableCell>
                    <TableCell className="p-1 text-xs">
                      Extra Delay Buffer
                    </TableCell>

                    <TableCell className="p-1 text-xs">
                      Break Time (In Min)
                    </TableCell>
                    <TableCell className="p-1 text-xs">
                      Working Hours (In Hours)
                    </TableCell>
                    <TableCell className="p-1 text-xs">Out Time</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y">
                  {DAYS.map((day, index) => (
                    <TableRow key={index}>
                      <TableCell className="p-1 text-xs">
                        <FormField
                          control={form.control}
                          name={`days.${index}.day`}
                          render={() => (
                            <FormItem>
                              <FormControl>
                                {/* Display the day from the DAYS array */}
                                <Input
                                  className="p-1 text-xs h-7"
                                  value={day} // Set the value from the DAYS array
                                  readOnly // Make it read-only so it can't be modified
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>

                      <TableCell className="p-1">
                        <div className="flex-1">
                          <FormField
                            control={form.control}
                            name={`days.${index}.in_time`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    className="p-1 text-xs h-7"
                                    type="time"
                                    placeholder="Enter In Time"
                                    {...field}
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </TableCell>
                      <TableCell className="p-1">
                        <div className="flex-1">
                          <FormField
                            control={form.control}
                            name={`days.${index}.delay_buffer_time`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    className="p-1 text-xs h-7"
                                    type="time"
                                    placeholder="Enter In Time"
                                    {...field}
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </TableCell>
                      <TableCell className="p-1">
                        <div className="flex-1">
                          <FormField
                            control={form.control}
                            name={`days.${index}.ex_delay_buffer_time`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    className="p-1 text-xs h-7"
                                    type="time"
                                    placeholder="Enter In Time"
                                    {...field}
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </TableCell>
                      <TableCell className="p-1">
                        <div className="flex-1">
                          <FormField
                            control={form.control}
                            name={`days.${index}.break_time`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    type="number"
                                    className="p-1 text-xs h-7"
                                    // placeholder="Enter break time in min"
                                    {...field}
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </TableCell>
                      <TableCell className="p-1">
                        <div className="flex-1">
                          <FormField
                            control={form.control}
                            name={`days.${index}.working_hour`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    type="number"
                                    className="p-1 text-xs h-7"
                                    // placeholder="Enter working hour in hours"
                                    {...field}
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name={`days.${index}.out_time`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  className="p-1 text-xs h-7"
                                  type="time"
                                  // placeholder="Enter In out time"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

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
