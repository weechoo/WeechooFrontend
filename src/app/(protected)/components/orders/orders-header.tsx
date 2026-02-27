import { formatDateRange } from "@/lib/orders-helpers";
import { WeekOrders } from "@/types/orders";

interface OrdersHeaderProps {
  selectedWeek: WeekOrders;
}

export const OrdersHeader = ({ selectedWeek }: OrdersHeaderProps) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">
        Orders Management
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        Overview of current week - {formatDateRange(selectedWeek)}
      </p>
    </div>
  );
};
