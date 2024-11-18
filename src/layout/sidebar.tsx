import { Input } from "@/components/ui/input";
import sideNavItems from "@/constants/side-nav";
import { useAppDispatch, useAppSelector, useAuth } from "@/store/hooks";
import { toggleSideBar } from "@/store/services/erp-main/slices/commonSlice";
import { NavItem } from "@/types";
import { cn } from "@/utils";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { SideNav } from "./side-nav";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const { isOpen } = useAppSelector((state) => state.common);
  const [status, setStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Getting module based nav items
  const modulePath = useLocation().pathname.split("/")[1];
  const moduleBaseNavItems =
    sideNavItems[modulePath as keyof typeof sideNavItems] || [];

  const handleToggle = () => {
    setStatus(true);
    dispatch(toggleSideBar());
    setTimeout(() => setStatus(false), 500);
  };

  // Deep copy function to avoid mutating original array
  const deepCopy = (items: NavItem[]): NavItem[] => {
    return items.map((item) => ({
      ...item,
      children: item.children ? deepCopy(item.children) : [],
    }));
  };

  // Filter items based on user roles
  const filterByRole = (items: NavItem[]): NavItem[] => {
    if (!user) return items;
    const permissionSet = new Set(user.role?.permissions || []);

    return items.filter((item) => {
      const hasAccess = item.permissions?.some((permission: string) =>
        permissionSet.has(permission)
      );

      if (item.isChildren && item.children) {
        item.children = filterByRole(item.children); // Recursively filter children
        return item.children.length > 0 && hasAccess; // Only include if children exist and user has access
      }

      return hasAccess;
    });
  };

  // Menu Search Logic
  const filterItems = (items: NavItem[]) => {
    const copiedItems = deepCopy(items);
    return copiedItems.filter((item) => {
      if (item.isChildren) {
        item.children =
          item.children?.filter((child) =>
            child.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) || []; // Provide a default empty array if children is undefined
        return item.children.length > 0;
      }
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  // const filteredNavItems = searchTerm
  //   ? filterItems(moduleBaseNavItems)
  //   : moduleBaseNavItems;

  const filteredByRoleItems = filterByRole(moduleBaseNavItems);
  const filteredNavItems = searchTerm
    ? filterItems(filteredByRoleItems)
    : filteredByRoleItems;

  return (
    <nav
      className={cn(
        `relative hidden h-screen border-r pt-10 md:block`,
        status && "duration-500",
        isOpen ? "w-60" : "w-[60px]",
        className
      )}
    >
      <ArrowLeft
        size={28}
        className={cn(
          "absolute -right-3 top-16 cursor-pointer rounded-full border p-1 bg-background text-3xl text-foreground",
          !isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="py-4 w-full">
        <div className={` ${isOpen ? "px-2" : "px-1"}  py-2 w-full`}>
          {isOpen && (
            <div className="pl-2 pr-5">
              <Input
                type="search"
                placeholder="Menu Search..."
                className="w-full max-w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
          <div className={`${isOpen ? "mt-3" : "mt-8"}`}>
            <ScrollArea className="h-[calc(100vh-10rem)] space-y-1 pr-4">
              <SideNav
                className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
                items={filteredNavItems}
              />
            </ScrollArea>
          </div>
        </div>
      </div>
    </nav>
  );
}
