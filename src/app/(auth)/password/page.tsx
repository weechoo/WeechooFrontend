"use client";

import { useState, useEffect } from "react"; // Add useEffect
import { AuthButton } from "@/components/auth/auth-button";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthError } from "@/components/auth/auth-error";
import { Heading } from "@/components/headings/heading";
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
import { SkeletonLoader } from "@/components/common/skeleton-loader";

const passwordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
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

  // handle redirect in useEffect instead of render
  useEffect(() => {
    if (!email) {
      router.push("/login");
    }
  }, [email, router]);

  // show loading state while checking/redirecting
  if (!email) {
    return (
      <AuthLayout>
        <AuthCard>
          <div className="flex flex-col items-center justify-center space-y-4">
            <SkeletonLoader layout="auth" />
          </div>
        </AuthCard>
      </AuthLayout>
    );
  }

  const isPhoneLogin = email.startsWith("phone:");

  async function onSubmit(data: PasswordForm) {
    try {
      if (!email) {
        setAuthError("Session expired. Please login again.");
        router.push("/login");
        return;
      }
      setAuthError(null);

      // prep login payload per identifier type
      let loginPayload;
      if (isPhoneLogin) {
        const phone = email.replace("phone:", "");
        loginPayload = {
          phone,
          password: data.password,
        };
      } else {
        loginPayload = {
          email,
          password: data.password,
        };
      }

      const res = await apiRequest<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(loginPayload),
      });

      if (!res.success) {
        setAuthError("Login failed: invalid server response");
        return;
      }

      const { token, user, mustChangePassword } = res;

      if (!token || !user || !user.role) {
        setAuthError("Login failed: invalid server response");
        return;
      }

      // normalize role (if array or single)
      const normalizedRole: UserRole = Array.isArray(user.role)
        ? user.role[0]
        : user.role;

      if (!validRoles.includes(normalizedRole)) {
        setAuthError("Login failed: unexpected role returned");
        return;
      }

      await loginSuccess(token, normalizedRole, user, mustChangePassword);

      toast.success("Login successful!");

      // check mustChangePassword
      if (mustChangePassword) {
        router.push("/change-password");
      } else {
        const dashboardRoute = getDashboardRoute(normalizedRole);
        router.push(dashboardRoute);
      }
    } catch (error) {
      if (error instanceof ApiRequestError) {
        if (error.status === 400) {
          setAuthError("Email or phone is required");
        } else if (error.status === 401) {
          setAuthError("Invalid credentials. Please try again.");
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
        </div>

        {authError && <AuthError message={authError} />}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="w-full mt-1 p-3 md:p-4 border rounded-md px-3 pr-12 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
              placeholder="Enter your password"
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-10 text-gray-400 hover:text-gray-600"
              disabled={isSubmitting}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
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
