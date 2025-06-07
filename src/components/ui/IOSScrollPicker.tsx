"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export type PickerOption<T> = {
  label: string;
  value: T;
};

type IOSScrollPickerProps<T> = {
  options: PickerOption<T>[];
  defaultValue?: T;
  onChange?: (value: T) => void;
  itemHeight?: number;
  visibleCount?: number;
};

const IOSScrollPicker = <T,>({
  options,
  defaultValue,
  onChange,
  itemHeight = 44,
  visibleCount = 3,
}: IOSScrollPickerProps<T>) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<T>(
    defaultValue ?? options[0]?.value
  );

  const centerIndex = Math.floor(visibleCount / 2);

  const findIndexByValue = (value: T) =>
    options.findIndex((opt) => opt.value === value);

  const getClampedIndex = (scrollTop: number) => {
    const index = Math.round(scrollTop / itemHeight);
    return Math.max(0, Math.min(options.length - 1, index));
  };

  const handleSnap = () => {
    if (!scrollRef.current) return;
    const index = getClampedIndex(scrollRef.current.scrollTop);
    const selectedOption = options[index];
    scrollRef.current.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    });
    console.log("🚀 ~ handleSnap ~ selectedOption:", selectedOption);
    if (selectedOption?.value !== selected) {
      setSelected(selectedOption.value);
      onChange?.(selectedOption.value);
    }
  };

  // Scroll to default
  useEffect(() => {
    const index = findIndexByValue(defaultValue ?? options[0]?.value);
    if (scrollRef.current && index >= 0) {
      scrollRef.current.scrollTo({ top: index * itemHeight });
      setSelected(options[index]?.value);
    }
  }, [defaultValue]);

  // Drag support (optional, from previous step)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDragging = false;
    let startY = 0;
    let scrollStart = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startY = e.clientY;
      scrollStart = el.scrollTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const delta = e.clientY - startY;
      el.scrollTop = scrollStart - delta;
    };

    const onMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        handleSnap();
      }
    };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [options]);

  return (
    <div
      className="relative w-full select-none"
      style={{ height: visibleCount * itemHeight }}
    >
      {/* Highlight */}
      <div
        className="absolute w-[calc(100%-32px)] left-4 rounded-[8px] bg-quiz-button-input-disabled border-2 border-quiz-button-input-disabled-border pointer-events-none  z-10 "
        style={{
          top: `${centerIndex * itemHeight - 3}px`,
          height: `${itemHeight + 6}px`,
        }}
      />

      {/* Scroll List */}
      <div
        ref={scrollRef}
        onScroll={() => {
          clearTimeout((scrollRef.current as any)?._scrollTimeout);
          (scrollRef.current as any)._scrollTimeout = setTimeout(() => {
            handleSnap();
          }, 100);
        }}
        className="overflow-y-scroll snap-y snap-mandatory h-full scrollbar scrollbar-thumb-[#E3C9A9] scrollbar-track-quiz-input-active pr-2 always-show-scrollbar "
        style={{
          paddingTop: `${centerIndex * itemHeight}px`,
          paddingBottom: `${centerIndex * itemHeight}px`,
        }}
      >
        {options.map((opt) => (
          <div
            key={String(opt.value)}
            className={cn(
              "relative snap-center text-center transition-all z-20",
              {
                " text-quiz-text-black button-afacad-20-medium":
                  opt.value === selected,
                "text-quiz-text-black font-afacad font-[18px] opacity-50":
                  opt.value !== selected,
              }
            )}
            style={{
              height: `${itemHeight}px`,
              lineHeight: `${itemHeight}px`,
            }}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IOSScrollPicker;
