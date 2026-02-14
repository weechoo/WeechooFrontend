import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

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
      style={
        active
          ? { background: "linear-gradient(180deg, #f97316 0%, #ef4444 100%)" }
          : undefined
      }
      className={cn(
        "flex items-center gap-4 p-3 rounded-[6px] cursor-pointer transition",
        active ? "text-white" : "hover:bg-orange-50 text-[#3C3028]",
      )}
    >
      <Icon size={18} />
      <span className="text-sm font-bold">{label}</span>
    </div>
  );
};
