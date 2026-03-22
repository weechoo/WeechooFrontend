"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

import { AuthLayout } from "@/components/layouts/auth-layout";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthButton } from "@/components/auth/auth-button";
import { AuthError } from "@/components/auth/auth-error";
import { Heading } from "@/components/headings/heading";
import { SubHeading } from "@/components/headings/sub-heading";
import { useAuth } from "@/hooks/useAuth";
import { apiRequest } from "@/lib/api";
import { ApiRequestError } from "@/lib/errors";
import { getDashboardRoute } from "@/lib/role-direct";

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, "Current password is required"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type ChangePasswordForm = z.infer<typeof changePasswordSchema>;

const ChangePasswordPage = () => {
  const [authError, setAuthError] = useState<string | null>(null);
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(changePasswordSchema),
  });

  const router = useRouter();
  const {
    token,
    user,
    refreshToken,
    mustChangePassword,
    setMustChangePassword,
  } = useAuth();

  useEffect(() => {
    if (!token || !user) {
      router.push("/login");
    }
  }, [token, user, router]);

  if (!token || !user) {
    return null;
  }

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  async function onSubmit(data: ChangePasswordForm) {
    if (!token || !user) return;

    if (data.currentPassword === data.newPassword) {
      toast.error("New password cannot be the same as current password");
      return;
    }

    try {
      setAuthError(null);

      const response = await apiRequest<{
        success: boolean;
        message: string;
      }>("/auth/change-password", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword,
        }),
      });

      if (response.success) {
        toast.success("Password changed successfully!");

        // update local state first so RouteGuard allows navigation
        setMustChangePassword(false);

        // refresh token
        await refreshToken();

        const dashboardRoute = getDashboardRoute(user.role);
        router.push(dashboardRoute);
      }
    } catch (error) {
      if (error instanceof ApiRequestError) {
        if (error.status === 401) {
          setAuthError("Current password is incorrect");
        } else if (error.status === 400) {
          setAuthError(
            error.message || "Invalid request. Please check your input.",
          );
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
        <div className="flex flex-col items-center justify-center mb-6">
          <Heading>Change Password</Heading>
          <SubHeading>
            {mustChangePassword
              ? "You're using a temporary password. Please set a new one."
              : "Update your password"}
          </SubHeading>
        </div>

        {authError && <AuthError message={authError} />}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* current */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700">
              Current Password
            </label>
            <div className="relative mt-1">
              <input
                {...register("currentPassword")}
                type={showPasswords.current ? "text" : "password"}
                className="w-full p-3 md:p-4 border rounded-md pr-12 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("current")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={
                  showPasswords.current ? "Hide password" : "Show password"
                }
              >
                {showPasswords.current ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-sm text-red-500 mt-1">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          {/* new Password */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="relative mt-1">
              <input
                {...register("newPassword")}
                type={showPasswords.new ? "text" : "password"}
                className="w-full p-3 md:p-4 border rounded-md pr-12 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("new")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={
                  showPasswords.new ? "Hide password" : "Show password"
                }
              >
                {showPasswords.new ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-sm text-red-500 mt-1">
                {errors.newPassword.message}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Password must be at least 6 characters
            </p>
          </div>

          {/* confirm Password */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <div className="relative mt-1">
              <input
                {...register("confirmPassword")}
                type={showPasswords.confirm ? "text" : "password"}
                className="w-full p-3 md:p-4 border rounded-md pr-12 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirm")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={
                  showPasswords.confirm ? "Hide password" : "Show password"
                }
              >
                {showPasswords.confirm ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <AuthButton type="submit" loading={isSubmitting}>
            {isSubmitting ? "Changing Password..." : "Change Password"}
          </AuthButton>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default ChangePasswordPage;
