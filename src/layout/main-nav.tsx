import { cn } from "@/utils";
import { Link } from "react-router-dom";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				"flex items-center h-full space-x-4 lg:space-x-6",
				className
			)}
			{...props}
		>
			<Link
				to="/examples/finance"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Finance
			</Link>
			<Link
				to="/examples/hrm"
				className="text-sm font-bold transition-colors hover:text-primary h-full relative flex items-center"
			>
				HRM
				<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"></div>
			</Link>
			<Link
				to="/examples/crm"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				CRM
			</Link>
			<Link
				to="/examples/crm"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				MFG
			</Link>
			<Link
				to="/examples/crm"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				E-Commerce
			</Link>
		</nav>
	);
}
