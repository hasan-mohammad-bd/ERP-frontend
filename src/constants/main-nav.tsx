import { NavItem } from "@/types";
import finance from "@/assets/images/financial-profit.png";
import accounts from "@/assets/images/accounting.png";
import hrm from "@/assets/images/hrm.png";
import crm from "@/assets/images/crm.png";
import mfg from "@/assets/images/factory.png";
import web from "@/assets/images/app-development.png";

// Define the available menu items
const allNavItems: Pick<NavItem, "title" | "href" | "image">[] = [
  { title: "Finance", href: "/finance", image: finance },
  { title: "HRM", href: "/hrm", image: hrm },
  { title: "Accounts", href: "/accounts", image: accounts },
  { title: "Billing", href: "/billing", image: accounts },
  { title: "CRM", href: "/crm", image: crm },
  { title: "MFG", href: "/mfg", image: mfg },
  { title: "Web", href: "/web", image: web },
];

// Get modules from environment variables (comma-separated string)
const modulesEnv = import.meta.env.VITE_MODULES || ""; 
const enabledModules = modulesEnv.split(",").map((module: string) => module.trim().toLowerCase());

// Filter the navigation items based on the enabled modules
export const mainNavItems = allNavItems.filter((item) =>
  enabledModules.includes(item.title.toLowerCase())
);
