import { Loading } from "@/components/common/loading";
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
import { LeaveTypeRow } from "@/lib/validators/hrm/leave";
import { UseFormReturn } from "react-hook-form";

const items = [
  {
    id: "underwork_consider",
    label: "Consider underwork policy",
  },
  {
    id: "underwork_deduct_salary",
    label: "Deduct from salary? (Otherwise from leave)",
  },
  {
    id: "underwork_deduct_gross_salary",
    label: "Deduct from gross salary? (Otherwise from basic)",
  },
] as const;

export function UnderworkPolicy({
  form,
  leaveTypeList,
  leaveTypeLoading,
}: {
  form: UseFormReturn;
  leaveTypeList: LeaveTypeRow[];
  leaveTypeLoading: boolean;
}) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Underwork Policy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
          name="underwork_leave_type_id"
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
                  {leaveTypeLoading ? (
                    <Loading />
                  ) : (
                    leaveTypeList?.map((group: LeaveTypeRow) => (
                      <SelectItem key={group.id} value={String(group.id)}>
                        {group.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-20">
          <FormField
            control={form.control}
            name="underwork_consider_hours"
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
            name="underwork_adjust_days"
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
