// import { zodResolver } from "@hookform/resolvers/zod";
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
// import { Input } from "@/components/ui/input";
import { toast } from "sonner";



// import { Loading } from "@/components/common/loading";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";


// import { useGetJobPostsQuery } from "@/store/services/hrm/api/job-post";
// import { useGetJobCandidatesQuery } from "@/store/services/hrm/api/job-candidate";
import {
  // attendancePolicyFormSchema,
  AttendancePolicyFormValues,
  AttendancePolicyRow,
} from "@/lib/validators/hrm/attendance.vatidator";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  // TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
interface AddJobApplyFormProps {
  modalClose: () => void;
  data?: AttendancePolicyRow;
}

export function AttendancePolicyForm({
  modalClose,
  data: previousData,
}: AddJobApplyFormProps) {
  // const [createJobApply, { isLoading }] = useCreateJobApplyMutation();
  // const [updateJobApply, { isLoading: updateLoading }] =
  //   useUpdateJobApplyMutation();

  // const { data: jobPosts, isLoading: jobPostLoading } = useGetJobPostsQuery("page=1&per_page=1000");
  // const { data: jobCandidates, isLoading: jobCandidateLoading } =
  //   useGetJobCandidatesQuery("page=1&per_page=1000");
  // const { data: jobApplyStatus, isLoading: jobApplyStatusLoading } =
  // useGetJobApplyStatusDataQuery();

  // const jobPostData = jobPosts?.data || [];
  // const jobCandidatesData = jobCandidates?.data || [];
  // const jobApplyStatusData = jobApplyStatus?.job_apply_status || [];

  const form = useForm<AttendancePolicyFormValues>({
    // resolver: zodResolver(attendancePolicyFormSchema),
    defaultValues: {
      // job_post_id: previousData?.job_post?.id || 1,
      // job_candidate_id: previousData?.job_candidate?.id || 1,
      // status: previousData?.status || "Pending",
      // expected_salary: previousData?.expected_salary || 0,
    },
  });

  async function onSubmit(data: AttendancePolicyFormValues) {
    try {
      if (previousData) {
/*         await updateJobApply({
          jobApplyId: previousData.id,
          updatedJobApply: data,
        }); */
        toast.success("Job apply updated successfully");
        modalClose();
        console.log(data)
      } else {
        // await createJobApply(data);
        toast.success("Job apply created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* {isLoading || updateLoading ? (
        <div className="">
          <Loading />
        </div>
      ) : ( */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3 ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <FormField
                control={form.control}
                name="policy_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Policy Name</FormLabel>
                    <FormControl>
                      <Input
                        // type="number"
                        placeholder="Enter Policy Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="in_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>In Time</FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        // type="number"
                        placeholder="Enter Expected Salary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="delay_buffer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Delay Buffer time</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Enter Delay Buffer"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ex_delay_buffer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Extra Delay Buffer</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        // type="number"
                        placeholder="Enter Expected Salary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="break_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Break Time</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        // type="number"
                        placeholder="Enter Break Time"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="effect_from"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Effect From</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        // type="number"
                        placeholder="Enter Effect From"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="working_hours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Working Hours</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        // type="number"
                        placeholder="Enter Working Hours"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FormField
                control={form.control}
                name="ignore_from_att_report"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Ignore from attendance report</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
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
                name="discard_attendance_on_weekend"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Discard attendance on weekend</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
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
                name="exclude_from_att_report"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Exclude from attendance report</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value === true}
                        onCheckedChange={(checked: boolean) =>
                          field.onChange(checked ? true : false)
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell className="p-1">Day</TableCell>
                    <TableCell className="p-1">In Time</TableCell>
                    <TableCell className="p-1">Working Hours</TableCell>
                    <TableCell className="p-1">Last In Time</TableCell>
                    <TableCell className="p-1">Delay Buffer Time</TableCell>
                    <TableCell className="p-1">Extreme Delay Buffer Time</TableCell>
                    <TableCell className="p-1">Break Time</TableCell>
                  </TableRow>
                </TableHeader>

                <TableBody className="divide-y">
                  {/* here will be the 7 days table with all the fields */}
                  {DAYS.map((day, index) => (
                    <TableRow className="" key={index}>
                      <TableCell className="p-1">{day}</TableCell>
                      <TableCell className="p-1" >
                        <Input
                        
                    
                          type="text"
                          placeholder="Enter In Time"
                          className="p-1 text-xs"
                          // {...form.control.register(`in_time.${day}`)}
                        />
                      </TableCell>
                      <TableCell className="p-1">
                        <Input
                          type="text"
                          placeholder="Enter Working Hours"
                          // {...form.control.register(`working_hours.${day}`)}
                          className="p-1 text-xs"
                        />
                      </TableCell>
                      <TableCell className="p-1">
                        <Input
                          type="text"
                          placeholder="Enter Last In Time"
                          className="p-1 text-xs"
                          // {...form.control.register(`last_in_time.${day}`)} // Added register for last_in_time
                        />
                      </TableCell>
                      <TableCell className="p-1">
                        <Input
                          type="text"
                          placeholder="Enter Delay Buffer Time"
                          className="p-1 text-xs"
                          // {...form.control.register(`delay_buffer_time.${day}`)} // Added register for delay_buffer_time
                        />
                      </TableCell>
                      <TableCell className="p-1">
                        <Input
                          type="text"
                          className="p-1 text-xs"
                          placeholder="Enter Extreme Delay Buffer Time"
                          // {...form.control.register(
                          //   `extreme_delay_buffer_time.${day}`
                          // )} // Added register for extreme_delay_buffer_time
                        />
                      </TableCell>
                      <TableCell className="p-1">
                        <Input
                          type="text"
                          placeholder="Enter Break Time"
                          className="p-1 text-xs"
                          // {...form.control.register(`break_time.${day}`)} // Added register for break_time
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      {/* )} */}
    </>
  );
}
