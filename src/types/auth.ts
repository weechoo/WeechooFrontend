export type UserRole = "WeechooAdmin" | "CompanyAdmin" | "Employee" | "Vendor";

export type LoginResponse = {
  token: string;
  role: UserRole;
};

// for AuthContext
export interface AuthContextType {
  email: string | null;
  token: string | null;
  role: UserRole | null;
  setEmail: (email: string) => void;
  loginSuccess: (token: string, role: UserRole) => void;
  logout: () => void;
}
