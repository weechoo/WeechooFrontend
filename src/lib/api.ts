import { ApiRequestError } from "./errors";

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await res.json();

  if (!res.ok || data?.success === false) {
    throw new ApiRequestError(
      data?.error?.message || data?.message || "Request failed",
      res.status,
      data?.error?.code || data?.code,
    );
  }

  return data;
}
