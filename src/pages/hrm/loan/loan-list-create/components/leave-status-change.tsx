import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useForm } from "react-hook-form";


import { zodResolver } from "@hookform/resolvers/zod";

import { Loading } from "@/components/common/loading";

import {
  LeaveRequestRow,
  leaveStatusChangeSchema,
  LeaveStatusFormValues,
} from "@/lib/validators/hrm/leave";
import { useChangeLeaveStatusMutation } from "@/store/services/hrm/api/leave-request";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LeaveStatusChangeProps {
  payload?: LeaveRequestRow[];
  modelClose?: () => void;
}

export function LeaveStatusChangeForm({
  payload,
  modelClose,
}: LeaveStatusChangeProps) {
  const status = ["Pending", "Canceled", "Approved", "Rejected"];

  console.log(payload)

  const [createLeaveRequest, { isLoading }] = useChangeLeaveStatusMutation();



  const form = useForm<LeaveStatusFormValues>({
    resolver: zodResolver(leaveStatusChangeSchema),
    defaultValues: {
      ids: payload?.map((data) => data.id),
      status: "Pending",
    },
  });

  async function onSubmit(data: LeaveStatusFormValues) {
    const formattedData: LeaveStatusFormValues = {
      ...data,
      ids: payload?.map((data) => data.id) || [],
    };
    try {
      await createLeaveRequest(formattedData);
      toast.success("Leave request updated successfully");
      if (modelClose) {
        modelClose();
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="">
          <Loading />
        </div>
      ) : (
        <div className="flex gap-x-4">
          
          <div className={` w-full `}>
            {payload?.length === 0 ?  <span className="text-red-500 text-sm">Please select leave request to change status</span> : null}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="grid grid-cols-1 gap-2">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {status?.map((item: string) => (
                                <SelectItem key={item} value={String(item)}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <Button
                    variant="default"
                    type="submit"
                    className="w-full mt-4"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
