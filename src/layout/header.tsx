// import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Boxes } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { Link } from "react-router-dom";
import { cn } from "@/utils";
import { UserNav } from "./user-nav";
import { MainNav } from "./main-nav";
import { Search } from "./search";
import { ModuleSelector } from "./module-selector";
import { useAuth } from "@/store/hooks";

export default function Header() {
	const { user } = useAuth();
	return (
		<div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
			<div className="flex h-16 items-center px-4">
				<Link
					to={"/"}
					className="hidden items-center justify-between gap-2 md:flex"
				>
					<Boxes className="h-6 w-6" />
					<h1 className="text-lg font-semibold">Akaar ERP</h1>
				</Link>
				<MainNav className="mx-6" />
				<ModuleSelector />
				<div className={cn("block md:!hidden")}>
					<MobileSidebar />
				</div>

				<div className="ml-auto flex items-center space-x-4">
					<Search />
					{user && <UserNav user={user} />}
				</div>
			</div>
		</div>
	);
}
