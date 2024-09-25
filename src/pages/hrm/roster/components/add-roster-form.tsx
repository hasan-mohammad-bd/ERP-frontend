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
  RosterColumn,
  RosterFormSchema,
  RosterFromValues,
  ScheduleColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import { useGetSchedulesQuery } from "@/store/services/hrm/api/schedule";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  useCreateRosterMutation,
  useUpdateRosterMutation,
} from "@/store/services/hrm/api/roster";
import { useGetHolidaysQuery } from "@/store/services/hrm/api/holiday";

interface AddRosterFormProps {
  modalClose: () => void;
  data?: RosterColumn;
}

export function AddRosterForm({
  modalClose, 
  data: previousData,
}: AddRosterFormProps) {
  const [createRoster, { isLoading }] = useCreateRosterMutation();
  const [updateRoster, { isLoading: updateLoading }] =
    useUpdateRosterMutation();

  const { data: holidays} = useGetHolidaysQuery("page=1&per_page=1000");

  const holidaysData = holidays?.data || [];
  const { data: schedules, isLoading: schedulesLoading } =
    useGetSchedulesQuery("page=1&per_page=1000");

  const schedulesData = schedules?.data || [];

  const form = useForm<RosterFromValues>({
    resolver: zodResolver(RosterFormSchema),
    defaultValues: {
      date: previousData?.date?.date || "",
      schedule_id: previousData?.schedule?.id || 1,

    },
  });

  const isDateDisabled = (dateString : string) => {
    return holidaysData.some((holiday) => holiday.duration === dateString);
  };

  async function onSubmit(data: RosterFromValues) {
    try {
      if (previousData) {
        await updateRoster({
          rosterId: previousData.id,
          updatedRoster: data,
        });
        toast.success("Roster updated successfully");
        modalClose();
      } else {
        await createRoster(data);
        toast.success("Roster created successfully");
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
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Enter date"
                      {...field}
                      onChange={(e) => {
                        const selectedDate = e.target.value;
                        if (!isDateDisabled(selectedDate)) {
                          field.onChange(e); // Only update the field if the date is not disabled
                        } else {
                          e.preventDefault();
                         
                           toast.error(`${selectedDate} is a holiday`);
                       
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="schedule_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Schedule</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.schedule?.id
                        ? String(previousData.schedule.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Schedule" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {schedulesLoading ? (
                        <Loading />
                      ) : (
                        schedulesData?.map((schedule: ScheduleColumn) => (
                          <SelectItem
                            key={schedule.id}
                            value={String(schedule.id)}
                          >
                            {schedule.name}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
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
