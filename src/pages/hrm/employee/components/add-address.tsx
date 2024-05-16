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
  JobCandidateColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { useGetCountriesQuery } from "@/store/services/hrm/api/country";

import {
  useCreateAddressMutation,
  useUpdateAddressMutation,
} from "@/store/services/hrm/api/address";
import { useGetCitiesQuery } from "@/store/services/hrm/api/city";
import { CardHeader, CardTitle } from "@/components/ui/card";

interface AddAddressFormProps {
  previousData?: JobCandidateColumn;
}

export function AddAddressForm({ previousData }: AddAddressFormProps) {
  const [createAddress, { isLoading }] = useCreateAddressMutation();
  const [updateAddress, { isLoading: updateLoading }] =
    useUpdateAddressMutation();


  const { data: countries, isLoading: countriesLoading } =
    useGetCountriesQuery();
  const { data: cities, isLoading: citiesLoading } = useGetCitiesQuery();

  const countryData = countries?.data || [];
  const cityData = cities?.data || [];

  const presentAddressForm = useForm<AddressFromValues>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: {
      model_type: "App\\Models\\Job\\JobCandidate",
      model_id: previousData?.id,
      country_id: previousData?.present_address?.country.id || 1,
      city_id: previousData?.present_address?.city.id || 1,
      post_code: previousData?.present_address?.post_code || "",
      address: previousData?.present_address?.address || "",
      type: "Present",
    },
  });

  const permanentAddressForm = useForm<AddressFromValues>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: {
      model_type: "App\\Models\\Job\\JobCandidate",
      model_id: previousData?.id,
      country_id: previousData?.permanent_address?.country.id || 1,
      city_id: previousData?.permanent_address?.city.id || 1,
      post_code: previousData?.permanent_address?.post_code || "",
      address: previousData?.permanent_address?.address || "",
      type: "Permanent",
    },
  });

  async function onSubmitPresentAddress(data: AddressFromValues) {
    try {
      if (previousData?.present_address?.id) {
        await updateAddress({
          addressId: previousData?.present_address?.id,
          updatedAddress: data,
        });

        toast.success("Job Post updated successfully");
        // modalClose();
      } else {
        await createAddress(data);
        toast.success("Job Post created successfully");
        // modalClose();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function onSubmitPermanentAddress(data: AddressFromValues) {
    try {
      if (previousData?.permanent_address?.id) {
        await updateAddress({
          addressId: previousData?.permanent_address?.id,
          updatedAddress: data,
        });

        toast.success("Job Post updated successfully");
        // modalClose();
      } else {
        await createAddress(data);
        toast.success("Job Post created successfully");
        // modalClose();
      }
    } catch (error) {
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
        <div className="flex items-center h-[535px] gap-x-4">
          <div className="w-1/2">
            <Form {...presentAddressForm}>
              <CardHeader>
                <CardTitle className="text-center">Present Address </CardTitle>
              </CardHeader>
              <form
                onSubmit={presentAddressForm.handleSubmit(onSubmitPresentAddress)}
                className=""
              >
                <FormField
                  control={presentAddressForm.control}
                  name="address"
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
                  control={presentAddressForm.control}
                  name="post_code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Post Code</FormLabel>
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

                <FormField
                  control={presentAddressForm.control}
                  name="country_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={
                          previousData?.present_address?.country?.id
                            ? String(previousData.present_address?.country?.id)
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
                />
                <FormField
                  control={presentAddressForm.control}
                  name="city_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={
                          previousData?.present_address?.city?.id
                            ? String(previousData.present_address?.city?.id)
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
                />
                <div>
                  <Button
                    variant="default"
                    type="submit"
                    className="w-full mt-4"
                  >
                    {previousData?.present_address?.id ? "Update" : "Add"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="w-1/2">
            <Form {...permanentAddressForm}>
              <CardHeader>
                <CardTitle className="text-center">Permanent Address </CardTitle>
              </CardHeader>
              <form
                onSubmit={permanentAddressForm.handleSubmit(onSubmitPermanentAddress)}
                className=""
              >
                <FormField
                  control={permanentAddressForm.control}
                  name="address"
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
                  control={permanentAddressForm.control}
                  name="post_code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Post Code</FormLabel>
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

                <FormField
                  control={permanentAddressForm.control}
                  name="country_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={
                          previousData?.permanent_address?.country?.id
                            ? String(previousData.permanent_address?.country?.id)
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
                />
                <FormField
                  control={permanentAddressForm.control}
                  name="city_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={
                          previousData?.permanent_address?.city?.id
                            ? String(previousData.permanent_address?.city?.id)
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
                />
                <div>
                  <Button
                    variant="default"
                    type="submit"
                    className="w-full mt-4"
                  >
                    {previousData?.permanent_address?.id ? "Update" : "Add"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
