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
	LedgerGroupArrayRow,
	LedgerGroupRow,
	LedgerGroupFromValues,
	LedgerGroupSchema,
} from "@/lib/validators/accounts";
import { Loading } from "@/components/common/loading";
import {
	useCreateLedgerGroupMutation,
	useGetLedgerGroupsArrayQuery,
} from "@/store/services/accounts/api/ledger-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface AddLedgerGroupFormProps {
	modalClose: () => void;
	rowData?: LedgerGroupRow;
}

export function AddLedgerGroupForm({
	modalClose,
	rowData: previousData,
}: AddLedgerGroupFormProps) {
	const [createLedgerGroup, { isLoading }] = useCreateLedgerGroupMutation();
	const { data: ledgerGroupsArray, isLoading: ledgerGroupsArrayLoading } =
		useGetLedgerGroupsArrayQuery();

	const [parentType, setParentType] = useState("Assets");

	const ledgerGroupData = ledgerGroupsArray?.data || [];

	/*   const [updateLedgerGroup, { isLoading: updateLoading }] =
    useUpdateLedgerGroupMutation(); */

	const filterLedgerGroupData = ledgerGroupData?.filter(
		(ledger_group: LedgerGroupArrayRow) => {
			return ledger_group?.type === parentType;
		}
	);

	const form = useForm<LedgerGroupFromValues>({
		resolver: zodResolver(LedgerGroupSchema),
		defaultValues: {
			// name: previousData?.name || "",
			parent_id: previousData?.id || 0,
			// code: previousData?.code || "",

			// is_active: previousData?.is_active || 1,
		},
	});

	async function onSubmit(data: LedgerGroupFromValues) {
		try {
			/*       if (previousData) {
        await updateLedgerGroup({
          ledgerGroupId: previousData.id,
          updatedLedgerGroup: data,
        });
        toast.success("Financial year updated successfully");
        modalClose();
      } else { */
			await createLedgerGroup(data);
			toast.success("Add ledger group successfully");
			modalClose();
			// }
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			{isLoading ? (
				<div className="h-56">
					<Loading />
				</div>
			) : (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full space-y-3"
					>
						{previousData?.id && (
							<div>
								<span className="font-semibold">Parent:</span>{" "}
								{previousData?.name}
							</div>
						)}
						{!previousData?.id && (
							<>
								<FormField
									// control={}
									name=""
									render={() => (
										<FormItem>
											<FormLabel>Account Type</FormLabel>
											<Select
												value={parentType}
												onValueChange={(value) => {
													setParentType(value);
												}}
												// defaultValue={"Assets"}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select Account Type" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="Assets">Assets</SelectItem>
													<SelectItem value="Liabilities">
														Liabilities
													</SelectItem>
													<SelectItem value="Income">Incomes</SelectItem>
													<SelectItem value="Expenses">Expenses</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								{filterLedgerGroupData?.length > 0 ? (
									<FormField
										control={form.control}
										name="parent_id"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Parent</FormLabel>
												<Select
													onValueChange={field.onChange}
													/* defaultValue={
												previousData?.religion?.id
													? String(previousData.religion.id)
													: undefined
											} */
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select Parent" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														{ledgerGroupsArrayLoading ? (
															<Loading />
														) : (
															filterLedgerGroupData?.map(
																(parent: LedgerGroupArrayRow) => (
																	<SelectItem
																		key={parent.id}
																		value={String(parent.id)}
																	>
																		{parent.name}
																	</SelectItem>
																)
															)
														)}
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
								) : null}
							</>
						)}

						<FormField
							control={form.control}
							name="code"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Code</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter code"
											{...field}
											value={field.value || ""}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Enter financial year name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div>
							<Button variant="default" type="submit" className="w-full mt-4">
								Add Group
							</Button>
						</div>
					</form>
				</Form>
			)}
		</>
	);
}
