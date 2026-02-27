import { cn } from "@/lib/utils";
import { TextProps } from "@/types/texts";

// card text

export const CardSubtext = ({ children, className }: TextProps) => {
  return (
    <div
      className={cn(
        "font-satoshi text-sm font-normal text-neutral-100",
        className,
      )}
    >
      {children}
    </div>
  );
};
