"use client";

import { AuthButton } from "@/components/auth/auth-button";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthError } from "@/components/auth/auth-error";
import { OTPInput } from "@/components/auth/otp-input";
import { AppLogo } from "@/components/common/app-logo";
import { Heading } from "@/components/headings/heading";
import { SubHeading } from "@/components/headings/sub-heading";
import { AuthLayout } from "@/components/layouts/auth-layout";
import React from "react";

const OtpPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  async function handleVerify() {
    setLoading(true);
    setError(false);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setError(true); // toggle for success/error
  }

  return (
    <AuthLayout>
      <AuthCard>
        <div className="flex flex-col items-center justify-center mb-8">
          <Heading>Verify it&apos;s You!</Heading>
          <SubHeading>Enter OTP code sent to your E-mail</SubHeading>
        </div>

        <OTPInput />
        {error && <AuthError message="Invalid verification code" />}
        <AuthButton loading={loading} onClick={handleVerify}>
          Login
        </AuthButton>
      </AuthCard>
    </AuthLayout>
  );
};

export default OtpPage;
