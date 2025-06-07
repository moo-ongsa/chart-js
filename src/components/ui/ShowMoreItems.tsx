"use client";

import React, { useState, useRef, useMemo } from "react";
import { useContainerSize } from "@/utils/hooks";

import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem } from "./Accordion";

const ITEM_1 = "ITEM_1";

// ✅ Define prop types with generic T
interface ShowMoreItemsProps<T> {
  items: T[];
  renderItem: (_item: T, _index: number) => React.ReactNode;
  itemWidth?: number;
  itemGap?: number;
  className?: string;
}

function ShowMoreItems<T>({
  items,
  renderItem,
  itemWidth = 229,
  itemGap = 32,
  className,
}: ShowMoreItemsProps<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showMore, setShowMore] = useState<string>("");

  const { width } = useContainerSize(containerRef);

  const [showItems, hideItems] = useMemo(() => {
    const sliceItem = Math.max(Math.floor(width / itemWidth), 3);
    const visibleItems = items.slice(0, sliceItem);
    const hiddenItems = items.slice(sliceItem);

    const remainder = hiddenItems.length % sliceItem;
    if (remainder !== 0) {
      const fillersNeeded = sliceItem - remainder;
      for (let i = 0; i < fillersNeeded; i++) {
        hiddenItems.push(null as T); // เพิ่ม filler ให้เต็มแถว
      }
    }

    return [visibleItems, hiddenItems];
  }, [width, items, itemWidth]);

  const toggleShowMore = () => {
    setShowMore((prev) => (prev === ITEM_1 ? "" : ITEM_1));
  };

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <Accordion type="single" collapsible value={showMore} className="w-full">
        <div
          className="flex w-full justify-center sm:justify-between flex-wrap"
          style={{ columnGap: itemGap }}
        >
          {showItems.map((item, index) => renderItem(item, index))}
        </div>

        <AccordionItem value={ITEM_1}>
          <AccordionContent>
            <div
              className="flex w-full justify-center sm:justify-between flex-wrap"
              style={{ columnGap: itemGap }}
            >
              {hideItems.map((item, index) =>
                item === null ? (
                  <div key={`empty-${index}`} style={{ width: itemWidth }} />
                ) : (
                  renderItem(item, index)
                )
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button onClick={toggleShowMore} className="w-full" variant="outline">
        {showMore ? "Show less" : "Show more"}
      </Button>
    </div>
  );
}

export default ShowMoreItems;
