export interface CreateCompanyRequest {
  name: string;
  adminName: string;
  adminEmail: string;
  adminPhone: string;
  address: string;
}

export interface Company {
  id: string;
  name: string;
  adminName: string;
  adminEmail: string;
  adminPhone: string;
  address: string;

  createdAt: string;
}

export interface CreateCompanyResponse {
  success: boolean;
  message: string;
  company: Company;
}
