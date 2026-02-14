import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, TrendingUp } from "lucide-react";

type Props = {
  title: string;
  value: string;
  icon: LucideIcon;
  percentage: string;
  loading?: boolean;
};

export function StatCard({
  title,
  value,
  icon: Icon,
  percentage,
  loading,
}: Props) {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardContent className="p-6 flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          {loading ? (
            <div className="h-7 w-20 bg-muted animate-pulse rounded mt-2" />
          ) : (
            <h3 className="text-2xl font-bold mt-2">{value}</h3>
          )}

          <div className="flex items-center gap-1 text-green-600 text-xs mt-2">
            <TrendingUp size={14} />
            <span>{percentage}</span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        </div>

        <div className="bg-orange-100 p-3 rounded-xl">
          <Icon className="text-orange-500" size={20} />
        </div>
      </CardContent>
    </Card>
  );
}
