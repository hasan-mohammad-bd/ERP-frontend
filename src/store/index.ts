import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/erp-main";
import authReducer from "./services/erp-main/slices/authSlice";
import commonReducer from "./services/erp-main/slices/commonSlice";
import { hrmApi } from "./services/hrm";
import { accountApi } from "./services/accounts";
// import { financeApi } from "./services/finance/api";
// import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    common: commonReducer,
    [authApi.reducerPath]: authApi.reducer,
    [hrmApi.reducerPath]: hrmApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware, // Add authApi middleware
      hrmApi.middleware, // Add authApi middleware
      accountApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
