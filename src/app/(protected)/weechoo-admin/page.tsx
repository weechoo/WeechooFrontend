"use client";

import { Building2, Users, ChefHat, Salad } from "lucide-react";
import { StatCard } from "../components/dashboard/StatCard";
import { OrdersToFulfill } from "../components/dashboard/OrdersToFulfill";
import { VendorsPieChart } from "../components/dashboard/VendorsPieChart";
import { ActiveCompanies } from "../components/dashboard/ActiveCompanies";
import { RecentActivity } from "../components/dashboard/RecentActivity";

export default function WeechooAdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-neutral-black">
          Dashboard Overview
        </h1>
        <p className="text-neutral-100 text-sm font-normal">
          Welcome back! Here&apos;s what&apos;s happening with Weechoo today
        </p>
      </div>

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
          icon={ChefHat}
          percentage="+4%"
        />
        <StatCard
          title="Delivering Today"
          value="264"
          icon={Salad}
          percentage="+12%"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* left - 9/12 on xl screens (75%) */}
        <div className="xl:col-span-9 flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <OrdersToFulfill />
            </div>
            <div className="lg:col-span-2">
              <VendorsPieChart />
            </div>
          </div>

          <RecentActivity />
        </div>

        {/* right 3/12 on xl screens (25%) */}
        <div className="xl:col-span-3">
          <div className="h-full">
            <ActiveCompanies />
          </div>
        </div>
      </div>
    </div>
  );
}
