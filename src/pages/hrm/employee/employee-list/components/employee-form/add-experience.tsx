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
  EmploymentStatusColumn,
  ExperienceColumn,
  ExperienceFormSchema,
  ExperienceFormValues,
  JobCandidateColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import { useForm } from "react-hook-form";

import { CardHeader, CardTitle } from "@/components/ui/card";

import { DataTable } from "@/components/ui/data-table/data-table";

import {
  useCreateExperienceMutation,
  useUpdateExperienceMutation,
} from "@/store/services/hrm/api/experience";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetEmploymentStatusesQuery } from "@/store/services/hrm/api/employment_status";
import { experienceColumns } from "../experience-columns";
import { Textarea } from "@/components/ui/textarea";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

interface AddExperienceFormProps {
  previousData?: EmployeeColumn;
  data?: ExperienceColumn;
  jobData?: JobCandidateColumn;
  modelClose?: (() => void) | undefined;
}

export function AddExperienceForm({
  previousData,
  data: experienceData,
  modelClose,
}: AddExperienceFormProps) {
  const [createExperience, { isLoading }] = useCreateExperienceMutation();
  const [updateExperience, { isLoading: updateLoading }] =
    useUpdateExperienceMutation();

  const { data: employmentStatus, isLoading: employmentStatusLoading } =
    useGetEmploymentStatusesQuery();

  const employmentStatusData = employmentStatus?.data || [];

  const form = useForm<ExperienceFormValues>({
    resolver: zodResolver(ExperienceFormSchema),
    defaultValues: {
      model_type: "App\\Models\\Employee\\Employee",
      model_id: previousData?.id,
      institution: experienceData?.institution || "",
      employment_status_id: experienceData?.employment_status?.id || 2,
      start_date: experienceData?.start_date || "",
      end_date: experienceData?.end_date || null,
      description: experienceData?.description || "",
      designation: experienceData?.designation || "",
      // sorting_index: experienceData?.sorting_index || 0,
    },
  });

  async function onSubmit(data: ExperienceFormValues) {
    try {
      if (experienceData?.id) {
        await updateExperience({
          experienceId: experienceData?.id,
          updatedExperience: data,
        });

        toast.success("Experience updated successfully");
        if (modelClose) {
          modelClose();
        }
      } else {
        await createExperience(data).unwrap();
        toast.success("Experience created successfully");
        // modalClose();
        form.reset();
      }
    } catch (error) {
      handleErrors(error as ErrorResponse);
      console.log(error);
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
                <CardTitle className="text-center">Experience </CardTitle>
              </CardHeader>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="institution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
												Institute{" "}
                          <span>
                            <span className="text-red-500">*</span>
                          </span>
                        </FormLabel>
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
                    name="employment_status_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={
                            experienceData?.employment_status?.id
                              ? String(experienceData.employment_status.id)
                              : undefined
                          }
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Employment Status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {employmentStatusLoading ? (
                              <Loading />
                            ) : (
                              employmentStatusData?.map(
                                (employment: EmploymentStatusColumn) => (
                                  <SelectItem
                                    key={employment.id}
                                    value={String(employment.id)}
                                  >
                                    {employment.name}
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
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Designation</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Designation"
                            {...field}
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
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* 									<FormField
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
                    {experienceData?.id ? "Update" : "Add"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          {!experienceData?.id && (
            <div className="w-1/2 mt-4">
              <div>
                <DataTable
                  columns={experienceColumns}
                  data={previousData?.experiences || []}
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
