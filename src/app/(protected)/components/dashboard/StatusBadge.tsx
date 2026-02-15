import { OrderStatus } from "@/types/menu";

interface StatusBadgeProps {
  status: OrderStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const base = "px-3 py-1 rounded-full text-xs font-medium";

  if (status === "Ready") {
    return (
      <span
        className={`${base}  text-white flex gap-2.5 font-medium text-xs bg-[#00A63E] py-1 px-2 rounded-lg`}
      >
        Ready
      </span>
    );
  }

  return (
    <span
      className={`${base} text-white flex gap-2.5 font-medium text-xs bg-[#EF4444] py-1 px-2 rounded-lg`}
    >
      Preparing
    </span>
  );
}
