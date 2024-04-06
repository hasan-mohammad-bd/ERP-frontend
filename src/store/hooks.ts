import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./";
import { selectAuth } from "./services/erp-main/slices/authSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
	// const { user, isLoading } = useSelector(selectAuth);
	// return useMemo(() => ({ user, isLoading }), [user, isLoading]);
	return useSelector(selectAuth);
};
