export interface CompanyOrder {
  companyId: string;
  companyName: string;
  quantity: number;
}

export interface MealOrder {
  id: string;
  mealName: string;
  vendorId: string;
  vendorName: string;
  pricePerUnit: number;
  companyOrders: CompanyOrder[];
}

export interface DayOrders {
  date: string;
  dayName: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  meals: MealOrder[];
}

export interface WeekOrders {
  id: string;
  weekNumber: number;
  startDate: string;
  endDate: string;
  year: number;
  days: DayOrders[];
}
