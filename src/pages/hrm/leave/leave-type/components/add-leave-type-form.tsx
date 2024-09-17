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

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Switch } from "@/components/ui/switch";

// interface AttendancePolicyFormValues {
//   policy_name: string;
//   in_time: string;
//   working_hours: string;
//   delay_buffer: string;
//   ex_delay_buffer: string;
//   break_time: string;
//   effect_from: string;
// }

interface AddJobApplyFormProps {
  modalClose: () => void;
  data?: any;
}

export function AttendancePolicyForm({
  modalClose,
  data: previousData,
}: AddJobApplyFormProps) {
  const form = useForm<any>({
    defaultValues: {
      policy_name: "",
      in_time: "",
      working_hours: "",
      delay_buffer: "",
      ex_delay_buffer: "",
      break_time: "",
      effect_from: "",
    },
  });

  async function onSubmit(data: any) {
    console.log("Form Submitted:", data);
    modalClose();
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
            {/* Form Fields */}

            <FormField
              control={form.control}
              name="leave_name"
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
                      checked={field.value === true}
                      onCheckedChange={(checked: boolean) =>
                        field.onChange(checked ? true : false)
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
                      checked={field.value === true}
                      onCheckedChange={(checked: boolean) =>
                        field.onChange(checked ? true : false)
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
    </>
  );
}
