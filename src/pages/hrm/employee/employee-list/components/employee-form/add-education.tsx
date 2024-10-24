import { zodResolver } from "@hookform/resolvers/zod";

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
	EducationColumn,
	EducationFormSchema,
	EducationFromValues,
	EmployeeColumn,
	JobCandidateColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import { useForm } from "react-hook-form";

import { CardHeader, CardTitle } from "@/components/ui/card";
import {
	useCreateEducationMutation,
	useUpdateEducationMutation,
} from "@/store/services/hrm/api/education";

import { DataTable } from "@/components/ui/data-table/data-table";
import { educationColumns } from "../education-columns";

interface AddEducationFormProps {
	previousData?: EmployeeColumn;
	data?: EducationColumn;
	jobData?: JobCandidateColumn;
	modelClose?: (() => void) | undefined;
}

export function AddEducationForm({
	previousData,
	data: educationData,
	modelClose,
}: AddEducationFormProps) {
	const [createEducation, { isLoading }] = useCreateEducationMutation();
	const [updateEducation, { isLoading: updateLoading }] =
		useUpdateEducationMutation();

	const form = useForm<EducationFromValues>({
		resolver: zodResolver(EducationFormSchema),
		defaultValues: {
			model_type: "App\\Models\\Employee\\Employee",
			model_id: previousData?.id,
			type: educationData?.type || "",
			academy: educationData?.academy || "",
			title: educationData?.title || "",
			degree: educationData?.degree || "",
			start_date: educationData?.start_date || "",
			end_date: educationData?.end_date || "",
			grade: educationData?.grade || "",
			sorting_index: educationData?.sorting_index || 0,
		},
	});

	async function onSubmit(data: EducationFromValues) {
		try {
			if (educationData?.id) {
				await updateEducation({
					educationId: educationData?.id,
					updatedEducation: data,
				});

				toast.success("Job Post updated successfully");
				if (modelClose) {
					modelClose();
				}
			} else {
				await createEducation(data);
				toast.success("Job Post created successfully");
				// modalClose();
				form.reset();
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			{isLoading || updateLoading ? (
				<div className="h-[535px]">
					<Loading />
				</div>
			) : (
				<div className="flex  h-[535px] gap-x-4">
					<div className={`${!previousData ? "w-full" : "w-1/2"} `}>
						<Form {...form}>
							<CardHeader>
								<CardTitle className="text-center">Education </CardTitle>
							</CardHeader>
							<form onSubmit={form.handleSubmit(onSubmit)} className="">
								<div className="grid grid-cols-2 gap-2">
									<FormField
										control={form.control}
										name="type"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Education Type</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="Enter education type(HSC/SSC)"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="academy"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Academy</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="Enter Academy"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="title"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Title</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="Enter Title"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="degree"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Degree</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="Enter degree"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="start_date"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Start Date</FormLabel>
												<FormControl>
													<Input
														type="date"
														placeholder="Enter Start Date"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="end_date"
										render={({ field }) => (
											<FormItem>
												<FormLabel>End Date (Optional)</FormLabel>
												<FormControl>
													<Input
														type="date"
														placeholder="Enter End Date"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="grade"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Grade</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="Enter Grade"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="sorting_index"
										render={({ field }) => (
											<FormItem>
												<FormLabel>String</FormLabel>
												<FormControl>
													<Input
														type="number"
														placeholder="Enter sorting"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div>
									<Button
										variant="default"
										type="submit"
										className="w-full mt-4"
									>
										{educationData?.id ? "Update" : "Add"}
									</Button>
								</div>
							</form>
						</Form>
					</div>
					{!educationData?.id && (
						<div className="w-1/2 mt-4">
							<div>
								<DataTable
									columns={educationColumns}
									data={previousData?.educations || []}
									noPagination
								/>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
}
