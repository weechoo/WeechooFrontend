import { StatCard } from "../dashboard/stat-card";

interface StatsCardsProps {
  stats: {
    totalOrders: number;
    totalValue: number;
    activeVendors: number;
    orderRate: number;
  };
}

export const OrdersStatsCards = ({ stats }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <StatCard.Root>
        <div className="h-full flex flex-col">
          <div className="min-h-12">
            <StatCard.Title>Total Orders</StatCard.Title>
          </div>
          <div className="min-h-14 flex items-center">
            <StatCard.Value>{stats.totalOrders}</StatCard.Value>
          </div>
          <div className="min-h-10 flex items-end">
            <StatCard.Trend value="+12%" direction="up" period="vs last week" />
          </div>
        </div>
      </StatCard.Root>

      <StatCard.Root>
        <div className="h-full flex flex-col">
          <div className="min-h-12">
            <StatCard.Title>Total Value</StatCard.Title>
          </div>
          <div className="min-h-14 flex items-center">
            <StatCard.Value className="text-base md:text-lg lg:text-2xl">
              GHS {stats.totalValue.toFixed(2)}
            </StatCard.Value>
          </div>
          <div className="min-h-10 flex items-end">
            <StatCard.Trend value="+12%" direction="up" period="vs last week" />
          </div>
        </div>
      </StatCard.Root>

      <StatCard.Root>
        <div className="h-full flex flex-col">
          <div className="min-h-12">
            <StatCard.Title>Order Rate</StatCard.Title>
          </div>
          <div className="min-h-14 flex items-center">
            <StatCard.Value className="text-base md:text-lg lg:text-2xl">
              {stats.orderRate}%
            </StatCard.Value>
          </div>
          <div className="min-h-10 flex items-end">
            <StatCard.Subtitle>of all employees</StatCard.Subtitle>
          </div>
        </div>
      </StatCard.Root>

      <StatCard.Root>
        <div className="h-full flex flex-col">
          <div className="min-h-12">
            <StatCard.Title>Active Vendors</StatCard.Title>
          </div>
          <div className="min-h-14 flex items-center">
            <StatCard.Value className="text-base md:text-lg lg:text-2xl">
              {stats.activeVendors}
            </StatCard.Value>
          </div>
          <div className="min-h-10 flex items-end">
            <StatCard.Trend value="+12%" direction="up" period="vs last week" />
          </div>
        </div>
      </StatCard.Root>
    </div>
  );
};
