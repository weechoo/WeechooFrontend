import { useState, useMemo } from "react";
import { ordersData } from "@/constants/orders";
import {
  calculateActiveVendors,
  calculateOrderRate,
  calculateTotalOrders,
  calculateTotalValue,
} from "@/lib/orders-helpers";

export function useOrdersData() {
  const [selectedWeekId, setSelectedWeekId] = useState<string>(
    ordersData[0].id,
  );
  const [selectedDayName, setSelectedDayName] = useState<
    "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"
  >("Monday");

  const selectedWeek = useMemo(() => {
    return (
      ordersData.find((week) => week.id === selectedWeekId) || ordersData[0]
    );
  }, [selectedWeekId]);

  const selectedDay = useMemo(() => {
    return selectedWeek.days.find((day) => day.dayName === selectedDayName);
  }, [selectedWeek, selectedDayName]);

  const stats = useMemo(() => {
    const totalOrders = calculateTotalOrders(selectedWeek);
    const totalValue = calculateTotalValue(selectedWeek);
    const activeVendors = calculateActiveVendors(selectedWeek);
    const orderRate = calculateOrderRate(selectedWeek);

    return {
      totalOrders,
      totalValue,
      activeVendors,
      orderRate,
    };
  }, [selectedWeek]);

  const availableDays = selectedWeek.days.map((day) => day.dayName);

  const handleWeekChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWeekId(event.target.value);
    setSelectedDayName("Monday");
  };

  const handleDayChange = (
    dayName: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday",
  ) => {
    setSelectedDayName(dayName);
  };

  return {
    selectedWeek,
    selectedDay,
    selectedWeekId,
    selectedDayName,
    stats,
    availableDays,
    handleWeekChange,
    handleDayChange,
    ordersData,
  };
}
