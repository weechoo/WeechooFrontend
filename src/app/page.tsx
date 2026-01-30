import { ComponentLayout } from "@/components/ComponentLayout";
import LoginPage from "./(auth)/login/page";
import PasswordPage from "./(auth)/password/page";
import OtpPage from "./(auth)/otp/page";

export default function Home() {
  return (
    <ComponentLayout>
      <LoginPage />
      <PasswordPage />
      <OtpPage />
    </ComponentLayout>
  );
}
