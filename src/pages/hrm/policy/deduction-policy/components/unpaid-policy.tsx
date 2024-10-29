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

const items = [
  {
    id: "unpaid_consider",
    label: "Consider unpaid policy",
  },

  {
    id: "unpaid_deduct_gross_salary",
    label: "Deduct from gross salary? (Otherwise from basic)",
  },
] as const;

export function UnpaidPolicy({ form }: { form: UseFormReturn }) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Unpaid Policy</CardTitle>
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
      </CardContent>
    </Card>
  );
}
