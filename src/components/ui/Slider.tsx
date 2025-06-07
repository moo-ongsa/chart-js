"use client";

import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import clsx from "clsx";

type SliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & {
  formatLabel?: (_value: number) => React.ReactNode;
  title?: string;
};

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      min = 0,
      max = 100,
      step = 1,
      formatLabel,
      value,
      onValueChange,
      title,
      ...props
    },
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = useState<number[]>(
      initialValue as number[]
    );

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    // Generate step labels
    const generateLabels = () => {
      const range = max - min;
      const steps: { value: number; percent: number }[] = [];
      for (let i = min; i <= max; i += step) {
        const percent = ((i - min) / range) * 100;
        steps.push({ value: i, percent });
      }
      return steps;
    };

    const labels = generateLabels();

    return (
      <div className="flex justify-between items-center h-[53px]">
        <span className="mr-6 text-sm font-semibold text-nowrap">{title}</span>
        <div className="w-full flex flex-col gap-3">
          <div className="h-6 relative">
            {labels.map((label, index) => (
              <span
                key={index}
                style={{
                  left: `${label.percent}%`,
                  transform: `translateX(-${label.percent}%)`,
                }}
                className={clsx(`absolute text-sm text-center font-medium`)}
              >
                {formatLabel ? formatLabel(label.value) : label.value}
              </span>
            ))}
          </div>

          <SliderPrimitive.Root
            ref={ref}
            min={min}
            max={max}
            step={step}
            value={localValues}
            onValueChange={handleValueChange}
            className={cn(
              "relative flex w-full touch-none select-none items-center",
              className
            )}
            {...props}
          >
            <SliderPrimitive.Track className="relative h-2.5 w-full grow overflow-hidden rounded-full bg-slider-background">
              <SliderPrimitive.Range className="absolute h-full bg-slider" />
            </SliderPrimitive.Track>
            {localValues.map((_, index) => (
              <SliderPrimitive.Thumb
                key={index}
                className="block h-6 w-6 rounded-full border-[5px] border-slider bg-background shadow transition-colors focus-visible:outline-none focus-visible:slider focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              />
            ))}
          </SliderPrimitive.Root>
        </div>
      </div>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
