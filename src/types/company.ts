export interface CreateCompanyRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  employeeCount: number;
}

export interface Company {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  employeeCount: number;
  createdAt: string;
}

export interface CreateCompanyResponse {
  success: boolean;
  message: string;
  company: Company;
}
