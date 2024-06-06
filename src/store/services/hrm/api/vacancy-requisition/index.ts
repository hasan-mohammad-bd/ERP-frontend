import {
  VacancyRequisitionFromValues,
  type VacancyRequisitionColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const vacancyRequisitionApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getVacancyRequisitions: build.query<
    { data: VacancyRequisitionColumn[]; meta: PaginationInfo },
    string
  >({
      query: (params) => `vacancy-requisitions?${params}`,
      providesTags: ["vacancy-requisitions"],
    }),
    createVacancyRequisition: build.mutation<
      { data: VacancyRequisitionColumn },
      VacancyRequisitionFromValues
    >({
      query: (newVacancyRequisition) => ({
        url: `vacancy-requisitions`,
        method: "POST",
        body: newVacancyRequisition,
      }),
      invalidatesTags: ["vacancy-requisitions"],
    }),
    removeVacancyRequisition: build.mutation<DeleteResponse, number>({
      query: (vacancyRequisitionId) => ({
        url: `vacancy-requisitions/${vacancyRequisitionId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vacancy-requisitions"],
    }),
    updateVacancyRequisition: build.mutation<{ data: VacancyRequisitionColumn }, { vacancyRequisitionId: number, updatedVacancyRequisition: VacancyRequisitionFromValues }>({
      query: ({ vacancyRequisitionId, updatedVacancyRequisition }) => ({
        url: `vacancy-requisitions/${vacancyRequisitionId}`,
        method: "PUT", 
        body: updatedVacancyRequisition,
      }),
      invalidatesTags: ["vacancy-requisitions"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetVacancyRequisitionsQuery,
  useCreateVacancyRequisitionMutation,
  useRemoveVacancyRequisitionMutation,
  useUpdateVacancyRequisitionMutation
} = vacancyRequisitionApi;

