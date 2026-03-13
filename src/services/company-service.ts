import { BaseService } from "./base-service";
import { CreateCompanyRequest, CreateCompanyResponse } from "@/types/company";

class CompanyService extends BaseService {
  async createCompany(
    payload: CreateCompanyRequest,
    token: string,
  ): Promise<CreateCompanyResponse> {
    return this.post<CreateCompanyResponse, CreateCompanyRequest>(
      "/onboarding/companies",
      payload,
      token,
    );
  }
}

export const companyService = new CompanyService();
