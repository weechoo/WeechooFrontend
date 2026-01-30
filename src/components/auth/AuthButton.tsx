import { Button } from "../ui/button";

export function AuthButton({
  children,
  loading,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
}) {
  return (
    <Button {...props} disabled={loading || props.disabled}>
      {loading ? "Please wait…" : children}
    </Button>
  );
}
