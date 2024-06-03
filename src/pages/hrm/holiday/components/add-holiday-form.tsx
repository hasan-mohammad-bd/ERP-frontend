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
  HolidayColumn,
  HolidayFormSchema,
  HolidayFromValues,

} from "@/lib/validators";
import { Loading } from "@/components/common/loading";



import {
  useCreateHolidayMutation,
  useUpdateHolidayMutation,
} from "@/store/services/hrm/api/holiday";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AddHolidayFormProps {
  modalClose: () => void;
  data?: HolidayColumn;
}

export function AddRosterForm({
  modalClose,
  data: previousData,
}: AddHolidayFormProps) {
  const [createHoliday, { isLoading }] = useCreateHolidayMutation();
  const [updateHoliday, { isLoading: updateLoading }] =
    useUpdateHolidayMutation();


  const form = useForm<HolidayFromValues>({
    resolver: zodResolver(HolidayFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      date: previousData?.date?.date || "",
      type: previousData?.type || "Mandatory",

    },
  });

  async function onSubmit(data: HolidayFromValues) {
    try {
      if (previousData) {
        await updateHoliday({
          holidayId: previousData.id,
          updatedHoliday: data,
        });
        toast.success("Holiday updated successfully");
        modalClose();
      } else {
        await createHoliday(data);
        toast.success("Holiday created successfully");
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
                  <FormLabel>Holiday Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter holiday name "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value?.toString()}
                      className="flex items-center space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Mandatory" />
                        </FormControl>
                        <FormLabel className="font-normal">Mandatory</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Optional" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Optional
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="Enter date " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
