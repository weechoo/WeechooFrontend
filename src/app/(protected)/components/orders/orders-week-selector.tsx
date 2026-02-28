import { formatWeekOption } from "@/lib/orders-helpers";
import { WeekOrders } from "@/types/orders";

interface WeekSelectorProps {
  selectedWeek: WeekOrders;
  selectedWeekId: string;
  ordersData: WeekOrders[];
  onWeekChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const OrdersWeekSelector = ({
  selectedWeekId,
  ordersData,
  onWeekChange,
}: WeekSelectorProps) => {
  return (
    <div className="flex items-center justify-between border-[0.8px] border-[#E2E8F0] p-2 rounded-xl">
      <div>
        <h2 className="text-lg font-medium text-gray-900">Current Week</h2>
      </div>

      <select
        value={selectedWeekId}
        onChange={onWeekChange}
        className="px-4 py-2 bg-[#FFFAF7] text-secondary-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
      >
        {ordersData.map((week) => (
          <option key={week.id} value={week.id} className="text-neutral-100">
            {formatWeekOption(week)}
          </option>
        ))}
      </select>
    </div>
  );
};
