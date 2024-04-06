import LoadingOverlay from "@/components/common/loading-overly";
import { useAuth } from "@/store/hooks";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function PrivateOutlet() {
	const auth = useAuth();
	const location = useLocation();

	if (auth.isLoading) {
		return (
			<div className="min-h-screen">
				<LoadingOverlay />
			</div>
		);
	}
	if (auth.user) {
		return <Outlet />;
	}
	return <Navigate to="/login" state={{ from: location }} />;
}
