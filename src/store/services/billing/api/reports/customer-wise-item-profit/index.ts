import { inventoryApi } from "../../..";
import { CustomerWiseItemProfitDataType } from "./type";

const customerWiseItemProfitApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getCustomerWiseItemProfit: build.query<
    CustomerWiseItemProfitDataType,
      string
    >({
      query: (params) => `report/customer-wise-item-profit?${params}`,
      providesTags: ["customer-wise-item-profit"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCustomerWiseItemProfitQuery
} = customerWiseItemProfitApi;
