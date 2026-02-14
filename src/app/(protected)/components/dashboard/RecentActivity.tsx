import { Card } from "@/components/ui/card";
import { activities } from "@/constants/placeholder";

export function RecentActivity() {
  return (
    <Card className="p-6 flex flex-col gap-2 rounded-2xl shadow-none border-[0.8px] border-[#E2E8F0]">
      <h3 className="text-neutral-black font-bold">Recent Activity</h3>

      <div className="flex flex-col gap-6">
        {activities.map((item, i) => (
          <div
            key={i}
            className="flex justify-between text-sm border-b border-[#E2E8F0] p-2"
          >
            <p className="text-neutral-100">{item.text}</p>

            <span className="text-muted-foreground">{item.time}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
