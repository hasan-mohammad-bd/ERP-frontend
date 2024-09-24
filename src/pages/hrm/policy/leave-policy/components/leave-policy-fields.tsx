import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MultipleSelector, { Option } from "@/components/ui/multiSelectSearch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const items = [
  {
    id: "is-foreign-leave-allowed",
    label: "Is Foreign Leave Allowed",
  },
  {
    id: "allow-muliple-application",
    label: "Allow Muliple Application?",
  },
  {
    id: "allow-responsibility-reliever-on-leave",
    label: "Allow Responsibility reliever on leave?",
  },
  {
    id: "is-exist-multiple-approver-hierarchy",
    label: "Is exist Multiple Approver Hierarchy",
  },
  {
    id: "enable-extra-day-compention",
    label: "Enable Extra day compention",
  },
  {
    id: "allow-half-day-leave",
    label: "Allow Half day leave?",
  },
  {
    id: "allow-multiple-visit-in-same-date",
    label: "Allow Multiple visit in same date?",
  },
  {
    id: "can-change-approver",
    label: "Can change approver",
  },
  {
    id: "will-other-approvers-notify-on-fully-approval-or-rejection-of-an-application",
    label:
      "Will other approvers notify on fully approval or rejection of an application?",
  },
  {
    id: "other-than-leave-compensate-extra-days-with-salary",
    label: "Other than leave, compensate extra days with salary",
  },
] as const;

const employeeList = [
  { id: 1, value: "V", label: "Visit(V)" },
  { id: 2, value: "L", label: "Leave(V)" },
  { id: 3, value: "H", label: "Holiday(H)" },
  { id: 4, value: "W", label: "Weekend(W)" },
];

export function LeavePolicyFields({ form }: { form: any }) {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [employeeSearchTerm, setEmployeeSearchTerm] = useState("");

  const [openFromDate, setOpenFromDate] = useState(false);
  const [openToDate, setOpenToDate] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null>(null); // Set initial state as null
  const [toDate, setToDate] = useState<Date | null>(null); // Set initial state as null

  // Debugging logs for form state
  console.log("Form state:", form.getValues());
  console.log("From Date:", fromDate);
  console.log("To Date:", toDate);

  const handleFromDateSelect = (date: Date | undefined) => {
    if (date) {
      setFromDate(date);
      console.log("Selected From Date:", date); // Debugging log
      setOpenFromDate(false);
    }
  };

  const handleToDateSelect = (date: Date | undefined) => {
    if (date) {
      setToDate(date);
      console.log("Selected To Date:", date); // Debugging log
      setOpenToDate(false);
    }
  };
  console.log(fromDate, toDate);

  const handleSearch = async (query: string): Promise<Option[]> => {
    setEmployeeSearchTerm(query);

    // Transform the API response to match the Option interface
    const options =
      employeeList?.map((item: any) => ({
        value: String(item.id),
        label: item.label,
      })) || [];

    return options;
  };

  return (
    <Card className="max-w-4xl">
      {/* <CardHeader>
        <CardTitle>Absent Policy</CardTitle>
      </CardHeader> */}
      <CardContent className="flex flex-col gap-6 pt-6">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem className="grid grid-cols-2 gap-x-6 gap-y-4 items-start space-y-0">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex items-start gap-x-3 !space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: any) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="start_month"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Start Month</FormLabel>
                <Popover open={openFromDate} onOpenChange={setOpenFromDate}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${
                        !fromDate ? "text-muted-foreground" : ""
                      }`}
                    >
                      {fromDate ? format(fromDate, "MMMM yyyy") : "Pick a date"}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={fromDate}
                      onSelect={(date) => {
                        handleFromDateSelect(date);
                        field.onChange(date); // Update form value
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="end_month"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select End Month</FormLabel>
                <Popover open={openToDate} onOpenChange={setOpenToDate}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${
                        !toDate ? "text-muted-foreground" : ""
                      }`}
                    >
                      {toDate ? format(toDate, "MMMM yyyy") : "Pick a date"}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={toDate}
                      onSelect={(date) => {
                        handleToDateSelect(date);
                        field.onChange(date); // Update form value
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2 col-span-2">
            <FormField
              control={form.control}
              name="attendance_flags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Attendance flags that will be counted for extra work
                  </FormLabel>
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
              name="items"
              render={() => (
                <FormItem>
                  {[
                    {
                      id: "consider-attendance-for-visit",
                      label: "Consider attendance for visit",
                    },
                  ].map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex items-start gap-x-3 !space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value: any) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
