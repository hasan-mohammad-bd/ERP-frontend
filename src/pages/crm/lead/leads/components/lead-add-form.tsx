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
import { CityColumn, CountryColumn } from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import { Card, CardContent } from "@/components/ui/card";

import { useForm } from "react-hook-form";

import handleErrors, {
  ErrorDetail,
  handleFormErrors,
} from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import FormSearchSelect from "@/components/ui/form-items/form-search-select";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Heading } from "@/components/common/heading";

import {
  useCreateLeadMutation,
  useGetLeadByIdQuery,
  useUpdateLeadMutation,
} from "@/store/services/crm/api/leads";
import { LeadFormValues, LeadSchema } from "@/lib/validators/crm/lead";
import { useGetPipelinesQuery } from "@/store/services/crm/api/pipelines";
import {
  PipelineDetailFormValues,
  PipelineRow,
} from "@/lib/validators/crm/pipelines";
import { useGetCountriesQuery } from "@/store/services/hrm/api/country";
import { useGetCitiesQuery } from "@/store/services/hrm/api/city";
import { useGetItemQuery } from "@/store/services/billing/api/items";
import { ItemRow } from "@/lib/validators/billing/items";
import { UsersRow } from "@/lib/validators/web/users";
import { useGetUsersQuery } from "@/store/services/erp-main/api/users";

// interface EmployeeFormProps {
// 	modalClose?: () => void;

// }

type DataType = {
  id: string;
  name: string;
};
const labelData = [
  { id: "Good", name: "Good" },
  { id: "Hot", name: "Hot" },
  { id: "Warm", name: "Warm" },
  { id: "Cold", name: "Cold" },
  { id: "Qualified", name: "Qualified" },
  { id: "Unqualified", name: "Unqualified" },
  { id: "New", name: "New" },
  { id: "FollowUp", name: "FollowUp" },
  { id: "Contacted", name: "Contacted" },
  { id: "Interested", name: "Interested" },
  { id: "NotInterested", name: "NotInterested" },
  { id: "Pending", name: "Pending" },
  { id: "Converted", name: "Converted" },
  { id: "Closed", name: "Closed" },
  { id: "Lost", name: "Lost" },
];

const sourceData = [
  { id: "Facebook", name: "Facebook" },
  { id: "Google", name: "Google" },
  { id: "Youtube", name: "Youtube" },
  { id: "Linkedin", name: "Linkedin" },
  { id: "Reference", name: "Reference" },
  { id: "Other", name: "Other" },
];

export default function AddLeadForm() {
  const [filteredCityState, setFilteredCityState] = useState<CityColumn[]>([]);
  const [pipelineStageState, setPipelineStageState] = useState<
    PipelineDetailFormValues[]
  >([]);
  const params = useParams();
  const leadId = Number(params.id);
  console.log(params);
  const navigate = useNavigate();
  const { data: dataById } = useGetLeadByIdQuery(leadId);
  const previousData = dataById?.data;
  console.log(previousData);
  const [createLead, { isLoading }] = useCreateLeadMutation();
  const [updateLead, { isLoading: updateLoading }] = useUpdateLeadMutation();
  const { data: countries, isLoading: countriesLoading } =
    useGetCountriesQuery(`per_page=1000&page=1`);
  const { data: cities } = useGetCitiesQuery(`per_page=1000&page=1`);
  const { data: itemStocks, isLoading: itemStocksLoading } =
    useGetItemQuery(`per_page=1000&page=1`);
  const { data: users, isLoading: usersLoading } =
    useGetUsersQuery(`per_page=1000&page=1`);

  const countryData = countries?.data || [];
  const cityData = cities?.data || [];
  const itemsData = itemStocks?.data || [];
  const userData = users?.data || [];

  const { data: Pipeline, isLoading: pipelineLoading } =
    useGetPipelinesQuery(`per_page=10&page=1`);

  const pipelineList = Pipeline?.data || [];

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(LeadSchema),
    defaultValues: {},
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        ...previousData,
        // first_name: previousData?.first_name || "",
        // last_name: previousData?.last_name || "",
        // employee_unique_id: previousData?.employee_unique_id || "",
        // phone: previousData?.phone || "",
        // email: previousData?.email || "",
        // joining_date: previousData?.joining_date || "",

        // corporate_phone: previousData?.corporate_phone || "",
        // // reporting_to_id: previousData.reporting_to_id?.toString(),
        // location_id: previousData?.location?.id.toString(),
        // organization_id: previousData?.organization?.id.toString(),
        // work_place_id: previousData?.work_place?.id.toString(),
        // department_id: previousData?.department?.id.toString(),
        // section_id: previousData?.section?.id.toString(),
        // designation_id: previousData?.designation?.id.toString(),
        // schedule_id: previousData?.schedule?.id.toString(),
        // employee_class_id: previousData?.employee_class?.id.toString(),
        // employee_grade_id: previousData?.employee_grade?.id.toString(),
        // employment_status_id: previousData?.employment_status?.id.toString(),
        // gender_id: previousData?.gender?.id.toString(),
        // religion_id: previousData?.religion?.id.toString(),
        // blood_group_id: previousData?.blood_group?.id.toString(),
        // role_id: previousData?.user?.role?.id.toString(),
        // leave_group_id: previousData?.leave_group?.id?.toString(),
        // card_id: previousData?.card_id || null,
        // machine_id: previousData?.machine_id || null,
        // is_head_of_dept: previousData?.is_head_of_dept || 0,
        // // reporting_to_id: previousData?.reporting_to_id || null,
        // // sorting_index: previousData?.sorting_index || 0,
        // nid_number: previousData?.nid_number || null,
        // fathers_name: previousData?.fathers_name || null,
        // mothers_name: previousData?.mothers_name || null,
        // payment_type: previousData?.payment_type || "Cash",
        // account_number: previousData?.account_number || null,
        // bank_name: previousData?.bank_name || null,
        // bank_branch: previousData?.bank_branch || null,
        // marital_status: previousData?.marital_status || "Married",
        // birth_date: previousData?.birth_date || null,
        // tin_number: previousData?.tin_number || null,
        //if amarsolution.xyz is not included in proviousData.image then it will be null
        // image: previousData?.image?.includes("amarsolution.xyz") ? previousData?.image : null
      });
    }
  }, [previousData, form]);

  async function onSubmit(data: LeadFormValues) {
    console.log(data);
    try {
      if (previousData) {
        await updateLead({
          leadId: previousData.id,
          updatedLead: data,
        }).unwrap();

        toast.success("Lead updated successfully");
        // modalClose();
        // navigate(`/hrm/employees-list`);
      } else {
        await createLead(data).unwrap();
        toast.success("Lead created successfully");
        // modalClose();
        navigate(`/crm/lead/leads-view`);
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }
  handleFormErrors(form.formState.errors as ErrorDetail);
  console.log(form.formState.errors);

  useEffect(() => {
    const selectedCountry = form.watch("country_id");
    const findCountry = countryData.find(
      (country) => country.id === Number(selectedCountry)
    );
    //filtered city
    const filteredCity = cityData.filter((city) => {
      return city.country === findCountry?.code;
    });

    setFilteredCityState(filteredCity);
  }, [form.watch("country_id")]);

  useEffect(() => {
    const selectedPipeline = form.watch("pipeline_id");
    console.log(selectedPipeline);
    const findPipeline = pipelineList.find(
      (pipeline) => Number(pipeline.id) === Number(selectedPipeline)
    );
    setPipelineStageState(findPipeline ? findPipeline.details ?? [] : []);
    console.log(findPipeline);
  }, [form.watch("pipeline_id")]);

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
            <Card>
              <CardContent className="space-y-2 pt-3">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    <ScrollArea className=" h-[75vh] rounded-md border p-4">
                      <div className="grid grid-cols-2 gap-4 w-1/2 mb-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Lead Name</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Name"
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
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Description (optional)"
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
                          name="designation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Designation</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Designation (optional)"
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
                        <FormField
                          control={form.control}
                          name="company_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Company Name"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {" "}
                        <FormSearchSelect<PipelineRow>
                          loading={pipelineLoading}
                          data={pipelineList}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="pipeline_id"
                          placeholder="Pipeline"
                          title="Pipeline"
                          className="w-[330px]"
                        />
                        <FormSearchSelect<PipelineDetailFormValues>
                          // loading={pipelineLoading}
                          data={pipelineStageState}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="pipeline_stage_id"
                          placeholder="Pipeline Stage"
                          title="Pipeline Stage"
                          className="w-[330px]"
                          disabled={!form.watch("pipeline_id")}
                        />
                        <FormSearchSelect<ItemRow>
                          loading={itemStocksLoading}
                          data={itemsData}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="item_id"
                          placeholder="Item"
                          className="w-[300px]"
                          title="Item"
                        />
                        <FormSearchSelect<CountryColumn>
                          loading={countriesLoading}
                          data={countryData}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="country_id"
                          placeholder="Country"
                          className="w-[300px]"
                          title="Country"
                        />
                        <FormSearchSelect<CityColumn>
                          // loading={countriesLoading}
                          data={filteredCityState}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="city_id"
                          placeholder="City"
                          className="w-[300px]"
                          title="City"
                          disabled={!form.watch("country_id")}
                        />
                        <FormSearchSelect<UsersRow>
                          loading={usersLoading}
                          data={userData}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="assign_id"
                          placeholder="Assign to"
                          className="w-[300px]"
                          title="Assign to"
                        />
                        <FormSearchSelect<DataType>
                          // loading={countriesLoading}
                          data={labelData}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="label"
                          placeholder="Label"
                          className="w-[300px]"
                          title="Label"
                        />
                        <FormSearchSelect<DataType>
                          // loading={countriesLoading}
                          data={sourceData}
                          displayField="name"
                          valueField="id"
                          form={form}
                          name="source"
                          placeholder="Source"
                          className="w-[300px]"
                          title="Source"
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
          </div>
        </div>
      )}
    </>
  );
}
