import { cn } from "@/utils";
import { Link, useLocation } from "react-router-dom";
import { mainNavItems } from "@/constants/main-nav";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	const modulePath = useLocation().pathname.split("/")[1];
	return (
		<nav
			className={cn(
				"flex items-center h-full space-x-4 lg:space-x-6",
				className
			)}
			{...props}
		>
			{mainNavItems.map((item) => (
				<Link
					key={item.title}
					to={item.href}
					className={cn(
						"text-sm  text-muted-foreground transition-colors hover:text-primary",
						item.href === `/${modulePath}`
							? "font-bold text-foreground h-full relative flex items-center"
							: "font-medium"
					)}
				>
					{item.title}
					{item.href === `/${modulePath}` && (
						<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"></div>
					)}
				</Link>
			))}
		</nav>
	);
}
