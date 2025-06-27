"use client";

import { forwardRef, useMemo } from "react";
import { format } from "date-fns";
import { CalendarPlus2Icon } from "lucide-react";
import dayjs from "dayjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimePicker } from "./time-picker";

type DatePickerProps = {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  minDate?: Date;
  maxDate?: Date;
  timeLabel?: string;
  showTimePicker?: boolean;
  children?: React.ReactNode;
  iconClassName?: string;
};

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  ({
    value,
    onChange,
    minDate,
    maxDate,
    timeLabel,
    showTimePicker,
    children,
    iconClassName,
  }, ref) => {
    const date = useMemo(
      () => (value ? dayjs(value).toDate() : undefined),
      [value]
    );

    const handleDateChanged = (newDate: Date | undefined) => {
      if (!newDate) {
        onChange(undefined);
        return;
      }

      const oldDate = dayjs(value || undefined)
        .set("year", newDate?.getFullYear() || 0)
        .set("month", newDate?.getMonth() || 0)
        .set("date", newDate?.getDate() || 0)
        .toDate();
      onChange(oldDate?.toISOString());
    };

    const handleTimeChanged = (time: Date | undefined) => {
      onChange(time?.toISOString());
    };

    return (
      <Popover>
        <PopoverTrigger asChild>
          {children || (
            <Button
              ref={ref}
              variant="ghost"
              className={cn(
                "items-center justify-start text-left font-normal text-[12px] cursor-pointer",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarPlus2Icon
                className={cn(
                  "mr-1 h-[16px] w-[16px] text-primary",
                  iconClassName
                )}
              />
              {date ? format(date, "PPP") : "No date"}
            </Button>
          )}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChanged}
            fromDate={minDate}
            toDate={maxDate}
          />
          {showTimePicker && (
            <div className="p-3 border-t border-border">
              {timeLabel && (
                <p className="text-sm text-muted-foreground mb-1">
                  {timeLabel}
                </p>
              )}
              <TimePicker setDate={handleTimeChanged} date={date} />
            </div>
          )}
        </PopoverContent>
      </Popover>
    );
  }
);

DatePicker.displayName = "DatePicker";
