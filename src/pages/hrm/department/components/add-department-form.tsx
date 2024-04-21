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
import { DepartmentFormSchema, DepartmentFromValues } from "@/lib/validators";
import { useCreateDepartmentMutation } from "@/store/services/hrm/api/department";
import { Loading } from "@/components/common/loading";

export function AddDepartmentForm({ modalClose }: { modalClose: () => void }) {
	const [createDepartment, { isLoading }] = useCreateDepartmentMutation();

	const form = useForm<DepartmentFromValues>({
		resolver: zodResolver(DepartmentFormSchema),
		defaultValues: {
			name: "",
			sorting_index: 0,
		},
	});

	async function onSubmit(data: DepartmentFromValues) {
		try {
			await createDepartment(data);
			toast.success("Department created successfully");
			modalClose();
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
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Enter department name" {...field} />
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
									<FormLabel>Sorting Index</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Enter department sorting index"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div>
							<Button variant="default" type="submit" className="w-full mt-4">
								Create Now
							</Button>
						</div>
					</form>
				</Form>
			)}
		</>
	);
}
