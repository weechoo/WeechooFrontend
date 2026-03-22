"use client";

import { useState, useEffect } from "react";
import EmptyState from "@/components/common/empty-state";
import { useOrdersData } from "@/hooks/useOrdersData";
import { OrdersHeader } from "../../components/orders/orders-header";
import { OrdersStatsCards } from "../../components/orders/orders-stats-cards";
import { OrdersWeekSelector } from "../../components/orders/orders-week-selector";
import { DayTabs } from "../../components/orders/orders-days-tab";
import { MealOrderCard } from "../../components/orders/meal-order-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function OrdersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const {
    selectedWeek,
    selectedDay,
    selectedWeekId,
    selectedDayName,
    stats,
    availableDays,
    handleWeekChange,
    handleDayChange,
    ordersData,
  } = useOrdersData();

  // simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 space-y-6 w-full animate-in fade-in duration-500">
        {/* header skeleton */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Skeleton className="h-8 w-48" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-24 rounded-lg" />
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>

        {/* stats skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-28 w-full rounded-xl" />
          ))}
        </div>

        {/* week selector skeleton */}
        <Skeleton className="h-20 w-full rounded-xl" />

        {/* day tabs skeleton */}
        <div className="flex gap-2 border-b border-gray-200 pb-2 overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-10 w-28 rounded-lg shrink-0" />
          ))}
        </div>

        {/* meal 0rders list skeleton */}
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-4 border rounded-xl p-4 bg-white"
            >
              <div className="flex justify-between items-center pb-4 border-b">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <Skeleton className="h-8 w-24 rounded-full" />
              </div>
              <div className="flex justify-between items-center pt-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-8 w-28 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <OrdersHeader selectedWeek={selectedWeek} />
      <OrdersStatsCards stats={stats} />
      <OrdersWeekSelector
        selectedWeek={selectedWeek}
        selectedWeekId={selectedWeekId}
        ordersData={ordersData}
        onWeekChange={handleWeekChange}
      />
      <DayTabs
        availableDays={availableDays}
        selectedDayName={selectedDayName}
        onDayChange={handleDayChange}
      />
      <div className="space-y-6">
        {selectedDay && selectedDay.meals.length > 0 ? (
          selectedDay.meals.map((meal) => (
            <MealOrderCard key={meal.id} meal={meal} />
          ))
        ) : (
          <EmptyState
            title="No orders for this day"
            description="There are no meal orders scheduled for the selected day. Check back later or select a different day."
          />
        )}
      </div>
    </div>
  );
}
