import { ErrorStateProps } from "@/types/states";

// global error state

export default function ErrorState({
  title = "Something went wrong",
  message = "Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3 py-12">
      <h3 className="text-lg font-semibold text-destructive">{title}</h3>

      <p className="text-sm text-muted-foreground max-w-sm">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 text-sm font-medium text-primary hover:underline"
        >
          Try again
        </button>
      )}
    </div>
  );
}
