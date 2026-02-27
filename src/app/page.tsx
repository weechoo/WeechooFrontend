import { ComponentLayout } from "@/components/component-layout";
import LoginPage from "./(auth)/login/page";

export default function Home() {
  return (
    <ComponentLayout>
      <LoginPage />
    </ComponentLayout>
  );
}
