import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddressColumn,
  addressSchema,
  AddressType,
} from "@/lib/validators/billing/customer-supplier";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useGetCountriesQuery } from "@/store/services/erp-main/api/country";
import FormSearchSelect from "@/components/ui/form-items/form-search-select";
import { CityColumn, CountryColumn } from "@/lib/validators";
import { useGetCitiesQuery } from "@/store/services/erp-main/api/cities";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";
import {
  useCreateAddressMutation,
  useUpdateAddressMutation,
} from "@/store/services/billing/api/addresses";
import { Loading } from "@/components/common/loading";
import { toast } from "sonner";
import { useEffect } from "react";

interface AddCategoryProps {
  modalClose: () => void;
  data?: AddressColumn; // If you want to pass an existing category to edit
  customer_id: number;
  addressType: string;
}

export function AddressForm({
  modalClose,
  data: previousData,
  customer_id,
  addressType,
}: AddCategoryProps) {
  const [createAddress, { isLoading: isCreating }] = useCreateAddressMutation();
  const [updateAddress, { isLoading: isUpdating }] = useUpdateAddressMutation();

  const form = useForm<AddressType>({
    resolver: zodResolver(addressSchema),
  });
  const countryId = form.watch("country_id");

  const { data: countries, isLoading: countryLoading } =
    useGetCountriesQuery(`per_page=500`);

  const countryData = countries?.data || [];
  const selectedCountry = countryData.find(
    (country: CountryColumn) => country.id === Number(countryId)
  );

  const { data: cities, isLoading: cityLoading } = useGetCitiesQuery(
    `per_page=500&country=${selectedCountry?.code}`,
    { skip: !selectedCountry }
  );

  const citiesData = cities?.data || [];

  useEffect(() => {
    if (previousData) {
      form.reset({
        ...previousData,
        country_id: String(previousData.country.id),
        city_id: String(previousData.city?.id),
      });
    }
  }, [form, previousData]);

  const onSubmit = async (data: AddressType) => {
    try {
      if (previousData) {
        await updateAddress({
          addressId: previousData.id,
          updatedAddress: {
            ...data,
            contact_id: customer_id,
            type: addressType,
            country_id: Number(data.country_id),
            city_id: Number(data.city_id),
            model_id: customer_id,
          },
        }).unwrap();
        toast.success("Address updated successfully");
        modalClose();
      } else {
        await createAddress({
          ...data,
          contact_id: customer_id,
          type: addressType,
          country_id: Number(data.country_id),
          city_id: Number(data.city_id),
        }).unwrap();
        toast.success("Address created successfully");
        modalClose();
      }
    } catch (error) {
      handleErrors(error as ErrorResponse);
    }
  };

  return (
    <>
      {isCreating || isUpdating ? (
        <Loading />
      ) : (
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <FormField
                control={form.control}
                name={`attention`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Attention</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter attention"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <FormSearchSelect<CountryColumn>
                loading={countryLoading}
                data={countryData}
                displayField="name"
                valueField="id"
                form={form}
                name="country_id"
                placeholder="Select country"
                title="Country"
                className="w-[305px]"
              />
              <FormSearchSelect<CityColumn>
                loading={cityLoading}
                data={citiesData}
                displayField="name"
                valueField="id"
                form={form}
                name="city_id"
                placeholder="Select city"
                title="City"
                className="w-[305px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name={`post_code`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Post code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter post code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`state`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter state"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name={`phone`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter phone number"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormField
                control={form.control}
                name={`address`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter address"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row-reverse items-center pt-5">
              <Button variant="default" type="submit" className="w-fit ml-2">
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                className="w-fit"
                onClick={() => modalClose()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
