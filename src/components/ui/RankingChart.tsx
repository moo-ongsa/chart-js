"use client";

import { useMemo, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartData,
  ChartDataset,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
  Chart,
  registerables,
} from "chart.js";
import { cn } from "@/lib/utils";
import { loadImage } from "@/utils/image";
import { VALUE_TYPE } from "@/utils/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ...registerables
);

interface CustomChartDataset extends ChartDataset<"bar", number[]> {
  images: string[]; // <-- เพิ่ม images
}

interface RankingChartProps {
  data: ChartData<"bar"> & {
    legends?: string[];
    datasets: CustomChartDataset[];
  };
  aspectRatio?: number;
  className?: string;
  valueType?: VALUE_TYPE;
}

const sliceAndSwap = <T,>(array: T[]): T[] => {
  const slicedArray = array.slice(0, 3);
  if (slicedArray.length >= 2) {
    [slicedArray[0], slicedArray[1]] = [slicedArray[1], slicedArray[0]];
  }
  return slicedArray;
};

interface ImageLabelPluginOptions {
  images: HTMLImageElement[];
  valueType?: VALUE_TYPE;
}

const ImageLabelPlugin: Plugin<"bar"> = {
  id: "imageLabel",
  afterDraw(chart: Chart<"bar">) {
    const { ctx, options } = chart;
    const dataset = chart.data.datasets[0];
    const meta = chart.getDatasetMeta(0);

    const pluginOptions: ImageLabelPluginOptions = options.plugins?.imageLabel;

    const images = pluginOptions?.images || [];
    const valueType = pluginOptions?.valueType;

    const imageWidth = 48;
    const imageHeight = 48;
    const boxHeight = 40;
    const yOffset = imageHeight / 2 + boxHeight / 2;

    meta.data.forEach((element, index) => {
      const model = element.getProps(["x", "y", "width", "height"], true);
      if (!images[index]) return;

      ctx.drawImage(
        images[index],
        model.x - imageWidth / 2,
        model.y + model.height / 2 - yOffset,
        imageWidth,
        imageHeight
      );

      ctx.font = "600 14px 'Inter', sans-serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      const label = chart.data.labels?.[index] as string;

      ctx.fillText(
        label,
        model.x,
        model.y + model.height / 2 - yOffset + imageHeight + 20
      );

      ctx.font = "400 14px 'Inter', sans-serif";
      let value = dataset.data[index] as number | string;
      if (valueType === VALUE_TYPE.PERCENT) {
        value += "%";
      }

      ctx.fillText(
        String(value),
        model.x,
        model.y + model.height / 2 - yOffset + imageHeight + 38
      );
    });
  },
};

const RankingChart = ({
  data,
  aspectRatio = 3,
  className,
  valueType,
}: RankingChartProps) => {
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);

  const swappedData = useMemo(() => {
    return {
      labels: sliceAndSwap(data.labels ?? []),
      datasets: [
        {
          data: [82.65, 100, 69.74],
          originalData: sliceAndSwap(data.datasets[0].data),
          backgroundColor: sliceAndSwap(
            Array.isArray(data.datasets[0].backgroundColor)
              ? data.datasets[0].backgroundColor
              : [data.datasets[0].backgroundColor ?? ""]
          ),
          images: sliceAndSwap(data.datasets[0].images ?? []),
          barPercentage: 1.13,
        },
      ],
    };
  }, [data]);

  useEffect(() => {
    const loadImagesAsync = async () => {
      const images = await Promise.all(
        swappedData.datasets[0].images.map((src) => loadImage(src))
      );
      setLoadedImages(images);
    };
    loadImagesAsync();
  }, [swappedData]);

  const chartOptions: ChartOptions<"bar"> = useMemo(() => {
    return {
      indexAxis: "x",
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio,
      scales: {
        x: { display: false },
        y: { beginAtZero: true, display: false },
      },
      plugins: {
        tooltip: false as any,
        legend: { display: false },
        datalabels: { display: false },
        imageLabel: {
          images: loadedImages,
          valueType: valueType,
        },
      },
    };
  }, [loadedImages, aspectRatio, valueType]);

  return (
    <div
      className={cn(
        "relative flex-col flex h-fit gap-[31px] w-full max-h-[271px]",
        className
      )}
    >
      <Bar
        data={swappedData as any}
        options={chartOptions}
        plugins={[ImageLabelPlugin]}
      />
    </div>
  );
};

export default RankingChart;
