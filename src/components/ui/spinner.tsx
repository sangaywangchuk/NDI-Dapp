import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

type SpinnerProps = {
  className?: string;
};

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Loader2Icon
        className={cn(
          "animate-spin size-9 text-primary-foreground/60",
          className,
        )}
      />
    </div>
  );
};
