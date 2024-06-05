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
	OrganizationColumn,
	DesignationColumn,
	DepartmentColumn,
	JobPostColumn,
	JobPostFromValues,
	JobPostFormSchema,
	LocationColumn,
	VacancyRequisitionColumn,
	EmploymentStatusColumn,
	WorkPlaceColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { useGetVacancyRequisitionsQuery } from "@/store/services/hrm/api/vacancy-requisition";
import { useGetDepartmentsQuery } from "@/store/services/hrm/api/department";
import { useGetDesignationQuery } from "@/store/services/hrm/api/designation";
import { useGetLocationsQuery } from "@/store/services/erp-main/api/location";
import { useGetEmploymentStatusesQuery } from "@/store/services/hrm/api/employment_status";
import { useGetWorkplacesQuery } from "@/store/services/hrm/api/workplace";
import { Switch } from "@/components/ui/switch";
import {
	useCreateJobPostMutation,
	useUpdateJobPostMutation,
} from "@/store/services/hrm/api/job-post";
import { Textarea } from "@/components/ui/textarea";
import { useGetOrganizationForDropDownQuery } from "@/store/services/hrm/api/organization-dropdown";

interface AddJobPostFormProps {
	modalClose: () => void;
	data?: JobPostColumn;
}

export function AddJobPostForm({
	modalClose,
	data: previousData,
}: AddJobPostFormProps) {
	const [createJobPost, { isLoading }] = useCreateJobPostMutation();
	const [updateJobPost, { isLoading: updateLoading }] =
		useUpdateJobPostMutation();
	const { data: organizations, isLoading: organizationLoading } =
		useGetOrganizationForDropDownQuery();
	const { data: departments, isLoading: departmentLoading } =
		useGetDepartmentsQuery();
	const { data: designations, isLoading: designationLoading } =
		useGetDesignationQuery("page=1&per_page=1000");
	const { data: locations, isLoading: locationLoading } =
		useGetLocationsQuery();
	const { data: requisitions, isLoading: requisitionLoading } =
		useGetVacancyRequisitionsQuery();
	const { data: employmentStatus, isLoading: employmentStatusLoading } =
		useGetEmploymentStatusesQuery();
	const { data: workplaces, isLoading: workplaceLoading } =
		useGetWorkplacesQuery();

	const departmentData = departments?.data || [];
	const organizationData = organizations?.data || [];
	const designationData = designations?.data || [];
	const locationData = locations?.data || [];
	const requisitionData = requisitions?.data || [];
	const employmentStatusData = employmentStatus?.data || [];
	const workplaceData = workplaces?.data || [];

	const form = useForm<JobPostFromValues>({
		resolver: zodResolver(JobPostFormSchema),
		defaultValues: {
			title: previousData?.title || "",
			sorting_index: previousData?.sorting_index || 0,
			date: previousData?.date || "",
			deadline: previousData?.deadline || "",
			vacancy_number: previousData?.vacancy_number || 0,
			organization_id: previousData?.organization?.id || 1,
			department_id: previousData?.department?.id || 1,
			designation_id: previousData?.designation?.id || 1,
			location_id: previousData?.location?.id || 1,
			vacancy_requisition_id: previousData?.vacancy_requisition?.id || 1,
			employment_status_id: previousData?.employment_status?.id || 1,
			work_place_id: previousData?.work_place?.id || 1,
			min_age: previousData?.min_age || 18,
			max_age: previousData?.max_age || 60,
			responsibilities: previousData?.responsibilities || "",
			education: previousData?.education || "",
			experience: previousData?.experience || "",
			skills: previousData?.skills || "",
			show_salary: previousData?.show_salary || 0,
			min_salary: previousData?.min_salary || 0,
			max_salary: previousData?.max_salary || 0,
			status: previousData?.status || "active",
		},
	});

	async function onSubmit(data: JobPostFromValues) {
		try {
			if (previousData) {
				await updateJobPost({
					jobPostId: previousData.id,
					updatedJobPost: data,
				});
				toast.success("Job Post updated successfully");
				modalClose();
			} else {
				await createJobPost(data);
				toast.success("Job Post created successfully");
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
					<form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3 ">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input placeholder="Enter Title " {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="grid grid-cols-4 gap-3">
							<FormField
								control={form.control}
								name="date"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Date</FormLabel>
										<FormControl>
											<Input type="date" placeholder="Enter Date" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="deadline"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Deadline</FormLabel>
										<FormControl>
											<Input
												type="date"
												placeholder="Enter Deadline"
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
													? String(previousData.department.id)
													: undefined
											}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select Department" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{departmentLoading ? (
													<Loading />
												) : (
													departmentData?.map(
														(department: DepartmentColumn) => (
															<SelectItem
																key={department.id}
																value={String(department.id)}
															>
																{department.name}
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
								name="organization_id"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Organization name</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={
												previousData?.organization?.id
													? String(previousData.organization.id)
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
														(organization: OrganizationColumn) => (
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
							<FormField
								control={form.control}
								name="location_id"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Location</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={
												previousData?.location?.id
													? String(previousData?.location.id)
													: undefined
											}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select Location" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{locationLoading ? (
													<Loading />
												) : (
													locationData?.map((location: LocationColumn) => (
														<SelectItem
															key={location.id}
															value={String(location.id)}
														>
															{location.name}
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
								name="vacancy_requisition_id"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Vacancy Requisition</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={
												previousData?.vacancy_requisition?.id
													? String(previousData?.vacancy_requisition.id)
													: undefined
											}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select Vacancy Requisition" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{requisitionLoading ? (
													<Loading />
												) : (
													requisitionData?.map(
														(requisition: VacancyRequisitionColumn) => (
															<SelectItem
																key={requisition.id}
																value={String(requisition.id)}
															>
																{requisition.name}
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
								name="employment_status_id"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Employment Status</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={
												previousData?.employment_status?.id
													? String(previousData.employment_status.id)
													: undefined
											}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select Employment Status" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{employmentStatusLoading ? (
													<Loading />
												) : (
													employmentStatusData?.map(
														(employment: EmploymentStatusColumn) => (
															<SelectItem
																key={employment.id}
																value={String(employment.id)}
															>
																{employment.name}
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
								name="work_place_id"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Work Place</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={
												previousData?.work_place?.id
													? String(previousData?.work_place?.id)
													: undefined
											}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select Work Place" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{workplaceLoading ? (
													<Loading />
												) : (
													workplaceData?.map((workplace: WorkPlaceColumn) => (
														<SelectItem
															key={workplace.id}
															value={String(workplace.id)}
														>
															{workplace.name}
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
								name="sorting_index"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Sorting</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="Enter job sorting"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="status"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Status</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={previousData?.status || "Active"}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value={"Active"}>Active</SelectItem>
												<SelectItem value={"Inactive"}>Inactive</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="responsibilities"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Responsibilities</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Enter responsibilities name"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="education"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Education</FormLabel>
										<FormControl>
											<Textarea placeholder="Enter education" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="experience"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Experience</FormLabel>
										<FormControl>
											<Textarea placeholder="Enter experience" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="skills"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Skills</FormLabel>
										<FormControl>
											<Textarea placeholder="Enter skills" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<FormField
								control={form.control}
								name="min_age"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Minimum Age</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="Enter minimum age limit"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="max_age"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Maximum Age</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="Enter maximum age limit"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<FormField
								control={form.control}
								name="min_salary"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Minimum Salary</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="Enter minimum salary limit"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="max_salary"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Maximum Salary</FormLabel>
										<FormControl>
											<Input
												type="number"
												placeholder="Enter maximum salary limit"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="show_salary"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
										<div className="space-y-0.5">
											<FormLabel>Show Salary</FormLabel>
										</div>
										<FormControl>
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
						</div>

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
