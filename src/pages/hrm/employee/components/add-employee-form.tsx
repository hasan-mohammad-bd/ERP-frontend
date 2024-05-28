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
  BloodGroupColumn,
  DepartmentColumn,
  DesignationColumn,
  EmployeeClassColumn,
  EmployeeColumn,
  EmployeeFormSchema,
  EmployeeFormValues,
  EmployeeGradeColumn,
  EmploymentStatusColumn,
  LocationColumn,
  OrganizationColumn,
  ReligionColumn,
  RoleColumn,
  ScheduleColumn,
  SectionColumn,
  WorkPlaceColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useGetReligionsQuery } from "@/store/services/hrm/api/religion";
import { useGetGendersQuery } from "@/store/services/hrm/api/gender";
import { useForm } from "react-hook-form";
// import { useGetCountriesQuery } from "@/store/services/hrm/api/country";
import { AddAddressForm } from "./add-address";
import { AddEducationForm } from "./add-education";
import { AddExperienceForm } from "./add-experience";
import {
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
} from "@/store/services/hrm/api/employee-list";

import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import { useGetOrganizationForDropDownQuery } from "@/store/services/hrm/api/organization-dropdown";
import { useGetWorkplacesQuery } from "@/store/services/hrm/api/workplace";
import { useGetDepartmentsQuery } from "@/store/services/hrm/api/department";
import { useGetDesignationQuery } from "@/store/services/hrm/api/designation";
import { useGetSectionsQuery } from "@/store/services/hrm/api/section";
import { useGetSchedulesQuery } from "@/store/services/hrm/api/schedule";
import { useGetEmployeeClassesQuery } from "@/store/services/hrm/api/employee-class";
import { useGetEmployeeGradesQuery } from "@/store/services/hrm/api/employee-grade";
import { useGetEmploymentStatusesQuery } from "@/store/services/hrm/api/employment_status";
import { useGetBloodGroupsQuery } from "@/store/services/hrm/api/blood-group";
import { useGetRolesQuery } from "@/store/services/erp-main/api/role";
import { AddAdditionalInfoForm } from "./add-additional-data";
import { AddSkillForm } from "./add-skill";
import { AddNomineeForm } from "./add-nominee";

interface AddEmployeeFormProps {
  modalClose: () => void;
  data?: EmployeeColumn;
}

export function AddEmployeeForm({
  modalClose,
  data: previousData,
}: AddEmployeeFormProps) {
  const [createEmployee, { isLoading }] = useCreateEmployeeMutation();
  const [updateEmployee, { isLoading: updateLoading }] =
    useUpdateEmployeeMutation();

  const { data: religions, isLoading: religionLoading } =
    useGetReligionsQuery();
  const { data: organizations, isLoading: organizationLoading } =
    useGetOrganizationForDropDownQuery();
  const { data: workplaces, isLoading: workplaceLoading } =
    useGetWorkplacesQuery();
  const { data: departments, isLoading: departmentLoading } =
    useGetDepartmentsQuery();
  const { data: designations, isLoading: designationLoading } =
    useGetDesignationQuery();
  const { data: schedules, isLoading: scheduleLoading } =
    useGetSchedulesQuery();

  const { data: sections, isLoading: sectionLoading } = useGetSectionsQuery();

  const { data: genders, isLoading: genderLoading } = useGetGendersQuery();
  const { data: locations, isLoading: locationLoading } =
    useGetLocationsQuery();

  const { data: employeeClasses, isLoading: employeeClassLoading } =
    useGetEmployeeClassesQuery();

  const { data: employeeGrades, isLoading: employeeGradeLoading } =
    useGetEmployeeGradesQuery();

  const { data: employmentStatus, isLoading: employmentStatusLoading } =
    useGetEmploymentStatusesQuery();
  const { data: bloodGroups, isLoading: bloodGroupLoading } =
    useGetBloodGroupsQuery();
  const { data: roles, isLoading: roleLoading } = useGetRolesQuery();

  const locationData = locations?.data || [];
  const religionData = religions?.data || [];
  const genderData = genders?.data || [];
  const organizationData = organizations?.data || [];
  const workplaceData = workplaces?.data || [];
  const departmentData = departments?.data || [];
  const designationData = designations?.data || [];
  const sectionData = sections?.data || [];
  const scheduleData = schedules?.data || [];
  const employeeClassData = employeeClasses?.data || [];
  const employeeGradeData = employeeGrades?.data || [];
  const employmentStatusData = employmentStatus?.data || [];
  const bloodGroupData = bloodGroups?.data || [];
  const roleData = roles?.data || [];
  // const countryData = countries?.data || [];

  const form = useForm<EmployeeFormValues>({

    resolver: zodResolver(EmployeeFormSchema),
    defaultValues: {
      employee_unique_id: previousData?.employee_unique_id || "",
      first_name: previousData?.first_name || "",
      last_name: previousData?.last_name || "",
      phone: previousData?.phone || "",
      corporate_phone: previousData?.corporate_phone || "",
      email: previousData?.email || "",
      joining_date: previousData?.joining_date || "",
      status: previousData?.status || "Active",
      location_id: previousData?.location_id || 1,
      organization_id: previousData?.organization_id || 1,
      work_place_id: previousData?.work_place_id || 1,
      department_id: previousData?.department_id || 1,
      section_id: previousData?.section_id || 1,
      designation_id: previousData?.designation_id || 1,
      schedule_id: previousData?.schedule_id || 1,
      employee_class_id: previousData?.employee_class_id || 1,
      employee_grade_id: previousData?.employee_grade_id || 1,
      employment_status_id: previousData?.employment_status_id || 1,
      // sorting_index: previousData?.sorting_index || 0,
      password: null,
      gender_id: previousData?.gender_id || 1,
      religion_id: previousData?.religion_id || 1,
      blood_group_id: previousData?.blood_group_id || 1,
      // fathers_name: previousData?.fathers_name || "",
      // mothers_name: previousData?.mothers_name || "",
      role_id: previousData?.role_id || 1,
    },
  });


  async function onSubmit(data: EmployeeFormValues) {
    try {
      if (previousData) {
        await updateEmployee({
          employeeId: previousData.id,
          updatedEmployee: data,
        });

        toast.success("Job Post updated successfully");
        modalClose();
      } else {
        await createEmployee(data);
        toast.success("Job Post created successfully");
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
        <div>
          <Tabs defaultValue="basic-info" className="">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
              <TabsTrigger disabled={!previousData} value="additional-info">
                Additional Info
              </TabsTrigger>
              <TabsTrigger disabled={!previousData} value="address">
                Address
              </TabsTrigger>
              <TabsTrigger disabled={!previousData} value="education">
                Education
              </TabsTrigger>
              <TabsTrigger disabled={!previousData} value="experience">
                Experience
              </TabsTrigger>
              <TabsTrigger disabled={!previousData} value="skill">
                Skill
              </TabsTrigger>
              <TabsTrigger disabled={!previousData} value="nominee">
                Nominee
              </TabsTrigger>
            </TabsList>

            {/* Basic Info */}
            <TabsContent value="basic-info">
              <Card>
                <CardHeader>
                  <CardTitle>Basic information</CardTitle>
                  <CardDescription>
                    Enter the basic information about the employee.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 ">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">
                      <div className="space-y-2 grid grid-cols-5 gap-3">
                        <FormField
                          control={form.control}
                          name="employee_unique_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Employee Unique Id</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Employee Unique Id"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
{/*                         <FormField
                          control={form.control}
                          name="card_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card Id</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Card Id"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        /> */}
{/*                         <FormField
                          control={form.control}
                          name="machine_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Machine Id</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Machine Id"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        /> */}

                        <FormField
                          control={form.control}
                          name="first_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter First Name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="last_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name (optional)</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Last Name"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Phone"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="corporate_phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Corporate Phone (optional)</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Corporate Phone"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Enter Email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="joining_date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Joining Date</FormLabel>
                              <FormControl>
                                <Input
                                  type="date"
                                  placeholder="Enter joining date"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {/*                         <FormField
                          control={form.control}
                          name="is_head_of_dept"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                              <div className="space-y-0.5">
                                <FormLabel>Head Of Department</FormLabel>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value === 1}
                                  onCheckedChange={(checked: boolean) =>
                                    field.onChange(checked ? 1 : 0)
                                  }
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        /> */}

{/*                         <FormField
                          control={form.control}
                          name="nid_number"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>NID Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter NID Number"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        /> */}
                      {
                        !previousData &&
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password (optional)</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Enter Password"
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      }
                        <FormField
                          control={form.control}
                          name="status"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Status</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={previousData?.status || "Active"}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value={"Active"}>
                                    Active
                                  </SelectItem>
                                  <SelectItem value={"Inactive"}>
                                    Inactive
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="location_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.location?.id
                                    ? String(previousData?.location.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Location" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {locationLoading ? (
                                    <Loading />
                                  ) : (
                                    locationData?.map(
                                      (location: LocationColumn) => (
                                        <SelectItem
                                          key={location.id}
                                          value={String(location.id)}
                                        >
                                          {location.name}
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
                              <FormLabel>Organization name</FormLabel>
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
                                    <SelectValue placeholder="Select Organization" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {organizationLoading ? (
                                    <Loading />
                                  ) : (
                                    organizationData?.map(
                                      (organization: OrganizationColumn) => (
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
                          name="work_place_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Work Place</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.work_place?.id
                                    ? String(previousData?.work_place?.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Work Place" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {workplaceLoading ? (
                                    <Loading />
                                  ) : (
                                    workplaceData?.map(
                                      (workplace: WorkPlaceColumn) => (
                                        <SelectItem
                                          key={workplace.id}
                                          value={String(workplace.id)}
                                        >
                                          {workplace.name}
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
                          name="department_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Department name</FormLabel>
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
                                    <SelectValue placeholder="Select Department" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {departmentLoading ? (
                                    <Loading />
                                  ) : (
                                    departmentData?.map(
                                      (department: DepartmentColumn) => (
                                        <SelectItem
                                          key={department.id}
                                          value={String(department.id)}
                                        >
                                          {department.name}
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
                          name="designation_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Designation Name</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.designation?.id
                                    ? String(previousData?.designation?.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Designation" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {designationLoading ? (
                                    <Loading />
                                  ) : (
                                    designationData?.map(
                                      (designation: DesignationColumn) => (
                                        <SelectItem
                                          key={designation.id}
                                          value={String(designation.id)}
                                        >
                                          {designation.name}
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
                          name="section_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Section</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.section?.id
                                    ? String(previousData?.section?.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Section" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {sectionLoading ? (
                                    <Loading />
                                  ) : (
                                    sectionData?.map(
                                      (section: SectionColumn) => (
                                        <SelectItem
                                          key={section.id}
                                          value={String(section.id)}
                                        >
                                          {section.name}
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
                          name="schedule_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Schedule</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.schedule?.id
                                    ? String(previousData?.schedule?.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Schedule" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {scheduleLoading ? (
                                    <Loading />
                                  ) : (
                                    scheduleData?.map(
                                      (schedule: ScheduleColumn) => (
                                        <SelectItem
                                          key={schedule.id}
                                          value={String(schedule.id)}
                                        >
                                          {schedule.name}
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
                          name="employee_class_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Employee Class</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.employee_class?.id
                                    ? String(previousData?.employee_class?.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Employee Class" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {employeeClassLoading ? (
                                    <Loading />
                                  ) : (
                                    employeeClassData?.map(
                                      (employeeClass: EmployeeClassColumn) => (
                                        <SelectItem
                                          key={employeeClass.id}
                                          value={String(employeeClass.id)}
                                        >
                                          {employeeClass.name}
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
                          name="employee_grade_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Employee Grade</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.employee_grade?.id
                                    ? String(previousData?.employee_grade?.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Employee Class" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {employeeGradeLoading ? (
                                    <Loading />
                                  ) : (
                                    employeeGradeData?.map(
                                      (employeeGrade: EmployeeGradeColumn) => (
                                        <SelectItem
                                          key={employeeGrade.id}
                                          value={String(employeeGrade.id)}
                                        >
                                          {employeeGrade.name}
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
                          name="employment_status_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Employment Status</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.employment_status?.id
                                    ? String(previousData?.employment_status.id)
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
                          name="blood_group_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Blood Group</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.blood_group?.id
                                    ? String(previousData?.blood_group.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Blood Group" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {bloodGroupLoading ? (
                                    <Loading />
                                  ) : (
                                    bloodGroupData?.map(
                                      (bloodGroup: BloodGroupColumn) => (
                                        <SelectItem
                                          key={bloodGroup.id}
                                          value={String(bloodGroup.id)}
                                        >
                                          {bloodGroup.name}
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

                        {/*                         <FormField
                          control={form.control}
                          name="birth_date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Birth Date</FormLabel>
                              <FormControl>
                                <Input
                                  type="date"
                                  placeholder="Enter Birth Date"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        /> */}

                        {/*                       <FormField
                        control={form.control}
                        name="expected_salary"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expected Salary</FormLabel>
                            <FormControl>
                              <Input
                                type="Number"
                                placeholder="Enter Expected Salary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      /> */}
                        <FormField
                          control={form.control}
                          name="religion_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Religion</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.religion?.id
                                    ? String(previousData.religion.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Religion" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {religionLoading ? (
                                    <Loading />
                                  ) : (
                                    religionData?.map(
                                      (religion: DepartmentColumn) => (
                                        <SelectItem
                                          key={religion.id}
                                          value={String(religion.id)}
                                        >
                                          {religion.name}
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
                          name="gender_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Gender</FormLabel>

                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.gender?.id
                                    ? String(previousData.gender.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Gender" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {genderLoading ? (
                                    <Loading />
                                  ) : (
                                    genderData?.map(
                                      (gender: ReligionColumn) => (
                                        <SelectItem
                                          key={gender.id}
                                          value={String(gender.id)}
                                        >
                                          {gender.name}
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
                          name="role_id"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Role</FormLabel>

                              <Select
                                onValueChange={field.onChange}
                                defaultValue={
                                  previousData?.role?.id
                                    ? String(previousData.role.id)
                                    : undefined
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Role" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {roleLoading ? (
                                    <Loading />
                                  ) : (
                                    roleData?.map((role: RoleColumn) => (
                                      <SelectItem
                                        key={role.id}
                                        value={String(role.id)}
                                      >
                                        {role.name}
                                      </SelectItem>
                                    ))
                                  )}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
                        <Button
                          variant="default"
                          type="submit"
                          className="w-full mt-4"
                        >
                          {previousData ? "Update" : "Add"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
                <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
              </Card>
            </TabsContent>

            {/* additional info */}
            <TabsContent value="additional-info">
              <Card>
                <CardContent className="space-y-2">
                  <AddAdditionalInfoForm previousData={previousData} />
                </CardContent>
              </Card>
            </TabsContent>

            {/* address */}

            <TabsContent value="address">
              <Card>
                <CardContent className="space-y-2">
                  <AddAddressForm previousData={previousData} />
                </CardContent>
              </Card>
            </TabsContent>

            {/* education */}

            <TabsContent value="education">
              <Card>
                <CardContent className="space-y-2">
                  <AddEducationForm previousData={previousData} />
                </CardContent>
              </Card>
            </TabsContent>

            {/* experience */}

            <TabsContent value="experience">
              <Card>
                <CardContent className="space-y-2">
                  <AddExperienceForm previousData={previousData} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="skill">
              <Card>
                <CardContent className="space-y-2">
                  <AddSkillForm previousData={previousData} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="nominee">
              <Card>
                <CardContent className="space-y-2">
                  <AddNomineeForm previousData={previousData} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </>
  );
}
