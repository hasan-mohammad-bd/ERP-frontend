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
  // EmployeeColumn,
  EmployeeFormSchema,
  EmployeeFormValues,
  EmployeeGradeColumn,
  EmployeeUpdateSchema,
  EmploymentStatusColumn,
  LocationColumn,
  OrganizationDropdownColumn,
  ReligionColumn,
  RoleColumn,
  ScheduleColumn,
  SectionColumn,
  WorkPlaceColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

import { useGetReligionsQuery } from "@/store/services/hrm/api/religion";
import { useGetGendersQuery } from "@/store/services/hrm/api/gender";
import { useForm } from "react-hook-form";
// import { useGetCountriesQuery } from "@/store/services/hrm/api/country";
import { AddressForm } from "./address-form";
import { AddEducationForm } from "./add-education";
import { AddExperienceForm } from "./add-experience";
import {
  useCreateEmployeeMutation,
  useGetEmployeeByIdQuery,
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
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { useGetLeaveGroupsQuery } from "@/store/services/hrm/api/leave-group";
import { LeaveGroupRow } from "@/lib/validators/hrm/leave";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {  Eye } from "lucide-react";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { GenderColumn } from "../validators";
import { ScrollArea } from "@/components/ui/scroll-area";
import { serialize } from "object-to-formdata";
import { Heading } from "@/components/common/heading";
import { DateTimePicker } from "@/components/ui/dayTimePicker";

// interface EmployeeFormProps {
// 	modalClose?: () => void;

// }

export default function EmployeeForm() {
  const [isPasswordType, setIsPasswordType] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const { data: dataById } = useGetEmployeeByIdQuery(`${params.id}`);
  const previousData = dataById?.data;
  console.log(previousData);
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
    useGetDepartmentsQuery("page=1&per_page=1000");
  const { data: designations, isLoading: designationLoading } =
    useGetDesignationQuery("page=1&per_page=1000");
  const { data: schedules, isLoading: scheduleLoading } = useGetSchedulesQuery(
    "page=1&per_page=1000"
  );
  const { data: sections, isLoading: sectionLoading } = useGetSectionsQuery(
    "page=1&per_page=1000"
  );
  const { data: genders, isLoading: genderLoading } = useGetGendersQuery();
  const { data: locations, isLoading: locationLoading } = useGetLocationsQuery(
    "page=1&per_page=1000"
  );

  const { data: employeeClasses, isLoading: employeeClassLoading } =
    useGetEmployeeClassesQuery("page=1&per_page=1000");

  const { data: employeeGrades, isLoading: employeeGradeLoading } =
    useGetEmployeeGradesQuery("page=1&per_page=1000");

  const { data: employmentStatus, isLoading: employmentStatusLoading } =
    useGetEmploymentStatusesQuery();
  const { data: bloodGroups, isLoading: bloodGroupLoading } =
    useGetBloodGroupsQuery();
  const { data: roles, isLoading: roleLoading } = useGetRolesQuery();

  console.log(roles);

  const { data: LeaveGroup, isLoading: LeaveGroupLoading } =
    useGetLeaveGroupsQuery(`per_page=10&page=1`);

  const leaveGroupData = LeaveGroup?.data || [];
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
    resolver: zodResolver(previousData ? EmployeeUpdateSchema : EmployeeFormSchema ),
    defaultValues: {},
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        ...previousData,
        first_name: previousData?.first_name || "",
        last_name: previousData?.last_name || "",
        employee_unique_id: previousData?.employee_unique_id || "",
        phone: previousData?.phone || "",
        email: previousData?.email || "",
        joining_date: previousData?.joining_date || "",

        corporate_phone: previousData?.corporate_phone || "",
        // reporting_to_id: previousData.reporting_to_id?.toString(),
        location_id: previousData?.location?.id.toString(),
        organization_id: previousData?.organization?.id.toString(),
        work_place_id: previousData?.work_place?.id.toString(),
        department_id: previousData?.department?.id.toString(),
        section_id: previousData?.section?.id.toString(),
        designation_id: previousData?.designation?.id.toString(),
        schedule_id: previousData?.schedule?.id.toString(),
        employee_class_id: previousData?.employee_class?.id.toString(),
        employee_grade_id: previousData?.employee_grade?.id.toString(),
        employment_status_id: previousData?.employment_status?.id.toString(),
        gender_id: previousData?.gender?.id.toString(),
        religion_id: previousData?.religion?.id.toString(),
        blood_group_id: previousData?.blood_group?.id.toString(),
        role_id: previousData?.user?.role?.id.toString(),
        leave_group_id: previousData?.leave_group?.id?.toString(),
        card_id: previousData?.card_id || null,
        machine_id: previousData?.machine_id || null,
        is_head_of_dept: previousData?.is_head_of_dept || 0,
        // reporting_to_id: previousData?.reporting_to_id || null,
        // sorting_index: previousData?.sorting_index || 0,
        nid_number: previousData?.nid_number || null,
        fathers_name: previousData?.fathers_name || null,
        mothers_name: previousData?.mothers_name || null,
        payment_type: previousData?.payment_type || "Cash",
        account_number: previousData?.account_number || null,
        bank_name: previousData?.bank_name || null,
        bank_branch: previousData?.bank_branch || null,
        marital_status: previousData?.marital_status || "Married",
        birth_date: previousData?.birth_date || null,
        tin_number: previousData?.tin_number || null,
        //if amarsolution.xyz is not included in proviousData.image then it will be null
        // image: previousData?.image?.includes("amarsolution.xyz") ? previousData?.image : null
        image:
          typeof previousData?.image === "string" ? null : previousData?.image,
      });
    }
  }, [previousData, form]);

  async function onSubmit(data: EmployeeFormValues) {
    console.log(data);
    try {
      const formData = serialize(
        {
          ...data,
          _method: "PUT",
          // image: uploadedFile,
        },
        { indices: true }
      );
      if (previousData) {
        await updateEmployee({
          employeeId: previousData.id,
          updatedEmployee: formData,
        }).unwrap();

        toast.success("Employee updated successfully");
        // modalClose();
        // navigate(`/hrm/employees-list`);
      } else {
        await createEmployee(data).unwrap();
        toast.success("Employee created successfully");
        // modalClose();
        navigate(`/hrm/employees-list`);
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }

  console.log(form.formState.errors);

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="">
          <Loading />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-3">
            <Heading
              title={`Employee ${previousData ? "Edit" : "Add"}`}
              description="Manage job candidates for you business"
            />
            <Button onClick={() => navigate("/hrm/employees-list")} size={"sm"}>
              Employee List
            </Button>
          </div>

          <div className="2xl:w-4/6 w-full mx-auto">
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
                  <CardContent className="space-y-2 pt-3">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="">
                        <ScrollArea className=" h-[75vh] rounded-md border p-4">
                          <div className="w-1/4 mb-4 mr-3">
                            <FormField
                              control={form.control}
                              name="employee_unique_id"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Employee Unique Id</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      placeholder="Employee Unique Id"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4 w-1/2 mb-4">
                            <FormField
                              control={form.control}
                              name="first_name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      placeholder="First Name"
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
                                      placeholder="Last Name (optional)"
                                      {...field}
                                      value={field.value || ""}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4 w-1/2 mb-4">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      placeholder=" Phone"
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
                                  <FormLabel>
                                    Corporate Phone (optional)
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      placeholder="Corporate Phone (optional)"
                                      {...field}
                                      value={field.value || ""}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className=" mb-4 w-1/2">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="email"
                                      placeholder=" Email"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          {/* <FormField
                          control={form.control}
                          name="joining_date"
                          render={({ field }) => (
                            <FormItem>
                         
                              <FormControl>
                                <Input
                                  type="date"
                                  placeholder="Joining Date"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        /> */}
                          <div className="w-1/2 mb-4 flex items-baseline gap-4 ">
                            <FormField
                              control={form.control}
                              name="joining_date"
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <FormLabel className="mb-1">Joining Date</FormLabel>
                                  <FormControl className="">
                                    <DateTimePicker
                                      {...field}
                                      displayFormat={{ hour24: "yyyy/MM/dd" }}
                                      value={
                                        field.value
                                          ? new Date(field.value)
                                          : undefined}
                                      // value={field.value}
                                      onChange={(date) =>
                                        field.onChange(date?.toISOString())}
                                      granularity="day"
                                      // hourCycle={12}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {!previousData && (
                              <div className="w-full">
                                <FormField
                                  control={form.control}
                                  name="password"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>
                                        Password{" "}
                                        <span className="text-xs text-muted-foreground">
                                          (8+, A-Z, a-z, 0-9)
                                        </span>
                                      </FormLabel>
                                      <div className="relative ">
                                        <FormControl className="">
                                          <Input
                                            type={
                                              isPasswordType
                                                ? "password"
                                                : "text"
                                            }
                                            placeholder="Password"
                                            {...field}
                                            value={field.value ?? ""}
                                          />
                                        </FormControl>
                                        <span
                                          className="cursor-pointer absolute bottom-1/2 translate-y-1/2 right-3"
                                          onClick={() =>
                                            setIsPasswordType((prev) => !prev)
                                          }
                                        >
                                          {isPasswordType ? (
                                            <Eye size={18} />
                                          ) : (
                                            <EyeClosedIcon />
                                          )}
                                        </span>
                                      </div>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            )}
                          </div>
                          <div className="w-1/4 mb-4">
                            <span className="text-sm">Status</span>
                            <FormField
                              control={form.control}
                              name="status"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10 mt-2">
                                  <div className="space-y-0.5">
                                    <FormLabel htmlFor="status-toggle mr-2">
                                      Active
                                    </FormLabel>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      className="!mt-0"
                                      id="status-toggle"
                                      checked={field.value === "Active"}
                                      defaultChecked={
                                        field.value === "Inactive"
                                      }
                                      onCheckedChange={(checked) =>
                                        field.onChange(
                                          checked ? "Active" : "Inactive"
                                        )
                                      }
                                      aria-label="Toggle status"
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            {" "}
                            <FormSearchSelect<LocationColumn>
                              loading={locationLoading}
                              data={locationData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="location_id"
                              placeholder="Location"
                              title="Location"
                              className="w-[330px]"
                            />
                            <FormSearchSelect<OrganizationDropdownColumn>
                              loading={organizationLoading}
                              data={organizationData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="organization_id"
                              placeholder="Organization"
                              className="w-[330px]"
                              title="Organization"
                            />
                            <FormSearchSelect<WorkPlaceColumn>
                              loading={workplaceLoading}
                              data={workplaceData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="work_place_id"
                              placeholder="Work Place"
                              className="w-[330px]"
                              title="Work Place"
                            />
                            <FormSearchSelect<DepartmentColumn>
                              loading={departmentLoading}
                              data={departmentData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="department_id"
                              placeholder="Department"
                              className="w-[330px]"
                              title="Department"
                            />
                            <FormSearchSelect<DesignationColumn>
                              loading={designationLoading}
                              data={designationData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="designation_id"
                              placeholder="Designation"
                              className="w-[330px]"
                              title="Designation"
                            />
                            <FormSearchSelect<SectionColumn>
                              loading={sectionLoading}
                              data={sectionData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="section_id"
                              placeholder="Section"
                              className="w-[330px]"
                              title="Section"
                            />
                            <FormSearchSelect<ScheduleColumn>
                              loading={scheduleLoading}
                              data={scheduleData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="schedule_id"
                              placeholder="Schedule"
                              className="w-[330px]"
                              title="Schedule"
                            />
                            <FormSearchSelect<EmployeeClassColumn>
                              loading={employeeClassLoading}
                              data={employeeClassData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="employee_class_id"
                              placeholder="Employee Class"
                              className="w-[330px]"
                              title="Employee Class"
                            />
                            <FormSearchSelect<EmployeeGradeColumn>
                              loading={employeeGradeLoading}
                              data={employeeGradeData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="employee_grade_id"
                              placeholder="Employee Grade"
                              className="w-[330px]"
                              title="Employee Grade"
                            />
                            <FormSearchSelect<EmploymentStatusColumn>
                              loading={employmentStatusLoading}
                              data={employmentStatusData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="employment_status_id"
                              placeholder="Employment Status"
                              className="w-[330px]"
                              title="Employment Status"
                            />
                            <FormSearchSelect<BloodGroupColumn>
                              loading={bloodGroupLoading}
                              data={bloodGroupData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="blood_group_id"
                              placeholder="Blood Group"
                              className="w-[330px]"
                              title="Blood Group"
                            />
                            <FormSearchSelect<ReligionColumn>
                              loading={religionLoading}
                              data={religionData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="religion_id"
                              placeholder="Religion"
                              className="w-[330px]"
                              title="Religion"
                            />
                            <FormSearchSelect<GenderColumn>
                              loading={genderLoading}
                              data={genderData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="gender_id"
                              placeholder="Gender"
                              className="w-[330px]"
                              title="Gender"
                            />
                            <FormSearchSelect<RoleColumn>
                              loading={roleLoading}
                              data={roleData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="role_id"
                              placeholder="Role"
                              className="w-[330px]"
                              title="Role"
                            />
                            <FormSearchSelect<LeaveGroupRow>
                              loading={LeaveGroupLoading}
                              data={leaveGroupData}
                              displayField="name"
                              valueField="id"
                              form={form}
                              name="leave_group_id"
                              placeholder="Leave Group"
                              className="w-[330px]"
                              title="Leave Group"
                            />
                          </div>
                        </ScrollArea>
                        <div className="mt-2 flex justify-end gap-4">
                          <Button
                            variant="default"
                            type="submit"
                            className="mt-4"
                            size={"sm"}
                          >
                            {previousData ? "Update" : "Save"}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* additional info */}
              <TabsContent value="additional-info">
                <Card>
                  <CardContent className="">
                    <AddAdditionalInfoForm previousData={previousData} />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* address */}

              <TabsContent value="address">
                <Card>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-x-6">
                      <div className="w-1/2">
                        <AddressForm
                          previousData={previousData?.present_address}
                          modelId={previousData?.id}
                          addressType="Present"
                          title="Present Address"
                        />
                      </div>
                      <div className="w-1/2">
                        <AddressForm
                          previousData={previousData?.permanent_address}
                          modelId={previousData?.id}
                          addressType="Permanent"
                          title="Permanent Address"
                        />
                      </div>
                    </div>
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
        </div>
      )}
    </>
  );
}
