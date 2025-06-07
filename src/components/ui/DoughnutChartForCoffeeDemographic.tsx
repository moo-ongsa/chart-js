"use client";

import React, { useRef, MouseEvent, useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  Chart as ChartJS,
  ChartOptions,
  ChartData,
  LegendItem,
  Plugin,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Context } from "chartjs-plugin-datalabels";
import { cn } from "@/lib/utils";
import { hslToGrayScale } from "@/utils/colos";

const MAGIC_NUMBER = 253;
const IMAGE_WIDTH = 523;
const IMAGE_HEIGHT = 577;

interface DoughnutChartForCoffeeDemographicProps {
  className?: string;
  legendClassName?: string;
  data: ChartData<"doughnut">;
  disabledLegend?: boolean;
  separatedLegend?: boolean;
}

const DoughnutChartForCoffeeDemographic: React.FC<
  DoughnutChartForCoffeeDemographicProps
> = ({
  className,
  legendClassName,
  data,
  disabledLegend = false,
  separatedLegend = false,
}) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<ChartJS<"doughnut"> | null>(null);
  const legendRef = useRef<HTMLDivElement | null>(null);

  const bgImage: any = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    const img = new window.Image();
    img.src = "/images/coffeeDrinker/backgroundCoffeeDrinkerSpecialist.svg";
    return img;
  }, []);

  const fgImage: any = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    const img = new window.Image();
    img.src = "/images/coffeeDrinker/foregroundCoffeeDrinkerSpecialist.png";
    return img;
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (tooltipRef.current) {
      tooltipRef.current.style.left = `${event.pageX + 10}px`;
      tooltipRef.current.style.top = `${event.pageY + 10}px`;
    }
  };

  const customTooltip = (context: any) => {
    let tooltipEl = tooltipRef.current;

    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.id = "chartjs-tooltip";
      Object.assign(tooltipEl.style, {
        position: "absolute",
        backgroundColor: "hsla(0, 0%, 100%, 0.6)",
        color: "hsla(0, 0%, 0%, 1)",
        borderRadius: "3px",
        padding: "10px",
        pointerEvents: "none",
        zIndex: "9999",
        backdropFilter: "blur(20px)",
        boxShadow: "0px 4px 6.7px 0px hsla(0, 0%, 100%, 0.25)",
        border: "1px solid hsla(214, 32%, 91%, 1)",
      });
      document.body.appendChild(tooltipEl);
      tooltipRef.current = tooltipEl;
    }

    const tooltipModel = context.tooltip;
    if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = "0";
      return;
    }

    if (tooltipModel.body) {
      const bodyLines = tooltipModel.body.map((b: any) => b.lines);
      const chartColors = context.chart.data.datasets[0]
        .backgroundColor as string[];
      const dataIndex = tooltipModel.dataPoints[0].dataIndex;

      let html = "<ul>";
      bodyLines.forEach((body: string[]) => {
        const color = chartColors[dataIndex];
        html += `<li class="flex items-center gap-[10px] text-xs font-normal">
          <div style="background-color: ${color};" class="w-[12px] h-[12px] rounded-full"></div>
          ${tooltipModel.title[0]} (${body}%)
        </li>`;
      });
      tooltipEl.innerHTML = html + "</ul>";
      tooltipEl.style.opacity = "1";
    }
  };

  let previousHoveredIndex: number | null = null;
  let originalColors: string[] | null = null;

  const customCanvasBackgroundImage: Plugin<"doughnut"> = {
    id: "customCanvasBackgroundImage",
    beforeDraw: (chart) => {
      if (bgImage) {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        const { left, width } = chartArea;

        // ขนาดของวงกลมในภาพ (IMAGE_WIDTH x IMAGE_HEIGHT)
        const imageWidth = IMAGE_WIDTH;
        const imageHeight = IMAGE_HEIGHT;

        // const mNumber = 72;

        // คำนวณตำแหน่งให้ภาพอยู่ตรงกลางของ chart area
        const x = left + width / 2 - imageWidth / 2 + 8;

        // วาดภาพ
        ctx.drawImage(bgImage, x, -46.5, imageWidth, imageHeight);

        // ปรับ Doughnut Chart ให้อยู่พอดีตรงกลางของวงกลมในภาพ
        const chartRadius = Math.min(imageWidth, imageHeight) / 2; // รัศมี Doughnut Chart
        chart.options.plugins.doughnutRadius = chartRadius; // ใช้รัศมีนี้ในตัวเลือกของ chart
      } else {
        if (bgImage) {
          bgImage.onload = () => chart.draw();
        }
      }
    },

    afterDraw: (chart) => {
      if (fgImage) {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        const { left, width } = chartArea;

        // ขนาดของวงกลมในภาพ (IMAGE_WIDTH x IMAGE_HEIGHT)
        const imageWidth = IMAGE_WIDTH;
        const imageHeight = IMAGE_HEIGHT;

        // const mNumber = 72;

        // คำนวณตำแหน่งให้ภาพอยู่ตรงกลางของ chart area
        const x = left + width / 2 - imageWidth / 2 + 0;

        // วาดภาพ
        ctx.drawImage(fgImage, x, -46.5, imageWidth, imageHeight);

        // ปรับ Doughnut Chart ให้อยู่พอดีตรงกลางของวงกลมในภาพ
        const chartRadius = Math.min(imageWidth, imageHeight) / 2; // รัศมี Doughnut Chart
        chart.options.plugins.doughnutRadius = chartRadius; // ใช้รัศมีนี้ในตัวเลือกของ chart
      } else {
        fgImage.onload = () => chart.draw();
      }
    },
  };

  const outerBorderAndHoverPlugin: Plugin<"doughnut"> = {
    id: "outerBorderAndHoverPlugin",
    beforeDraw(chart) {
      const { ctx, data, options } = chart;
      const meta = chart.getDatasetMeta(0);
      const borderWidth = (options.plugins as any).outerBorderAndHoverPlugin
        ?.borderWidth;
      const hoveredIndex = (options.plugins as any).outerBorderAndHoverPlugin
        ?.hoveredIndex;

      ctx.save();
      meta.data.forEach((element, index) => {
        if (index === hoveredIndex) {
          const model = element as ArcElement;
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
            model.startAngle,
            model.endAngle
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
            chart.options.plugins as any
          ).outerBorderAndHoverPlugin.hoveredIndex = hoveredIndex;

          const grayScaleColors = originalColors.map((color, index) =>
            index === hoveredIndex ? color : hslToGrayScale(color, 10)
          );
          chart.data.datasets[0].backgroundColor = grayScaleColors;
          chart.update();
        }
      } else if (previousHoveredIndex !== null || event.type === "mouseout") {
        (chart.options.plugins as any).outerBorderAndHoverPlugin.hoveredIndex =
          null;
        chart.data.datasets[0].backgroundColor = originalColors!;
        previousHoveredIndex = null;
        chart.update();
      }
    },
  };

  const htmlLegendPlugin: Plugin<"doughnut"> = {
    id: "htmlLegend",
    afterDraw(chart) {
      if (!legendRef.current || disabledLegend) return;

      const ul =
        legendRef.current.querySelector("ul") || document.createElement("ul");
      ul.innerHTML = "";
      ul.style.display = "flex";
      ul.style.flexDirection = "row";
      ul.style.flexWrap = "wrap";
      ul.style.margin = "0";
      ul.style.padding = "0";
      ul.style.gap = "5px 21px";

      if (!legendRef.current.contains(ul)) {
        legendRef.current.appendChild(ul);
      }

      const generateLabels =
        chart.options.plugins?.legend?.labels?.generateLabels;

      const items = generateLabels ? generateLabels(chart as ChartJS) : [];

      items.forEach((item: LegendItem) => {
        const li = document.createElement("li");
        li.className = separatedLegend
          ? "w-full xl:w-[calc(32%-10.5px)]"
          : "w-full";
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.flexDirection = "row";

        const box = document.createElement("span");
        box.style.background = item.fillStyle as string;
        box.style.borderRadius = "50%";
        box.style.width = "12px";
        box.style.height = "12px";
        box.style.marginRight = "9px";

        const label = document.createElement("p");
        label.className = "label-legend";
        label.textContent = item.text;
        label.style.fontSize = "12px";
        label.style.fontWeight = "500";
        label.style.marginRight = "10px";

        const value = (data.datasets[0].data as number[])[item.index ?? 0];
        const valText = document.createElement("p");
        valText.className = "value-legend";
        valText.textContent = `${value}%`;
        valText.style.fontSize = "12px";
        valText.style.fontWeight = "500";
        valText.style.textAlign = "right";

        li.appendChild(box);
        li.appendChild(label);
        li.appendChild(valText);
        ul.appendChild(li);
      });
    },
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 20, bottom: MAGIC_NUMBER },
    },
    cutout: "30%",
    radius: 135,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: customTooltip,
      },
      datalabels: {
        color: "#fff",
        anchor: "center",
        align: "center",
        font: () => {
          return {
            size: 14,
            weight: 400,
          };
        },
        formatter: (value: number, context: Context) => {
          const label = context.chart.data.labels?.[context.dataIndex];
          return `${label}\n${value}%`;
        },
        display: (context: Context) =>
          (context.dataset.data[context.dataIndex] as number) >= 10,
      },
      outerBorderAndHoverPlugin: {
        borderWidth: 20,
      },
    },
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn("relative w-full flex justify-start", className)}
      style={{ maxWidth: IMAGE_WIDTH }}
    >
      <Doughnut
        id="doughnut-chart"
        data={data}
        options={options}
        ref={chartRef}
        plugins={[
          customCanvasBackgroundImage,
          outerBorderAndHoverPlugin,
          htmlLegendPlugin,
          ChartDataLabels as Plugin<"doughnut">,
          ArcElement,
          Tooltip as Plugin<"doughnut">,
          Legend as Plugin<"doughnut">,
        ]}
      />
      <div
        ref={legendRef}
        id="legend-container"
        className={cn(
          "absolute mt-10 bottom-[0px] mx-[40px] border-none text-border opacity-90 px-4 py-6 bg-white rounded-[20px] [&>ul>li>p.label-legend]:text-text-main-light [&>ul>li>p.value-legend]:text-text-main",
          { hidden: disabledLegend },
          legendClassName
        )}
      />
    </div>
  );
};

export default DoughnutChartForCoffeeDemographic;
