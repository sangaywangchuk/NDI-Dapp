import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const MutedCard = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => (
  <div
    className={cn(
      "flex flex-col items-start justify-middle gap-y-4 bg-white/10 p-[18px] rounded-[8px]",
      className,
    )}
  >
    {children}
  </div>
);
