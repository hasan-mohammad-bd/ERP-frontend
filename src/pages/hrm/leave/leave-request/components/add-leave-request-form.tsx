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
import { differenceInDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import FileUpload from "@/components/common/file-uploader";
// import { useGetEmployeesQuery } from "@/store/services/hrm/api/employee-list";
import {
  LeaveRequestFormValues,
  LeaveRequestRow,
  leaveRequestSchema,
  // LeaveTypeRow,
} from "@/lib/validators/hrm/leave";
// import { EmployeeColumn } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Switch } from "@/components/ui/switch";
import {
  useCreateLeaveRequestMutation,
  useUpdateLeaveRequestMutation,
} from "@/store/services/hrm/api/leave-request";
import { toast } from "sonner";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
// import { useGetLeaveTypesQuery } from "@/store/services/hrm/api/leave-type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serialize } from "object-to-formdata";
import { Loading } from "@/components/common/loading";
import { useLazyGetLeaveSummaryQuery } from "@/store/services/hrm/api/report/leave/leave-summay";
import { useDebounce } from "@/store/hooks/useDebounce";
import {
  LeaveSummaryRow,
  LeaveTypes,
} from "@/lib/validators/hrm/report/leave/leave-summary";
// import EmployeeCombobox from "./server-search-select";
// import SearchSelect from "./server-search-select";
import ServerSearchSelect from "./server-search-select";

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
  const [trigger, { data: searchResult }] = useLazyGetLeaveSummaryQuery();
  const [createLeaveRequestPolicy, { isLoading }] =
    useCreateLeaveRequestMutation();
  const [updateLeaveRequestPolicy, { isLoading: updateLoading }] =
    useUpdateLeaveRequestMutation();
  // const { data: employees, isLoading: employeeLoading } =
  //   useGetEmployeesQuery(`page=1&per_page=1000`);
  // const { data, isLoading: leaveTypeLoading } =
  //   useGetLeaveTypesQuery(`per_page=1000&page=1`);

  // console.log(data)

  // const leaveTypeData = data?.data || [];

  // console.log();
  console.log(searchResult?.data);

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
  const [searchTerm, setSearchTerm] = useState<string>("");

  console.log(searchTerm, "searchTerm");

  const status = ["Pending", "Canceled", "Approved", "Rejected"];

  useEffect(() => {
    if (previousData) {
      setTimeStart(format(new Date(previousData?.start_date_time), "HH:mm"));
      setTimeEnd(format(new Date(previousData?.end_date_time), "HH:mm"));
      setFromDate(new Date(previousData?.start_date_time));
      setToDate(new Date(previousData?.end_date_time));
    }
  }, [previousData]);

  const searchResultData = searchResult?.data || [];

  const employeeId = form.watch("employee_id");
  const foundEmployee = searchResultData.find(
    (item) => item.id === Number(employeeId)
  );

  const leaveTypeId = form.watch("leave_type_id");
  const allowedLeaveType = foundEmployee?.leave_types.find(
    (item) => item.id === Number(leaveTypeId)
  );

  const handleFromDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setFromDate(date);

    const validTimeStart =
      (timeStart && `${timeStart}:00`) || foundEmployee?.schedule?.start_time;
    console.log(validTimeStart, "validTimeStart");
    form.setValue(
      "start_date_time",
      `${format(date, "yyyy-MM-dd")} ${validTimeStart}`
    );
    setOpenFromDate(false);
  };

  const handleToDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setToDate(date);

    const validTimeEnd =
      (timeEnd && `${timeEnd}:00`) || foundEmployee?.schedule?.end_time;
    form.setValue(
      "end_date_time",
      `${format(date, "yyyy-MM-dd")} ${validTimeEnd}`
    );
    setOpenToDate(false);
  };

  useEffect(() => {
    if (fromDate) {
      const validTimeStart =
        (timeStart && `${timeStart}:00`) || foundEmployee?.schedule?.start_time;
      form.setValue(
        "start_date_time",
        `${format(fromDate, "yyyy-MM-dd")} ${validTimeStart}`
      );
    }
  }, [timeStart, fromDate, form, foundEmployee?.schedule?.start_time]);

  useEffect(() => {
    if (toDate) {
      const validTimeEnd =
        (timeEnd && `${timeEnd}:00`) || foundEmployee?.schedule?.end_time;
      form.setValue(
        "end_date_time",
        `${format(toDate, "yyyy-MM-dd")} ${validTimeEnd}`
      );
    }
  }, [timeEnd, toDate, form, foundEmployee?.schedule?.end_time]);

  const startDate = form.watch("start_date_time");
  const endDate = form.watch("end_date_time");
  console.log(startDate);

  const totalLeaveDays =
    startDate && endDate
      ? differenceInDays(endDate.slice(0, 10), startDate.slice(0, 10))
      : 0;
  const totalLeaveDaysWithPlusOne = totalLeaveDays + 1;

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

  useEffect(() => {
    if (previousData?.employee_id) {
      setSearchTerm(previousData?.employee_id.toString());
    }
  }, [previousData?.employee_id]);
  const debouncedSearchText = useDebounce(searchTerm, 300);

  // Trigger server search when debounced text updates
  useEffect(() => {
    if (debouncedSearchText) {
      trigger && trigger(`text=${debouncedSearchText}`);
    }
  }, [debouncedSearchText, trigger, previousData?.employee_id]);

  console.log(searchResultData, "searchResultData");

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

              <div className="flex items-end space-x-4">
                <div className="w-full">
                  {/* <SearchSelect
                    data={searchResultData}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                  /> */}
                  {previousData?.employee_id ? (
                    <>
                      <FormLabel className="">Employee Name</FormLabel>
                      <Input
                        className="mt-2"
                        disabled
                        value={previousData?.employee?.first_name}
                      />
                    </>
                  ) : (
                    <ServerSearchSelect<LeaveSummaryRow>
                      data={searchResultData}
                      displayField="first_name"
                      valueField="id"
                      form={form}
                      name="employee_id"
                      title="Employee"
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      className="w-[360px]"
                    />
                  )}
                  {/* 
                  <FormSearchSelect<LeaveSummaryRow>
                    data={searchResult?.data || []}
                    displayField="first_name"
                    valueField="id"
                    form={form}
                    name="employee_id"
                    title="Employee"
                    className="w-[460px]"
                  /> */}
                </div>
                <div className="w-full flex items-center">
                  <FormSearchSelect<LeaveTypes>
                    // loading={leaveTypeLoading}
                    data={foundEmployee?.leave_types || []}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name={`leave_type_id`}
                    title={`Leave Type ${
                      allowedLeaveType?.available?.total_days
                        ? `(Leave Left: ${allowedLeaveType?.available?.total_days} days)`
                        : ""
                    } ${
                      allowedLeaveType?.available?.total_hours
                        ? `, ( ${allowedLeaveType?.available?.total_hours} hours)`
                        : ""
                    }`}
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
                          <FormMessage>
                            {allowedLeaveType?.available &&
                              totalLeaveDaysWithPlusOne >
                                allowedLeaveType.available.total_days && (
                                <span className="text-red-500">
                                  Total Leave Days Exceed
                                </span>
                              )}
                          </FormMessage>
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
                  setFilesToUpload={setUploadedFiles}
                  filesToUpload={uploadedFiles}
                  uploadedFiles={previousData?.files}
                  onDeleteSuccess={() => (refetch as () => void)()}
                />
              </div>
            </div>

            <div className="text-right flex items-center justify-end gap-x-3">
              <Button
                disabled={
                  !!(
                    allowedLeaveType?.available.total_days &&
                    allowedLeaveType?.available.total_days <= 0
                  ) ||
                  !!(
                    allowedLeaveType?.available &&
                    totalLeaveDaysWithPlusOne >
                      allowedLeaveType.available.total_days
                  )
                }
                variant="default"
                type="submit"
                className="w-fit mt-4"
              >
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
