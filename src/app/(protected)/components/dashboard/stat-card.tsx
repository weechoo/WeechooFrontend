import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

// reusable

// base card container
const StatCardRoot = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Card
      className={cn(
        "rounded-xl border-[0.6px] border-[#E2E8F0] shadow-none",
        className,
      )}
    >
      <CardContent className="flex flex-col gap-1 px-8">{children}</CardContent>
    </Card>
  );
};

// card title
const StatCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={cn("text-neutral-600", className)}>{children}</p>;
};

// icon w/ bg gradient
const StatCardIcon = ({
  icon: Icon,
  bgColor,
  className,
}: {
  icon: LucideIcon;
  bgColor?: string;
  className?: string;
}) => {
  const background =
    bgColor || "linear-gradient(90deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)";

  return (
    <div
      style={{ background }}
      className={cn(
        "rounded-lg h-10 w-10 flex items-center justify-center shrink-0",
        className,
      )}
    >
      <Icon className="text-white" size={20} />
    </div>
  );
};

// value
const StatCardValue = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-2xl text-neutral-black font-bold", className)}>
      {children}
    </h3>
  );
};

// trend w/ direction
const StatCardTrend = ({
  value,
  direction = "up",
  period = "vs last month",
  className,
}: {
  value: string;
  direction?: "up" | "down";
  period?: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-1 text-xs", className)}>
      <div
        className={cn(
          "flex items-center gap-1 font-medium",
          direction === "up" ? "text-[#00A63E]" : "text-red-600",
        )}
      >
        {direction === "up" ? (
          <TrendingUp size={14} />
        ) : (
          <TrendingDown size={14} />
        )}
        <span>{value}</span>
      </div>
      <span className="text-[#718096] text-sm font-medium leading-5">
        {period}
      </span>
    </div>
  );
};

// subtitle
const StatCardSubtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm text-neutral-500", className)}>{children}</p>
  );
};

// loading state
const StatCardLoading = ({
  hasTrend = true,
  className,
}: {
  hasTrend?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="h-8 w-20 bg-muted animate-pulse rounded" />
      {hasTrend && <div className="h-4 w-24 bg-muted animate-pulse rounded" />}
    </div>
  );
};

export const StatCard = {
  Root: StatCardRoot,
  Title: StatCardTitle,
  Icon: StatCardIcon,
  Value: StatCardValue,
  Trend: StatCardTrend,
  Subtitle: StatCardSubtitle,
  Loading: StatCardLoading,
};
