import { StatCard } from "./StatCard";
import { dashboardStats } from "@/constants/placeholder";

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {dashboardStats.map((stat, index) => (
        <StatCard.Root key={index}>
          <div className="flex justify-between gap-6">
            <StatCard.Title className="text-base text-neutral-100 font-normal">
              {stat.title}
            </StatCard.Title>
            <StatCard.Icon icon={stat.icon} />
          </div>
          <StatCard.Value className="mt-4">{stat.value}</StatCard.Value>
          <StatCard.Trend
            value={stat.trend.value}
            direction={stat.trend.direction}
            className="mt-2"
          />
        </StatCard.Root>
      ))}
    </div>
  );
};

export default DashboardStats;
