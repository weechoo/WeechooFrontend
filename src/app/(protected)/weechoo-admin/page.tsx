"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ActiveCompanies } from "../components/dashboard/active-companies";
import DashboardStats from "../components/dashboard/dashboard-stats";
import { OrdersToFulfill } from "../components/dashboard/orders-to-fulfill";
import { RecentActivity } from "../components/dashboard/recent-activity";
import { VendorsPieChart } from "../components/dashboard/vendors-pie-chart";

export default function WeechooAdminDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  // simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>

        {/* dashboard stats skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-32 w-full rounded-2xl" />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-9 flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <Skeleton className="h-80 w-full rounded-xl" />
              </div>
              <div className="lg:col-span-2">
                <Skeleton className="h-80 w-full rounded-xl" />
              </div>
            </div>
            <Skeleton className="h-96 w-full rounded-xl" />
          </div>
          <div className="xl:col-span-3">
            <Skeleton className="h-[900px] xl:h-full w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }
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

      <DashboardStats />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
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
        <div className="xl:col-span-3">
          <div className="h-full">
            <ActiveCompanies />
          </div>
        </div>
      </div>
    </div>
  );
}
