import { NavItem } from "@/types";
import { LayoutDashboard, MapPin, RollerCoaster, Store, Users } from "lucide-react";

const webNavItems: NavItem[] = [
	{
		title: "Dashboard",
		icon: LayoutDashboard,
		href: "/web",
		color: "text-sky-500",
	},
	{
		title: "Organizations",
		icon: Store,
		href: "/web/organizations",
		color: "text-sky-500",
	},

	{
		title: "Locations",
		icon: MapPin,
		href: "/web/locations",
		color: "text-sky-500",
	},
	{
		title: "User Role",
		icon: RollerCoaster,
		href: "/web/role",
		color: "text-sky-500",
	},
	{
		title: "Users",
		icon: Users,
		href: "/web/users",
		color: "text-sky-500",
	},
];

export default webNavItems;
