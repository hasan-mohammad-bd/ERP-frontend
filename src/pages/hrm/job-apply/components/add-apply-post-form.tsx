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
  JobApplyColumn,
  JobApplyFormValues,
  JobPostColumn,
  JobCandidateColumn,
  JobApplyFormSchema,

} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  useCreateJobApplyMutation,
  useGetJobApplyStatusDataQuery,
  useUpdateJobApplyMutation,
} from "@/store/services/hrm/api/job-apply";
import { useGetJobPostsQuery } from "@/store/services/hrm/api/job-post";
import { useGetJobCandidatesQuery } from "@/store/services/hrm/api/job-candidate";

interface AddJobApplyFormProps {
  modalClose: () => void;
  data?: JobApplyColumn;
}

export function AddJobApplyForm({
  modalClose,
  data: previousData,
}: AddJobApplyFormProps) {
  const [createJobApply, { isLoading }] = useCreateJobApplyMutation();
  const [updateJobApply, { isLoading: updateLoading }] =
    useUpdateJobApplyMutation();


  const { data: jobPosts, isLoading: jobPostLoading } = useGetJobPostsQuery();
  const { data: jobCandidates, isLoading: jobCandidateLoading } =
    useGetJobCandidatesQuery();
  const { data: jobApplyStatus, isLoading: jobApplyStatusLoading } =
  useGetJobApplyStatusDataQuery();

  const jobPostData = jobPosts?.data || [];
  const jobCandidatesData = jobCandidates?.data || [];
  const jobApplyStatusData = jobApplyStatus?.job_apply_status || [];



  const form = useForm<JobApplyFormValues>({
    resolver: zodResolver(JobApplyFormSchema),
    defaultValues: {
      job_post_id: previousData?.job_post?.id || 1,
      job_candidate_id: previousData?.job_candidate?.id || 1,
      status: previousData?.status || "Pending",
      expected_salary: previousData?.expected_salary || 0,

    },
  });

  async function onSubmit(data: JobApplyFormValues) {

    try {
      if (previousData) {
        await updateJobApply({
          jobApplyId: previousData.id,
          updatedJobApply: data,
        });
        toast.success("Job apply updated successfully");
        modalClose();
      } else {
        await createJobApply(data);
        toast.success("Job apply created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3 ">
            <FormField
              control={form.control}
              name="job_post_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Post</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.job_post?.id
                        ? String(previousData?.job_post?.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {jobPostLoading ? (
                        <Loading />
                      ) : (
                        jobPostData?.map((jobPost: JobPostColumn) => (
                          <SelectItem
                            key={jobPost.id}
                            value={String(jobPost.id)}
                          >
                            {jobPost.title}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="job_candidate_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Candidate</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.job_candidate?.id
                        ? String(previousData?.job_candidate?.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Job Candidate" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {jobCandidateLoading ? (
                        <Loading />
                      ) : (
                        jobCandidatesData?.map(
                          (jobCandidate: JobCandidateColumn) => (
                            <SelectItem
                              key={jobCandidate.id}
                              value={String(jobCandidate.id)}
                            >
                              {jobCandidate.email}
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
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.status
                        ? String(previousData?.status)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Designation" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {jobApplyStatusLoading ? (
                        <Loading />
                      ) : (
                        jobApplyStatusData?.map(
                          (status: any, index: number) => (
                            <SelectItem
                              key={index}
                              value={String(status)}
                            >
                              {status}
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

            <FormField
              control={form.control}
              name="expected_salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Salary</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Expected Salary"
                      {...field}
                    />
                  </FormControl>
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
