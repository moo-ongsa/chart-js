"use client";

import React, { useMemo } from "react";
import { numberDecimalTenthsFormat } from "@/utils/numeral";
import { MotionDiv } from "./MotionDiv";
import { Color } from "chart.js";

const TOTAL_SQUARES = 100;

interface WaffleDataset {
  data: number[];
  backgroundColor: Color[];
}

interface WaffleChartData {
  labels: string[];
  datasets: WaffleDataset[];
}

interface WaffleChartProps {
  data: WaffleChartData;
  totalSquares: number;
  rows: number;
  columns: number;
}

const createWaffleData = (dataset: WaffleDataset): Color[] => {
  const waffleArray: Color[] = [];
  const { data, backgroundColor } = dataset;

  const sortedData = [...data].sort((a, b) => b - a);
  let count = 0;

  sortedData.forEach((item, index) => {
    const numSquares = Math.round((item / 100) * TOTAL_SQUARES);
    for (let i = 0; i < numSquares; i++) {
      waffleArray[count] = backgroundColor[index] ?? "#ccc";
      count++;
    }
  });

  for (let i = count; i < TOTAL_SQUARES; i++) {
    waffleArray[i] = backgroundColor[backgroundColor.length - 1] ?? "#ccc";
  }

  return waffleArray;
};

const WaffleChart: React.FC<WaffleChartProps> = ({ data }) => {
  const dataset = useMemo(() => data.datasets[0], [data]);
  const waffleData = createWaffleData(dataset);

  return (
    <div className="flex flex-col items-center">
      <MotionDiv
        className="grid grid-cols-10 gap-1 w-full mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.06,
            },
          },
        }}
      >
        {Array.from({ length: 10 }).map((_, colIndex) => (
          <MotionDiv
            key={colIndex}
            className="flex flex-col gap-1"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {waffleData
              .filter((_, index) => index % 10 === colIndex)
              .map((color, rowIndex) => (
                <div
                  key={rowIndex}
                  className="aspect-square border border-hsla(0,0%,0%,0.1) w-full relative transition hover-effect-chartjs"
                  style={{
                    backgroundColor:
                      typeof color === "string" ? color : undefined,
                    height: "0px",
                    paddingBottom: "100%",
                  }}
                />
              ))}
          </MotionDiv>
        ))}
      </MotionDiv>

      <div className="flex flex-wrap w-full mt-[34px] gap-y-[7.5px]">
        {data.labels.map((label, index) => (
          <div key={label} className="flex items-center w-1/2">
            <div
              className="flex flex-shrink-0 items-center justify-center w-[51px] h-6 text-xs text-white"
              style={{
                backgroundColor:
                  typeof dataset.backgroundColor[index] === "string"
                    ? dataset.backgroundColor[index]
                    : undefined,
              }}
            >
              {numberDecimalTenthsFormat(dataset.data[index])} %
            </div>
            <span className="ml-[10px] text-sm text-text-main-light break-word">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaffleChart;
