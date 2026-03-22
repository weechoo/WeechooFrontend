"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { AuthContextType, UserRole, User } from "@/types/auth";
import { apiRequest } from "@/lib/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// token refresh interval of 14 mins (backend is 15)
const REFRESH_INTERVAL = 14 * 60 * 1000;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmailState] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  });
  const [mustChangePassword, setMustChangePassword] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("mustChangePassword");
      return stored === "true";
    }
    return false;
  });
  const [role, setRole] = useState<UserRole | null>(() => {
    if (typeof window !== "undefined") {
      let stored = localStorage.getItem("role");
      if (stored === "undefined" || stored === "null") {
        localStorage.removeItem("role");
        stored = null;
      }
      if (stored) {
        return stored as UserRole;
      }
    }
    return null;
  });

  const [isLoading, setIsLoading] = useState(false);

  // memoize refreshToken
  const refreshToken = useCallback(async () => {
    if (!token) return;

    try {
      const response = await apiRequest<{ success: boolean; token: string }>(
        "/auth/refresh-token",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.success && response.token) {
        setToken(response.token);
        localStorage.setItem("token", response.token);
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      throw error;
    }
  }, [token]);

  // memoize & call logout if exists
  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      if (token) {
        try {
          await apiRequest("/auth/logout", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (error) {
          // silently fail - still want to clear local state
          console.error("Logout API call failed:", error);
        }
      }

      setEmailState(null);
      setToken(null);
      setRole(null);
      setUser(null);
      setMustChangePassword(false);

      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      localStorage.removeItem("mustChangePassword");
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  // setup token refresh interval
  useEffect(() => {
    if (!token) return;

    const refreshTimer = setInterval(async () => {
      try {
        await refreshToken();
      } catch (error) {
        console.error("Token refresh failed:", error);
        // if refresh fails, logout user
        logout();
      }
    }, REFRESH_INTERVAL);

    return () => clearInterval(refreshTimer);
  }, [token, refreshToken, logout]);
  function setEmail(email: string) {
    setEmailState(email);
  }

  function updateMustChangePassword(value: boolean) {
    setMustChangePassword(value);
    localStorage.setItem("mustChangePassword", String(value));
  }

  async function loginSuccess(
    token: string,
    role: UserRole,
    user: User,
    mustChangePassword: boolean,
  ) {
    setIsLoading(true);
    try {
      setToken(token);
      setRole(role);
      setUser(user);
      setMustChangePassword(mustChangePassword);
      setEmailState(user.email);

      localStorage.setItem("token", token);
      localStorage.setItem("role", String(role));
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("mustChangePassword", String(mustChangePassword));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        email,
        token,
        role,
        user,
        isLoading,
        mustChangePassword,
        setEmail,
        setMustChangePassword: updateMustChangePassword,
        loginSuccess,
        logout,
        refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return ctx;
};
