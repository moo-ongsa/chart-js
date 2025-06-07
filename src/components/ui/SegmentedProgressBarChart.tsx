import React, { FC, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  numberDecimalFormat,
  numberSingleDecimalFormat,
} from "@/utils/numeral";
import { Color } from "chart.js";
import { MotionDiv } from "./MotionDiv";

interface SegmentedProgressBarProps {
  className?: string;
  barClassName?: string;
  data: {
    labels: string[];
    datasets: Array<{
      data: number[];
      backgroundColor: Color[];
    }>;
  };
}

const SegmentedProgressBar: FC<SegmentedProgressBarProps> = ({
  data,
  className,
  barClassName,
}) => {
  const dataset = useMemo(() => data.datasets[0], [data]);
  const segments = dataset.data;
  const colors = dataset.backgroundColor.map((color) => {
    if (typeof color === "string") {
      return color;
    } else if (!color) {
      return "#000000"; // Fallback color if color is null or undefined
    } else {
      return color.toString();
    }
  });

  return (
    <div className={cn("w-full flex flex-col items-center", className)}>
      {/* Segmented Progress Bar */}
      <div
        className={cn(
          "relative flex w-full h-[75px] overflow-hidden",
          barClassName
        )}
      >
        {segments.map((segment, index) => (
          <MotionDiv
            key={index}
            className="h-full flex items-center justify-center text-white text-base font-semibold hover-effect-chartjs min-w-[40px] md:min-w-[50px]"
            style={{
              backgroundColor: colors[index],
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${segment}%` }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          >
            {/* Label inside the segment */}
            <span className="block md:hidden text-center">
              {data.labels[index]} {numberSingleDecimalFormat(segment)}%
            </span>
            <span className="hidden md:block text-center">
              {data.labels[index]} {numberDecimalFormat(segment)}%
            </span>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default SegmentedProgressBar;
