export type UserRole = "WeechooAdmin" | "CompanyAdmin" | "Employee" | "Vendor";

export type LoginResponse = {
  token: string;
  role: UserRole;
};
