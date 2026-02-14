import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, TrendingUp } from "lucide-react";

type Props = {
  title: string;
  value: string;
  icon: LucideIcon;
  percentage: string;
  loading?: boolean;
};

export const StatCard = ({
  title,
  value,
  icon: Icon,
  percentage,
  loading,
}: Props) => {
  return (
    <Card className="rounded-xl border-[0.6px] border-[#E2E8F0] shadow-none">
      <CardContent className="flex flex-col gap-4 px-6">
        <div className="flex justify-between gap-6">
          <p className="text-base text-neutral-100 font-normal">{title}</p>

          <div
            style={{
              background:
                "linear-gradient(90deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)",
            }}
            className="rounded-lg h-10 w-10 flex flex-col items-center justify-center"
          >
            <Icon className="text-white" size={20} />
          </div>
        </div>

        {loading ? (
          <div className="h-7 w-20 bg-muted animate-pulse rounded mt-2" />
        ) : (
          <h3 className="text-2xl text-neutral-black font-bold mt-2">
            {value}
          </h3>
        )}

        <div className="flex gap-1 text-[#00A63E] text-xs mt-2">
          <TrendingUp size={14} />
          <span>{percentage}</span>
          <span className="text-[#718096] text-sm font-medium leading-5">
            vs last month
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
