import { companyStats } from "@/constants/placeholder";
import { StatCard } from "../dashboard/StatCard";

export const CompanyStats = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-neutral-black mb-2">
          Companies
        </h2>
        <p className="text-neutral-100 text-sm font-normal">
          Manage registered companies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {companyStats.map((stat, index) => (
          <StatCard.Root key={index}>
            <StatCard.Title className="text-sm text-neutral-500 font-medium mb-4">
              {stat.title}
            </StatCard.Title>

            <div className="flex items-baseline gap-2 mt-1">
              <StatCard.Value className="text-2xl">{stat.value}</StatCard.Value>
              {stat.subtitle && (
                <StatCard.Subtitle className="text-sm text-neutral-500">
                  {stat.subtitle}
                </StatCard.Subtitle>
              )}
            </div>

            <StatCard.Trend
              value={stat.trend.value}
              direction={stat.trend.direction}
              period={stat.trend.period}
              className="mt-2"
            />
          </StatCard.Root>
        ))}
      </div>
    </div>
  );
};

export default CompanyStats;
