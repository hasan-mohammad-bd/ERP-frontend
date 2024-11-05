// import { Loading } from "@/components/common/loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import FormSearchSelect from "@/components/ui/form-items/form-search-select";
// import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { LeaveTypeRow } from "@/lib/validators/hrm/leave";
import { UseFormReturn } from "react-hook-form";

/* const items = [
  {
    id: "absent_consider",
    label: "Consider absent policy",
  },
  {
    id: "absent_deduct_salary",
    label: "Deduct from salary? (Otherwise from leave)",
  },
  {
    id: "absent_deduct_gross_salary",
    label: "Deduct from gross salary? (Otherwise from basic)",
  },
] as const; */

const deductionTypes = [
  {
    label : "thirty_days",
    name: "Thirty Days"
  },
  {
    label: "days_of_month",
    name: "Days of Month",
  
  },
  {
    label: "working_days",
    name: "Working Days"
  }

]

export function DeductionType({
  form,

}: {
  form: UseFormReturn;

}) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Deduction Type</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent className="space-y-4">


        <FormField
          control={form.control}
          name="deduction_type"
          render={({ field }) => (
            <FormItem className="w-[300px]">
              <FormLabel>Deduction type</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(value)} // Convert string to number
                value={field.value && String(field.value)} // Ensure value is a string for rendering
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select deduction type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    deductionTypes.map((item) => (
                      <SelectItem key={item.label} value={item.label}>
                        {item.name}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
