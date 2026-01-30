import { cn } from "@/lib/utils";
import { TextProps } from "@/types/texts";

// subtitle text across app

export const SubHeading = ({ children, className }: TextProps) => {
  return (
    <div
      className={cn(
        "font-satoshi text-base leading-6 font-normal text-neutral-100",
        className,
      )}
    >
      {children}
    </div>
  );
};
