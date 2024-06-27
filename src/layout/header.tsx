// import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Bell, Boxes, Plus, Settings } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { Link } from "react-router-dom";
import { cn } from "@/utils";
import { UserNav } from "./user-nav";
import { MainNav } from "./main-nav";
import { useAuth } from "@/store/hooks";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/coonfig/site";

export default function Header() {
	const { user } = useAuth();
	return (
		<div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
			<div className="flex h-12 items-center px-4">
				<Link
					to={"/"}
					className="hidden items-center justify-between gap-2 md:flex"
				>
					<Boxes className="h-6 w-6" />
					<h1 className="text-lg font-semibold">{siteConfig.name}</h1>
				</Link>
				<MainNav className="mx-6" />
				{/* <ModuleSelector /> */}
				<div className={cn("block md:!hidden")}>
					<MobileSidebar />
				</div>
				<div className="ml-auto flex items-center space-x-4">
					<Plus strokeWidth={2} size={16} />
					<Bell strokeWidth={2} size={16} />
					<Settings strokeWidth={2} size={16} />
					{user && <UserNav user={user} />}
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
}
