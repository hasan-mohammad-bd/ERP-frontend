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
import { CityColumn } from "@/lib/validators";
import { Loading } from "@/components/common/loading";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";

import { Heading } from "@/components/common/heading";
import {
  useCreateLeadMutation,
  useGetLeadByIdQuery,
  useUpdateLeadMutation,
} from "@/store/services/crm/api/leads";
import { LeadFormValues, LeadSchema } from "@/lib/validators/crm/lead";
import { useGetPipelinesQuery } from "@/store/services/crm/api/pipelines";
import { PipelineDetailFormValues } from "@/lib/validators/crm/pipelines";
import { useGetCountriesQuery } from "@/store/services/hrm/api/country";
import { useGetCitiesQuery } from "@/store/services/hrm/api/city";
import { useGetItemQuery } from "@/store/services/billing/api/items";
import { useGetUsersQuery } from "@/store/services/erp-main/api/users";
import { LEAD_LABELS, LEAD_SOURCES } from "@/constants/crm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function AddLeadForm() {
  const [filteredCityState, setFilteredCityState] = useState<CityColumn[]>([]);
  const [pipelineStageState, setPipelineStageState] = useState<
    PipelineDetailFormValues[]
  >([]);
  const { leadId } = useParams();

  const navigate = useNavigate();
  const { data: dataById } = useGetLeadByIdQuery(leadId || "", {
    skip: !leadId,
  });
  const previousData = dataById?.data || undefined;

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

  // console.log(previousData, "dsdsdsdsdsds");

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(LeadSchema),
    defaultValues: {
      status: "Active",
    },
  });

  useEffect(() => {
    if (previousData) {
      form.reset({
        ...previousData,
        pipeline_id: previousData?.pipeline?.id.toString(),
        pipeline_stage_id: previousData?.pipelineStage?.id.toString(),
        item_id: previousData?.item?.id.toString(),
        country_id: previousData?.country?.id.toString(),
        city_id: previousData?.city?.id.toString(),
        assign_id: previousData?.user?.id.toString(),
      });
    }
  }, [previousData, form]);

  async function onSubmit(data: LeadFormValues) {
    console.log(data);
    try {
      if (previousData) {
        const res = await updateLead({
          leadId: previousData.id,
          updatedLead: data,
        }).unwrap();

        toast.success("Lead updated successfully");
        navigate(`/crm/lead/leads-view/${res.data.id}`);
      } else {
        const res = await createLead(data).unwrap();
        toast.success("Lead created successfully");
        navigate(`/crm/lead/leads-view/${res.data.id}`);
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }
  // handleFormErrors(form.formState.errors as ErrorDetail);
  // console.log(form.formState.errors);

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

  // console.log(pipelineStageState, "pipelineStageState");

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="">
          <Loading />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-3">
            <Heading
              title={`Lead ${previousData ? "Edit" : "Add"}`}
              description="Manage job candidates for you business"
            />
            <Button
              onClick={() => window.history.back()}
              size={"sm"}
            >
              Lead List
            </Button>
          </div>
          <Separator />

          <div className="2xl:w-4/6 w-full mx-auto">
            <Card>
              <CardContent className="space-y-2 pt-3">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    <div className="grid grid-cols-3 gap-4 mb-4">
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
                    <div className="grid grid-cols-3 gap-4 mb-4">
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
                      <FormSearchSelect
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
                      <FormSearchSelect
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
                      <FormSearchSelect
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
                      <FormSearchSelect
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
                      <FormSearchSelect
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
                      <FormSearchSelect
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
                      <FormSearchSelect
                        // loading={countriesLoading}
                        data={LEAD_LABELS}
                        displayField="name"
                        valueField="id"
                        form={form}
                        name="label"
                        placeholder="Label"
                        className="w-[300px]"
                        title="Label"
                      />
                      <FormSearchSelect
                        // loading={countriesLoading}
                        data={LEAD_SOURCES}
                        displayField="name"
                        valueField="id"
                        form={form}
                        name="source"
                        placeholder="Source"
                        className="w-[300px]"
                        title="Source"
                      />
                      <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Status</FormLabel>
                            <Select
                              onValueChange={(value) => field.onChange(value)}
                              value={String(field.value)}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value={"Active"}>Active</SelectItem>
                                <SelectItem value={"Completed"}>
                                  Completed
                                </SelectItem>
                                <SelectItem value={"Rejected"}>
                                  Rejected
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

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
