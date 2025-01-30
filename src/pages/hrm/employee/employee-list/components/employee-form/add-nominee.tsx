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
  CityColumn,
  CountryColumn,
  EmployeeColumn,
  NomineeFormSchema,
  NomineeFormValues,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import { useForm } from "react-hook-form";
import { useGetCountriesQuery } from "@/store/services/hrm/api/country";

import { useGetCitiesQuery } from "@/store/services/hrm/api/city";
import { CardHeader, CardTitle } from "@/components/ui/card";
import {
  useCreateNomineeMutation,
  useUpdateNomineeMutation,
} from "@/store/services/hrm/api/nominee";

import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";
import { useEffect, useState } from "react";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

interface AddAddressFormProps {
  previousData?: EmployeeColumn;
}

export function AddNomineeForm({ previousData }: AddAddressFormProps) {
  const [createNominee, { isLoading }] = useCreateNomineeMutation();
  const [updateNominee, { isLoading: updateLoading }] =
    useUpdateNomineeMutation();
  const [filteredCityState, setFilteredCityState] = useState<CityColumn[]>([]);

  const { data: countries, isLoading: countriesLoading } =
    useGetCountriesQuery(`per_page=1000&page=1`);
  const { data: cities } = useGetCitiesQuery(`per_page=1000&page=1`);

  const countryData = countries?.data || [];
  const cityData = cities?.data || [];

  const form = useForm<NomineeFormValues>({
    resolver: zodResolver(NomineeFormSchema),
    defaultValues: {
      employee_id: previousData?.id,
      gender_id: previousData?.employee_nominee?.gender?.id || 1,
      name: previousData?.employee_nominee?.name || "",
      fathers_name: previousData?.employee_nominee?.fathers_name || "",
      mothers_name: previousData?.employee_nominee?.mothers_name || "",
      relation: previousData?.employee_nominee?.relation || "",
      phone_number: previousData?.employee_nominee?.phone_number || "",
      // image: previousData?.employee_nominee?.image || "",
      nid_number: previousData?.employee_nominee?.nid_number || "",
      present_address: {
        country_id:
          previousData?.employee_nominee?.present_address?.country?.id.toString() ||
          undefined,
        city_id:
          previousData?.employee_nominee?.present_address?.city?.id.toString() ||
          undefined,
        post_code:
          previousData?.employee_nominee?.present_address?.post_code || "",
        address: previousData?.employee_nominee?.present_address?.address || "",
      },
    },
  });

  useEffect(() => {
    const selectedCountry = form.watch("present_address.country_id");
    const findCountry = countryData.find(
      (country) => country.id === Number(selectedCountry)
    );
    //filtered city
    const filteredCity = cityData.filter((city) => {
      return city.country === findCountry?.code;
    });

    setFilteredCityState(filteredCity);
  }, [form.watch("present_address.country_id"), cityData, countryData, form]);

  async function onSubmitNominee(data: NomineeFormValues) {
    try {
      if (previousData?.employee_nominee?.id) {
        await updateNominee({
          nomineeId: previousData?.employee_nominee?.id,
          updatedNominee: data,
        });

        toast.success("Nominee updated successfully");
        // modalClose();
      } else {
        await createNominee(data).unwrap();
        toast.success("Nominee created successfully");
        // modalClose();
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
        <div className="">
          <Form {...form}>
            <CardHeader>
              <CardTitle className="text-center">Employee Nominee </CardTitle>
            </CardHeader>
            <form onSubmit={form.handleSubmit(onSubmitNominee)} className="">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h1 className="text-center font-bold">Nominee Basic Info</h1>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Name{" "}
                          <span>
                            <span className="text-red-500">*</span>
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fathers_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fathers Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter fathers name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mothers_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mothers Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter mothers name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="relation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Relation</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter relation name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter phone number"
                            {...field}
                          />
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
                            type="number"
                            placeholder="Enter nid number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <h1 className="text-center font-bold"> Address</h1>

                  <FormField
                    control={form.control}
                    name="present_address.address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="present_address.post_code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Post Code{" "}
                          <span>
                            <span className="text-red-500">*</span>
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter post code"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormSearchSelect<CountryColumn>
                    loading={countriesLoading}
                    data={countryData}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="present_address.country_id"
                    placeholder="Country"
                    className="w-[500px]"
                    title="Country"
                    required
                  />
                  <FormSearchSelect<CityColumn>
                    // loading={countriesLoading}
                    data={filteredCityState}
                    displayField="name"
                    valueField="id"
                    form={form}
                    name="present_address.city_id"
                    placeholder="City"
                    className="w-[500px]"
                    title="City"
                    disabled={!form.watch("present_address.country_id")}
                    required
                  />
                </div>
              </div>

              <div>
                <Button variant="default" type="submit" className="w-fit mt-4">
                  {previousData?.employee_nominee?.id ? "Update" : "Add"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </>
  );
}
