import { EntryFromValues, type EntryRow } from "@/lib/validators/accounts";
import { DeleteResponse, PaginationInfo } from "@/types";
import { accountApi } from "../..";

const entryApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getEntries: build.query<{ data: EntryRow[]; meta: PaginationInfo }, string>(
      {
        query: (params) => `entries?${params}`,

        providesTags: ["entries"],
      }
    ),
    getEntryById: build.query<{ data: EntryRow; meta: PaginationInfo }, string>(
      {
        query: (params) => `entries/${params}`,

        providesTags: ["entries"],
      }
    ),
    createEntry: build.mutation<{ data: EntryRow }, FormData | EntryFromValues>(
      {
        query: (newEntry) => ({
          url: `entries`,
          method: "POST",
          body: newEntry,
        }),
        invalidatesTags: ["entries"],
      }
    ),

    removeEntry: build.mutation<DeleteResponse, number>({
      query: (entryId) => ({
        url: `entries/${entryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["entries"],
    }),
    updateEntry: build.mutation<
      { data: EntryRow },
      { entryId: number; updatedEntry: EntryFromValues | FormData }
    >({
      query: ({ entryId, updatedEntry }) => ({
        url: `entries/${entryId}`,
        method: "PUT",
        body: updatedEntry,
      }),
      invalidatesTags: ["entries"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEntriesQuery,
  useGetEntryByIdQuery,
  useCreateEntryMutation,
  useRemoveEntryMutation,
  useUpdateEntryMutation,
} = entryApi;
