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
          <h3 className="text-base font-medium text-neutral-black mb-1">
            {meal.mealName}
          </h3>
          <p className="text-sm text-neutral-100">Vendor: {meal.vendorName}</p>
        </div>
        <div className="text-[#F97316] border border-[#FFECDF] bg-[#FFFAF7] px-3 py-1 rounded-full text-sm font-medium">
          {totalOrders} orders
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-sm font-medium text-gray-500 pb-2 border-b border-gray-200">
          <span className="text-neutral-black text-sm font-bold">Company</span>
          <span className="text-neutral-black text-sm font-bold">Quantity</span>
        </div>
        <div className="divide-y divide-gray-200">
          {meal.companyOrders.map((company, index) => (
            <div
              key={`${company.companyId}-${index}`}
              className="flex justify-between py-2 text-sm"
            >
              <span className="text-neutral-100">{company.companyName}</span>
              <span className="text-neutral-100">{company.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
