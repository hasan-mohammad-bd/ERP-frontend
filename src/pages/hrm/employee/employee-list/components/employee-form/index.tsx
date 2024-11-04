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
import {
  BloodGroupColumn,
  DepartmentColumn,
  DesignationColumn,
  EmployeeClassColumn,
  // EmployeeColumn,
  // EmployeeFormSchema,
  EmployeeFormValues,
  EmployeeGradeColumn,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/utils";
import { CalendarIcon, Eye } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { GenderColumn } from "../validators";
import { ScrollArea } from "@/components/ui/scroll-area";
import { serialize } from "object-to-formdata";
import { Heading } from "@/components/common/heading";

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
    // resolver: zodResolver(EmployeeFormSchema),
    defaultValues: {
      /*       employee_unique_id: previousData?.employee_unique_id || "",
      first_name: previousData?.first_name || "",
      last_name: previousData?.last_name || "",
      phone: previousData?.phone || "",
      corporate_phone: previousData?.corporate_phone || "",
      email: previousData?.email || "",
      joining_date: previousData?.joining_date || "",
      status: previousData?.status || "Active",
      location_id: previousData?.location_id ,
      organization_id: previousData?.organization_id.toString(),
      work_place_id: previousData?.work_place_id. || 1,
      department_id: previousData?.department_id || 1,
      section_id: previousData?.section_id || 1,
      designation_id: previousData?.designation_id || 1,
      schedule_id: previousData?.schedule_id || 1,
      employee_class_id: previousData?.employee_class_id || 1,
      employee_grade_id: previousData?.employee_grade_id || 1,
      employment_status_id: previousData?.employment_status_id || 1,
      password: null,
      gender_id: previousData?.gender_id || 1,
      religion_id: previousData?.religion_id || 1,
      blood_group_id: previousData?.blood_group_id || 1,
      role_id: previousData?.role_id || 1,
      leave_group_id: previousData?.leave_group_id || 1, */
      //additional info
      /* card_id: previousData?.card_id || null,
      machine_id: previousData?.machine_id || null,
      is_head_of_dept: previousData?.is_head_of_dept || 0,
      // reporting_to_id: previousData?.reporting_to_id || null,
      sorting_index: previousData?.sorting_index || 0,
      nid_number: previousData?.nid_number || null,
      fathers_name: previousData?.fathers_name || null,
      mothers_name: previousData?.mothers_name || null,
      payment_type: previousData?.payment_type || "Cash",
      account_number: previousData?.account_number || null,
      bank_name: previousData?.bank_name || null,
      bank_branch: previousData?.bank_branch || null,
      marital_status: previousData?.marital_status || "Married",
      birth_date: previousData?.birth_date || null,
      tin_number: previousData?.tin_number || null, */
    },
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        ...previousData,
        reporting_to_id: previousData.reporting_to_id?.toString(),
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

          <div className="w-4/6 mx-auto">
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
                                <FormItem className="flex flex-col w-full">
                                  <FormLabel className="mb-1">
                                    Joining Date
                                  </FormLabel>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant={"outline"}
                                          className={cn(
                                            " pl-3 text-left font-normal w-full",
                                            !field.value &&
                                              "text-muted-foreground"
                                          )}
                                        >
                                          {field.value ? (
                                            format(new Date(field.value), "PPP") // Ensure field.value is a Date object
                                          ) : (
                                            <span>Joining Date</span>
                                          )}
                                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent
                                      className="w-auto p-0"
                                      align="start"
                                    >
                                      <Calendar
                                        mode="single"
                                        selected={
                                          field.value
                                            ? new Date(field.value)
                                            : undefined
                                        } // Convert string to Date
                                        onSelect={(date) =>
                                          field.onChange(date?.toISOString())
                                        } // Save the Date as ISO string
                                        // disabled={(date) =>
                                        //   date > new Date() ||
                                        //   date < new Date("1900-01-01")
                                        // }
                                        initialFocus
                                      />
                                    </PopoverContent>
                                  </Popover>

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
                                      <FormLabel>Password</FormLabel>
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
                                    <FormLabel>Active</FormLabel>
                                  </div>
                                  <FormControl>
                                    <Switch
                                      className="!mt-0 "
                                      checked={field.value === "Active"}
                                      onCheckedChange={(checked: boolean) =>
                                        field.onChange(
                                          checked ? "Active" : "Inactive"
                                        )
                                      }
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                          {/* 
                                      <FormField
                control={form.control}
                name="discard_weekend_attendance"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm h-10">
                    <div className="space-y-0.5">
                      <FormLabel>Discard attendance on weekend</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        className="!mt-0 "
                        checked={field.value === 1}
                        onCheckedChange={(checked: boolean) =>
                          field.onChange(checked ? 1 : 0)
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              /> */}

                          <div className="grid grid-cols-3 gap-4">
                            {" "}
                            {/*                           <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Status</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={
                                    previousData?.status && previousData?.status
                                  }
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select Status" />
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
                          /> */}
                            {/*                         
                        /> */}
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
                            {/*                           <FormField
                            control={form.control}
                            name="location_id"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Location</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={
                                    previousData?.location?.id
                                      ? (previousData?.location.id.toString())
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
                          /> */}
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
                            {/*                           <FormField
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
                                        (
                                          organization: OrganizationDropdownColumn
                                        ) => (
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
                          /> */}
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
                            {/* 
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
                          /> */}
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
                            {/*                           <FormField
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
                          /> */}
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
                            {/*                           <FormField
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
                          /> */}
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
                            {/*                           <FormField
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
                          /> */}
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
                            {/*                           <FormField
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
                          /> */}
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
                            {/*                           <FormField
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
                                        (
                                          employeeClass: EmployeeClassColumn
                                        ) => (
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

                          /> */}
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
                            {/*                           <FormField
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
                                        (
                                          employeeGrade: EmployeeGradeColumn
                                        ) => (
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
                          /> */}
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
                            {/*                           <FormField
                            control={form.control}
                            name="employment_status_id"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Employment Status</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={
                                    previousData?.employment_status?.id
                                      ? String(
                                          previousData?.employment_status.id
                                        )
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
                                        (
                                          employment: EmploymentStatusColumn
                                        ) => (
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

                          /> */}
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
                            {/*                           <FormField
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
                          /> */}
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
                            {/*                           <FormField
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
                          /> */}
                            {/* 
                           <FormField
          control={form.control}
          name="gender_id"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {
                
                    genderData?.map((gender: GenderColumn) => (
                      <FormItem key={gender.id} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={String(gender.id)} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {gender.name}
                    </FormLabel>
                  </FormItem>
                    ))
                  }
                 
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
                            {/*                           <FormField
                            control={form.control}
                            name="gender_id"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel>Gender</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={
                                      previousData?.gender?.id
                                        ? String(previousData.gender.id)
                                        : undefined
                                    }
                                    className="flex flex-col space-y-1"
                                  >
                                    {genderData?.map((gender: GenderColumn) => (
                                      <FormItem
                                        key={gender.id}
                                        className="flex items-center space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <RadioGroupItem
                                            value={String(gender.id)}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          {gender.name}
                                        </FormLabel>
                                      </FormItem>
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          /> */}
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
                            {/*                           <FormField
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
                          /> */}
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
                            {/*                           <FormField
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
                          /> */}
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
                            {/*                           <FormField
                            control={form.control}
                            name="leave_group_id"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Leave Group</FormLabel>

                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={
                                    previousData?.leave_group_id
                                      ? String(previousData.leave_group_id)
                                      : undefined
                                  }
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select Leave Group" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {LeaveGroupLoading ? (
                                      <Loading />
                                    ) : (
                                      leaveGroupData?.map(
                                        (group: LeaveGroupRow) => (
                                          <SelectItem
                                            key={group.id}
                                            value={String(group.id)}
                                          >
                                            {group.name}
                                          </SelectItem>
                                        )
                                      )
                                    )}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          /> */}
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
