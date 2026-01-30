"use client";

import { AuthButton } from "@/components/auth/AuthButton";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthError } from "@/components/auth/AuthError";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { AppLogo } from "@/components/common/AppLogo";
import { Heading } from "@/components/headings/Heading";
import { SubHeading } from "@/components/headings/SubHeading";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const passwordSchema = z.object({
  password: z.string().min(6, "Password is required"),
});

type PasswordForm = z.infer<typeof passwordSchema>;

const PasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordForm>({
    resolver: zodResolver(passwordSchema),
  });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 1200));
    // simulate OTP required
  }

  return (
    <AuthLayout>
      <AuthCard>
        <div className="flex flex-col items-center justify-center">
          <Heading>Enter Your Password</Heading>
          <SubHeading>Authentication stage</SubHeading>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm">Password</label>
            <input
              {...register("password")}
              type="password"
              className="w-full mt-1 h-10 border rounded-md px-3"
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
