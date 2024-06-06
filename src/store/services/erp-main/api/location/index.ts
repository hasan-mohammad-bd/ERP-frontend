import {
  LocationFromValues,
  type LocationColumn,
} from "@/lib/validators"; 
import { authApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const locationApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getLocations: build.query<
    { data: LocationColumn[]; meta: PaginationInfo },
    string
  >({ 
      query: (params) => `locations?${params}`, 
      providesTags: ["locations"], 
    }),
    createLocation: build.mutation<
      { data: LocationColumn },
      LocationFromValues
    >({
      query: (newLocation) => ({
        url: `locations`,
        method: "POST",
        body: newLocation,
      }),
      invalidatesTags: ["locations"], 
    }),
    removeLocation: build.mutation<DeleteResponse, number>({
      query: (locationId) => ({
        url: `locations/${locationId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["locations"], 
    }),
    updateLocation: build.mutation<{ data: LocationColumn }, { locationId: number, updatedLocation: LocationFromValues }>({
      query: ({ locationId, updatedLocation }) => ({
        url: `locations/${locationId}`, 
        method: "PUT", 
        body: updatedLocation,
      }),
      invalidatesTags: ["locations"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLocationsQuery, 
  useCreateLocationMutation, 
  useRemoveLocationMutation, 
  useUpdateLocationMutation 
} = locationApi;
