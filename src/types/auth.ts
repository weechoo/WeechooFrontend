export type UserRole = "WeechooAdmin" | "CompanyAdmin" | "Employee" | "Vendor";

export type LoginResponse = {
  token: string;
  role: UserRole;
};

// Error types
export type ApiError = {
  message: string;
  status?: number;
  code?: string;
};

// for AuthContext
export interface AuthContextType {
  email: string | null;
  token: string | null;
  role: UserRole | null;
  isLoading: boolean;
  setEmail: (email: string) => void;
  loginSuccess: (token: string, role: UserRole) => void;
  logout: () => void;
}
