// import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

interface AddHolidayFormProps {
  modalClose: () => void;
  data?: any;
}

const items = [
  {
    id: "calculate-on-basic-salary",
    label: "Calculate on basic salary? (Otherwise gross salary)[*6]",
  },
  {
    id: "calculate-from-actual-in-time",
    label: "Calculate from actual in-time [*3]",
  },
  {
    id: "count-holiday-as-ot",
    label: "Count Holiday as OT",
  },
  {
    id: "count-weekend-as-ot",
    label: "Count Weekend as OT",
  },
  {
    id: "count-leave-as-ot",
    label: "Count Leave as OT",
  },
  {
    id: "is-active",
    label: "Is Active",
  },
  {
    id: "consider-cumulative-over-and-under-time",
    label: "Consider cumulative over and under time",
  },
  {
    id: "consider-ot-minutes",
    label: "Consider OT minutes[*5]",
  },
  {
    id: "is-fixed-amount",
    label: "Is Fixed Amount[*6]",
  },
  {
    id: "exclude-from-salary",
    label: "Exclude from Salary[*7]",
  },
] as const;

export function OTPolicyForm({
  modalClose,
  data: previousData,
}: AddHolidayFormProps) {
  const form = useForm({
    // resolver: zodResolver(HolidayFormSchema),
    defaultValues: {
      items: ["calculate-on-basic-salary"],
      policy_name: "Overtime Policy",
      monthly_max_allowed_ot: 50,
      minimum_countable_minutes: 10,
      ot_ratio: 1.5,
    },
  });

  async function onSubmit(data: any) {
    try {
      toast.success("Policy created successfully");
      console.log(data);
      console.log(previousData);
    } catch (error) {
      console.log(error);
    }
    modalClose();
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="policy_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Policy Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Enter days" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="monthly_max_allowed_ot"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly MAX Allowed OT(hours)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter days"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="minimum_countable_minutes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Countable Minutes[*1]</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter days"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ot_ratio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OT Ratio[*2]</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter days"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
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
                              className="flex flex-row items-center space-x-3 space-y-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value: any) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
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

          <div className="text-sm text-gray-600 space-y-2 mt-5">
            <p>** 1. OT starting time after regular working hour (Minutes)</p>
            <p>
              ** 2. How many times of per hour salary you want to give for OT.
            </p>
            <p>
              ** 3. If you checked this option, working hours calculated from
              employee's actual intime otherwise it will count from office
              intime even employee came before office intime.
            </p>
            <p>
              ** 4. If checked, sum of overtime and underwork will be added for
              overtime (if sum is positive) or will be deduced for underwork (if
              sum is negative)
            </p>
            <p>** 5. Consider OT minutes during salary calculation</p>
            <p>
              ** 6. You can select only one checkbox to calculate OT from basic
              salary or fixed amount. One checkbox will be automatically
              unchecked if you try to check both options. In that case, last
              selection will remain, previous one will be unchecked.
            </p>
            <p>
              ** 7. Overtime will be handed separately. Overtime Amount will not
              added during salary generation.
            </p>
          </div>

          <div className="flex justify-end space-x-2 mt-5">
            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Save
            </Button>
            <Button
              type="button"
              onClick={() => modalClose()}
              variant="destructive"
            >
              Exit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
