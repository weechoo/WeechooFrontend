"use client";

import { Building2, Users, Store, Truck } from "lucide-react";
import { StatCard } from "../components/dashboard/StatCard";
import { OrdersToFulfill } from "../components/dashboard/OrdersToFulfill";
import { VendorsPieChart } from "../components/dashboard/VendorsPieChart";
import { ActiveCompanies } from "../components/dashboard/ActiveCompanies";
import { RecentActivity } from "../components/dashboard/RecentActivity";

export default function WeechooAdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s what&apos;s happening with Weechoo today
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Active Companies"
          value="07"
          icon={Building2}
          percentage="+12%"
        />
        <StatCard
          title="Total Employees"
          value="2,349"
          icon={Users}
          percentage="+4%"
        />
        <StatCard
          title="Active Vendors"
          value="10"
          icon={Store}
          percentage="+4%"
        />
        <StatCard
          title="Delivering Today"
          value="264"
          icon={Truck}
          percentage="+12%"
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <OrdersToFulfill />
          <RecentActivity />
        </div>

        <div className="space-y-6">
          <VendorsPieChart />
          <ActiveCompanies />
        </div>
      </div>
    </div>
  );
}
