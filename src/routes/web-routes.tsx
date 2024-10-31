import withFallback from "@/utils/with-fallback";
import {
	ErrorPage,
	Layout,
	Organization,
	Location,
	// Dashboard,
} from "./components";
import { AddOrganizationForm } from "@/pages/web/organization/components/add-organization-form";
import UserRole from "@/pages/web/user-role";
import Users from "@/pages/web/users";
import { AddUserRoleForm } from "@/pages/web/user-role/components/add-user-role-form";
import RoleAccess from "@/lib/access-control/role-access";
import { Navigate } from "react-router-dom";
import ApprovalGroup from "@/pages/web/approval-groups";
import { AddApprovalGroups } from "@/pages/web/approval-groups/components/add-approval-groups-form";


const webRoutes = {
	path: "web/",
	element: withFallback(<Layout />),
	children: [
		{
			index: true,
			// element: withFallback(
			// 	<RoleAccess roles={["web", "organizations", "users", "locations", "roles"]} showUnauthorizedPage={true}>
			// 		<Dashboard title="Web" />
			// 	</RoleAccess>),
			element: <Navigate to="organizations" />,
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "organizations/",
			errorElement: withFallback(<ErrorPage />),
			children: [
				{
					index: true,
					element: withFallback(
						<RoleAccess roles={["organizations"]} showUnauthorizedPage={true}>
							<Organization />
						</RoleAccess>),
					errorElement: withFallback(<ErrorPage />),
				},
				{
					path: "add",
					element: withFallback(
						<RoleAccess roles={["organizations.create"]} showUnauthorizedPage={true}>
							<AddOrganizationForm />
						</RoleAccess>
				),
					errorElement: withFallback(<ErrorPage />),
				},
				{
					path: "edit/:id",
					element: withFallback(
						<RoleAccess roles={["organizations.edit"]} showUnauthorizedPage={true}>
							<AddOrganizationForm />
						</RoleAccess>),
					errorElement: withFallback(<ErrorPage />),
				}
			]
		},
		{
			path: "approval-group/",
			errorElement: withFallback(<ErrorPage />),
			children: [
				{
					index: true,
					element: withFallback(
						<RoleAccess roles={["settings"]} showUnauthorizedPage={true}>
							<ApprovalGroup />
						</RoleAccess>),
					errorElement: withFallback(<ErrorPage />),
				},
				{
					path: "add",
					element: withFallback(
						<RoleAccess roles={["settings.create"]} showUnauthorizedPage={true}>
							<AddApprovalGroups />
						</RoleAccess>),
					errorElement: withFallback(<ErrorPage />),
				},
				{
					path: "edit/:id",
					element: withFallback(
						<RoleAccess roles={["settings.edit"]} showUnauthorizedPage={true}>
							<AddApprovalGroups />
						</RoleAccess>),
					errorElement: withFallback(<ErrorPage />),
				}
			]

		},
		{
			path: "locations",
			element: withFallback(
			<RoleAccess roles={["locations"]} showUnauthorizedPage={true}>
				<Location />
			</RoleAccess>),
			errorElement: withFallback(<ErrorPage />),
		},
		{
			path: "role",
			// element: withFallback(<UserRole />),
			errorElement: withFallback(<ErrorPage />),
			children: [
				{
					index: true,
					element: withFallback(
						<RoleAccess roles={["roles"]} showUnauthorizedPage={true}>
							<UserRole />
						</RoleAccess>),
					errorElement: withFallback(<ErrorPage />), 
				},
				{
					path: "add",
					element: withFallback(
						<RoleAccess roles={["roles.create"]} showUnauthorizedPage={true}>
							<AddUserRoleForm />
						</RoleAccess>),
					errorElement: withFallback(<ErrorPage />),
				},
				{
					path: "edit/:id",
					element: withFallback(
					<RoleAccess roles={["roles.edit"]} showUnauthorizedPage={true}>
						<AddUserRoleForm />
					</RoleAccess>),
					errorElement: withFallback(<ErrorPage />),
				}
			]
		},
		{
			path: "users",
			element: withFallback(
			<RoleAccess roles={["users"]} showUnauthorizedPage={true}>
				<Users />
			</RoleAccess>),
			errorElement: withFallback(<ErrorPage />),
		},
	],
};

export default webRoutes;
