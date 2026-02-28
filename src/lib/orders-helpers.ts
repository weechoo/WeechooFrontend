import { WeekOrders } from "@/types/orders";

// format date range

export function formatDateRange(week: WeekOrders): string {
  const start = new Date(week.startDate);
  const end = new Date(week.endDate);

  const month = start.toLocaleString("default", { month: "long" });
  const year = week.year;

  return `${month} ${start.getDate()}–${end.getDate()}, ${year}`;
}

// format week option

export function formatWeekOption(week: WeekOrders): string {
  const start = new Date(week.startDate);
  const end = new Date(week.endDate);

  const shortMonth = start.toLocaleString("default", { month: "short" });

  return `Week ${week.weekNumber} - ${shortMonth} ${start.getDate()}–${end.getDate()}, ${week.year}`;
}

// calc total orders
export function calculateTotalOrders(week: WeekOrders): number {
  return week.days.reduce((total, day) => {
    return (
      total +
      day.meals.reduce((dayTotal, meal) => {
        return (
          dayTotal +
          meal.companyOrders.reduce((mealTotal, company) => {
            return mealTotal + company.quantity;
          }, 0)
        );
      }, 0)
    );
  }, 0);
}

// calc total value

export function calculateTotalValue(week: WeekOrders): number {
  return week.days.reduce((total, day) => {
    return (
      total +
      day.meals.reduce((dayTotal, meal) => {
        const mealTotal = meal.companyOrders.reduce((sum, company) => {
          return sum + company.quantity;
        }, 0);
        return dayTotal + mealTotal * meal.pricePerUnit;
      }, 0)
    );
  }, 0);
}

// calc active vendors
export function calculateActiveVendors(week: WeekOrders): number {
  const vendors = new Set<string>();

  week.days.forEach((day) => {
    day.meals.forEach((meal) => {
      vendors.add(meal.vendorId);
    });
  });

  return vendors.size;
}

const TOTAL_EMPLOYEES = 332;

export function calculateOrderRate(week: WeekOrders): number {
  const totalOrders = calculateTotalOrders(week);
  return Number(((totalOrders / TOTAL_EMPLOYEES) * 100).toFixed(1));
}
