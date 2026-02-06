"use client";

import Loader from "../common/Loader";
import { Button } from "../ui/button";

export function AuthButton({
  children,
  loading,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
}) {
  return (
    <Button
      {...props}
      disabled={loading || props.disabled}
      className="flex items-center justify-center gap-2"
    >
      {loading ? <Loader size="sm" /> : children}
    </Button>
  );
}
