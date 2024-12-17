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

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ErrorResponse } from "@/types";
import handleErrors from "@/lib/handle-errors";
import { Loading } from "@/components/common/loading";
import {
  LeadGroupFormValues,
  LeadGroupRow,
  leadGroupSchema,
} from "@/lib/validators/crm/lead-groups";
import {
  useCreateLeadGroupMutation,
  useUpdateLeadGroupMutation,
} from "@/store/services/crm/api/lead-groups";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LEAD_GROUP_TYPES from "@/constants/lead-group-types";

interface AddLeadGroupProps {
  modalClose: () => void;
  data?: LeadGroupRow;
}

export function AddLeadGroupForm({ modalClose, data: previousData }: AddLeadGroupProps) {
  const [createLeadGroup, { isLoading }] = useCreateLeadGroupMutation();
  const [updateLeadGroup, { isLoading: updateLoading }] = useUpdateLeadGroupMutation();
  const form = useForm<LeadGroupFormValues>({
    resolver: zodResolver(leadGroupSchema),
    defaultValues: {
      name: previousData?.name || "",
      type: previousData?.type || "",
      status: previousData?.status === 0 ? 0 : 1,
    },
  });

  async function onSubmit(data: LeadGroupFormValues) {
    try {
      if (previousData) {
        await updateLeadGroup({
          leadGroupId: previousData.id,
          updatedLeadGroup: data,
        }).unwrap();
        toast.success("Lead Group updated successfully");
        modalClose();
      } else {
        await createLeadGroup(data).unwrap();
        toast.success("Lead Group created successfully");
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
                    <FormLabel>Lead Group Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Lead Group Name"
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
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LEAD_GROUP_TYPES.map((lg) => (
                          <SelectItem key={lg.type} value={lg.type}>
                              {lg.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Status */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                      value={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={"1"}>Active</SelectItem>
                        <SelectItem value={"0"}>Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
