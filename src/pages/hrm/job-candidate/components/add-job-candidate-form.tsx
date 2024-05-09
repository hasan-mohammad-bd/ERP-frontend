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
  JobCandidateColumn,
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

import {
  useCreateJobCandidateMutation,
  useUpdateJobCandidateMutation,
} from "@/store/services/hrm/api/job-candidate";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useGetReligionsQuery } from "@/store/services/hrm/api/religion";
import { useGetGendersQuery } from "@/store/services/hrm/api/gender";
import { useForm } from "react-hook-form";
// import { useGetCountriesQuery } from "@/store/services/hrm/api/country";
import { AddAddressForm } from "./add-address";
import { AddEducationForm } from "./add-education";

interface AddJobCandidateFormProps {
  modalClose: () => void;
  data?: JobCandidateColumn;
}

export function AddJobCandidateForm({
  modalClose,
  data: previousData,
}: AddJobCandidateFormProps) {
  const [createJobCandidate, { isLoading }] = useCreateJobCandidateMutation();
  const [updateJobCandidate, { isLoading: updateLoading }] =
    useUpdateJobCandidateMutation();

  const { data: religions, isLoading: religionLoading } =
    useGetReligionsQuery();

  const { data: genders, isLoading: genderLoading } = useGetGendersQuery();
  // const { data: countries, isLoading: countriesLoading } =
  //   useGetCountriesQuery();

  const religionData = religions?.data || [];
  const genderData = genders?.data || [];
  // const countryData = countries?.data || [];

  const form = useForm<JobCandidateFromValues>({
    resolver: zodResolver(JobCandidateFormSchema),
    defaultValues: {
      first_name: previousData?.first_name || "",
      last_name: previousData?.last_name || "",
      email: previousData?.email || "",
      phone: previousData?.phone || "",
      alt_phone: previousData?.alt_phone || "",
      nid_type: previousData?.nid_type || "Nid",
      nid_number: previousData?.nid_number || "",
      marital_status: previousData?.marital_status || "Married",
      birth_date: previousData?.birth_date || "",
      // expected_salary: previousData?.expected_salary || 0,
      religion_id: previousData?.religion_id || 1,
      gender_id: previousData?.gender_id || 1,
      // present_address: previousData?.present_address || null,
      // permanent_address: previousData?.permanent_address || null,
    },
  });

  /*   const AddressForm = useForm<PresentAddressFormValues>({
    resolver: zodResolver(PresentAddressFormSchema),
    defaultValues: {
      city_id: previousData?.present_address?.city.id || 1,
      post_code: previousData?.present_address?.post_code || 1200,
      address: previousData?.present_address?.address || "",
      country_id: previousData?.present_address?.country.id || 1,
    },
  });
 */
  async function onSubmit(data: JobCandidateFromValues) {
    try {
      if (previousData) {
        console.log(previousData);
        await updateJobCandidate({
          jobCandidateId: previousData.id,
          updatedJobCandidate: data,
        });

        toast.success("Job Post updated successfully");
        modalClose();
      } else {
        await createJobCandidate(data);
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
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className=""
                    >
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
          </Tabs>
        </div>
      )}
    </>
  );
}
