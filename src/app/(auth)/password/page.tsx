"use client";

import { useState } from "react";
import { AuthButton } from "@/components/auth/auth-button";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthError } from "@/components/auth/auth-error";
import { Heading } from "@/components/headings/heading";
import { SubHeading } from "@/components/headings/sub-heading";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest } from "@/lib/api";
import { LoginResponse, UserRole } from "@/types/auth";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { getDashboardRoute } from "@/lib/role-direct";
import { toast } from "sonner";
import { ApiRequestError } from "@/lib/errors";
import { Eye, EyeOff } from "lucide-react";

const passwordSchema = z.object({
  password: z.string().min(6, "Password is required"),
});

type PasswordForm = z.infer<typeof passwordSchema>;

const validRoles: UserRole[] = [
  "WeechooAdmin",
  "CompanyAdmin",
  "Employee",
  "Vendor",
];

const PasswordPage = () => {
  const [authError, setAuthError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordForm>({
    resolver: zodResolver(passwordSchema),
  });

  const { email, loginSuccess } = useAuth();
  const router = useRouter();

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

      // handle possible envelope response
      const payload: LoginResponse =
        typeof res === "object" &&
        res !== null &&
        "data" in res &&
        typeof (res as { data?: unknown }).data === "object"
          ? (res as { data: LoginResponse }).data
          : res;

      if (!payload.token || !payload.role) {
        setAuthError("Login failed: invalid server response");
        return;
      }

      // normalize role
      const normalizedRole: UserRole | undefined = Array.isArray(payload.role)
        ? payload.role[0]
        : payload.role;

      if (!normalizedRole || !validRoles.includes(normalizedRole)) {
        setAuthError("Login failed: unexpected role returned");
        return;
      }

      await loginSuccess(payload.token, normalizedRole);

      toast.success("Login successful!");

      const dashboardRoute = getDashboardRoute(normalizedRole);
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
          <div className="relative">
            <label className="text-sm font-medium text-neutral-200">
              Password
            </label>

            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="w-full mt-1 p-3 md:p-4 border rounded-md px-3 pr-12 placeholder:text-neutral-200"
              placeholder="************"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-10.5 text-neutral-400 hover:text-neutral-200"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            {errors.password && (
              <AuthError message={errors.password.message ?? ""} />
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
