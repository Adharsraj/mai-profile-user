import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("font-concord font-normal", className)}>
      <div className="px-2 max-w-[1400px] 3xl:max-w-[1920px]   mx-auto lg:px-[10vw] md:px-[5vw]">
        {children}
      </div>
    </div>
  );
};
