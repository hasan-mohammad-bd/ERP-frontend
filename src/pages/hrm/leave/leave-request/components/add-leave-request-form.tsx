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

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import FileUpload from "@/components/common/file-uploader";
import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import {
  LeaveRequestFormValues,
  LeaveRequestRow,
  leaveRequestSchema,
  LeaveTypeRow,
} from "@/lib/validators/hrm/leave";
import { EmployeeColumn } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Switch } from "@/components/ui/switch";
import {
  useCreateLeaveRequestMutation,
  useUpdateLeaveRequestMutation,
} from "@/store/services/hrm/api/leave-request";
import { toast } from "sonner";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { useGetLeaveTypesQuery } from "@/store/services/hrm/api/leave-type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serialize } from "object-to-formdata";
import { Loading } from "@/components/common/loading";

interface AddJobApplyFormProps {
  modalClose: () => void;
  data?: LeaveRequestRow;
  refetch?: () => void;
}

export function AttendancePolicyForm({
  modalClose,
  data: previousData,
  refetch,
}: AddJobApplyFormProps) {
  const [createLeaveRequestPolicy, { isLoading }] =
    useCreateLeaveRequestMutation();
  const [updateLeaveRequestPolicy, { isLoading: updateLoading }] =
    useUpdateLeaveRequestMutation();
  const { data: employees, isLoading: employeeLoading } =
    useGetEmployeesQuery(`page=1&per_page=1000`);
  const { data, isLoading: leaveTypeLoading } =
    useGetLeaveTypesQuery(`per_page=1000&page=1`);

  const leaveTypeData = data?.data || [];

  const employeeData = employees?.data || [];
  console.log(employeeData);

  const form = useForm<LeaveRequestFormValues>({
    resolver: zodResolver(leaveRequestSchema),
    defaultValues: {
      employee_id: previousData?.employee_id.toString() || "",
      start_date_time: previousData?.start_date_time || "",
      end_date_time: previousData?.end_date_time || "",
      subject: previousData?.subject || "",
      description: previousData?.description || "",
      leave_type_id: previousData?.leave_type.id.toString() || "",
      status: previousData?.status || "Pending",
      files: previousData?.files || [],
    },
  });

  const [openFromDate, setOpenFromDate] = useState(false);
  const [openToDate, setOpenToDate] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null | undefined>(null);
  const [toDate, setToDate] = useState<Date | null | undefined>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [timeSchedule, setTimeSchedule] = useState(false);
  const [timeStart, setTimeStart] = useState(""); // New state for Time Start
  const [timeEnd, setTimeEnd] = useState(""); // New state for Time End

  const status = ["Pending", "Canceled", "Approved", "Rejected"];

  useEffect(() => {
    if (previousData) {
      setTimeStart(format(new Date(previousData?.start_date_time), "HH:mm"));
      setTimeEnd(format(new Date(previousData?.end_date_time), "HH:mm"));
      setFromDate(new Date(previousData?.start_date_time));
      setToDate(new Date(previousData?.end_date_time));
    }
  }, [previousData]);

  console.log(timeStart);

  const handleFromDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setFromDate(date);

    const validTimeStart = timeStart || "12:00";
    console.log(validTimeStart, "validTimeStart");
    form.setValue(
      "start_date_time",
      `${format(date, "yyyy-MM-dd")} ${validTimeStart}:00`
    );
    setOpenFromDate(false);
  };

  const handleToDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setToDate(date);

    const validTimeEnd = timeEnd || "23:59";
    form.setValue(
      "end_date_time",
      `${format(date, "yyyy-MM-dd")} ${validTimeEnd}:00`
    );
    setOpenToDate(false);
  };

  useEffect(() => {
    if (fromDate) {
      const validTimeStart = timeStart || "12:00";
      form.setValue(
        "start_date_time",
        `${format(fromDate, "yyyy-MM-dd")} ${validTimeStart}:00`
      );
    }
  }, [timeStart, fromDate, form]);

  useEffect(() => {
    if (toDate) {
      const validTimeEnd = timeEnd || "23:59";
      form.setValue(
        "end_date_time",
        `${format(toDate, "yyyy-MM-dd")} ${validTimeEnd}:00`
      );
    }
  }, [timeEnd, toDate, form]);

  async function onSubmit(data: LeaveRequestFormValues) {
    console.log(data);
    try {
      const formData = serialize(
        {
          ...data,
          _method: previousData ? "PUT" : "POST",
          files: uploadedFiles,
        },
        { indices: true }
      );
      if (previousData) {
        await updateLeaveRequestPolicy({
          leaveRequestId: previousData.id,
          updatedLeaveRequest: formData,
        }).unwrap();
        toast.success("Leave Request updated successfully");
        modalClose();
      } else {
        await createLeaveRequestPolicy(formData).unwrap();
        toast.success("Leave Request created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }

  console.log();
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
              {/* Form Fields */}

              <div className="flex items-center space-x-4">
                <div className="w-full">
                  <FormSearchSelect<EmployeeColumn>
                    loading={employeeLoading}
                    data={employeeData}
                    displayField="first_name"
                    valueField="id"
                    form={form}
                    name="employee_id"
                    title="Employee"
                    className="w-[460px]"
                  />
                </div>
                <div className="w-full">
                  <FormSearchSelect<LeaveTypeRow>
                    loading={leaveTypeLoading}
                    data={leaveTypeData}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name={`leave_type_id`}
                    title="Leave Type"
                    className="w-[290px]"
                  />
                </div>
                {previousData && (
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={
                              previousData.status
                                ? String(previousData.status)
                                : undefined
                            }
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {status?.map((item: string) => (
                                <SelectItem key={item} value={String(item)}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center gap-x-4">
                <div className="w-full flex items-center gap-x-4">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="start_date_time"
                      render={() => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
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
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
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
                  {timeSchedule && (
                    <div className="w-full">
                      <FormItem>
                        <FormLabel>Time Start</FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            value={timeStart}
                            onChange={(e) => setTimeStart(e.target.value)} // Update Time Start state
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </div>
                  )}
                </div>

                <div className="w-full flex items-center gap-x-4">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="end_date_time"
                      render={() => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <Popover
                            open={openToDate}
                            onOpenChange={setOpenToDate}
                          >
                            <PopoverTrigger asChild className="">
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
                                } // Disable future dates and dates before fromDate
                                selected={toDate ?? undefined}
                                onSelect={handleToDateSelect}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {timeSchedule && (
                    <div className="w-full">
                      <div className="w-full">
                        <FormItem>
                          <FormLabel>Time End</FormLabel>
                          <FormControl>
                            <Input
                              type="time"
                              value={timeEnd}
                              onChange={(e) => setTimeEnd(e.target.value)} // Update Time End state
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div></div>

              {/* Time Start and Time End */}

              <div className="!mt-5 flex justify-start items-center">
                <FormControl>
                  <Switch
                    className=" "
                    checked={timeSchedule}
                    onCheckedChange={(checked: boolean) =>
                      setTimeSchedule(checked ? true : false)
                    }
                  />
                </FormControl>
                <span className="ml-2 text-sm">Consider Hours</span>
              </div>

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

              <div className="space-y-2">
                <FormLabel>Upload Files</FormLabel>
                <FileUpload
                  setUploadedFiles={setUploadedFiles}
                  uploadedFiles={previousData?.files}
                  onDeleteSuccess={() => (refetch as () => void)()}
                />
              </div>
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
