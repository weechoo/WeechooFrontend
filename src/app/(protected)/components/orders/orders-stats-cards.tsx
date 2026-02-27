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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Orders Card */}
      <StatCard.Root>
        <StatCard.Title className="mb-5">Total Orders</StatCard.Title>
        <StatCard.Value className="mb-4">{stats.totalOrders}</StatCard.Value>
        <StatCard.Trend value="+12%" direction="up" period="vs last week" />
      </StatCard.Root>

      {/* Total Value Card */}
      <StatCard.Root>
        <StatCard.Title className="mb-5">Total Value</StatCard.Title>
        <StatCard.Value className="mb-4">
          GHS {stats.totalValue.toFixed(2)}
        </StatCard.Value>
        <StatCard.Trend value="+12%" direction="up" period="vs last week" />
      </StatCard.Root>

      {/* Order Rate Card */}
      <StatCard.Root>
        <StatCard.Title className="mb-5">Order Rate</StatCard.Title>
        <StatCard.Value className="mb-4">{stats.orderRate}%</StatCard.Value>
        <StatCard.Subtitle>of all employees</StatCard.Subtitle>
      </StatCard.Root>

      {/* Active Vendors Card */}
      <StatCard.Root>
        <StatCard.Title className="mb-5">Active Vendors</StatCard.Title>
        <StatCard.Value className="mb-4">{stats.activeVendors}</StatCard.Value>
        <StatCard.Trend value="+12%" direction="up" period="vs last week" />
      </StatCard.Root>
    </div>
  );
};
