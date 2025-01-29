import { TargetUserValue } from "@/lib/validators/billing/user-target";
import { inventoryApi } from "../..";
import { DivisionRow } from "@/lib/validators/billing/regions";

const userTargetApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    createUserTarget: build.mutation<
      { data: DivisionRow }, 
      TargetUserValue
    >({
      query: (formData) => ({
        url: `user-target`,
        method: "POST",
        body: formData, 
      }),
      invalidatesTags: ["user-target", "region-user"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateUserTargetMutation,
} = userTargetApi;
