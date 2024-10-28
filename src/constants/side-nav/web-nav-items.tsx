import { NavItem } from "@/types";
import { LayoutDashboard, MapPin, RollerCoaster, Store, Users } from "lucide-react";

const webNavItems: NavItem[] = [
	{
		title: "Dashboard",
		icon: LayoutDashboard,
		href: "/web",
		color: "text-sky-500",
		permissions: ["web", "organizations", "users", "locations", "roles"],
	},
	{
		title: "Organizations",
		icon: Store,
		href: "/web/organizations",
		color: "text-sky-500",
		permissions: ["organizations"],
	},

	{
		title: "Locations",
		icon: MapPin,
		href: "/web/locations",
		color: "text-sky-500",
		permissions: ["locations"],
	},
	{
		title: "User Role",
		icon: RollerCoaster,
		href: "/web/role",
		color: "text-sky-500",
		permissions: ["roles"],
	},
	{
		title: "Users",
		icon: Users,
		href: "/web/users",
		color: "text-sky-500",
		permissions: ["users"],
	},
];

export default webNavItems;
