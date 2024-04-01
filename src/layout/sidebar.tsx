import React, { useState } from "react";
import { SideNav } from "./side-nav";
import { cn } from "@/utils";
import { ArrowLeft } from "lucide-react";
import { NavItems } from "@/constants/side-nav";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleSideBar } from "@/store/services/erp-main/commonSlice";

interface SidebarProps {
	className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
	const dispatch = useAppDispatch();
	const { isOpen } = useAppSelector((state) => state.common);
	const [status, setStatus] = useState(false);

	const handleToggle = () => {
		setStatus(true);
		dispatch(toggleSideBar());
		setTimeout(() => setStatus(false), 500);
	};
	return (
		<nav
			className={cn(
				`relative hidden h-screen border-r pt-20 md:block`,
				status && "duration-500",
				isOpen ? "w-72" : "w-[78px]",
				className
			)}
		>
			<ArrowLeft
				size={28}
				className={cn(
					"absolute -right-3 top-20 cursor-pointer rounded-full border p-1 bg-background text-3xl text-foreground",
					!isOpen && "rotate-180"
				)}
				onClick={handleToggle}
			/>
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<div className="mt-3 space-y-1">
						<SideNav
							className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
							items={NavItems}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}
