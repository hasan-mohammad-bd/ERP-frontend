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
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUpload from "@/components/common/file-uploader";

// interface AttendancePolicyFormValues {
//   policy_name: string;
//   in_time: string;
//   working_hours: string;
//   delay_buffer: string;
//   ex_delay_buffer: string;
//   break_time: string;
//   effect_from: string;
// }

const demoData = [
  {
    date: "2022-01-01",
    id: 1,
    employee_id: 1,
    name: "Employee 1",
    leave_type: "CL",
    start_date: "2022-01-01",
    end_date: "2022-01-01",
    status: "Pending",
    // in_time: "10:00 AM",
    // delay_buffer: "00:10",
    // ex_delay_buffer: "00:10",
    // last_in_time: "10:00 AM",
    // ignore_from_att_report: true,
    // discard_attendance_on_weekend: true,
  },
  {
    date: "2022-01-01",
    id: 2,
    employee_id: 1,
    name: "Employee 2",
    leave_type: "CL",
    start_date: "2022-01-01",
    end_date: "2022-01-01",
    status: "Pending",
    // in_time: "10:00 AM",
    // delay_buffer: "00:10",
    // ex_delay_buffer: "00:10",
    // last_in_time: "10:00 AM",
    // ignore_from_att_report: true,
    // discard_attendance_on_weekend: true,
  },
];

interface AddJobApplyFormProps {
  modalClose: () => void;
  data?: any;
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

  const [openFromDate, setOpenFromDate] = useState(false);
  const [openToDate, setOpenToDate] = useState(false);
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  console.log(uploadedFiles);

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

  async function onSubmit(data: any) {
    console.log("Form Submitted:", data);
    modalClose();
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-3">
            {/* Form Fields */}

            <div className="">
              <FormSearchSelect<any>
                // loading={projectLoading}
                data={demoData}
                displayField="name"
                valueField="id"
                form={form}
                name="employee_id"
                title="Employee"
                className="w-[460px]"
              />
            </div>

            <div className="flex justify-between items-end">
              <div className="w-full mr-2">
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
                            selected={fromDate}
                            onSelect={handleFromDateSelect}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
              </div>
              {/* tab view */}
              <div>
                <Tabs defaultValue="account" className="w-[200px] ">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">First Half</TabsTrigger>
                    <TabsTrigger value="password">Second Half</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="w-full mr-2">
                <FormField
                  control={form.control}
                  name="end_date"
                  render={() => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <Popover open={openToDate} onOpenChange={setOpenToDate}>
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
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            // disabled={(date) =>
                            //   date > new Date() || !!(fromDate && date < fromDate)
                            // } // Disable future dates and dates before fromDate
                            selected={toDate}
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
              {/* tab view */}
              <div>
                <Tabs defaultValue="password" className="w-[200px] ">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">First Half</TabsTrigger>
                    <TabsTrigger value="password">Second Half</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            <div className="space-y-2">
              <FormLabel>Upload Files</FormLabel>
              <FileUpload
                setUploadedFiles={setUploadedFiles}
                // uploadedFiles={previousData?.files}
                // onDeleteSuccess={() => refetch()}
              />
            </div>
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purpose</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      placeholder="Enter purpose"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
    </>
  );
}
