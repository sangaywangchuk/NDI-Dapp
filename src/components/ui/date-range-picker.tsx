"use client";

import * as React from "react";
import {
  CalendarDays,
  Check,
  Eraser,
} from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, isSameDay } from "date-fns";
import { Maybe } from "@/types/util-types";

type DatePickerWithRangeProps = {
  initialDateRange?: Maybe<DateRange>;
  /**
   * Show minimalistic UI
   */
  minimal?: boolean;
  isSubmitting?: boolean;
  onDismiss?: VoidFunction;
  onSubmitDateRange?: (dateRange: DateRange) => Promise<void> | void;
  disableIcon?: boolean;
  triggerClassname?: string;
};

export function DatePickerWithRange({
  initialDateRange,
  className,
  minimal,
  isSubmitting,
  onDismiss,
  onSubmitDateRange,
  triggerClassname,
  disableIcon = false,
}: React.HTMLAttributes<HTMLDivElement> & DatePickerWithRangeProps) {
  const [dateRange, setDateRange] = React.useState<DateRange>();
  const initialDateRangeUsedRef = React.useRef(false);
  const triggerButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (initialDateRange && !dateRange && !initialDateRangeUsedRef.current) {
      setDateRange(initialDateRange);
      initialDateRangeUsedRef.current = true;
    }
  }, [initialDateRange, dateRange]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover onOpenChange={(open) => (!open ? onDismiss?.() : undefined)}>
        <PopoverTrigger asChild ref={triggerButtonRef}>
          <Button
            id="date"
            variant={minimal ? "ghost" : "outline"}
            className={cn(
              "w-[236px] -ml-3 justify-start items-center text-left font-normal gap-x-2",
              minimal && "hover:bg-transparent",
              !initialDateRange && "text-muted-foreground/50",
              triggerClassname,
            )}
          >
            {!disableIcon && (
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            )}
            {initialDateRange?.from ? (
              initialDateRange.to &&
              !isSameDay(initialDateRange.from, initialDateRange.to) ? (
                <>
                  {format(initialDateRange.from, "LLL dd, yy")} -{" "}
                  {format(initialDateRange.to, "LLL dd, yy")}
                </>
              ) : (
                format(initialDateRange.from, "LLL dd, yy")
              )
            ) : (
              <span className="text-muted-foreground">Pick date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 " align="start">
          <Calendar
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={1}
          />
          <div className="w-full flex items-start justify-end px-4 gap-x-2 mb-2">
            <Button
              title="Clear dates"
              className="rounded-full h-9 w-9 p-2"
              variant="ghost"
              disabled={!dateRange?.from && !dateRange?.to}
              onClick={() => setDateRange(undefined)}
            >
              <Eraser />
            </Button>
            {onSubmitDateRange && (
              <Button
                title="Save"
                className="rounded-full h-9 w-9 p-2"
                variant="ghost"
                size="icon"
                disabled={!dateRange?.from || !dateRange?.to}
                isLoading={isSubmitting}
                onClick={async () => {
                  await onSubmitDateRange(dateRange!);
                  triggerButtonRef.current?.click();
                }}
              >
                <Check />
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
