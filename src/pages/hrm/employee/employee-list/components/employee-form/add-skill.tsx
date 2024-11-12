import { zodResolver } from "@hookform/resolvers/zod";
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
  EmployeeColumn,
  JobCandidateColumn,
  SkillColumn,
  SkillFormSchema,
  SkillFormValues,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";
import { useForm } from "react-hook-form";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateSkillMutation,
  useUpdateSkillMutation,
} from "@/store/services/hrm/api/experience copy";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { skillColumns } from "../skill-columns";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

interface AddSkillFormProps {
  previousData?: EmployeeColumn;
  data?: SkillColumn;
  jobData?: JobCandidateColumn;
  modelClose?: (() => void) | undefined;
}

export function AddSkillForm({
  previousData,
  data: skillData,
  modelClose,
}: AddSkillFormProps) {
  const [createSkill, { isLoading }] = useCreateSkillMutation();
  const [updateSkill, { isLoading: updateLoading }] = useUpdateSkillMutation();

  const form = useForm<SkillFormValues>({
    resolver: zodResolver(SkillFormSchema),
    defaultValues: {
      model_type: "App\\Models\\Employee\\Employee",
      model_id: previousData?.id,

      name: skillData?.name || "",
      type: skillData?.type || "",
      start_date: skillData?.start_date || "",
      end_date: skillData?.end_date || undefined,
      description: skillData?.description || "",
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

  async function onSubmit(data: SkillFormValues) {
    try {
      if (skillData?.id) {
        await updateSkill({
          skillId: skillData?.id,
          updatedSkill: data,
        });

        toast.success("Skill updated successfully");
        if (modelClose) {
          modelClose();
        }
      } else {
        await createSkill(data).unwrap();
        toast.success("Skill created successfully");
        // modalClose();
        form.reset();
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="h-[535px]">
          <Loading />
        </div>
      ) : (
        <div className="flex  h-[535px] gap-x-4">
          <div className={`${!previousData ? "w-full" : "w-1/2"} `}>
            <Form {...form}>
              <CardHeader>
                <CardTitle className="text-center">Skill </CardTitle>
              </CardHeader>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skill Name</FormLabel>
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
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Proficiency Level</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex items-center space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Basic" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Basic
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Medium" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Medium
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Expert" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Expert
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
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
                    name="end_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date (optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            placeholder="Enter End Date"
                            value={field.value || undefined}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description (optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            // type="text"
                            placeholder="Enter Description"
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

{/*                   <FormField
                    control={form.control}
                    name="sorting_index"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>String</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter sorting"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>

                <div>
                  <Button
                    variant="default"
                    type="submit"
                    className="w-full mt-4"
                  >
                    {skillData?.id ? "Update" : "Add"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          {!skillData?.id && (
            <div className="w-1/2 mt-4">
              <div>
                <DataTable
                  columns={skillColumns}
                  data={previousData?.skills || []}
                  noPagination
                  noToolbar
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
