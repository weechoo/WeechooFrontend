import { EmptyStateProps } from "@/types/states";

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3 py-12">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>

      {description && (
        <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
      )}

      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
