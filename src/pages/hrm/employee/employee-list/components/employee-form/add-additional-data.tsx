// import { zodResolver } from "@hookform/resolvers/zod";

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
	EmployeeColumn,
	// EmployeeFormSchema,
	// EmployeeFormSchema,
	EmployeeFormValues,
	EmployeeUpdateSchema,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import { useForm } from "react-hook-form";
// import { useGetCountriesQuery } from "@/store/services/hrm/api/country";

import { useUpdateEmployeeMutation } from "@/store/services/hrm/api/employee-list";

import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import { serialize } from "object-to-formdata";
import FileUploadSingle from "@/components/common/file-upload-single";
import { zodResolver } from "@hookform/resolvers/zod";
import handleErrors, { ErrorDetail, handleFormErrors } from "@/lib/handle-errors";
import { ErrorResponse } from "@/types";

interface AddAdditionalInfoFormProps {
	previousData?: EmployeeColumn;
}



export function AddAdditionalInfoForm({ previousData }: AddAdditionalInfoFormProps) {
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);
	// const [createEmployee, { isLoading }] = useCreateEmployeeMutation();
	const [updateEmployee, { isLoading: updateLoading }] =
		useUpdateEmployeeMutation();

	const form = useForm<EmployeeFormValues>({
		resolver: zodResolver(EmployeeUpdateSchema),
		defaultValues: {/* 
			card_id: previousData?.card_id || null,
			machine_id: previousData?.machine_id || null,
			is_head_of_dept: previousData?.is_head_of_dept || 0,
			// reporting_to_id: previousData?.reporting_to_id || null,
			sorting_index: previousData?.sorting_index || 0,
			nid_number: previousData?.nid_number || null,
			fathers_name: previousData?.fathers_name || null,
			mothers_name: previousData?.mothers_name || null,
			payment_type: previousData?.payment_type || "Cash",
			account_number: previousData?.account_number || null,
			bank_name: previousData?.bank_name || null,
			bank_branch: previousData?.bank_branch || null,
			marital_status: previousData?.marital_status || "Married",
			birth_date: previousData?.birth_date || null,
			tin_number: previousData?.tin_number || null,

			// previous data
			employee_unique_id: previousData?.employee_unique_id || "",
			first_name: previousData?.first_name || "",
			last_name: previousData?.last_name || "",
			phone: previousData?.phone || "",
			corporate_phone: previousData?.corporate_phone || "",
			email: previousData?.email || "",
			joining_date: previousData?.joining_date || "",
			status: previousData?.status || "Active",
			location_id: previousData?.location_id || undefined,
			organization_id: previousData?.organization_id.toString() || undefined,
			work_place_id: previousData?.work_place_id.toString() || undefined,
			department_id: previousData?.department_id.toString() || undefined,
			section_id: previousData?.section_id.toString() || undefined,
			designation_id: previousData?.designation_id.toString() || undefined,
			schedule_id: previousData?.schedule_id.toString() || undefined,
			employee_class_id: previousData?.employee_class_id.toString() || undefined,
			employee_grade_id: previousData?.employee_grade_id.toString() || undefined,
			employment_status_id: previousData?.employment_status_id.toString() || undefined,
			password: null,
			gender_id: previousData?.gender_id.toString() || undefined,
			religion_id: previousData?.religion_id.toString() || undefined,
			blood_group_id: previousData?.blood_group_id.toString() || undefined,
			role_id: previousData?.user.role.id.toString() || undefined,
		 */},
	});
	useEffect(() => {
    if (previousData) {
      form.reset({
        ...previousData,
				first_name: previousData?.first_name || "",
				last_name: previousData?.last_name || "",
        // reporting_to_id: previousData.reporting_to_id?.toString(),
				
        location_id: previousData?.location?.id.toString(),
        organization_id: previousData?.organization?.id.toString(),
        work_place_id: previousData?.work_place?.id.toString(),
        department_id: previousData?.department?.id.toString(),
        section_id: previousData?.section?.id.toString(),
        designation_id: previousData?.designation?.id.toString(),
        schedule_id: previousData?.schedule?.id.toString(),
        employee_class_id: previousData?.employee_class?.id.toString(),
        employee_grade_id: previousData?.employee_grade?.id.toString(),
        employment_status_id: previousData?.employment_status?.id.toString(),
        gender_id: previousData?.gender?.id.toString(),
        religion_id: previousData?.religion?.id.toString(),
        blood_group_id: previousData?.blood_group?.id.toString(),
        role_id: previousData?.user?.role?.id.toString(),
        leave_group_id: previousData?.leave_group?.id?.toString(),
				// image: previousData?.image?.includes("amarsolution.xyz") ? previousData?.image : null
				
			
      });
    }
  }, [previousData, form]);
	
console.log()
	// console.log(previousData)

	


	async function onSubmit(data: EmployeeFormValues) {
		console.log(data);
		try {
			const formData = serialize(
        {
          ...data,
          _method: "PUT",
					role_id: previousData?.user?.role?.id,

          image: uploadedFile,
        },
        { indices: true }
      );
			if (previousData) {
				await updateEmployee({
					employeeId: previousData.id,
					updatedEmployee: formData,
				}).unwrap();

				toast.success("Employee updated successfully");
			}
		} catch (error) {
			console.log(error);
			handleErrors(error as ErrorResponse);
		}
	}


handleFormErrors(form.formState.errors as ErrorDetail);
	console.log(form.formState.errors)

	return (
		<>
			{updateLoading ? (
				<div className="h-[525px]">
					<Loading />
				</div>
			) : (
				<div className="">

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="pt-4">
							<div className="space-y-2 grid grid-cols-5 gap-3 items-end">
{/* 								<FormField
									control={form.control}
									name="sorting_index"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Sorting</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="Enter sorting index"
													{...field}
													value={field.value || ""}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/> */}
								<FormField
									control={form.control}
									name="card_id"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Card Id</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Enter Card Id"
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
									name="machine_id"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Machine Id</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Enter Machine Id"
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
									name="is_head_of_dept"
									render={({ field }) => (
										<FormItem className="flex items-center justify-between rounded-lg border px-3 py-2 shadow-sm col-span-2">
											<FormLabel>Head Of Department</FormLabel>
											<FormControl className="!mt-0">
												<Switch
													checked={field.value === 1}
													onCheckedChange={(checked: boolean) =>
														field.onChange(checked ? 1 : 0)
													}
												/>
											</FormControl>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="nid_number"
									render={({ field }) => (
										<FormItem>
											<FormLabel>NID Number</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Enter NID Number"
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
									name="fathers_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Father's Name</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Enter Father's Name"
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
									name="mothers_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Mother's Name</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Enter Mother's Name"
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
									name="payment_type"
									render={({ field }) => (
										<FormItem className="space-y-4 col-span-2 !mb-3">
											<FormLabel>Payment Type</FormLabel>
											<FormControl>
												<RadioGroup
													onValueChange={field.onChange}
													defaultValue={previousData?.payment_type && previousData?.payment_type === "Bank" ? "Bank" : "Cash"}
													className="flex items-center space-y-0 space-x-3"
												>
													<FormItem className="space-y-0 space-x-2 flex items-center">
														<FormControl>
															<RadioGroupItem value="Bank" />
														</FormControl>
														<FormLabel className="font-normal cursor-pointer">
															Bank Payment
														</FormLabel>
													</FormItem>
													<FormItem className="space-y-0 space-x-2 flex items-center">
														<FormControl>
															<RadioGroupItem value="Cash" />
														</FormControl>
														<FormLabel className="font-normal cursor-pointer">
															Cash Payment
														</FormLabel>
													</FormItem>
												</RadioGroup>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="account_number"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Account Number</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Enter Account Number"
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
									name="bank_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Bank Name</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Enter Bank Name"
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
									name="bank_branch"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Bank branch</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Enter Bank branch"
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
									name="birth_date"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Birth Date</FormLabel>
											<FormControl>
												<Input
													type="date"
													placeholder="Enter Birth date"
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
									name="tin_number"
									render={({ field }) => (
										<FormItem>
											<FormLabel>TIN Number</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="Enter TIN Number"
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
									name="marital_status"
									render={({ field }) => (
										<FormItem className="space-y-3">
											<FormLabel>Marital Status</FormLabel>
											<FormControl>
												<RadioGroup
													onValueChange={field.onChange}
													defaultValue={previousData?.marital_status && previousData?.marital_status}
													className="flex items-center space-y-1 space-x-3"
												
												>
													<FormItem className="flex items-center space-x-2 space-y-0">
														<FormControl>
															<RadioGroupItem value="Married" />
														</FormControl>
														<FormLabel className="font-normal cursor-pointer">
															Married
														</FormLabel>
													</FormItem>
													<FormItem className="flex items-center space-x-2 space-y-0">
														<FormControl>
															<RadioGroupItem value="Unmarried" />
														</FormControl>
														<FormLabel className="font-normal cursor-pointer">
															Unmarried
														</FormLabel>
													</FormItem>
												</RadioGroup>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
                <div className="col-span-2">
                  <FormLabel>Employee Photo</FormLabel>
                  <FileUploadSingle
                    image={previousData?.image && previousData?.image}
                    setUploadedFile={setUploadedFile}
                  />
                </div>
							</div>
							<div className="flex justify-end mt-4">
								<Button
									variant="default"
									size={"sm"}
									type="submit"
									className="mt-4"
								>
									{previousData ? "Update" : "Save"}
								</Button>
							</div>
						</form>
					</Form>
				</div>
			)}
		</>
	);
}
