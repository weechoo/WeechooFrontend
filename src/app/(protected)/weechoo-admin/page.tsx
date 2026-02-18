"use client";

import { OrdersToFulfill } from "../components/dashboard/OrdersToFulfill";
import { VendorsPieChart } from "../components/dashboard/VendorsPieChart";
import { ActiveCompanies } from "../components/dashboard/ActiveCompanies";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import StartCards from "../components/dashboard/StartCards";

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
      {/* stat cards */}
      <StartCards />
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
          {/* recent activity */}
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
