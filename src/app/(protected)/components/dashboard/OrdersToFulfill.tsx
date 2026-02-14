import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { orders } from "@/constants/placeholder";

export function OrdersToFulfill() {
  return (
    <Card className="p-6 rounded-2xl">
      <h3 className="font-semibold mb-4">Today, 10th October, 2025</h3>

      <p className="text-sm text-muted-foreground mb-6">
        Orders to fulfil by vendors
      </p>

      <div className="space-y-4">
        {orders.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-neutral-50 p-4 rounded-xl"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">
                {item.orders} orders
              </p>
            </div>

            <StatusBadge status={item.status as any} />
          </div>
        ))}
      </div>
    </Card>
  );
}
