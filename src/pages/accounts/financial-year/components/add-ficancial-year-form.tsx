import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  FinancialYearColumn,
  FinancialYearFromValues,
  FinancialYearSchema,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";
import {
  useCreateFinancialYearMutation,
  useUpdateFinancialYearMutation,
} from "@/store/services/accounts/api/financial-year";
// import { Switch } from "@/components/ui/switch";

interface AddFinancialYearFormProps {
  modalClose: () => void;
  data?: FinancialYearColumn;
}

export function AddFinancialYearForm({
  modalClose,
  data: previousData,
}: AddFinancialYearFormProps) {
  const [createFinancialYear, { isLoading }] = useCreateFinancialYearMutation();
  const [updateFinancialYear, { isLoading: updateLoading }] =
    useUpdateFinancialYearMutation();

  const form = useForm<FinancialYearFromValues>({
    resolver: zodResolver(FinancialYearSchema),
    defaultValues: {
      name: previousData?.name || "",
      start_date: previousData?.start_date || "",
      end_date: previousData?.end_date || "",
      // is_active: previousData?.is_active || 1,
    },
  });

  async function onSubmit(data: FinancialYearFromValues) {
    try {
      if (previousData) {
        await updateFinancialYear({
          financialYearId: previousData.id,
          updatedFinancialYear: data,
        });
        toast.success("Financial year updated successfully");
        modalClose();
      } else {
        await createFinancialYear(data);
        toast.success("Financial year created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter financial year name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="start_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Enter Financial Start Date"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="end_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="Enter Financial End Date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
{/*             <FormField
              control={form.control}
              name="is_active"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Active</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value === 1}
                      onCheckedChange={(checked: boolean) =>
                        field.onChange(checked ? 1 : 0)
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            /> */}

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
