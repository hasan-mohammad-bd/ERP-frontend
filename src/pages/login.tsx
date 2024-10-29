import React, { useState } from "react"; // Import useState
import EyeOffIcon from "@/components/svg/EyeOffIcon";
import EyeOnIcon from "@/components/svg/EyeOnIcon"; // Import EyeOnIcon if you have it
import UserIcon from "@/components/svg/UserIcon";
import { useAppDispatch, useAuth } from "@/store/hooks";
import { useNavigate } from "react-router-dom";
import { setToken } from "@/utils/token";
import { setCredentials } from "@/store/services/erp-main/slices/authSlice";
import LoadingOverlay from "@/components/common/loading-overly";
import { LoginRequest } from "@/store/services/erp-main/api/user/types";
import { useLoginMutation } from "@/store/services/erp-main/api/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Define the form validation schema using Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const auth = useAuth();

  // State for password visibility
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Initialize the form with react-hook-form and Zod validation
  const form = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Navigate if user is already authenticated
  React.useEffect(() => {
    if (auth.user) {
      navigate("/");
    }
  }, [auth, navigate]);

  // Handle form submission
  const handleLogin = async (data: LoginRequest) => {
    try {
      const loginData = await login(data).unwrap();
      dispatch(
        setCredentials({
          user: loginData.data,
          isLoading: false,
        })
      );
      setToken(loginData.access_token);
    } catch (err) {
      alert("Login Failed");
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <div className="font-[sans-serif] ">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="grid md:flex items-center justify-between max-w-7xl w-full">
            <div className="border lg:order-last rounded-md p-6 max-w-md  max-md:mx-auto">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleLogin)}
                  className="space-y-6"
                >
                  <div className="mb-10">
                    <h3 className="text-3xl font-extrabold">Sign in</h3>
                    <p className="text-sm mt-4">
                      Sign in to your account and explore a world of
                      possibilities. Your journey begins here.
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative flex items-center">
                            <Input
                              {...field}
                              type="email"
                              placeholder="Enter user email"
                              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md "
                              required
                            />
                            <UserIcon />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative flex items-center">
                            <Input
                              {...field}
                              type={isPasswordVisible ? "text" : "password"} // Toggle type based on state
                              placeholder="Enter password"
                              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                              required
                            />
                            <div
                              onClick={togglePasswordVisibility}
                              className="absolute right-1 mb-4 cursor-pointer"
                            >
                              {isPasswordVisible ? (
                                <EyeOnIcon />
                              ) : (
                                <EyeOffIcon />
                              )}{" "}
                              {/* Show the appropriate icon */}
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="!mt-10">
                    <Button
                      type="submit"
                      className="w-full py-2.5 px-4 text-sm font-semibold rounded focus:outline-none"
                    >
                      Log in
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <Card className="overflow-hidden p-9 ">
              <div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
                <img
                  src="https://readymadeui.com/login-image.webp"
                  className="w-full h-full object-cover bg-transparent"
                  alt="Dining Experience"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
