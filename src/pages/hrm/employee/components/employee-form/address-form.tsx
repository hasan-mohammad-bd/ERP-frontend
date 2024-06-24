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
	AddressFormSchema,
	AddressFromValues,
	CityColumn,
	CountryColumn,
	AddressColumn,
} from "@/lib/validators";
import { Loading } from "@/components/common/loading";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { useGetCountriesQuery } from "@/store/services/hrm/api/country";

import {
	useCreateAddressMutation,
	useUpdateAddressMutation,
} from "@/store/services/hrm/api/address";
import { useGetCitiesQuery } from "@/store/services/hrm/api/city";
import { CardHeader, CardTitle } from "@/components/ui/card";

interface AddressFormProps {
	previousData?: AddressColumn | undefined | null;
	modelId?: number;
	title: string;
	addressType: string;
}

export function AddressForm({
	previousData,
	modelId,
	title,
	addressType,
}: AddressFormProps) {
	const [createAddress, { isLoading }] = useCreateAddressMutation();
	const [updateAddress, { isLoading: updateLoading }] =
		useUpdateAddressMutation();

	const { data: countries, isLoading: countriesLoading } =
		useGetCountriesQuery();
	const { data: cities, isLoading: citiesLoading } = useGetCitiesQuery();

	const countryData = countries?.data || [];
	const cityData = cities?.data || [];

	// console.log(previousData);

	const addressForm = useForm<AddressFromValues>({
		resolver: zodResolver(AddressFormSchema),
		defaultValues: {
			model_type: "App\\Models\\Employee\\Employee",
			model_id: modelId,
			country_id: previousData?.country.id || 1,
			city_id: previousData?.city.id || 1,
			post_code: previousData?.post_code || "",
			address: previousData?.address || "",
			type: addressType,
		},
	});

	async function onSubmitAddress(data: AddressFromValues) {
		try {
			if (previousData?.id) {
				await updateAddress({
					addressId: previousData?.id,
					updatedAddress: data,
				});
				toast.success("Job Post updated successfully");
			} else {
				await createAddress(data);
				toast.success("Job Post created successfully");
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
				<Form {...addressForm}>
					<CardHeader className="pl-0">
						<CardTitle className="text-xl">{title} </CardTitle>
					</CardHeader>
					<form
						onSubmit={addressForm.handleSubmit(onSubmitAddress)}
						className="space-y-3"
					>
						<FormField
							control={addressForm.control}
							name="address"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Address</FormLabel>
									<FormControl>
										<Input type="text" placeholder="Enter address" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={addressForm.control}
							name="post_code"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Post Code</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder="Enter post code"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={addressForm.control}
							name="country_id"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Country</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={
											previousData?.country?.id
												? String(previousData.country?.id)
												: undefined
										}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select Country" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{countriesLoading ? (
												<Loading />
											) : (
												countryData?.map((country: CountryColumn) => (
													<SelectItem
														key={country.id}
														value={String(country.id)}
													>
														{country.name}
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
							control={addressForm.control}
							name="city_id"
							render={({ field }) => (
								<FormItem>
									<FormLabel>City</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={
											previousData?.city?.id
												? String(previousData.city?.id)
												: undefined
										}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select City" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{citiesLoading ? (
												<Loading />
											) : (
												cityData?.map((city: CityColumn) => (
													<SelectItem key={city.id} value={String(city.id)}>
														{city.name}
													</SelectItem>
												))
											)}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-end mt-4">
							<Button
								variant="default"
								type="submit"
								size={"sm"}
								className="mt-4"
							>
								{previousData?.id ? "Update" : "Add"}
							</Button>
						</div>
					</form>
				</Form>
			)}
		</>
	);
}
