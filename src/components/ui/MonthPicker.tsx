"use client";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { format, addYears, subYears } from "date-fns";

interface MonthPickerProps {
  selected: Date;
  onSelect: (_value: Date | ((_prev: Date) => Date)) => void;
  className?: string;
}

const MonthPicker: React.FC<MonthPickerProps> = ({
  selected,
  onSelect,
  className,
}) => {
  const handlePreviousYear = () => {
    onSelect((prev) => subYears(prev, 1));
  };

  const handleNextYear = () => {
    onSelect((prev) => addYears(prev, 1));
  };

  const handleMonthSelect = (month: Date) => {
    onSelect(month);
  };

  return (
    <div className={cn("rdp p-3", className)}>
      <div className="flex flex-col space-y-4 sm:space-x-4 sm:space-y-0">
        <div className="space-y-4 rdp-caption_start rdp-caption_end">
          <div className="flex justify-center pt-1 relative items-center">
            <div className="text-sm font-medium">
              {format(selected, "yyyy")}
            </div>
            <div className="space-x-1 flex items-center">
              <Button
                size="smIcon"
                variant="outline"
                onClick={handlePreviousYear}
                className="absolute left-1"
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                size="smIcon"
                variant="outline"
                onClick={handleNextYear}
                className="absolute right-1"
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {Array.from({ length: 12 }).map((_, index) => {
              const month = new Date(selected.getFullYear(), index, 1);
              return (
                <Button
                  key={index}
                  variant={
                    selected.getMonth() === index ? "secondary" : "ghost"
                  }
                  onClick={() => handleMonthSelect(month)}
                  className="text-sm"
                >
                  {format(month, "MMM")}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

MonthPicker.displayName = "MonthPicker";

export { MonthPicker };
