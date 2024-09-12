// import { zodResolver } from "@hookform/resolvers/zod";

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
import { useForm } from "react-hook-form";
// import { CardHeader, CardTitle } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Badge } from "@/components/ui/badge";
import { EmployeeColumn } from "../validators";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddAttendancePolicyMappingFormProps {
  payload?: EmployeeColumn[];
  previousData?: any;
  // jobData?: JobCandidateColumn;
  modelClose?: () => void;
}

export function AddAttendancePolicyMappingForm({
  previousData,
  payload,
  // data: skillData,
  modelClose,
}: AddAttendancePolicyMappingFormProps) {
  // const [createSkill, { isLoading }] = useCreateSkillMutation();
  // const [updateSkill, { isLoading: updateLoading }] = useUpdateSkillMutation();

  const form = useForm<any>({
    // resolver: zodResolver(SkillFormSchema),
    defaultValues: {
      // model_type: "App\\Models\\Employee\\Employee",
      // model_id: previousData?.id,
      // name: skillData?.name || "",
      // type: skillData?.type || "",
      // start_date: skillData?.start_date || "",
      // end_date: skillData?.end_date || "",
      // description: skillData?.description || "",
      // sorting_index: skillData?.sorting_index || 0,
      /* 
      institution: experienceData?.institution || "",
      employment_status_id: experienceData?.employment_status?.id || 2,
      start_date: experienceData?.start_date || "",
      end_date: experienceData?.end_date || null,
      description: experienceData?.description || "",
      designation: experienceData?.designation || "",
      sorting_index: experienceData?.sorting_index || 0, */
    },
  });

	console.log(payload)


  async function onSubmit(data: any) {
    try {
      if (previousData) {
        // await updateSkill({
        // 	skillId: skillData?.id,
        // 	updatedSkill: data,
        // });
				console.log(data)

        toast.success("Skill updated successfully");
        if (modelClose) {
          modelClose();
        }
      } else {
        // await createSkill(data);
        toast.success("Skill created successfully");
        // modalClose();
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* {isLoading || updateLoading ? (
				<div className="h-[535px]">
					<Loading />
				</div>
			) : ( */}
      <div className="flex gap-x-4">
        <div className={`${!previousData ? "w-full" : "w-1/2"} `}>
          <Form {...form}>
            {/* <div className="w-full space-y-1 p-2 max-h-28 overflow-y-auto">
              {payload?.map((item) => (
                <Badge className="mr-1" key={item.id}>
                  {item.email}
                </Badge>
              ))}
            </div> */}

            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="grid grid-cols-1 gap-2">
                {/* <FormField
										control={form.control}
										name="company_name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Company Name</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="Enter institution"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/> */}

                <FormField
                  control={form.control}
                  name="effective_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Effective Date</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="Enter Start Date"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="job_post_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Attendance Policy</FormLabel>
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
                            <SelectValue placeholder="Select Attendance Policy" />
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
                            Attendance Policy 1
                          </SelectItem>
                          <SelectItem
                            value="2"
                            // key={jobPost.id}
                            // value={String(jobPost.id)}
                          >
                            Attendance Policy 2
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
                <Button variant="default" type="submit" className="w-full mt-4">
                  {previousData ? "Update" : "Add"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
