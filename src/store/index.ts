import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { jsonPlaceholderApi } from "./services/json-placeholder";
// import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
