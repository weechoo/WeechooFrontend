// lib/roleDirect.ts
import { UserRole } from "@/types/auth";

export function getDashboardRoute(role: UserRole) {
  switch (role) {
    case "WeechooAdmin":
      return "/weechoo-admin"; // Note: this matches the folder name
    case "CompanyAdmin":
      return "/company-admin"; // Note: this matches the folder name
    case "Employee":
      return "/employee"; // Note: this matches the folder name
    case "Vendor":
      return "/vendor"; // Note: this matches the folder name
    default:
      return "/login";
  }
}
