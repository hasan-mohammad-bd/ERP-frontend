import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

const items = [
  {
    id: "delay_consider",
    label: "Consider delay duration",
  },
  {
    id: "delay_deduct_salary",
    label: "Deduct from salary? (Otherwise from leave)",
  },
  {
    id: "delay_deduct_gross_salary",
    label: "Deduct from gross salary? (Otherwise from basic)",
  },
] as const;

export function DelayPolicy({ form }: { form: UseFormReturn }) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Delay Policy</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent className="space-y-6">
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
                            checked={
                              field.value
                                ? field.value.includes(item.id)
                                : false
                            } // Default to false if no value
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([
                                    ...(field.value || []),
                                    item.id,
                                  ]) // Safely add item id
                                : field.onChange(
                                    (field.value || []).filter(
                                      (value: string) => value !== item.id
                                    )
                                  ); // Safely remove item id
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

        <FormField
          control={form.control}
          name="delay_leave_type_id"
          render={({ field }) => (
            <FormItem className="w-[300px]">
              <FormLabel>Leave type</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(Number(value))} // Convert string to number
                value={field.value && String(field.value)} // Ensure value is a string for rendering
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select leave type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Annual Leave</SelectItem>
                  <SelectItem value="2">Sick Leave</SelectItem>
                  <SelectItem value="3">Casual Leave</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="delay_consecutive"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value === 1}
                  onCheckedChange={(checked) => field.onChange(checked ? 1 : 0)}
                />
              </FormControl>
              <FormLabel>Consider consecutive delay?</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-20">
          <FormField
            control={form.control}
            name="delay_consider_days"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number delay to consider</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="w-32"
                    placeholder="Enter days"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value ? Number(value) : undefined);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="delay_adjust_days"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Days(s) adjust for delay</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="w-32"
                    placeholder="Enter days"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value ? Number(value) : undefined);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
