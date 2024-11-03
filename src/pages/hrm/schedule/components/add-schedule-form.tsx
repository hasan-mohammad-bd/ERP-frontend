import { Loading } from "@/components/common/loading";
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
import {
  OrganizationDropdownColumn,
  ScheduleColumn,
  ScheduleFormSchema,
  ScheduleFromValues,
} from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import handleErrors from "@/lib/handle-errors";
import { useGetOrganizationForDropDownQuery } from "@/store/services/hrm/api/organization-dropdown";
import {
  useCreateScheduleMutation,
  useUpdateScheduleMutation,
} from "@/store/services/hrm/api/schedule";
import { ErrorResponse } from "@/types";
import formatTo24HourTime from "@/utils/format-dates";

interface AddScheduleFormProps {
  modalClose: () => void;
  data?: ScheduleColumn;
}

export function AddScheduleForm({
  modalClose,
  data: previousData,
}: AddScheduleFormProps) {
  const [createSchedule, { isLoading }] = useCreateScheduleMutation();
  const [updateSchedule, { isLoading: updateLoading }] =
    useUpdateScheduleMutation();
  const { data, isLoading: organizationLoading } =
    useGetOrganizationForDropDownQuery();

  const organizationData = data?.data || [];

  const form = useForm<ScheduleFromValues>({
    resolver: zodResolver(ScheduleFormSchema),
    defaultValues: {
      name: previousData?.name || "",
      // sorting_index: previousData?.sorting_index || 0,
      hour: previousData?.hour || "0",
      start_time: formatTo24HourTime(previousData?.start_time) || "00:00",
      end_time: formatTo24HourTime(previousData?.end_time) || "00:00",
      organization_id: previousData?.organization?.id || 1,
    },
  });

  async function onSubmit(data: ScheduleFromValues) {
    try {
      if (previousData) {
        await updateSchedule({
          scheduleId: previousData.id,
          updatedSchedule: data,
        }).unwrap();
        toast.success("Shift updated successfully");
        modalClose();
      } else {
        await createSchedule(data).unwrap();
        toast.success("Shift created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
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
                    <Input placeholder="Enter Shift name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="sorting_index"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sorting</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter schedule sorting"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/*             <FormField
              control={form.control}
              name="hour"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hour</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter schedule hour"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="start_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Time</FormLabel>
                  <FormControl>
                    <Input
                      type="time"
                      placeholder="Enter shift start time"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="end_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Time</FormLabel>
                  <FormControl>
                    <Input
                      type="time"
                      placeholder="Enter section end time"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organization_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization Name</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.organization?.id
                        ? String(previousData.organization.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Organization" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organizationLoading ? (
                        <Loading />
                      ) : (
                        organizationData?.map(
                          (organization: OrganizationDropdownColumn) => (
                            <SelectItem
                              key={organization.id}
                              value={String(organization.id)}
                            >
                              {organization.name}
                            </SelectItem>
                          )
                        )
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
