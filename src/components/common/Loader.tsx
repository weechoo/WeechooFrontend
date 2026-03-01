"use client";

import { LoaderProps } from "@/types/states";

const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-5 w-6 border-2",
  lg: "h-12 w-12 border-4",
};

export default function Loader({ size = "md", colorClass }: LoaderProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-gray-300 border-t-primary ${sizeMap[size]} ${colorClass ?? ""}`}
      />
    </div>
  );
}
