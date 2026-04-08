"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { toast } from "sonner";

export const LogoutButton = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();

    toast.success("Logged out", {
      description: "Redirecting to login...",
      duration: 1500,
      onAutoClose: () => {
        router.push("/login");
      },
    });
  };

  return (
    <Button
      onClick={handleLogout}
      className="hidden sm:block cursor-pointer bg-none hover:bg-orange-50 text-sm font-medium text-gray-700"
    >
      Logout
    </Button>
  );
};
