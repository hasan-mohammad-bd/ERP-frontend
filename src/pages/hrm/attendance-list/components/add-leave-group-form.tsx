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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "details_leave_type",
  });

  //initially one 
  useEffect(() => {
    if (fields.length === 0) {
      append(""); 
    }
  }, [fields, append]);


  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
            {/* Form Fields */}

            <FormField
              control={form.control}
              name="leave_group_name"
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
                  <FormField
                    key={field.id}
                    control={form.control}
                    name={`details_leave_type.${index}.leave_type`}
                    render={({ field }) => (
                      <FormItem>
                        {index === 0 ? <FormLabel>Leave Type</FormLabel> : null}
                        <Select
                          onValueChange={field.onChange}
                          // defaultValue={
                          //   previousData?.job_post?.id
                          //     ? String(previousData?.job_post?.id)
                          //     : undefined
                          // }
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Leave Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {/* {jobPostLoading ? (
                              <Loading />
                            ) : (
                              jobPostData?.map((jobPost: JobPostColumn) => ( */}
                            <SelectItem
                              value="1"
                              // key={jobPost.id}
                              // value={String(jobPost.id)}
                            >
                              Leave Type 1
                            </SelectItem>
                            <SelectItem
                              value="2"
                              // key={jobPost.id}
                              // value={String(jobPost.id)}
                            >
                              Leave Type 2
                            </SelectItem>
                            {/* ))
                            )} */}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    key={field.id}
                    control={form.control}
                    name={`details_leave_type.${index}.leave_count`}
                    render={({ field }) => (
                      <FormItem>
                        {index === 0 ? <FormLabel>Leave Count</FormLabel> : null}
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
                <span className="mt-auto mb-3" onClick={() => remove(index)}><Trash2 size={16} color="red" className="ml-2" /></span>
              </div>
            ))}
            <Button
              variant="outline"
              className="border border-dashed border-gray-700 w-full"
              type="button"
              onClick={() =>
                append({
                  leave_type: "",
                  leave_count: 0,
                  // cost_centers: [{ cost_center_id: 0, amount: 0 }],
                })
              }
            >
              <Plus size={16} /> <span className="ml-2">Add Line</span>
            </Button>

            <FormField
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
            />
          </div>

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
