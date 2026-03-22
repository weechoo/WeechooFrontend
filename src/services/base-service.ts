import { apiRequest } from "@/lib/api";

export class BaseService {
  protected async get<T>(endpoint: string, token?: string): Promise<T> {
    return apiRequest<T>(endpoint, {
      method: "GET",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  }

  protected async post<T, B>(
    endpoint: string,
    body: B,
    token?: string,
  ): Promise<T> {
    return apiRequest<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  }
}
