"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  Plugin,
  ChartOptions,
  ChartData,
  ChartDataset,
  registerables,
} from "chart.js";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";
import { loadImage } from "@/utils/image";
import { VALUE_TYPE } from "@/utils/constants";

interface TreemapDataset extends ChartDataset<"treemap", number[]> {
  type: "treemap";
  tree: number[];
  images: string[];
  valueType?: VALUE_TYPE;
  textStyles?: string;
}

interface TreemapChartData extends ChartData<"treemap", number[], string> {
  datasets: TreemapDataset[];
}

interface TreemapChartProps {
  data: TreemapChartData;
  aspectRatio?: number;
}

Chart.register(TreemapController, TreemapElement, ...registerables);

// Custom plugin
const ImageLabelPlugin: Plugin<"treemap"> = {
  id: "imageLabel",
  afterDraw(chart) {
    const { ctx } = chart;
    const dataset = chart.data.datasets[0] as any;
    const meta = chart.getDatasetMeta(0);

    const images = (chart.options.plugins as any).imageLabel
      ?.images as HTMLImageElement[];

    const imageWidth = 32;
    const imageHeight = 32;

    meta.data.forEach((element: any, index: number) => {
      const model = element.getProps(["x", "y", "width", "height"], true);

      if (images[index]) {
        ctx.drawImage(
          images[index],
          model.x + model.width / 2 - imageWidth / 2,
          model.y + model.height / 2 - imageHeight / 2,
          imageWidth,
          imageHeight
        );
      }

      const textStyles = dataset.textStyles || "400 14px";
      ctx.font = `${textStyles} 'Inter', sans-serif`;
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      const label = chart.data.labels?.[index] ?? "";
      const value = dataset.tree[index];
      const valueType = dataset.valueType;

      const textY = images[index]
        ? model.y + model.height / 2 + imageHeight / 2 + 12
        : model.y + model.height / 2 + imageHeight / 2 - 4;

      let maxLengthPerLine = 50;
      if (model.width > 120 && model.width < 150) {
        maxLengthPerLine = 15;
      } else if (model.width <= 120 && model.width > 80) {
        maxLengthPerLine = 7;
      } else if (model.width <= 80) {
        maxLengthPerLine = 5;
      }

      const text = `${label} ${value}${
        valueType === VALUE_TYPE.PERCENT ? "%" : ""
      }`;
      const trimmedLabel =
        text.length > maxLengthPerLine
          ? text.substring(0, maxLengthPerLine - 1) + "…"
          : text;

      ctx.fillText(trimmedLabel, model.x + model.width / 2, textY);
    });
  },
};

const TreemapChart: React.FC<TreemapChartProps> = ({
  data,
  aspectRatio = 595 / 189,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        data.datasets[0].images.map((src) => loadImage(src))
      );
      setLoadedImages(images);
    };

    if (data.datasets[0].images?.length > 0) {
      loadImages();
    }
  }, [data]);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "treemap",
      data,
      options: {
        maintainAspectRatio: true,
        responsive: true,
        aspectRatio,
        plugins: {
          legend: { display: false },
          tooltip: false as any,
          title: { display: false, text: "Treemap Chart" },
          imageLabel: { images: loadedImages },
        } as ChartOptions<"treemap">["plugins"],
      },
      plugins: [ImageLabelPlugin],
    });

    return () => {
      chartInstance.destroy();
    };
  }, [data, loadedImages, aspectRatio]);

  return <canvas ref={chartRef} />;
};

export default TreemapChart;
