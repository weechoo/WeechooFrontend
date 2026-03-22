"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthError } from "@/components/auth/auth-error";
import { AuthButton } from "@/components/auth/auth-button";
import { SubHeading } from "@/components/headings/sub-heading";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Heading } from "@/components/headings/heading";

const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, "Email or phone is required")
    .refine(
      (val) => {
        // validate email & phone format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex =
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;

        return emailRegex.test(val) || phoneRegex.test(val);
      },
      {
        message: "Please enter a valid email or 10-digit phone number",
      },
    )
    .transform((val) => {
      // clean phone numbers (remove non-digits)
      const phoneRegex =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
      if (phoneRegex.test(val)) {
        // extract only digits
        return val.replace(/\D/g, "");
      }
      return val;
    }),
});

// infer type from schema
type LoginForm = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control, // get control from useForm
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onChange", // validate as user types
  });

  const identifier = useWatch({
    control,
    name: "identifier",
    defaultValue: "",
  });

  const router = useRouter();
  const { setEmail } = useAuth();

  async function onSubmit(data: LoginForm) {
    setAuthError(null);

    // validate phone format
    if (/^\d{10}$/.test(data.identifier)) {
      setEmail(`phone:${data.identifier}`);
    } else {
      setEmail(data.identifier);
    }

    router.push("/password");
  }

  return (
    <AuthLayout>
      <AuthCard>
        <div className="flex flex-col items-center justify-center mb-8">
          <Heading>Welcome to Weechoo</Heading>
          <SubHeading>Corporate meals platform for Africa</SubHeading>
        </div>

        {authError && <AuthError message={authError} />}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email or Phone
            </label>
            <input
              {...register("identifier")}
              type="text"
              className="w-full mt-1 p-3 md:p-4 border rounded-md placeholder:text-gray-400 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none"
              placeholder="you@example.com or 0541111111"
            />
          </div>

          <AuthButton
            type="submit"
            loading={isSubmitting}
            disabled={!!errors.identifier || !identifier}
          >
            Continue
          </AuthButton>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default LoginPage;
