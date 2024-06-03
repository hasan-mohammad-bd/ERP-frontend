import {
  RosterFromValues,
  type RosterColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const rostersApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getRosters: build.query<{ data: RosterColumn[] }, void>({
      query: () => "rosters",
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
