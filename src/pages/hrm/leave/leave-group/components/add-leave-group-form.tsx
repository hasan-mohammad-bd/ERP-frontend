import { useFieldArray, useForm } from "react-hook-form";
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
import { Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";

import {
  LeaveGroupFormValues,
  LeaveGroupRow,
  leaveGroupSchema,
  LeaveTypeRow,
} from "@/lib/validators/hrm/leave";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useCreateLeaveGroupMutation,
  useUpdateLeaveGroupMutation,
} from "@/store/services/hrm/api/leave-group";
import { toast } from "sonner";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { Loading } from "@/components/common/loading";
import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";
import { useGetLeaveTypesQuery } from "@/store/services/hrm/api/leave-type";
// import { Switch } from "@/components/ui/switch";

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
  data?: LeaveGroupRow;
}

export function AttendancePolicyForm({
  modalClose,
  data: previousData,
}: AddJobApplyFormProps) {
  const [createLeaveGroupPolicy, { isLoading }] = useCreateLeaveGroupMutation();
  const [updateLeaveGroupPolicy, { isLoading: updateLoading }] =
    useUpdateLeaveGroupMutation();
  const { data, isLoading: leaveTypeLoading } =
    useGetLeaveTypesQuery(`per_page=1000&page=1`);

  const leaveTypeData = data?.data || [];

  const form = useForm<LeaveGroupFormValues>({
    resolver: zodResolver(leaveGroupSchema),
    defaultValues: {
      name: previousData?.name || "",
      leave: previousData?.leave_group_types 
        ? previousData.leave_group_types.map((item) => ({
            ...item,
            // Assuming the id is within a nested object
            leave_type_id: String(item?.leave_type?.id || ""), // Convert id to string, handle cases where id may not exist
          }))
        : [],
    },
    
  });

  async function onSubmit(data: LeaveGroupFormValues) {
    try {
      if (previousData) {
        await updateLeaveGroupPolicy({
          leaveGroupId: previousData.id,
          updatedLeaveGroup: data,
        }).unwrap();
        toast.success("Leave Group updated successfully");
        modalClose();
      } else {
        await createLeaveGroupPolicy(data).unwrap();
        toast.success("Leave Group created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "leave",
  });

  //initially one
  useEffect(() => {
    if (fields.length === 0) {
      append({ leave_type_id: "", leave_count: 0 });
    }
  }, [fields, append]);

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
                    <FormLabel>Leave Group Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter Leave Group Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {fields.map((field, index) => (
                <div key={index} className="flex justify-center items-center">
                  <div className="mr-2 w-full">
                    <div key={field.id}>
                      {index === 0 ? <FormLabel>Leave Type</FormLabel> : null}
                      <FormSearchSelect<LeaveTypeRow>
                        loading={leaveTypeLoading}
                        data={leaveTypeData}
                        displayField="name"
                        valueField="id"
                        form={form}
                        name={`leave.${index}.leave_type_id`}
                        // title="Select Leave Type"
                        className="w-[290px]"
                      />
                    </div>
                  </div>
                  <div>
                    <FormField
                      key={field.id}
                      control={form.control}
                      name={`leave.${index}.leave_count`}
                      render={({ field }) => (
                        <FormItem>
                          {index === 0 ? (
                            <FormLabel>Leave Count</FormLabel>
                          ) : null}
                          <FormControl>
                            <Input
                              type="number"
                              className=""
                              placeholder="Enter Leave Count"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <span className="mt-auto mb-3" onClick={() => remove(index)}>
                    <Trash2 size={16} color="red" className="ml-2" />
                  </span>
                </div>
              ))}
              <Button
                variant="outline"
                className="border border-dashed border-gray-700 w-full"
                type="button"
                onClick={() =>
                  append({
                    leave_type_id: "",
                    leave_count: 0,
                    // cost_centers: [{ cost_center_id: 0, amount: 0 }],
                  })
                }
              >
                <Plus size={16} /> <span className="ml-2">Add Line</span>
              </Button>

              {/*             <FormField
      control={form.control}
      name="employee_count"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Employee Count</FormLabel>
          <FormControl>
            <Input
              type="number"
              className=""
              placeholder="Enter Employee Count"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    /> */}
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
