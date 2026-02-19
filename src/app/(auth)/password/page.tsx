"use client";

import { useState } from "react";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthError } from "@/components/auth/AuthError";
import { Heading } from "@/components/headings/Heading";
import { SubHeading } from "@/components/headings/SubHeading";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest } from "@/lib/api";
import { LoginResponse } from "@/types/auth";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { getDashboardRoute } from "@/lib/roleDirect";
import { toast } from "sonner";
import { ApiRequestError } from "@/lib/errors";

const passwordSchema = z.object({
  password: z.string().min(6, "Password is required"),
});

type PasswordForm = z.infer<typeof passwordSchema>;

const PasswordPage = () => {
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordForm>({
    resolver: zodResolver(passwordSchema),
  });

  const { email, loginSuccess } = useAuth();
  const router = useRouter();

  // redirect to login if no email
  if (!email) {
    router.push("/login");
    return null;
  }

  async function onSubmit(data: PasswordForm) {
    try {
      setAuthError(null);

      const res = await apiRequest<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password: data.password,
        }),
      });

      await loginSuccess(res.token, res.role);

      toast.success("Login successful!");

      const dashboardRoute = getDashboardRoute(res.role);
      router.push(dashboardRoute);
    } catch (error) {
      if (error instanceof ApiRequestError) {
        if (error.status === 401) {
          setAuthError("Invalid email or password. Please try again.");
        } else if (error.status === 429) {
          setAuthError("Too many attempts. Please try again later.");
        } else if (error.status && error.status >= 500) {
          setAuthError("Server error. Please try again later.");
        } else {
          setAuthError(error.message);
        }
      } else if (error instanceof Error) {
        setAuthError(error.message);
      } else {
        setAuthError("An unexpected error occurred. Please try again.");
      }
    }
  }

  return (
    <AuthLayout>
      <AuthCard>
        <div className="flex flex-col items-center justify-center">
          <Heading>Security access</Heading>
          <SubHeading>Enter your password</SubHeading>
        </div>

        {authError && <AuthError message={authError} />}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-neutral-200">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="w-full mt-1 p-3 md:p-4 border rounded-md px-3 placeholder:text-neutral-200"
              placeholder="************"
            />
            {errors.password && (
              <AuthError message={errors.password.message!} />
            )}
          </div>

          <AuthButton type="submit" loading={isSubmitting}>
            Login
          </AuthButton>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default PasswordPage;
