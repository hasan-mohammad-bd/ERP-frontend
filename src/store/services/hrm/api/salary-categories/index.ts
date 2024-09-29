
  import { hrmApi } from "../..";
  import { DeleteResponse, PaginationInfo } from "@/types";
import { SalaryCategoriesFormColumn, SalaryCategoriesFormValueColumn, UpdateSalaryCategoriesFormColumn } from "@/lib/validators/hrm/salary-categories";
  
  const salaryCategoriesApi = hrmApi.injectEndpoints({
    endpoints: (build) => ({
      getSalaryCategories: build.query<
      { data: SalaryCategoriesFormColumn[]; meta: PaginationInfo },
      string
    >({
        query: (params) => `salary-categories?${params}`,
        providesTags: ["salary-categories"],
      }),
      createSalaryCategories: build.mutation<
        { data: SalaryCategoriesFormValueColumn },
        SalaryCategoriesFormValueColumn
      >({
        query: (newSalaryCategories) => ({
          url: `salary-categories`,
          method: "POST",
          body: newSalaryCategories,
        }),
        invalidatesTags: ["salary-categories"], 
      }),
      removeSalaryCategories: build.mutation<DeleteResponse, number>({
        query: (salaryCategoriesId) => ({
          url: `salary-categories/${salaryCategoriesId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["salary-categories"], 
      }),
      updateSalaryCategories: build.mutation<{ data: SalaryCategoriesFormColumn }, { salaryCategoriesId: number, updatedSalaryCategories: UpdateSalaryCategoriesFormColumn }>({
        query: ({ salaryCategoriesId, updatedSalaryCategories }) => ({
          url: `salary-categories/${salaryCategoriesId}`,
          method: "PUT",
          body: updatedSalaryCategories,
        }),
        invalidatesTags: ["salary-categories"],
      }),
    }),
    overrideExisting: false,
  });
  
  export const {
    useGetSalaryCategoriesQuery,
    useCreateSalaryCategoriesMutation,
    useRemoveSalaryCategoriesMutation,
    useUpdateSalaryCategoriesMutation
  } = salaryCategoriesApi;
