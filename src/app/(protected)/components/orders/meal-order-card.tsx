import { useMemo } from "react";
import { MealOrder } from "@/types/orders";

interface MealOrderCardProps {
  meal: MealOrder;
}

export const MealOrderCard = ({ meal }: MealOrderCardProps) => {
  const totalOrders = useMemo(() => {
    return meal.companyOrders.reduce(
      (sum, company) => sum + company.quantity,
      0,
    );
  }, [meal]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{meal.mealName}</h3>
          <p className="text-sm text-gray-500">Vendor: {meal.vendorName}</p>
        </div>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {totalOrders} orders
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-sm font-medium text-gray-500 pb-2 border-b border-gray-200">
          <span>Company</span>
          <span>Quantity</span>
        </div>
        <div className="divide-y divide-gray-100">
          {meal.companyOrders.map((company, index) => (
            <div
              key={`${company.companyId}-${index}`}
              className="flex justify-between py-2 text-sm"
            >
              <span className="text-gray-900">{company.companyName}</span>
              <span className="text-gray-700 font-medium">
                {company.quantity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
