"use client";

import React, { createContext, useContext, useState } from "react";
import { AuthContextType, UserRole } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmailState] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole | null>(null);

  function setEmail(email: string) {
    setEmailState(email);
  }

  function loginSuccess(token: string, role: UserRole) {
    setToken(token);
    setRole(role);
    localStorage.setItem("token", token);
  }

  function logout() {
    setEmailState(null);
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{ email, token, role, setEmail, loginSuccess, logout }}
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
