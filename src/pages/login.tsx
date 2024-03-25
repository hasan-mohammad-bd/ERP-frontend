import AppleIcon from "@/components/svg/AppleIcon";
import FacebookIcon from "@/components/svg/FacebookIcon";
import GoogleIcon from "@/components/svg/GoogleIcon";

export default function LoginScreen() {
	return (
		<div className="font-[sans-serif] text-[#333]">
			<div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
				<div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
					<div className="max-md:text-center">
						<h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px]">
							Streamlined Access with Akaar ERP
						</h2>
						<p className="text-sm mt-6">
							Experience seamless login functionality tailored exclusively for
							Akaar ERP users. Navigate effortlessly through our intuitively
							designed login form for hassle-free access to your account.
						</p>
						<p className="text-sm mt-10">
							Don't have an account{" "}
							<a
								href="javascript:void(0);"
								className="text-blue-600 font-semibold hover:underline ml-1"
							>
								Register here
							</a>
						</p>
					</div>
					<form className="space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full">
						<h3 className="text-3xl font-extrabold mb-8 max-md:text-center">
							Sign in
						</h3>
						<div>
							<input
								name="email"
								type="email"
								autoComplete="email"
								required
								className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-600"
								placeholder="Email address"
							/>
						</div>
						<div>
							<input
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-600"
								placeholder="Password"
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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
									className="text-blue-600 hover:text-blue-500"
								>
									Forgot your password?
								</a>
							</div>
						</div>
						<div className="!mt-10">
							<button
								type="button"
								className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
							>
								Log in
							</button>
						</div>
						<p className="my-10 text-sm text-gray-400 text-center">
							or continue with
						</p>
						<div className="space-x-6 flex justify-center">
							<button type="button" className="border-none outline-none">
								<GoogleIcon />
							</button>
							<button type="button" className="border-none outline-none">
								<AppleIcon />
							</button>
							<button type="button" className="border-none outline-none">
								<FacebookIcon />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
