// src/global.d.ts

import type { ChartTypeRegistry } from "chart.js";
import { ComponentType } from "react";

declare global {
  interface Window {
    google: any;
  }
}

declare module "chart.js" {
  interface PluginOptionsByType<_TType extends keyof ChartTypeRegistry> {
    outerBorderAndHoverPlugin?: {
      borderWidth: number;
      hoveredIndex?: number | null;
    };
    imageLabel?: {
      images: HTMLImageElement[];
    };
  }
}

declare module "react-mobile-datepicker" {
  type DateConfig = {
    year?: {
      format?: string;
      caption?: string;
      step?: number;
    };
    month?: {
      format?: string;
      caption?: string;
      step?: number;
    };
    date?: {
      format?: string;
      caption?: string;
      step?: number;
    };
  };

  interface DatePickerProps {
    isOpen: boolean;
    value: Date;
    onSelect: (date: Date) => void;
    onCancel: () => void;
    theme?: string;
    min?: Date;
    max?: Date;
    showFormat?: string;
    dateConfig?: DateConfig;
  }

  const DatePicker: ComponentType<DatePickerProps>;

  export default DatePicker;
}

declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
