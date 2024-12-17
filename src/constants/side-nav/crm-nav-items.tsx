import { NavItem } from "@/types";
import { LayoutDashboard, Users, PlayIcon } from "lucide-react";

const crmNavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/crm",
    color: "text-sky-500",
    permissions: ["accounts"],
  },
  {
    title: "Lead ",
    icon: Users,
    href: "/crm",
    color: "text-sky-500",
    permissions: ["accounts"],
    isChildren: true,
    children: [
      {
        title: "Lead Group",
        icon: PlayIcon,
        color: "text-sky-500",
        href: "lead/lead-groups",
        permissions: ["accounts"],
      },
    ],
  },
];

export default crmNavItems;
