import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { User } from "../api/user/types";

type AuthState = {
	user: User | null;
	isLoading: boolean;
};

const authSlice = createSlice({
	name: "auth",
	initialState: { user: null, isLoading: true } as AuthState,
	reducers: {
		setCredentials: (
			state,
			{
				payload: { user, isLoading },
			}: PayloadAction<{ user: User | null; isLoading: boolean }>
		) => {
			state.user = user;
			state.isLoading = isLoading;
		},
		setUserLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.isLoading = payload;
		},
	},
});

export const { setCredentials, setUserLoading } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;
