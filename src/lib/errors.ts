import { ApiError } from "@/types/auth";

export class ApiRequestError extends Error {
  status?: number;
  code?: string;

  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
    this.code = code;
  }
}

export function handleApiError(error: unknown): ApiError {
  if (error instanceof ApiRequestError) {
    let msg = error.message || "";

    // use regex to strip out backend validation prefixes like body.adminPhone:
    if (typeof msg === "string") {
      msg = msg.trim().replace(/^(body|query|params)\.[a-zA-Z0-9_]+:\s*/i, "");

      // provide a friendlier message
      if (msg.includes("Invalid phone format")) {
        msg = "Invalid Phone Number. Use format 0XXXXXXXXX.";
      }
    }

    return {
      message: msg,
      status: error.status,
      code: error.code,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: "An unexpected error occurred",
  };
}
