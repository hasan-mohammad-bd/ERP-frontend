import { EnumRow } from "@/lib/validators/accounts/enum";
import { accountApi } from "@/store/services/accounts";


const religionApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getEnum: build.query<{account_nature: string[]}, void>({
      query: () => "catalogs/enum", 
      providesTags: ["catalogs/enum"], 
    }),
  }),
  overrideExisting: false,
});

export const { useGetEnumQuery } = religionApi;
