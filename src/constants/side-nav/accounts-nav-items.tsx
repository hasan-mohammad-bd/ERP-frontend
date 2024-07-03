import { NavItem } from "@/types";
import { Clock, LayoutDashboard, MapPin, Settings } from "lucide-react";

const accountsNavItems: NavItem[] = [
	{
		title: "Dashboard",
		icon: LayoutDashboard,
		href: "/accounts",
		color: "text-sky-500",
	},
	{
		title: "Financial Year",
		icon: Clock,
		href: "/accounts/financial-year",
		color: "text-sky-500",
	},
	{
		title: "Chart Of Account",
		icon: MapPin,
		href: "/accounts/chart-of-accounts",
		color: "text-sky-500",
	},
	{
		title: "Contact",
		icon: MapPin,
		href: "/accounts/contact",
		color: "text-sky-500",
	},
	{
		title: "Accounts Settings",
		icon: Settings,
		href: "/accounts/accounts-settings",
		color: "text-sky-500",
	},
	{
		title: "Entry",
		icon: Clock,
		href: "/accounts/entry",
		color: "text-sky-500",
		isChildren: true,
		children: [
			{
				title: "Journal Voucher",
				icon: Clock,
				href: "/accounts/journal-voucher",
				color: "text-sky-500",
			},
			{
				title: "Receipt Voucher",
				icon: Clock,
				href: "/accounts/receipt-voucher",
				color: "text-sky-500",
			},
			{
				title: "Payment Voucher",
				icon: Clock,
				href: "/accounts/payment-voucher",
				color: "text-sky-500",
			},
		],

	}
];

export default accountsNavItems;
