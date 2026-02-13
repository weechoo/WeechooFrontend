import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const SidebarItem = ({
  icon: Icon,
  label,
  active,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition",
        active
          ? "bg-orange-500 text-white"
          : "hover:bg-orange-50 text-neutral-700",
      )}
    >
      <Icon size={18} />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};
