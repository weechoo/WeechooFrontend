import { UserRole } from "@/types/auth";

export function getDashboardRoute(role: UserRole) {
  switch (role) {
    case "WeechooAdmin":
      return "/weechoo-admin";
    case "CompanyAdmin":
      return "/company-admin";
    case "Employee":
      return "/employee";
    case "Vendor":
      return "/vendor";
    default:
      return "/login";
  }
}
