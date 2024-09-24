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
import { Switch } from "@/components/ui/switch";
import {
  LeaveTypeFormValues,
  LeaveTypeRow,
  leaveTypeSchema,
} from "@/lib/validators/hrm/leave";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useCreateLeaveTypeMutation,
  useUpdateLeaveTypeMutation,
} from "@/store/services/hrm/api/leave-type";
import { toast } from "sonner";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { Loading } from "@/components/common/loading";



interface AddLeaveTypeProps {
  modalClose: () => void;
  data?: LeaveTypeRow;
}

export function AttendancePolicyForm({
  modalClose,
  data: previousData,
}: AddLeaveTypeProps) {
  const [createLeaveTypePolicy, { isLoading }] = useCreateLeaveTypeMutation();
  const [updateLeaveTypePolicy, { isLoading: updateLoading }] =
    useUpdateLeaveTypeMutation();
  const form = useForm<LeaveTypeFormValues>({
    resolver: zodResolver(leaveTypeSchema),
    defaultValues: {
      name: previousData?.name || "",
      short_code: previousData?.short_code || "",
      maternity_leave: previousData?.maternity_leave || 0,
      unpaid_leave: previousData?.unpaid_leave || 0,
    },
  });

  async function onSubmit(data: LeaveTypeFormValues) {
    try {
      if (previousData) {
        await updateLeaveTypePolicy({
          leaveTypeId: previousData.id,
          updatedLeaveType: data,
        }).unwrap();
        toast.success("Policy updated successfully");
        modalClose();
      } else {
        await createLeaveTypePolicy(data).unwrap();
        toast.success("Policy created successfully");
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
        <div>
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
              {/* Form Fields */}

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Leave Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Leave Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="short_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Code</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Short Code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="maternity_leave"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10">
                  <div className="space-y-0.5">
                    <FormLabel>Maternity Leave</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      className="!mt-0 "
                      checked={field.value === 1}
                      onCheckedChange={(checked: boolean) =>
                        field.onChange(checked ? 1 : 0)
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="unpaid_leave"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10">
                  <div className="space-y-0.5">
                    <FormLabel>Unpaid Leave</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      className="!mt-0 "
                      checked={field.value === 1}
                      onCheckedChange={(checked: boolean) =>
                        field.onChange(checked ? 1 : 0)
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="text-right">
              <Button variant="default" type="submit" className="w-fit mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
