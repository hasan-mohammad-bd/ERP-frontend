import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";
import {
  AccountsSettingsRow,
  AccountsSettingsFromValues,
  CurrencyRow,
} from "@/lib/validators/accounts";
import { Loading } from "@/components/common/loading";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AccountsSettingsSchema } from "@/lib/validators/accounts/accounts-settings";
import { useCreateAccountSettingMutation } from "@/store/services/accounts/api/accounts-settings";
import { useGetCurrenciesQuery } from "@/store/services/accounts/api/currency";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import MultiSelect from "./multi-select";
// import { Switch } from "@/components/ui/switch";

interface UpdateAccountsSettingsFormProps {
  modalClose: () => void;
  rowData?: AccountsSettingsRow | null;
}

export function UpdateAccountsSettingForm({
  modalClose,
  rowData: previousData,
}: UpdateAccountsSettingsFormProps) {
  const [createAccountSetting, { isLoading: updateLoading }] =
    useCreateAccountSettingMutation();

  const [selectedCurrencies, setSelectedCurrencies] = useState<number[]>(
    previousData?.currencies.map((currency) => currency.id) || []
  );

  const { data: currencies, isLoading: currencyLoading } =
    useGetCurrenciesQuery("page=1&per_page=1000");



  const countryData = currencies?.data || [];

  const form = useForm<AccountsSettingsFromValues>({
    resolver: zodResolver(AccountsSettingsSchema),
    defaultValues: {
      currency_id: previousData?.currency?.id || 13,
      multi_currency: previousData?.multi_currency || 0,
      currencies: previousData?.currencies || [],
    },
  });


  async function onSubmit(data: AccountsSettingsFromValues) {
    const latestData = {
      ...data,
      currencies: selectedCurrencies.map((id) => ({ id: id })),
    };
    try {
      if (previousData) {
        await createAccountSetting(latestData);

        toast.success("Sub account updated successfully");
        modalClose();
      }
    } catch (error) {
      console.log(error);
    }
  }

	const watchCurrency = Number(form.watch("currency_id"))

  return (
    <>
      {updateLoading ? (
        <div className="h-56">
          <Loading />
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="currency_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Default Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      previousData?.currency_id
                        ? String(previousData?.currency_id)
                        : undefined
                    }
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {currencyLoading ? (
                        <Loading />
                      ) : (
                        countryData?.map((currency: CurrencyRow) => (
                          <SelectItem
                            key={currency.id}
                            value={String(currency.id)}
                          >
                            {currency.name}
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
              control={form.control}
              name="multi_currency"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Multi Currency </FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value === 1}
                      onCheckedChange={(checked: boolean) => {
                        field.onChange(checked ? 1 : 0);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {form.watch("multi_currency") === 1 && (
              <FormField
                control={form.control}
                name="currencies"
                render={() => (
                  <FormItem>
                    <FormLabel>Select Other Currencies</FormLabel>
                    <MultiSelect
                      options={countryData
                        .filter((currency: CurrencyRow) => currency.id !== watchCurrency)
                        .map((currency: CurrencyRow) => ({
                          value: currency.id,
                          label: currency.name,
                        }))}
                      value={selectedCurrencies}
                      onChange={setSelectedCurrencies}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div>
              <Button variant="default" type="submit" className="w-full mt-4">
                {previousData ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
