"use client";

import React, { createContext, useContext, useState } from "react";
import { AuthContextType, UserRole } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmailState] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  });

  const [role, setRole] = useState<UserRole | null>(() => {
    if (typeof window !== "undefined") {
      let stored = localStorage.getItem("role");
      // guard against literally "undefined" or "null" strings
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

  // previously stored selected role, NO LONGER USED

  const [isLoading, setIsLoading] = useState(false);

  function setEmail(email: string) {
    setEmailState(email);
  }

  async function loginSuccess(token: string, role: UserRole) {
    setIsLoading(true);
    console.log("loginSuccess called with", token, role);
    try {
      setToken(token);
      setRole(role);
      localStorage.setItem("token", token);
      localStorage.setItem("role", String(role));
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    setIsLoading(true);
    try {
      setEmailState(null);
      setToken(null);
      setRole(null);
      localStorage.removeItem("token");
      localStorage.removeItem("role");
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
        isLoading,
        setEmail,
        loginSuccess,
        logout,
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
