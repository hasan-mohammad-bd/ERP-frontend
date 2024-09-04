
import { CheckBookFormValues, CheckBookRow } from "@/lib/validators/accounts/check-books";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const checkBookApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getCheckBooks: build.query<
			{ data: CheckBookRow[]; meta: PaginationInfo },
			string
		>({
			query: (params) => `check-books?${params}`,
			providesTags: ["check-books"],
		}),
		createCheckBook: build.mutation<
			{ data: CheckBookRow },
			CheckBookFormValues
		>({
			query: (newCheckBook) => ({
				url: `check-books`,
				method: "POST",
				body: newCheckBook,
			}),
			invalidatesTags: ["check-books"],
		}),
		removeCheckBook: build.mutation<DeleteResponse, number>({
			query: (checkBookId) => ({
				url: `check-books/${checkBookId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["check-books"],
		}),
		updateCheckBook: build.mutation<
			{ data: CheckBookRow },
			{ checkBookId: number; updatedCheckBook: CheckBookFormValues }
		>({
			query: ({ checkBookId, updatedCheckBook }) => ({
				url: `check-books/${checkBookId}`,
				method: "PUT",
				body: updatedCheckBook,
			}),
			invalidatesTags: ["check-books"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetCheckBooksQuery,
	useCreateCheckBookMutation,
	useRemoveCheckBookMutation,
	useUpdateCheckBookMutation,
} = checkBookApi;
