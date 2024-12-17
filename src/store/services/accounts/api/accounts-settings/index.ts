import {
  AccountsSettingsFromValues,
  type AccountsSettingsRow,
} from "@/lib/validators/accounts";
import { accountApi } from "../..";


const accountsSettingsApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getAccountsSettings: build.query<{ data: AccountsSettingsRow }, void>({
      query: () => `accounts-settings`,
      providesTags: ["accounts-settings"],
    }),
    createAccountSetting: build.mutation<
      { data: AccountsSettingsRow },
      AccountsSettingsFromValues
    >({
      query: (newAccountSetting) => ({
        url: `accounts-settings`,
        method: "POST",
        body: newAccountSetting,
      }),
      invalidatesTags: ["accounts-settings"],
    }),

    updateAccountSetting: build.mutation<
      { data: AccountsSettingsRow },
      {
        accountSettingId: number;
        updatedAccountSetting: AccountsSettingsFromValues;
      }
    >({
      query: ({ accountSettingId, updatedAccountSetting }) => ({
        url: `accounts-settings/${accountSettingId}`,
        method: "PUT",
        body: updatedAccountSetting,
      }),
      invalidatesTags: ["accounts-settings"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAccountsSettingsQuery,
  useCreateAccountSettingMutation,
  useUpdateAccountSettingMutation,
} = accountsSettingsApi;
