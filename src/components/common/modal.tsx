import {
	Dialog,
	DialogTitle,
	DialogHeader,
	DialogContent,
	DialogDescription,
} from "@/components/ui/dialog";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/utils";

interface ModalProps {
	type?: "dialog" | "sheet";
	className?: string;
	title?: string;
	description?: string;
	isOpen: boolean;
	toggleModal: () => void;
	children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
	type = "dialog",
	className,
	title,
	description,
	isOpen,
	toggleModal,
	children,
}) => {
	return (
		<>
			{type === "dialog" ? (
				<Dialog open={isOpen}  onOpenChange={toggleModal}>
					<DialogContent className={cn(className)}>
						<DialogHeader>
							{title && <DialogTitle>{title}</DialogTitle>}
							<DialogDescription>{description}</DialogDescription>
						</DialogHeader>
						{children}
					</DialogContent>
				</Dialog>
			) : type === "sheet" ? (
				<Sheet open={isOpen} onOpenChange={toggleModal}>
					<SheetContent className={cn(className)}>
						<SheetHeader>
							<SheetTitle>{title}</SheetTitle>
							<SheetDescription>{description}</SheetDescription>
						</SheetHeader>
						{children}
					</SheetContent>
				</Sheet>
			) : null}
		</>
	);
};
