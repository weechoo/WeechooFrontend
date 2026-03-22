"use client";

import { companyService } from "@/services/company-service";
import { CreateCompanyRequest } from "@/types/company";
import { useAuth } from "./useAuth";

export function useCompanyService() {
  const { token } = useAuth();

  async function createCompany(payload: CreateCompanyRequest) {
    if (!token) {
      throw new Error("User not authenticated");
    }

    return companyService.createCompany(payload, token);
  }

  return {
    createCompany,
  };
}
