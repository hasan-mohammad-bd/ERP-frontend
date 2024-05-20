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
  DepartmentColumn,
  EmployeeColumn,
  EmployeeFormValues,
  JobCandidateFormSchema,
  JobCandidateFromValues,
  ReligionColumn,
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

/* import {
  useCreateJobCandidateMutation,
  useUpdateJobCandidateMutation,
} from "@/store/services/hrm/api/job-candidate"; */

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

  const { data: genders, isLoading: genderLoading } = useGetGendersQuery();
  // const { data: countries, isLoading: countriesLoading } =
  //   useGetCountriesQuery();

  const religionData = religions?.data || [];
  const genderData = genders?.data || [];
  // const countryData = countries?.data || [];

  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(JobCandidateFormSchema),
    defaultValues: {
      employee_unique_id: previousData?.employee_unique_id || "",
      card_id: previousData?.card_id || "",
      machine_id: previousData?.machine_id || "",

      first_name: previousData?.first_name || "",
      last_name: previousData?.last_name || "",
    
      phone: previousData?.phone || "",
      corporate_phone: previousData?.corporate_phone || "",
      email: previousData?.email || "",

      joining_date: previousData?.joining_date || "",
      religion_id: previousData?.religion_id || 1,
      gender_id: previousData?.gender_id || 1,
      is_head_of_dept: previousData?.is_head_of_dept || 0,
      status: previousData?.status || "Active",
      location_id: previousData?.location_id || 1,
      organization_id: previousData?.organization_id || 1,
      work_place_id: previousData?.work_place_id || 1,
      department_id: previousData?.department_id || 1,
      section_id: previousData?.section_id || 1,
      schedule_id: previousData?.schedule_id || 1,
      employee_class_id: previousData?.employee_class_id || 1,
      employee_grade_id: previousData?.employee_grade_id || 1,
      employment_status_id: previousData?.employment_status_id || 1,
      reporting_to_id: previousData?.reporting_to_id || null,

      sorting_index: previousData?.sorting_index || 0,
      password: "",
      // gender_id: previousData?.gender_id || 2,
      




      





      





    },
  });

  async function onSubmit(data: EmployeeFormValues) {
    try {
      if (previousData) {
        console.log(previousData);
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
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <div>
          <Tabs defaultValue="basic-info" className="">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
              <TabsTrigger disabled={!previousData} value="address">
                Address
              </TabsTrigger>
              <TabsTrigger disabled={!previousData} value="education">
                Education
              </TabsTrigger>
              <TabsTrigger disabled={!previousData} value="experience">
                Experience
              </TabsTrigger>
            </TabsList>

            {/* Basic Info */}
            <TabsContent value="basic-info">
              <Card>
                <CardHeader>
                  <CardTitle>Basic information</CardTitle>
                  <CardDescription>
                    Enter the basic information about job candidate.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 ">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">
                      <div className="space-y-2 grid grid-cols-3 gap-3">
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
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Last Name"
                                  {...field}
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
                          name="alt_phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Alt Phone</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter Alt Phone"
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
                          name="nid_type"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>NID Type</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex items-center justify-between space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="Nid" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      NID
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="Passport" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Passport
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="BirthCertificate" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Birth Certificate
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
                        />

                        <FormField
                          control={form.control}
                          name="marital_status"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Marital Status</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex items-center space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="Married" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Married
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="Unmarried" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Unmarried
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
                        />

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
          </Tabs>
        </div>
      )}
    </>
  );
}
