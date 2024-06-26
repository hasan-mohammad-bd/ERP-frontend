import { cn } from "@/utils";
import { type NavItem } from "@/types";
import { buttonVariants } from "@/components/ui/button";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./subnav-accordion";
import { useEffect, useState } from "react";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

interface SideNavProps {
	items: NavItem[];
	setOpen?: (open: boolean) => void;
	className?: string;
}

export function SideNav({ items, setOpen, className }: SideNavProps) {
	const path = useLocation().pathname;
	const { isOpen } = useAppSelector((state) => state.common);
	const [openItem, setOpenItem] = useState("");
	const [lastOpenItem, setLastOpenItem] = useState("");

	useEffect(() => {
		if (isOpen) {
			setOpenItem(lastOpenItem);
		} else {
			setLastOpenItem(openItem);
			setOpenItem("");
		}
	}, [isOpen]);

	return (
		<nav className="space-y-2">
			{items.map((item) =>
				item.isChildren ? (
					<Accordion
						type="single"
						collapsible
						className="space-y-2"
						key={item.title}
						value={openItem}
						onValueChange={setOpenItem}
					>
						<AccordionItem value={item.title} className="border-none ">
							<AccordionTrigger
								className={cn(
									buttonVariants({ variant: "ghost" }),
									"group relative flex h-9 justify-between px-2 py-2 text-base font-medium  duration-200 hover:bg-muted hover:no-underline"
								)}
							>
								<div className="p-2 bg-muted rounded-full ">
									<item.icon strokeWidth={2} size={16} className={cn(" ")} />
								</div>

								{/* EAEAEA - Ashiq sir*/}

								<div
									className={cn(
										"absolute left-14 text-sm font-medium  duration-200 ",
										!isOpen && className
									)}
								>
									{item.title}
								</div>

								{isOpen && (
									// <ChevronDownIcon
									<ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
								)}
							</AccordionTrigger>
							<AccordionContent className="mt-2 space-y-2 pb-1">
								{item.children?.map((child) => (
									<Link
										key={child.title}
										to={child.href}
										onClick={() => {
											if (setOpen) setOpen(false);
										}}
										className={cn(
											buttonVariants({ variant: "ghost" }),
											"group relative flex h-9 justify-start gap-x-3 !mt-1 mx-auto px-2",
											path === child.href &&
												"bg-muted font-normal hover:bg-muted"
										)}
									>
										{!isOpen && (
											<div className="p-2 bg-muted rounded-full">
												<child.icon
													strokeWidth={2}
													size={16}
													className={cn("")}
												/>
											</div>
										)}
										<div
											className={cn(
												"absolute left-14 text-sm font-normal  duration-200",
												!isOpen && className
											)}
										>
											{child.title}
										</div>
									</Link>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				) : (
					<Link
						key={item.title}
						to={item.href}
						onClick={() => {
							if (setOpen) setOpen(false);
						}}
						className={cn(
							buttonVariants({ variant: "ghost" }),
							"group relative flex h-10 justify-start px-2",
							path === item.href && "bg-muted font-semibold hover:bg-muted"
						)}
					>
						<div className="p-2 bg-muted rounded-full">
							<item.icon strokeWidth={2} size={16} className={cn("")} />
						</div>
						<span
							className={cn(
								"absolute left-14 text-sm font-medium  duration-200",
								!isOpen && className
							)}
						>
							{item.title}
						</span>
					</Link>
				)
			)}
		</nav>
	);
}
