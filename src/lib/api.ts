import { ApiRequestError } from "./errors";

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    const data = await res.json();

    if (!res.ok) {
      // throw custom error with status
      throw new ApiRequestError(
        data.message || "Request failed",
        res.status,
        data.code,
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiRequestError) {
      throw error;
    }
    // re-throw as ApiRequestError for consistency
    throw new ApiRequestError(
      error instanceof Error ? error.message : "Network error occurred",
    );
  }
}
