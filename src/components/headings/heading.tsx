import { cn } from "@/lib/utils";
import { TextProps } from "@/types/texts";

// title text across app

export const Heading = ({ children, className }: TextProps) => {
  return (
    <div
      className={cn(
        "font-satoshi font-bold text-2xl leading-8 text-neutral-200",
        className,
      )}
    >
      {children}
    </div>
  );
};
