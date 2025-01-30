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
  AddressFormSchema,
  AddressFromValues,
  CityColumn,
  CountryColumn,
  AddressColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import { useForm } from "react-hook-form";
import { useGetCountriesQuery } from "@/store/services/hrm/api/country";

import {
  useCreateAddressMutation,
  useUpdateAddressMutation,
} from "@/store/services/hrm/api/address";
import { useGetCitiesQuery } from "@/store/services/hrm/api/city";
import { CardHeader, CardTitle } from "@/components/ui/card";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import FormSearchSelect from "@/components/ui/form-items/form-search-select_DEPRECATED";
import { useEffect, useState } from "react";

interface AddressFormProps {
  previousData?: AddressColumn | undefined | null;
  modelId?: number;
  title: string;
  addressType: string;
}

export function AddressForm({
  previousData,
  modelId,
  title,
  addressType,
}: AddressFormProps) {
  const [createAddress, { isLoading }] = useCreateAddressMutation();
  const [updateAddress, { isLoading: updateLoading }] =
    useUpdateAddressMutation();
  const [filteredCityState, setFilteredCityState] = useState<CityColumn[]>([]);

  const { data: countries, isLoading: countriesLoading } =
    useGetCountriesQuery(`per_page=1000&page=1`);
  const { data: cities } = useGetCitiesQuery(`per_page=1000&page=1`);

  const countryData = countries?.data || [];
  const cityData = cities?.data || [];

  // console.log(previousData);

  const addressForm = useForm<AddressFromValues>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: {
      model_type: "App\\Models\\Employee\\Employee",
      model_id: modelId,
      country_id: previousData?.country.id.toString() || undefined,
      city_id: previousData?.city.id.toString() || undefined,
      post_code: previousData?.post_code || "",
      address: previousData?.address || "",
      type: addressType,
    },
  });

  useEffect(() => {
    const selectedCountry = addressForm.watch("country_id");
    const findCountry = countryData.find(
      (country) => country.id === Number(selectedCountry)
    );
    //filtered city
    const filteredCity = cityData.filter((city) => {
      return city.country === findCountry?.code;
    });
    setFilteredCityState(filteredCity);
  }, [addressForm.watch("country_id")]);

  async function onSubmitAddress(data: AddressFromValues) {
    try {
      if (previousData?.id) {
        await updateAddress({
          addressId: previousData?.id,
          updatedAddress: data,
        }).unwrap();
        toast.success("Address updated successfully");
      } else {
        await createAddress(data).unwrap();
        toast.success("Address created successfully");
      }
    } catch (error) {
      console.log(error);
      handleErrors(error as ErrorResponse);
    }
  }

  return (
    <>
      {isLoading || updateLoading ? (
        <div className="h-[535px]">
          <Loading />
        </div>
      ) : (
        <Form {...addressForm}>
          <CardHeader className="pl-0">
            <CardTitle className="text-xl">{title} </CardTitle>
          </CardHeader>
          <form
            onSubmit={addressForm.handleSubmit(onSubmitAddress)}
            className="space-y-3"
          >
            <FormField
              control={addressForm.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="post_code"
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

            {/* 						<FormField
							control={addressForm.control}
							name="country_id"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Country</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={
											previousData?.country?.id
												? String(previousData.country?.id)
												: undefined
										}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select Country" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{countriesLoading ? (
												<Loading />
											) : (
												countryData?.map((country: CountryColumn) => (
													<SelectItem
														key={country.id}
														value={String(country.id)}
													>
														{country.name}
													</SelectItem>
												))
											)}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/> */}
            <FormSearchSelect<CountryColumn>
              loading={countriesLoading}
              data={countryData}
              displayField="name"
              valueField="id"
              form={addressForm}
              name="country_id"
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
              form={addressForm}
              name="city_id"
              placeholder="City"
              className="w-[500px]"
              title="City"
              disabled={!addressForm.watch("country_id")}
              required
            />
            {/*             <FormField
              control={addressForm.control}
              name="city_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.city?.id
                        ? String(previousData.city?.id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {citiesLoading ? (
                        <Loading />
                      ) : (
                        cityData?.map((city: CityColumn) => (
                          <SelectItem key={city.id} value={String(city.id)}>
                            {city.name}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <div className="flex justify-end mt-4">
              <Button
                variant="default"
                type="submit"
                size={"sm"}
                className="mt-4"
              >
                {previousData?.id ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
