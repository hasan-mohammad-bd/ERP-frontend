import React from "react";
import EyeOffIcon from "@/components/svg/EyeOffIcon";
import UserIcon from "@/components/svg/UserIcon";
import { useAppDispatch } from "@/store/hooks";
import { LoginRequest } from "@/store/services/erp-main/types";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/store/services/erp-main/api/auth";
import { setCredentials } from "@/store/services/erp-main/authSlice";

export default function LoginScreen() {
	const [formState, setFormState] = React.useState<LoginRequest>({
		email: "",
		password: "",
	});
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [login, { isLoading }] = useLoginMutation();

	const handleChange = ({
		target: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) =>
		setFormState((prev) => ({ ...prev, [name]: value }));

	return (
		<div className="font-[sans-serif] text-[#333]">
			<div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
				<div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
					<div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
						<form className="space-y-6">
							<div className="mb-10">
								<h3 className="text-3xl font-extrabold">Sign in</h3>
								<p className="text-sm mt-4">
									Sign in to your account and explore a world of possibilities.
									Your journey begins here.
								</p>
							</div>
							<div>
								<label className="text-sm mb-2 block">User name</label>
								<div className="relative flex items-center">
									<input
										name="email"
										onChange={handleChange}
										type="email"
										required
										className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
										placeholder="Enter user email"
									/>
									<UserIcon />
								</div>
							</div>
							<div>
								<label className="text-sm mb-2 block">Password</label>
								<div className="relative flex items-center">
									<input
										name="password"
										type="password"
										onChange={handleChange}
										required
										className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
										placeholder="Enter password"
									/>
									<EyeOffIcon />
								</div>
							</div>
							<div className="flex items-center justify-between gap-2">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
									/>
									<label
										// for="remember-me"
										className="ml-3 block text-sm"
									>
										Remember me
									</label>
								</div>
								<div className="text-sm">
									<a
										href="jajvascript:void(0);"
										className="text-blue-600 hover:underline"
									>
										Forgot your password?
									</a>
								</div>
							</div>
							<div className="!mt-10">
								<button
									type="button"
									className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none"
									onClick={async () => {
										try {
											const loginData = await login(formState).unwrap();
											// console.log(loginData);
											dispatch(
												setCredentials({
													user: loginData.data,
													token: loginData.access_token,
												})
											);
											navigate("/");
										} catch (err) {
											alert("Login Failed");
										}
									}}
								>
									Log in
								</button>
							</div>
							<p className="text-sm !mt-10 text-center">
								Don't have an account{" "}
								<a
									href="javascript:void(0);"
									className="text-blue-600 hover:underline ml-1 whitespace-nowrap"
								>
									Register here
								</a>
							</p>
						</form>
					</div>
					<div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
						<img
							src="https://readymadeui.com/login-image.webp"
							className="w-full h-full object-cover"
							alt="Dining Experience"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
