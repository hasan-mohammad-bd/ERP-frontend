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
	VacancyRequisitionColumn,
	VacancyRequisitionFromValues,
	VacancyRequisitionFormSchema,
	DesignationColumn,
	DepartmentColumn,
	OrganizationDropdownColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	useCreateVacancyRequisitionMutation,
	useUpdateVacancyRequisitionMutation,
} from "@/store/services/hrm/api/vacancy-requisition";
import { useGetDepartmentsQuery } from "@/store/services/hrm/api/department";
import { useGetDesignationQuery } from "@/store/services/hrm/api/designation";
import { useGetOrganizationForDropDownQuery } from "@/store/services/hrm/api/organization-dropdown";
import handleErrors from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

interface AddVacancyRequisitionFormProps {
	modalClose: () => void;
	data?: VacancyRequisitionColumn;
}

export function AddVacancyRequisitionForm({
	modalClose,
	data: previousData,
}: AddVacancyRequisitionFormProps) {
	const [createVacancyRequisition, { isLoading }] =
		useCreateVacancyRequisitionMutation();
	const [updateVacancyRequisition, { isLoading: updateLoading }] =
		useUpdateVacancyRequisitionMutation();
	const { data: organizations, isLoading: organizationLoading } =
		useGetOrganizationForDropDownQuery();
	const { data: departments, isLoading: departmentLoading } =
		useGetDepartmentsQuery("page=1&per_page=1000");
	const { data: designations, isLoading: designationLoading } =
		useGetDesignationQuery("page=1&per_page=1000");

	const departmentData = departments?.data || [];
	const organizationData = organizations?.data || [];
	const designationData = designations?.data || [];

	const form = useForm<VacancyRequisitionFromValues>({
		resolver: zodResolver(VacancyRequisitionFormSchema),
		defaultValues: {
			name: previousData?.name || "",
			// sorting_index: previousData?.sorting_index || 0,
			vacancy_number: previousData?.vacancy_number || 0,
			organization_id: previousData?.organization?.id || 1,
			department_id: previousData?.department?.id || 1,
			designation_id: previousData?.designation?.id || 1,
		},
	});

	async function onSubmit(data: VacancyRequisitionFromValues) {
		try {
			if (previousData) {
				await updateVacancyRequisition({
					vacancyRequisitionId: previousData.id,
					updatedVacancyRequisition: data,
				}).unwrap();
				toast.success("requisition updated successfully");
				modalClose();
			} else {
				await createVacancyRequisition(data).unwrap();
				toast.success("requisition created successfully");
				modalClose();
			}
		} catch (error) {
			console.log(error);
			handleErrors(error as ErrorResponse);
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
										<Input placeholder="Enter requisition name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* <FormField
							control={form.control}
							name="sorting_index"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Sorting</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Enter requisition sorting"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/> */}
						<FormField
							control={form.control}
							name="vacancy_number"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Vacancy Number</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Enter requisition hour"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="department_id"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Department name</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={
											previousData?.department?.id
												? String(previousData?.department?.id)
												: undefined
										}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select department" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{departmentLoading ? (
												<Loading />
											) : (
												departmentData?.map((department: DepartmentColumn) => (
													<SelectItem
														key={department.id}
														value={String(department.id)}
													>
														{department.name}
													</SelectItem>
												))
											)}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="organization_id"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Organization name</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={
											previousData?.organization?.id
												? String(previousData?.organization?.id)
												: undefined
										}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select Organization" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{organizationLoading ? (
												<Loading />
											) : (
												organizationData?.map(
													(organization: OrganizationDropdownColumn) => (
														<SelectItem
															key={organization.id}
															value={String(organization.id)}
														>
															{organization.name}
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
						<FormField
							control={form.control}
							name="designation_id"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Designation Name</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={
											previousData?.designation?.id
												? String(previousData?.designation?.id)
												: undefined
										}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select Designation" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{designationLoading ? (
												<Loading />
											) : (
												designationData?.map(
													(designation: DesignationColumn) => (
														<SelectItem
															key={designation.id}
															value={String(designation.id)}
														>
															{designation.name}
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
