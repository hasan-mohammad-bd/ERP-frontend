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
import { toast } from "sonner";
import {
  DepartmentColumn,
  JobPostColumn,
  JobPostFromValues,
  JobPostFormSchema,
  OrganizationDropdownColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useGetDepartmentsQuery } from "@/store/services/hrm/api/department";
import {
  useCreateJobPostMutation,
  useUpdateJobPostMutation,
} from "@/store/services/hrm/api/job-post";
import { useGetOrganizationForDropDownQuery } from "@/store/services/hrm/api/organization-dropdown";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";

interface AddJobPostFormProps {
  modalClose: () => void;
  data?: JobPostColumn;
}

export default function SalarySheetFilters({
  modalClose,
  data: previousData,
}: AddJobPostFormProps) {
  const [createJobPost] = useCreateJobPostMutation();
  const [updateJobPost] = useUpdateJobPostMutation();
  const [openFromDate, setOpenFromDate] = useState(false);
  const [fromDate, setFromDate] = useState<Date>(new Date());

  const handleFromDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setFromDate(date);
    setOpenFromDate(false); // Close popover after selecting a date
  };

  const { data: organizations, isLoading: organizationLoading } =
    useGetOrganizationForDropDownQuery();
  const { data: departments, isLoading: departmentLoading } =
    useGetDepartmentsQuery("page=1&per_page=1000");

  const departmentData = departments?.data || [];
  const organizationData = organizations?.data || [];

  const form = useForm<JobPostFromValues>({
    resolver: zodResolver(JobPostFormSchema),
    defaultValues: {
      title: previousData?.title || "",
      sorting_index: previousData?.sorting_index || 0,
      date: previousData?.date || "",
      deadline: previousData?.deadline || "",
      vacancy_number: previousData?.vacancy_number || 0,
      organization_id: previousData?.organization?.id || 1,
      department_id: previousData?.department?.id || 1,
      designation_id: previousData?.designation?.id || 1,
      location_id: previousData?.location?.id || 1,
      vacancy_requisition_id: previousData?.vacancy_requisition?.id || 1,
      employment_status_id: previousData?.employment_status?.id || 1,
      work_place_id: previousData?.work_place?.id || 1,
      min_age: previousData?.min_age || 18,
      max_age: previousData?.max_age || 60,
      responsibilities: previousData?.responsibilities || "",
      education: previousData?.education || "",
      experience: previousData?.experience || "",
      skills: previousData?.skills || "",
      show_salary: previousData?.show_salary || 0,
      min_salary: previousData?.min_salary || 0,
      max_salary: previousData?.max_salary || 0,
      status: previousData?.status || "active",
    },
  });

  async function onSubmit(data: JobPostFromValues) {
    try {
      if (previousData) {
        await updateJobPost({
          jobPostId: previousData.id,
          updatedJobPost: data,
        });
        toast.success("Job Post updated successfully");
        modalClose();
      } else {
        await createJobPost(data);
        toast.success("Job Post created successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className="p-6 my-8 max-w-3xl mx-auto w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3 ">
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="fromDate" className="text-sm font-medium">
                Select Date
              </label>
              <Popover open={openFromDate} onOpenChange={setOpenFromDate}>
                <PopoverTrigger asChild className="h-10">
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${
                      !fromDate && "text-muted-foreground"
                    }`}
                  >
                    {fromDate ? format(fromDate, "PP") : "Pick a date"}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={fromDate}
                    onSelect={handleFromDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <FormField
              control={form.control}
              name="department_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Class</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.department?.id
                        ? String(previousData.department.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Class" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {departmentLoading ? (
                        <Loading />
                      ) : (
                        departmentData?.map((department: DepartmentColumn) => (
                          <SelectItem
                            key={department.id}
                            value={String(department.id)}
                          >
                            {department.name}
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
              name="organization_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Department</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.organization?.id
                        ? String(previousData.organization.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organizationLoading ? (
                        <Loading />
                      ) : (
                        organizationData?.map(
                          (organization: OrganizationDropdownColumn) => (
                            <SelectItem
                              key={organization.id}
                              value={String(organization.id)}
                            >
                              {organization.name}
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
              name="organization_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Employee</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.organization?.id
                        ? String(previousData.organization.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Employee" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organizationLoading ? (
                        <Loading />
                      ) : (
                        organizationData?.map(
                          (organization: OrganizationDropdownColumn) => (
                            <SelectItem
                              key={organization.id}
                              value={String(organization.id)}
                            >
                              {organization.name}
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
              name="organization_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Report Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.organization?.id
                        ? String(previousData.organization.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Bill Horizontal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organizationLoading ? (
                        <Loading />
                      ) : (
                        organizationData?.map(
                          (organization: OrganizationDropdownColumn) => (
                            <SelectItem
                              key={organization.id}
                              value={String(organization.id)}
                            >
                              {organization.name}
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
              name="organization_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Earn Deduction</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.organization?.id
                        ? String(previousData.organization.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Any" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organizationLoading ? (
                        <Loading />
                      ) : (
                        organizationData?.map(
                          (organization: OrganizationDropdownColumn) => (
                            <SelectItem
                              key={organization.id}
                              value={String(organization.id)}
                            >
                              {organization.name}
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
          </div>
        </form>
      </Form>
      <div className="flex justify-center gap-4 mt-10">
        <Button variant="default">View Report</Button>
        <Button variant="outline">Print</Button>
      </div>
    </Card>
  );
}
