"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function TopNavbar() {
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
    <div className="h-16 bg-white border-b px-4 md:px-6 flex items-center justify-between">
      <div className="relative w-61.5 max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input placeholder="Search" className="pl-9 h-9 w-full text-sm" />
      </div>

      <div className="flex items-center gap-5 md:gap-7 ml-4">
        <div className="relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-2 -right-2 min-w-4.5 h-4.5 px-1 flex items-center justify-center text-[10px] bg-red-500 text-white rounded-full">
            3
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback className="bg-primary-100 text-white text-sm font-bold">
              AD
            </AvatarFallback>
          </Avatar>
          <button
            onClick={handleLogout}
            className="hidden sm:block cursor-pointer hover:bg-orange-50 text-sm font-medium text-gray-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
