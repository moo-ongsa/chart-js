"use client";

import React, { useRef, MouseEventHandler } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  Chart as ChartJS,
  ChartOptions,
  ChartData,
  registerables,
  LegendItem,
  Plugin,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import type { Context } from "chartjs-plugin-datalabels";
import { cn } from "@/lib/utils";
import { hslToGrayScale } from "@/utils/colos";
import { VALUE_TYPE } from "@/utils/constants";

// Register chart components globally (optional if not using tree shaking)
ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);

interface DoughnutChartProps {
  className?: string;
  legendClassName?: string;
  data: ChartData<"doughnut"> & {
    legends?: string[];
  };
  centerImage?: React.ReactNode;
  disabledLegend?: boolean;
  separatedLegend?: boolean;
  showOnlyValueOnChart?: boolean;
  valueType?: VALUE_TYPE;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  className,
  legendClassName,
  data,
  centerImage,
  disabledLegend = false,
  separatedLegend = false,
  showOnlyValueOnChart = false,
  valueType,
}) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<ChartJS<"doughnut"> | null>(null);
  const legendRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const { pageX, pageY } = event;
    if (tooltipRef.current) {
      tooltipRef.current.style.left = `${pageX + 10}px`;
      tooltipRef.current.style.top = `${pageY + 10}px`;
    }
  };

  // Custom tooltip handler
  const customTooltip = (context: any) => {
    let tooltipEl = tooltipRef.current;

    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.id = "chartjs-tooltip";
      tooltipEl.style.position = "absolute";
      tooltipEl.style.backgroundColor = "hsla(0, 0%, 100%, 0.6)";
      tooltipEl.style.color = "hsla(0, 0%, 0%, 1)";
      tooltipEl.style.borderRadius = "3px";
      tooltipEl.style.padding = "10px";
      tooltipEl.style.pointerEvents = "none";
      tooltipEl.style.zIndex = "9999";
      tooltipEl.style.backdropFilter = "blur(20px)";
      tooltipEl.style.boxShadow = "0px 4px 6.7px 0px hsla(0, 0%, 100%, 0.25)";
      tooltipEl.style.border = "1px solid hsla(214, 32%, 91%, 1)";
      document.body.appendChild(tooltipEl);
      tooltipRef.current = tooltipEl;
    }

    const tooltipModel = context.tooltip;
    if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = "0";
      return;
    }

    if (tooltipModel.body) {
      const bodyLines = tooltipModel.body.map(
        (bodyItem: any) => bodyItem.lines
      );
      const chartColors = context.chart.data.datasets[0]
        .backgroundColor as string[];
      const dataIndex = tooltipModel.dataPoints[0].dataIndex;

      let innerHtml = "<ul>";
      bodyLines.forEach((body: any) => {
        const color = chartColors[dataIndex];
        innerHtml += `<li class="flex items-center gap-[10px] text-xs font-normal">
          <div style="background-color: ${color};" class="w-[12px] h-[12px] rounded-full"></div>
          ${tooltipModel.title[0]} (${body}%)
        </li>`;
      });
      innerHtml += "</ul>";

      tooltipEl.innerHTML = innerHtml;
      tooltipEl.style.opacity = "1";
    }
  };

  let previousHoveredIndex: number | null = null;
  let originalColors: string[] | null = null;

  const outerBorderAndHoverPlugin = {
    id: "outerBorderAndHoverPlugin",
    beforeDraw: (chart: ChartJS<"doughnut">) => {
      const { ctx, data, options } = chart;
      const meta = chart.getDatasetMeta(0);
      const borderWidth = (options as any).plugins.outerBorderAndHoverPlugin
        .borderWidth;
      const hoveredIndex = (options as any).plugins.outerBorderAndHoverPlugin
        .hoveredIndex;

      ctx.save();
      meta.data.forEach((element, index) => {
        if (index === hoveredIndex) {
          const model = element as ArcElement;
          const startAngle = model.startAngle;
          const endAngle = model.endAngle;
          const borderColor = (data.datasets[0].backgroundColor as string[])[
            index
          ].replace(/, 1\)/, ", 0.5)");
          ctx.lineWidth = borderWidth;
          ctx.strokeStyle = borderColor;
          ctx.beginPath();
          ctx.arc(
            model.x,
            model.y,
            model.outerRadius + borderWidth / 2,
            startAngle,
            endAngle
          );
          ctx.stroke();
        }
      });
      ctx.restore();
    },
    beforeEvent(chart: ChartJS<"doughnut">, args: any) {
      const event = args.event;
      if (!originalColors) {
        originalColors = [
          ...(chart.data.datasets[0].backgroundColor as string[]),
        ];
      }

      const element = chart.getElementsAtEventForMode(
        event,
        "nearest",
        { intersect: true },
        true
      );
      if (element.length) {
        const hoveredIndex = element[0].index;
        if (hoveredIndex !== previousHoveredIndex) {
          previousHoveredIndex = hoveredIndex;
          (
            chart.options as any
          ).plugins.outerBorderAndHoverPlugin.hoveredIndex = hoveredIndex;

          const grayScaleColors = originalColors.map((color, index) =>
            index === hoveredIndex ? color : hslToGrayScale(color, 10)
          );
          chart.data.datasets[0].backgroundColor = grayScaleColors;
          chart.update();
        }
      } else if (previousHoveredIndex !== null || event.type === "mouseout") {
        (chart.options as any).plugins.outerBorderAndHoverPlugin.hoveredIndex =
          null;
        chart.data.datasets[0].backgroundColor = originalColors!;
        previousHoveredIndex = null;
        chart.update();
      }
    },
  };

  const getOrCreateLegendList = () => {
    const legendContainer = legendRef.current!;
    let listContainer = legendContainer.querySelector("ul");
    if (!listContainer) {
      listContainer = document.createElement("ul");
      listContainer.style.display = "flex";
      listContainer.style.flexDirection = "row";
      listContainer.style.flexWrap = "wrap";
      listContainer.style.margin = "0";
      listContainer.style.padding = "0";
      listContainer.style.gap = "5px 21px";
      legendContainer.appendChild(listContainer);
    }
    return listContainer;
  };

  const htmlLegendPlugin = {
    id: "htmlLegend",
    afterDraw(chart: ChartJS<"doughnut">) {
      if (disabledLegend) return;

      const ul = getOrCreateLegendList();

      while (ul.firstChild) ul.firstChild.remove();
      const generateLabels =
        chart.options.plugins?.legend?.labels?.generateLabels;
      const items = generateLabels ? generateLabels(chart as ChartJS) : [];
      items.forEach((item: LegendItem) => {
        const li = document.createElement("li");
        li.className = separatedLegend
          ? "w-full xl:w-[calc(50%-10.5px)]"
          : "w-full";
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "9px";

        const colorBox = document.createElement("span");
        colorBox.style.background = item.fillStyle as string;
        colorBox.style.borderRadius = "50%";
        colorBox.style.width = "12px";
        colorBox.style.height = "12px";

        const labelText = document.createElement("p");
        labelText.className = "label-legend";
        labelText.style.fontSize = "12px";
        labelText.style.lineHeight = "20px";
        labelText.style.fontWeight = "500";

        const legendLabel =
          typeof item.index === "number" && data.legends?.[item.index]
            ? data.legends[item.index]
            : item.text;

        labelText.textContent = legendLabel;

        // const legendValue =
        //   typeof item.index === "number" && data.legends?.[item.index]
        //     ? data.legends[item.index]
        //     : item.text;

        const value =
          item.index !== undefined
            ? data.datasets[0].data[item.index]
            : undefined;
        const valueText = document.createElement("p");
        valueText.className = "value-legend";
        valueText.style.fontSize = "12px";
        valueText.style.lineHeight = "20px";
        valueText.style.fontWeight = "500";
        valueText.style.textAlign = "right";
        valueText.textContent =
          valueType === VALUE_TYPE.PERCENT ? `${value}%` : String(value);

        li.appendChild(colorBox);
        li.appendChild(labelText);
        li.appendChild(valueText);
        ul.appendChild(li);
      });
    },
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: 20 },
    cutout: "30%",
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: customTooltip,
      },
      datalabels: {
        color: "#fff",
        formatter: (value: number, context: Context) => {
          const label = context.chart.data.labels?.[context.dataIndex] ?? "";
          if (valueType === VALUE_TYPE.PERCENT && value < 7) return "";
          const val = valueType === VALUE_TYPE.PERCENT ? `${value}%` : value;
          if (showOnlyValueOnChart) return val;
          return `${label}\n${val}`;
        },
        anchor: "center",
        align: "center",
        font: () => {
          return {
            size: 14,
            weight: 400,
          };
        },
        display: (context: Context) => {
          const { dataIndex, dataset } = context;
          if (
            typeof dataIndex !== "number" ||
            !Array.isArray(dataset.data) ||
            dataset.data[dataIndex] == null
          ) {
            return false;
          }
          return (dataset.data[dataIndex] as number) > 5;
        },
      },
      outerBorderAndHoverPlugin: {
        borderWidth: 20,
      },
    },
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        className={cn("relative w-full flex justify-center", className)}
      >
        <Doughnut
          ref={chartRef}
          id="doughnut-chart"
          data={data}
          options={options}
          plugins={[
            outerBorderAndHoverPlugin,
            htmlLegendPlugin,
            ChartDataLabels as Plugin<"doughnut">,
            ArcElement,
            Tooltip as Plugin<"doughnut">,
            Legend as Plugin<"doughnut">,
          ]}
        />
        {centerImage}
      </div>
      <div
        ref={legendRef}
        id="legend-container"
        className={cn(
          "mt-4 [&>ul>li>p.label-legend]:text-text-main-light [&>ul>li>p.value-legend]:text-text-main",
          { hidden: disabledLegend },
          legendClassName
        )}
      />
    </>
  );
};

export default DoughnutChart;
