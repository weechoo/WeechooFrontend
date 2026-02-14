export function StatusBadge({ status }: { status: "Ready" | "Preparing" }) {
  const base = "px-3 py-1 rounded-full text-xs font-medium";

  if (status === "Ready") {
    return <span className={`${base} bg-green-100 text-green-600`}>Ready</span>;
  }

  return <span className={`${base} bg-red-100 text-red-600`}>Preparing</span>;
}
