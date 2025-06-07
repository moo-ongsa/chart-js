import React, { useRef, MouseEventHandler } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
  ChartData,
  Plugin,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { cn } from "@/lib/utils";
import { hslToGrayScale } from "@/utils/colos";
import clsx from "clsx";
import { VALUE_TYPE } from "@/utils/constants";

// Register the required chart components
Chart.register(ArcElement, Tooltip, Legend, ...registerables);

interface HorizontalStackedBarChartProps {
  className?: string;
  data: ChartData<"bar"> & {
    legends?: string[];
  };
  disabledLegend?: boolean;
  separatedLegend?: boolean;
  valueType: VALUE_TYPE;
}

const HorizontalStackedBarChart: React.FC<HorizontalStackedBarChartProps> = ({
  className,
  data,
  disabledLegend = false,
  separatedLegend = false,
  valueType,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);
  const legendRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const { pageX, pageY } = event;
    if (tooltipRef.current) {
      tooltipRef.current.style.left = `${pageX + 10}px`; // +10 for some offset
      tooltipRef.current.style.top = `${pageY + 10}px`;
    }
  };

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

    const bodyLines = tooltipModel.body.map((bodyItem: any) => bodyItem.lines);
    const datasetIndex = context.tooltip.dataPoints[0].datasetIndex;

    let innerHtml = "<ul>";
    bodyLines.forEach((body: string[]) => {
      const color = context.chart.data.datasets[datasetIndex].backgroundColor;
      innerHtml += `<li class="flex items-center gap-[10px] text-xs font-normal">
            <div style="background-color: ${color};" class="w-[12px] h-[12px] rounded-full"></div>
            ${tooltipModel.title[0]} (${body}%)
          </li>`;
    });
    innerHtml += "</ul>";

    tooltipEl.innerHTML = innerHtml;
    tooltipEl.style.opacity = "1";
  };

  let previousHoveredIndex: number | null = null;
  let originalColors: any[] | null = null;

  const hoverPlugin = {
    id: "hoverPlugin",
    beforeEvent(chart: any, args: any) {
      const event = args.event;

      if (!originalColors) {
        originalColors = [
          ...chart.data.datasets.map(
            ({ backgroundColor }: any) => backgroundColor
          ),
        ];
      }

      if (event.type === "mousemove" || event.type === "mouseenter") {
        const element = chart.getElementsAtEventForMode(
          event,
          "nearest",
          { intersect: true },
          true
        );

        if (element.length) {
          const hoveredIndex = element[0].datasetIndex;

          if (hoveredIndex !== previousHoveredIndex) {
            previousHoveredIndex = hoveredIndex;

            chart.options.plugins.hoverPlugin.hoveredIndex = hoveredIndex;

            originalColors?.forEach((color: string, index: number) => {
              if (index === hoveredIndex) {
                chart.data.datasets[index].backgroundColor = color;
              } else {
                chart.data.datasets[index].backgroundColor = hslToGrayScale(
                  color,
                  10
                );
              }
            });

            chart.update();
          }
        } else {
          if (previousHoveredIndex !== null) {
            chart.options.plugins.hoverPlugin.hoveredIndex = null;
            previousHoveredIndex = null;

            originalColors.forEach((color: string, index: number) => {
              chart.data.datasets[index].backgroundColor = color;
            });

            chart.update();
          }
        }
      }

      if (event.type === "mouseout") {
        chart.options.plugins.hoverPlugin.hoveredIndex = null;
        originalColors.forEach((color: string, index: number) => {
          chart.data.datasets[index].backgroundColor = color;
        });
        chart.update();
      }
    },
  };

  const getOrCreateLegendList = () => {
    const legendContainer = legendRef.current;
    let listContainer = legendContainer?.querySelector("ul");

    if (!listContainer) {
      listContainer = document.createElement("ul");
      listContainer.style.display = "flex";
      listContainer.style.flexDirection = "row";
      listContainer.style.flexWrap = "wrap";
      listContainer.style.margin = "0px";
      listContainer.style.padding = "0px";
      listContainer.style.gap = "1px 21px";
      legendContainer?.appendChild(listContainer);
    }

    return listContainer;
  };

  const htmlLegendPlugin = {
    id: "htmlLegend",
    afterDraw(chart: any) {
      if (!disabledLegend) {
        const ul = getOrCreateLegendList();

        while (ul.firstChild) {
          ul.firstChild.remove();
        }

        const items = chart.options.plugins.legend.labels.generateLabels(chart);
        items.forEach((item: any, index: number) => {
          const li = document.createElement("li");
          li.style.alignItems = "center";
          li.style.cursor = "default";
          li.style.display = "flex";
          li.style.flexDirection = "row";
          if (separatedLegend) {
            li.style.width = "calc(50% - 10.5px)";
          } else {
            li.style.width = "100%";
          }

          const boxSpan = document.createElement("span");
          boxSpan.style.background = item.fillStyle;
          boxSpan.style.borderRadius = "50%";
          boxSpan.style.display = "inline-block";
          boxSpan.style.flexShrink = "0";
          boxSpan.style.height = "12px";
          boxSpan.style.width = "12px";
          boxSpan.style.marginRight = "9px";

          const labelContainer = document.createElement("p");
          labelContainer.className = "label-legend";
          labelContainer.style.fontSize = "12px";
          labelContainer.style.lineHeight = "20px";
          labelContainer.style.fontWeight = "500";
          labelContainer.style.margin = "0px";
          labelContainer.style.padding = "0px";
          labelContainer.style.textDecoration = item.hidden
            ? "line-through"
            : "";
          labelContainer.style.marginRight = "10px";
          labelContainer.style.textOverflow = "ellipsis";
          labelContainer.style.width = "100%";
          labelContainer.style.overflow = "hidden";
          const labelText = document.createTextNode(item.text);

          const valueContainer = document.createElement("p");
          valueContainer.className = "value-legend";
          valueContainer.style.fontSize = "12px";
          valueContainer.style.lineHeight = "20px";
          valueContainer.style.fontWeight = "500";
          valueContainer.style.margin = "0px";
          valueContainer.style.padding = "0px";
          valueContainer.style.textDecoration = item.hidden
            ? "line-through"
            : "";
          valueContainer.style.textAlign = "right";

          let v: any = data.datasets[index].data[0];
          if (valueType === VALUE_TYPE.PERCENT) {
            v += "%";
          }

          const valueText = document.createTextNode(v);

          labelContainer.appendChild(labelText);
          valueContainer.appendChild(valueText);

          li.appendChild(boxSpan);
          li.appendChild(labelContainer);
          li.appendChild(valueContainer);
          ul.appendChild(li);
        });
      }
    },
  };

  const options: any = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 243 / 26,
    scales: {
      x: {
        display: false,
        stacked: true,
        max: 100,
        beginAtZero: true,
      },
      y: {
        display: false,
        stacked: true,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      labels: { render: "label", fontColor: "white" },
      datalabels: {
        display: false,
      },
      hoverPlugin: {
        borderWidth: 0,
      },
      tooltip: {
        enabled: false,
        external: customTooltip,
      },
    },
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        className={cn("relative w-full h-full flex justify-center", className)}
      >
        <Bar
          id="horizontal-bar-chart"
          data={data}
          options={options}
          ref={chartRef}
          plugins={[
            hoverPlugin,
            htmlLegendPlugin,
            ChartDataLabels as Plugin<"bar">,
          ]}
        />
      </div>
      <div
        ref={legendRef}
        id="legend-container"
        className={clsx(
          "mt-1.5 [&>ul>li>p.label-legend]:text-text-main-light [&>ul>li>p.value-legend]:text-text-main-light",
          {
            hidden: disabledLegend,
          }
        )}
      />
    </>
  );
};

export default HorizontalStackedBarChart;
