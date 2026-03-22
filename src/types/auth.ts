export type UserRole = "WeechooAdmin" | "CompanyAdmin" | "Employee" | "Vendor";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
};

export type LoginResponse = {
  success: boolean;
  token: string;
  user: User;
  mustChangePassword: boolean;
};

// for backward compatibility during transition
export type LegacyLoginResponse = {
  success: boolean;
  message: string;
  data: {
    token: string;
    role: UserRole[];
  };
};

export interface AuthContextType {
  email: string | null;
  token: string | null;
  role: UserRole | null;
  user: User | null;
  isLoading: boolean;
  mustChangePassword: boolean;
  setEmail: (email: string) => void;
  loginSuccess: (
    token: string,
    role: UserRole,
    user: User,
    mustChangePassword: boolean,
  ) => void;
  logout: () => void;
  refreshToken: () => Promise<void>;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}
