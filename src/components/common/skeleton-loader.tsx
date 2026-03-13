import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export type SkeletonLayout =
  | "card"
  | "list"
  | "profile"
  | "table"
  | "dashboard"
  | "auth"
  | "custom";

export interface SkeletonLoaderProps {
  layout?: SkeletonLayout;
  count?: number;
  className?: string;
  children?: React.ReactNode;
}

const layoutStyles = {
  card: "space-y-3 p-4 border rounded-lg",
  list: "space-y-2",
  profile: "space-y-4 p-6",
  table: "space-y-4",
  dashboard: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  auth: "space-y-4 max-w-sm mx-auto",
  custom: "",
};

export function SkeletonLoader({
  layout = "card",
  count = 1,
  className,
  children,
}: SkeletonLoaderProps) {
  const renderLayout = () => {
    switch (layout) {
      case "card":
        return (
          <div className={cn(layoutStyles.card, className)}>
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
        );

      case "list":
        return (
          <div className={cn(layoutStyles.list, className)}>
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        );

      case "profile":
        return (
          <div className={cn(layoutStyles.profile, className)}>
            <div className="flex items-center gap-4">
              <Skeleton className="h-20 w-20 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-60" />
              </div>
            </div>
            <Skeleton className="h-24 w-full" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
            </div>
          </div>
        );

      case "table":
        return (
          <div className={cn(layoutStyles.table, className)}>
            {/* table header */}
            <div className="flex gap-4 pb-2 border-b">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-24" />
              ))}
            </div>
            {/* table rows */}
            {Array.from({ length: count }).map((_, rowIndex) => (
              <div key={rowIndex} className="flex gap-4 py-2">
                {Array.from({ length: 4 }).map((_, colIndex) => (
                  <Skeleton key={colIndex} className="h-4 w-24" />
                ))}
              </div>
            ))}
          </div>
        );

      case "dashboard":
        return (
          <div className={cn(layoutStyles.dashboard, className)}>
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="space-y-3 p-4 border rounded-lg">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-8 w-full" />
              </div>
            ))}
          </div>
        );

      case "auth":
        return (
          <div className={cn(layoutStyles.auth, className)}>
            <Skeleton className="h-12 w-32 mx-auto" /> {/* logo */}
            <Skeleton className="h-8 w-48 mx-auto" /> {/* heading */}
            <div className="space-y-3">
              <Skeleton className="h-12 w-full" /> {/* input */}
              <Skeleton className="h-12 w-full" /> {/* iunput */}
              <Skeleton className="h-12 w-full" /> {/* button */}
            </div>
          </div>
        );

      case "custom":
        return <div className={className}>{children}</div>;

      default:
        return null;
    }
  };

  return renderLayout();
}
