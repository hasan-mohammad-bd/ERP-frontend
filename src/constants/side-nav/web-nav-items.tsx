import { NavItem } from "@/types";
import { LayoutDashboard, MapPin, Store } from "lucide-react";

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
];

export default webNavItems;
