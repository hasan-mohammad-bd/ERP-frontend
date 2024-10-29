import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import MultipleSelector, { Option } from "@/components/ui/multiSelectSearch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { id: "foreign_leave_allowed", label: "Is Foreign Leave Allowed" },
  { id: "multiple_application", label: "Allow Multiple Application?" },
  {
    id: "responsibility_reliever",
    label: "Allow Responsibility reliever on leave?",
  },
  {
    id: "multiple_approver_hierarchy",
    label: "Is exist Multiple Approver Hierarchy",
  },
  {
    id: "extra_day_compensation_eligible",
    label: "Enable Extra day compensation",
  },
  { id: "allows_half_day_leave", label: "Allow Half day leave?" },
  {
    id: "allows_multiple_visits_same_date",
    label: "Allow Multiple visit on same date?",
  },
  { id: "can_approver_change", label: "Can change approver" },
  {
    id: "notify_approver",
    label:
      "Will other approvers be notified on full approval or rejection of an application?",
  },
  {
    id: "extra_day_salary",
    label: "Other than leave, compensate extra days with salary",
  },
] as const;

export type Flag = {
  id: number;
  value: string;
  label:string;
}

const attendanceFlag: Flag[] = [
  { id: 1, value: "Visit", label: "Visit" },
  { id: 2, value: "Leave", label: "Leave" },
  { id: 3, value: "Holiday", label: "Holiday" },
  { id: 4, value: "Weekend", label: "Weekend" },
];

const months = [
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

export function LeavePolicyFields({ form }: { form: UseFormReturn }) {
  // const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  // console.log(selectedOptions);

  const handleSearch = async (query: string): Promise<Option[]> => {
    return attendanceFlag
      .filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
      .map((item) => ({
        // id:item.id,
        value: String(item.value), // Ensure all values are strings for consistency
        label: item.label,
      }));
  };

  return (
    <Card className="w-full h-full ">
      <CardHeader>
        <CardTitle>Leave Policy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Render checkbox items */}
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== item.id
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

        <div className="grid grid-cols-2 gap-7">
          {/* Start Month Field */}
          <FormField
            control={form.control}
            name="start_month"
            render={({ field }) => (
              <FormItem className="w-[300px]">
                <FormLabel>Select Start Month</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))} // Convert value back to number
                  value={String(field.value)} // Ensure value is a string
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Start Month" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month.value} value={month.value}>
                        {month.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End Month Field */}
          <FormField
            control={form.control}
            name="end_month"
            render={({ field }) => (
              <FormItem className="w-[300px]">
                <FormLabel>Select End Month</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))} // Convert value back to number
                  value={String(field.value)} // Ensure value is a string
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select End Month" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month.value} value={month.value}>
                        {month.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Attendance Flag Multiple Selector */}
        <FormField
          control={form.control}
          name="attendance_flag"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Attendance flags that will be counted for extra work
              </FormLabel>
              <FormControl>
                <MultipleSelector
                  {...field}
                  value={field.value}
                  onSearch={handleSearch}
                  onChange={(option) => {
                    field.onChange(option);
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
          render={({ field }) => {
            return (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value?.includes("allow_attendance_visit")}
                    onCheckedChange={(checked) => {
                      return checked
                        ? field.onChange([
                            ...field.value,
                            "allow_attendance_visit",
                          ])
                        : field.onChange(
                            field.value?.filter(
                              (value: string) =>
                                value !== "allow_attendance_visit"
                            )
                          );
                    }}
                  />
                </FormControl>
                <FormLabel className="font-normal">
                  Allow Attendance Visit
                </FormLabel>
              </FormItem>
            );
          }}
        />
      </CardContent>
    </Card>
  );
}