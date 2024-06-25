import { cn } from "@/utils";
import { Link } from "react-router-dom";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn("flex items-center space-x-4 lg:space-x-6", className)}
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
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				HRM
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
