import withFallback from "@/utils/with-fallback";
import {
	ErrorPage,
	Layout,
	Organization,
	Location,
	Dashboard,
} from "./components";
import { AddOrganizationForm } from "@/pages/web/organization/components/add-organization-form";
import UserRole from "@/pages/web/user-role";
import Users from "@/pages/web/users";


const webRoutes = {
	path: "web/",
	element: withFallback(<Layout />),
	children: [
		{
			index: true,
			element: withFallback(<Dashboard title="Web" />),
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "organizations/",
			errorElement: withFallback(<ErrorPage />),
			children: [
				{
					index: true,
					element: withFallback(<Organization />),
					errorElement: withFallback(<ErrorPage />),
				},
				{
					path: "add",
					element: withFallback(<AddOrganizationForm />),
					errorElement: withFallback(<ErrorPage />),
				},
				{
					path: "edit/:id",
					element: withFallback(<AddOrganizationForm />),
					errorElement: withFallback(<ErrorPage />),
				}
			]
		},
		{
			path: "locations",
			element: withFallback(<Location />),
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "role",
			element: withFallback(<UserRole />),
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "users",
			element: withFallback(<Users />),
			errorElement: withFallback(<ErrorPage />),
		},
	],
};

export default webRoutes;
