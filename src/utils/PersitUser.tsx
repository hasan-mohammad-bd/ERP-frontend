import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	setCredentials,
	setUserLoading,
} from "@/store/services/erp-main/slices/authSlice";
import { useAuth } from "@/store/hooks";
import { useGetUserQuery } from "@/store/services/erp-main/api/user";

const PersistUser = () => {
	const auth = useAuth();
	const dispatch = useDispatch();
	const { data: userData, isLoading } = useGetUserQuery(null, {
		skip: !auth.isLoading,
	});
	const loadedUser = userData?.data;

	useEffect(() => {
		if (!auth.user && loadedUser) {
			// console.log(loadedUser, "dssdsd");
			dispatch(setCredentials({ user: loadedUser, isLoading: false }));
		} else {
			!isLoading && dispatch(setUserLoading(false));
		}
	}, [auth.user, loadedUser, isLoading, dispatch]);

	return null;
};

export default PersistUser;
