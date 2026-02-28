"use client";

import { useForm } from "react-hook-form";
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
  email: z.string().email("Enter a valid email"),
});

type LoginForm = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const { setEmail } = useAuth();

  async function onSubmit(data: LoginForm) {
    setEmail(data.email);
    router.push("/password");
  }

  return (
    <AuthLayout>
      <AuthCard>
        <div className="flex flex-col items-center justify-center mb-8">
          <Heading>Welcome to Weechoo</Heading>
          <SubHeading>Corporate meals platform for Africa</SubHeading>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full mt-1 p-3 md:p-4 border placeholder:text-neutral-200 rounded-md"
              placeholder="you@example.com"
            />
            {errors.email && <AuthError message={errors.email.message!} />}
          </div>

          <AuthButton type="submit" loading={isSubmitting}>
            Continue
          </AuthButton>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default LoginPage;
