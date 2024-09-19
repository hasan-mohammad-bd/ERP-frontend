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
  ChangeStatusFormValues,
  ChangeStatusFormSchema,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useGetJobApplyStatusDataQuery } from "@/store/services/hrm/api/job-apply";
import { useChangeStatusMutation } from "@/store/services/hrm/api/job-apply copy";
import { useEffect, useState } from "react";
import { CircleX } from "lucide-react";

interface UpdateStatusFormProps {
  modalClose: () => void;
  data?: JobApplyColumn[];
}

export function UpdateStatusForm({
  modalClose,
  data: jobApplyData,
}: UpdateStatusFormProps) {
  const [changeStatus, { isLoading }] = useChangeStatusMutation();
  const [formData, setFormData] = useState<JobApplyColumn[]>([]);

  useEffect(() => {
    setFormData(jobApplyData || []);
  }, [jobApplyData]);

  const handleDelete = (id: number) => {
    setFormData((prevData) => prevData.filter((item) => item?.id !== id));
  };

  const { data: jobApplyStatus, isLoading: jobApplyStatusLoading } =
    useGetJobApplyStatusDataQuery();

  const jobApplyStatusData = jobApplyStatus?.job_apply_status || [];

  const form = useForm<ChangeStatusFormValues>({
    resolver: zodResolver(ChangeStatusFormSchema),
    defaultValues: {
      status: "Call For Interview",
      ids: formData.map((data) => data.id),
    },
  });

  const watchStatus = form.watch("status");

  async function onSubmit(data: ChangeStatusFormValues) {
    const formattedData: ChangeStatusFormValues = {
      ...data,
      ids: formData.map((data) => data.id),
      interview_date: data?.interview_date?.replace("T", " ").concat(":00"),
    };
    try {
      await changeStatus(formattedData);
      toast.success("Job apply created successfully");
      modalClose();
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
        <Form {...form}>
          <div className="flex gap-3 flex-wrap max-h-40 overflow-y-auto">
            {formData.map((item, index) => (
              <div
                className="flex items-center gap-1  bg-black text-white p-2 rounded-lg whitespace-nowrap"
                key={index}
              >
                <p className="text-xs">{item.job_candidate?.email} </p>
                <span
                  className="cursor-pointer "
                  onClick={() => handleDelete(item.id)}
                >
                  <CircleX />
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3 ">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={"Call For Interview"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {jobApplyStatusLoading ? (
                        <Loading />
                      ) : (
                        jobApplyStatusData?.map(
                          (status: any, index: number) => (
                            <SelectItem key={index} value={String(status)}>
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

            {/*             <FormField
              control={form.control}
              name="ids"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Salary</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Expected Salary"
                      {...field}
                      value={Number(field.value)} // Convert the value to a number
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {watchStatus === "Call For Interview" && (
              <FormField
                control={form.control}
                name="interview_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interview Date</FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        placeholder="Enter interview date"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                Change Status
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
