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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";




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
              name="employee_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee</FormLabel>
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
                        <SelectValue placeholder="Select Employee" />
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
                        Employee_1
                      </SelectItem>
                      <SelectItem
                        value="2"
                        // key={jobPost.id}
                        // value={String(jobPost.id)}
                      >
                        Employee_2
                      </SelectItem>
                      {/* ))
                          )} */}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="employee_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leave Type</FormLabel>
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
                        Leave type_1
                      </SelectItem>
                      <SelectItem
                        value="2"
                        // key={jobPost.id}
                        // value={String(jobPost.id)}
                      >
                        Leave type_2
                      </SelectItem>
                      {/* ))
                          )} */}
                    </SelectContent>
                  </Select>
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
                    <Input type="date" className="" {...field} />
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
                    <Input type="date" className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purpose</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      placeholder="Enter purpose"
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
