import { accountApi } from "../..";
import { DeleteResponse } from "@/types";

const mediaApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    removeAccountsMedia: build.mutation<DeleteResponse, number>({
      query: (mediaId) => ({
        url: `media/${mediaId}/delete`,
        method: "POST",
      }),
    }),
  }),
});

export const { useRemoveAccountsMediaMutation } = mediaApi;
