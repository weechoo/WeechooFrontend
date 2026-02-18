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
  const { token, role } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // if the route is public
    if (publicRoutes.includes(pathname)) {
      // if token exists redirect to dashboard
      if (token && role && pathname !== "/password") {
        router.push(roleBasedRoutes[role]);
      }
      return;
    }
    if (!token) {
      router.push("/login");
      return;
    }

    // RBAC
    if (role) {
      const expectedPath = roleBasedRoutes[role];

      // accessing wrong route
      if (pathname !== expectedPath && !pathname.startsWith(expectedPath)) {
        router.push(expectedPath);
      }
    }
  }, [token, role, pathname, router]);

  // show nothing while checking auth
  if (!token && !publicRoutes.includes(pathname)) {
    return null;
  }

  return <>{children}</>;
}
