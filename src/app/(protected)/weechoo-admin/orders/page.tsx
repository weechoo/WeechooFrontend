"use client";

import { useState, useEffect } from "react";
import EmptyState from "@/components/common/empty-state";
import Loader from "@/components/common/Loader";
import { useOrdersData } from "@/hooks/useOrdersData";
import { OrdersHeader } from "../../components/orders/orders-header";
import { OrdersStatsCards } from "../../components/orders/orders-stats-cards";
import { OrdersWeekSelector } from "../../components/orders/orders-week-selector";
import { DayTabs } from "../../components/orders/orders-days-tab";
import { MealOrderCard } from "../../components/orders/meal-order-card";

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
      <div className="p-6 flex justify-center items-center min-h-100">
        <Loader size="lg" />
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
