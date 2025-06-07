"use client";

import React, { useState, useRef, useEffect } from "react";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { cn } from "@/lib/utils";

type Option = {
  value: string | number;
  label: string;
};

interface RangeSelectProps {
  options: Option[];
  onValueChange?: (_value: (string | number)[]) => void;
  defaultValue?: (string | number)[];
  placeholder?: string;
  className?: string;
  showChevron?: boolean;
  renderLabel?: (_selected: (string | number)[]) => React.ReactNode;
}

const RangeSelect: React.FC<RangeSelectProps> = ({
  options,
  onValueChange,
  defaultValue = [],
  placeholder = "Select options",
  className = "",
  showChevron = true,
  renderLabel,
}) => {
  const [selected, setSelected] = useState<(string | number)[]>(defaultValue);
  const [lastSelected, setLastSelected] = useState<string | number | null>(
    null
  );
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(selected);
    }
  }, [selected, onValueChange]);

  const handleClick = (option: Option) => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
      handleDoubleClick(option);
    } else {
      clickTimer.current = setTimeout(() => {
        handleSingleClick(option);
        clickTimer.current = null;
      }, 250);
    }
  };

  const handleSingleClick = (option: Option) => {
    if (lastSelected === null) {
      setSelected([option.value]);
      setLastSelected(option.value);
    } else {
      const firstIndex = options.findIndex((opt) => opt.value === lastSelected);
      const secondIndex = options.findIndex(
        (opt) => opt.value === option.value
      );

      if (firstIndex === -1 || secondIndex === -1) return;

      const [start, end] =
        firstIndex < secondIndex
          ? [firstIndex, secondIndex]
          : [secondIndex, firstIndex];

      const range = options.slice(start, end + 1).map((opt) => opt.value);
      setSelected(range);
      setLastSelected(option.value);
    }
  };

  const handleDoubleClick = (option: Option) => {
    setSelected([option.value]);
    setLastSelected(option.value);
  };

  const isInRange = (optionValue: string | number) => {
    if (selected.length < 2) return false;
    const sortedValues = [...selected].sort((a, b) => {
      const aIndex = options.findIndex((opt) => opt.value === a);
      const bIndex = options.findIndex((opt) => opt.value === b);
      return aIndex - bIndex;
    });
    const firstIndex = options.findIndex(
      (opt) => opt.value === sortedValues[0]
    );
    const lastIndex = options.findIndex(
      (opt) => opt.value === sortedValues[sortedValues.length - 1]
    );
    const currentIndex = options.findIndex((opt) => opt.value === optionValue);
    return currentIndex > firstIndex && currentIndex < lastIndex;
  };

  const displaySelected = () => {
    if (typeof renderLabel === "function") {
      return renderLabel(selected);
    }
    if (selected.length === 0) return placeholder;
    return options
      .filter((opt) => selected.includes(opt.value))
      .map((opt) => opt.label)
      .join(", ");
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "w-fit bg-light-gold border border-input rounded-md shadow-sm pl-3 pr-3 py-2 text-left cursor-pointer sm:text-sm relative",
            className,
            { "pr-11": showChevron }
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block truncate font-semibold text-sm">
            {displaySelected()}
          </span>
          {showChevron && (
            <span className="absolute inset-y-0 right-2 flex items-center pr-2 pointer-events-none">
              <ChevronDownIcon
                className={cn(
                  "h-4 w-4 opacity-50 color-muted-foreground flex-shrink-0"
                )}
              />
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="absolute z-10 right-0 mt-1 p-1 w-64 bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
      >
        {options.map((option) => {
          const inRange = isInRange(option.value);
          const isSelected = selected.includes(option.value);
          return (
            <div
              key={option.value}
              onClick={() => handleClick(option)}
              className={cn(
                `${
                  inRange ? "bg-white" : ""
                } cursor-pointer select-none relative py-2 pl-10 pr-4 flex items-center`,
                isSelected ? "bg-accent" : "text-gray-900"
              )}
            >
              <span className="block truncate">{option.label}</span>
              {isSelected && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default RangeSelect;
