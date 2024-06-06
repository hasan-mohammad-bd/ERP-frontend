
import {
  RosterFromValues,
  type RosterColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const rostersApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getRosters: build.query<
    { data: RosterColumn[]; meta: PaginationInfo },
    string
  >({
      query: (params) => `rosters?${params}`,
      providesTags: ["rosters"],
    }),
    createRoster: build.mutation<
      { data: RosterColumn },
      RosterFromValues
    >({
      query: (newRoster) => ({
        url: `rosters`,
        method: "POST",
        body: newRoster,
      }),
      invalidatesTags: ["rosters"],
    }),
    removeRoster: build.mutation<DeleteResponse, number>({
      query: (rosterId) => ({
        url: `rosters/${rosterId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["rosters"],
    }),
    updateRoster: build.mutation<{ data: RosterColumn }, { rosterId: number, updatedRoster: RosterFromValues }>({
      query: ({ rosterId, updatedRoster }) => ({
        url: `rosters/${rosterId}`,
        method: "PUT", 
        body: updatedRoster,
      }),
      invalidatesTags: ["rosters"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetRostersQuery,
  useCreateRosterMutation,
  useRemoveRosterMutation,
  useUpdateRosterMutation
} = rostersApi;
