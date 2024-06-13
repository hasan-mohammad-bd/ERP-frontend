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
	LedgerFromValues,
	LedgerGroupColumn,
	LedgerSchema,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";
import { useCreateLedgerAccountMutation } from "@/store/services/accounts/api/ledger-account";
import { Switch } from "@/components/ui/switch";
import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface AddLedgerFormProps {
	modalClose: () => void;
	rowData?: LedgerGroupColumn;
	coaType: string;
}

export function AddLedgerForm({
	modalClose,
	rowData: previousData,
	coaType,
}: AddLedgerFormProps) {
	const [createLedgerAccount, { isLoading }] = useCreateLedgerAccountMutation();
	const [isSubTypeTrue, setIsSubTypeTrue] = React.useState(0);
	/*   const [updateLedgerGroup, { isLoading: updateLoading }] =
    useUpdateLedgerGroupMutation(); */

	const form = useForm<LedgerFromValues>({
		resolver: zodResolver(LedgerSchema),
		defaultValues: {
			// name: previousData?.name || "",
			parent_id: previousData?.id || 0,
			is_fixed_asset: 0,
			is_stock: 0,
			is_cash_nature: 0,
			is_bank_nature: 0,
			is_sub_type: 0,

			// code: previousData?.code || "",

			// is_active: previousData?.is_active || 1,
		},
	});

	async function onSubmit(data: LedgerFromValues) {
		try {
			/*       if (previousData) {
        await updateLedgerGroup({
          ledgerGroupId: previousData.id,
          updatedLedgerGroup: data,
        });
        toast.success("Financial year updated successfully");
        modalClose();
      } else { */
			await createLedgerAccount(data);
			toast.success("Add ledger account successfully");
			modalClose();
			// }
		} catch (error) {
			console.log(error);
		}
	}

	const handleRadioChange = (selectedField: string) => {
		if (coaType === "Assets") {
			form.setValue(
				"is_fixed_asset",
				selectedField === "is_fixed_asset" ? 1 : 0
			);
			form.setValue("is_stock", selectedField === "is_stock" ? 1 : 0);
			form.setValue(
				"is_cash_nature",
				selectedField === "is_cash_nature" ? 1 : 0
			);
			form.setValue(
				"is_bank_nature",
				selectedField === "is_bank_nature" ? 1 : 0
			);
		} else {
			// Set these values to 0 if previousData.name is "Asset"
			form.setValue("is_fixed_asset", 0);
			form.setValue("is_stock", 0);
			form.setValue("is_cash_nature", 0);
			form.setValue("is_bank_nature", 0);
		}
	};
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
						<div>
							<span className="font-semibold">Parent:</span>{" "}
							{previousData?.name}
						</div>
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
										<Input placeholder="Enter ledger account name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{coaType === "Assets" && (
							<div className="space-y-2">
								<FormLabel>Nature</FormLabel>
								<div className="flex items-center text-sm space-x-4">
									<label className="flex items-center space-x-2">
										<input
											type="radio"
											name="nature"
											checked={!!form.watch("is_fixed_asset")}
											onChange={() => handleRadioChange("is_fixed_asset")}
										/>
										<span>Fixed Asset</span>
									</label>
									<label className="flex items-center space-x-2">
										<input
											type="radio"
											name="nature"
											checked={!!form.watch("is_stock")}
											onChange={() => handleRadioChange("is_stock")}
										/>
										<span>Stock</span>
									</label>
									<label className="flex items-center space-x-2">
										<input
											type="radio"
											name="nature"
											checked={!!form.watch("is_cash_nature")}
											onChange={() => handleRadioChange("is_cash_nature")}
										/>
										<span>Cash Nature</span>
									</label>
									<label className="flex items-center space-x-2">
										<input
											type="radio"
											name="nature"
											checked={!!form.watch("is_bank_nature")}
											onChange={() => handleRadioChange("is_bank_nature")}
										/>
										<span>Bank Nature</span>
									</label>
								</div>
							</div>
						)}

						<FormField
							control={form.control}
							name="is_sub_type"
							render={({ field }) => (
								<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
									<div className="space-y-0.5">
										<FormLabel>Is Sub Type</FormLabel>
									</div>
									<FormControl>
										<Switch
											checked={field.value === 1}
											onCheckedChange={(checked: boolean) => {
												field.onChange(checked ? 1 : 0);
												setIsSubTypeTrue(checked ? 1 : 0);
											}}
										/>
									</FormControl>
								</FormItem>
							)}
						/>

						{isSubTypeTrue === 1 && (
							<FormField
								control={form.control}
								name="sub_type"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Sub Type</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={"None"}
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
						)}

						<div>
							<Button variant="default" type="submit" className="w-full mt-4">
								Add Account
							</Button>
						</div>
					</form>
				</Form>
			)}
		</>
	);
}
