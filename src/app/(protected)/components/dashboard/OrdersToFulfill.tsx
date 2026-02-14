import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { orders } from "@/constants/placeholder";
import { Soup } from "lucide-react";

export function OrdersToFulfill() {
  return (
    <Card className="p-6 rounded-2xl border-[0.6px] border-[#E2E8F0] shadow-none">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-neutral-black leading-none">
          Today, 10th October, 2025
        </h3>

        <p className="text-xs text-neutral-100 leading-none font-noral">
          Orders to fulfil by vendors
        </p>
      </div>

      <div className="space-y-4">
        {orders.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)",
                }}
                className="rounded-lg h-10 w-10 flex flex-col items-center justify-center"
              >
                <Soup className="text-white" size={20} />
              </div>

              <div>
                <p className="font-bold leading-none text-neutral-black text-sm">
                  {item.name}
                </p>
                <p className="text-xs text-gray-100 font-normal">
                  {item.orders} orders
                </p>
              </div>
            </div>

            <StatusBadge status={item.status} />
          </div>
        ))}
      </div>
    </Card>
  );
}
