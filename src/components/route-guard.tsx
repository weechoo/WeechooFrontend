"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const publicRoutes = ["/login", "/password"];
const roleBasedRoutes = {
  WeechooAdmin: "/weechoo-admin",
  CompanyAdmin: "/company-admin",
  Employee: "/employee",
  Vendor: "/vendor",
};

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const { token, role, mustChangePassword, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoading) return;

    if (publicRoutes.includes(pathname)) {
      if (token && role && pathname !== "/password") {
        if (mustChangePassword) {
          router.push("/change-password");
        } else {
          router.push(roleBasedRoutes[role]);
        }
      }
      return;
    }

    if (!token) {
      router.push("/login");
      return;
    }

    if (pathname === "/change-password") {
      if (!mustChangePassword) {
        router.push(roleBasedRoutes[role as keyof typeof roleBasedRoutes]);
      }
      return;
    }

    if (role) {
      if (mustChangePassword) {
        router.push("/change-password");
        return;
      }

      const expectedPath =
        roleBasedRoutes[role as keyof typeof roleBasedRoutes];

      if (
        expectedPath &&
        pathname !== expectedPath &&
        !pathname.startsWith(expectedPath)
      ) {
        router.push(expectedPath);
      }
    }
  }, [token, role, mustChangePassword, pathname, router, isLoading]);

  if (!token && !publicRoutes.includes(pathname)) {
    return null;
  }

  return <>{children}</>;
}
