import { cn } from "@/lib/utils";
import { TextProps } from "@/types/texts";

// card subtext
export const CardText = ({ children, className }: TextProps) => {
  return (
    <div
      className={cn(
        "font-satoshi text-sm font-medium text-neutral-300",
        className,
      )}
    >
      {children}
    </div>
  );
};
