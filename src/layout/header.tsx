// import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Boxes } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { Link } from "react-router-dom";
import { cn } from "@/utils";
import { UserNav } from "./user-nav";
import { useAppSelector } from "@/store/hooks";

export default function Header() {
	const { user } = useAppSelector((state) => state.auth);

	return (
		<div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
			<nav className="flex h-16 items-center justify-between px-4">
				<Link
					to={"/"}
					className="hidden items-center justify-between gap-2 md:flex"
				>
					<Boxes className="h-6 w-6" />
					<h1 className="text-lg font-semibold">Akaar ERP</h1>
				</Link>
				<div className={cn("block md:!hidden")}>
					<MobileSidebar />
				</div>

				<div className="flex items-center gap-2">
					{/* <ThemeToggle /> */}
					{user && <UserNav user={user} />}
				</div>
			</nav>
		</div>
	);
}
