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

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface AttendancePolicyFormValues {
  policy_name: string;
  in_time: string;
  working_hours: string;
  delay_buffer: string;
  ex_delay_buffer: string;
  break_time: string;
  effect_from: string;
}

interface AddJobApplyFormProps {
  modalClose: () => void;
  data?: AttendancePolicyFormValues;
}

export function AttendancePolicyForm({
  modalClose,
  data: previousData,
}: AddJobApplyFormProps) {
  const form = useForm<any>({
    defaultValues: {
      policy_name: "",
      in_time: "",
      working_hours: "",
      delay_buffer: "",
      ex_delay_buffer: "",
      break_time: "",
      effect_from: "",
    },
  });

  // Function to copy form values into the table for all days
  const copyTo7Days = () => {
    const values = form.getValues();
    DAYS.forEach((day) => {
      form.setValue(`${day}.in_time`, values.in_time);
      form.setValue(`${day}.working_hours`, values.working_hours);
      form.setValue(`${day}.delay_buffer`, values.delay_buffer);
      form.setValue(`${day}.ex_delay_buffer`, values.ex_delay_buffer);
      form.setValue(`${day}.break_time`, values.break_time);
    });
  };

  async function onSubmit(data: AttendancePolicyFormValues) {
    console.log("Form Submitted:", data);
    modalClose();
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            {/* Form Fields */}
            <FormField
              control={form.control}
              name="policy_name"
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
              name="delay_buffer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delay Buffer Time</FormLabel>
                  <FormControl>
                    <Input
                      className="h-7"
                      type="text"
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
              name="ex_delay_buffer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Extra Delay Buffer</FormLabel>
                  <FormControl>
                    <Input className="h-7" type="text" {...field} />
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
                  <FormLabel>Break Time</FormLabel>
                  <FormControl>
                    <Input
                      className="h-7"
                      type="text"
                      {...field}
                      placeholder="Enter Break Time"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
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
            />
            <FormField
              control={form.control}
              name="working_hours"
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
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <FormField
              control={form.control}
              name="ignore_from_att_report"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10">
                  <div className="space-y-0.5">
                    <FormLabel>Ignore from attendance report</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      className="!mt-0 "
                      checked={field.value === true}
                      onCheckedChange={(checked: boolean) =>
                        field.onChange(checked ? true : false)
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="discard_attendance_on_weekend"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10">
                  <div className="space-y-0.5">
                    <FormLabel>Discard attendance on weekend</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      className="!mt-0 "
                      checked={field.value === true}
                      onCheckedChange={(checked: boolean) =>
                        field.onChange(checked ? true : false)
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="exclude_from_att_report"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10">
                  <div className="space-y-0.5">
                    <FormLabel>Exclude from attendance report</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      className="!mt-0 "
                      checked={field.value === true}
                      onCheckedChange={(checked: boolean) =>
                        field.onChange(checked ? true : false)
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
                  <TableCell className="p-1 text-xs">Working Hours</TableCell>
                  <TableCell className="p-1 text-xs">
                    Delay Buffer Time
                  </TableCell>
                  <TableCell className="p-1 text-xs">
                    Extra Delay Buffer
                  </TableCell>
                  <TableCell className="p-1 text-xs">Break Time</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y">
                {DAYS.map((day, index) => (
                  <TableRow key={index}>
                    <TableCell className="p-1 text-xs">{day}</TableCell>
                    <TableCell className="p-1">
                      <Input
                        type="text"
                        className="p-1 text-xs h-7"
                        {...form.register(`${day}.in_time`)}
                      />
                    </TableCell>
                    <TableCell className="p-1">
                      <Input
                        type="text"
                        className="p-1 text-xs h-7"
                        {...form.register(`${day}.working_hours`)}
                      />
                    </TableCell>
                    <TableCell className="p-1">
                      <Input
                        type="text"
                        className="p-1 text-xs h-7"
                        {...form.register(`${day}.delay_buffer`)}
                      />
                    </TableCell>
                    <TableCell className="p-1">
                      <Input
                        type="text"
                        className="p-1 text-xs h-7"
                        {...form.register(`${day}.ex_delay_buffer`)}
                      />
                    </TableCell>
                    <TableCell className="p-1">
                      <Input
                        type="text"
                        className="p-1 text-xs h-7"
                        {...form.register(`${day}.break_time`)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <div>
            <Button variant="default" type="submit" className="w-full mt-4">
              {previousData ? "Update" : "Add"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
