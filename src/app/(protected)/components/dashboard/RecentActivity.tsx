import { Card } from "@/components/ui/card";
import { activities } from "@/constants/placeholder";

export function RecentActivity() {
  return (
    <Card className="p-6 rounded-2xl">
      <h3 className="font-semibold mb-6">Recent Activity</h3>

      <div className="space-y-6">
        {activities.map((item, i) => (
          <div key={i} className="flex justify-between text-sm">
            <p>{item.text}</p>
            <span className="text-muted-foreground">{item.time}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
