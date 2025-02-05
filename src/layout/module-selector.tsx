"use client";

import * as React from "react";
import {
	ArrowUpCircle,
	CheckCircle2,
	Circle,
	HelpCircle,
	LucideIcon,
} from "lucide-react";

import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

type Status = {
	value: string;
	label: string;
	icon: LucideIcon;
};

const statuses: Status[] = [
	{
		value: "e-commerce",
		label: "e-commerce",
		icon: HelpCircle,
	},
	{
		value: "manufacturing",
		label: "Manufacturing",
		icon: Circle,
	},
	{
		value: "supply-chain",
		label: "Supply chain",
		icon: ArrowUpCircle,
	},
	{
		value: "warehouse",
		label: "Warehouse",
		icon: CheckCircle2,
	},
];

export function ModuleSelector() {
	const [open, setOpen] = React.useState(false);
	const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
		null
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" size="sm" className="w-[150px] justify-start">
					{selectedStatus ? (
						<>
							<selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
							{selectedStatus.label}
						</>
					) : (
						<>+ more</>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-0" side="right" align="start">
				<Command>
					<CommandInput placeholder="Change status..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup>
							{statuses.map((status) => (
								<CommandItem
									key={status.value}
									value={status.value}
									onSelect={(value) => {
										setSelectedStatus(
											statuses.find((priority) => priority.value === value) ||
												null
										);
										setOpen(false);
									}}
								>
									<status.icon
										className={cn(
											"mr-2 h-4 w-4",
											status.value === selectedStatus?.value
												? "opacity-100"
												: "opacity-40"
										)}
									/>
									<span>{status.label}</span>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
