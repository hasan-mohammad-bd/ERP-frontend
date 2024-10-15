import { NavItem } from "@/types";
import finance from "@/assets/images/financial-profit.png";
import accounts from "@/assets/images/accounting.png";
import hrm from "@/assets/images/hrm.png";
import crm from "@/assets/images/crm.png";
import mfg from "@/assets/images/factory.png";
import web from "@/assets/images/app-development.png";

export const mainNavItems: Pick<NavItem, "title" | "href" | "image">[] = [
	{ title: "Finance", href: "/finance", image: finance },
	{ title: "HRM", href: "/hrm", image: hrm },
	{ title: "Accounts", href: "/accounts", image: accounts },
	{ title: "Billing", href: "/billing", image: accounts},
	{ title: "Web", href: "/web", image: web },
	{ title: "CRM", href: "/crm", image: crm },
	{ title: "MFG", href: "/mfg", image: mfg },
];
