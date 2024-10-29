import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { UserAvatar } from "./user-avatar";
import { User } from "@/store/services/erp-main/api/user/types";
import { useLogoutUserMutation } from "@/store/services/erp-main/api/user";

type Props = {
	user: Pick<User, "name" | "image" | "email">;
};

export function UserNav({ user }: Props) {
	const [logout] = useLogoutUserMutation();

	console.log('user_image',user.image)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar
					user={{ name: user.name || null, image: user.image || null }}
					className="h-8 w-8 cursor-pointer"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<div className="flex items-center justify-start gap-4 p-2">
					<div className="flex flex-col space-y-1 leading-none">
						{user.name && <p className="font-medium">{user.name}</p>}
						{user.email && (
							<p className="w-[200px] truncate text-sm text-zinc-700">
								{user.email}
							</p>
						)}
					</div>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Profile
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Billing
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Settings
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>New Team</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Button
						variant="outline"
						className="w-full cursor-pointer"
						onClick={() => logout()}
					>
						<LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
						Log Out
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
