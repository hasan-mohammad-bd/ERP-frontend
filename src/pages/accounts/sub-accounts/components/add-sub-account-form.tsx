import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
	SubAccountRow,
	SubAccountFromValues,
	subAccountSchema,
} from "@/lib/validators/accounts";
import { Loading } from "@/components/common/loading";
import {
	useCreateSubAccountMutation,
	useUpdateSubAccountMutation,
} from "@/store/services/accounts/api/sub-accounts";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
// import { Switch } from "@/components/ui/switch";

interface AddFinancialYearFormProps {
	modalClose: () => void;
	rowData?: SubAccountRow;
}

export function AddSubAccountForm({
	modalClose,
	rowData: previousData,
}: AddFinancialYearFormProps) {
	const [createSubAccount, { isLoading }] = useCreateSubAccountMutation();
	const [updateSubAccount, { isLoading: updateLoading }] =
		useUpdateSubAccountMutation();

	const form = useForm<SubAccountFromValues>({
		resolver: zodResolver(subAccountSchema),
		defaultValues: {
			name: previousData?.name || "",
			phone: previousData?.phone || "",
			type: previousData?.type || "None",
		},
	});

	async function onSubmit(data: SubAccountFromValues) {
		try {
			if (previousData) {
				await updateSubAccount({
					subAccountId: previousData.id,
					updatedSubAccount: data,
				});
				toast.success("Contact updated successfully");
				modalClose();
			} else {
				await createSubAccount(data);
				toast.success("Contact created successfully");
				modalClose();
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			{isLoading || updateLoading ? (
				<div className="h-56">
					<Loading />
				</div>
			) : (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full space-y-3"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Enter name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder="Enter Financial Start Date"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="type"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Sub Type</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={previousData?.type || "None"}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value={"None"}>None</SelectItem>
											<SelectItem value={"Employee"}>Employee</SelectItem>
											<SelectItem value={"Customer"}>Customer</SelectItem>
											<SelectItem value={"Supplier"}>Supplier</SelectItem>
											<SelectItem value={"Agent"}>Agent</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div>
							<Button variant="default" type="submit" className="w-full mt-4">
								{previousData ? "Update" : "Add"}
							</Button>
						</div>
					</form>
				</Form>
			)}
		</>
	);
}
