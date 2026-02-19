"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  active,
  badge,
}: {
  icon: LucideIcon;
  label: string;
  href: string;
  active?: boolean;
  badge?: number;
}) => {
  const pathname = usePathname();
  const isActive = active || pathname === href;

  return (
    <Link href={href}>
      <div
        style={
          isActive
            ? {
                background: "linear-gradient(180deg, #f97316 0%, #ef4444 100%)",
              }
            : undefined
        }
        className={cn(
          "flex items-center justify-between gap-4 p-3 rounded-[6px] cursor-pointer transition",
          isActive ? "text-white" : "hover:bg-orange-50 text-[#3C3028]",
        )}
      >
        <div className="flex items-center gap-4">
          <Icon size={18} />
          <span className="text-sm font-bold">{label}</span>
        </div>
        {badge && (
          <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
    </Link>
  );
};
