import {
  ChangeStatusColumn,
  ChangeStatusFormValues,
} from "@/lib/validators";
import { hrmApi } from "../..";


const changeStatusApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({

    changeStatus: build.mutation<
      { data: ChangeStatusColumn },
      ChangeStatusFormValues
    >({
      query: (newStatus) => ({
        url: `job-applies/change-status`, 
        method: "POST",
        body: newStatus,
      }),
      invalidatesTags: ["change-status", "job-applies"]
    }),


  }),
  overrideExisting: false,
});

export const {
  useChangeStatusMutation
} = changeStatusApi;
