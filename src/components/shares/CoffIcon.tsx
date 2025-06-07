import React from "react";
import { cn } from "@/lib/utils";
import {
  IconAdd,
  IconAsterisk,
  IconBalance,
  IconBean,
  IconClient,
  IconClose,
  IconDelivery,
  IconError,
  IconFavorite,
  IconFilter,
  IconLeft,
  IconLink,
  IconMenu,
  IconNoti,
  IconPersonalinfo,
  IconProfile,
  IconQueue,
  IconReg,
  IconRemove,
  IconRight,
  IconRoaster,
  IconRoaster1,
  IconRoaster2,
  IconRoaster3,
  IconRoaster4,
  IconRoaster5,
  IconRule,
  IconSearch,
  IconVisibility,
  IconVisibilityOff,
} from "@/components/icons";

const icons = {
  add: IconAdd,
  asterisk: IconAsterisk,
  balance: IconBalance,
  bean: IconBean,
  client: IconClient,
  close: IconClose,
  delivery: IconDelivery,
  error: IconError,
  favorite: IconFavorite,
  filter: IconFilter,
  left: IconLeft,
  link: IconLink,
  menu: IconMenu,
  noti: IconNoti,
  personalinfo: IconPersonalinfo,
  profile: IconProfile,
  queue: IconQueue,
  reg: IconReg,
  remove: IconRemove,
  right: IconRight,
  roaster: IconRoaster,
  roaster1: IconRoaster1,
  roaster2: IconRoaster2,
  roaster3: IconRoaster3,
  roaster4: IconRoaster4,
  roaster5: IconRoaster5,
  rule: IconRule,
  search: IconSearch,
  visibility: IconVisibility,
  visibilityOff: IconVisibilityOff,
};

export type CoffIconName = keyof typeof icons;

interface CoffIconProps extends React.SVGProps<SVGSVGElement> {
  name: CoffIconName;
  type?: "circle" | "rounded";
  backgroundColor?: string;
  borderColor?: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * แสดงไอคอนที่มี background (แบบ circle หรือ rounded) หรือเปล่า
 */
export const CoffIcon: React.FC<CoffIconProps> = ({
  name,
  type,
  backgroundColor,
  borderColor,
  width = 24,
  height = 24,
  className,
  style,
  ...svgProps
}) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;

  const iconSize =
    type === "circle"
      ? { width: width - 4, height: height - 4 }
      : { width: width / 1.777, height: height / 1.777 };

  const wrapperStyle: React.CSSProperties = {
    backgroundColor,
    borderColor: borderColor || backgroundColor,
    borderWidth: 1,
    width,
    height,
    ...style,
  };

  if (type && backgroundColor) {
    return (
      <div
        className={cn(
          "flex items-center justify-center flex-shrink-0 border",
          type === "circle" ? "rounded-full" : "rounded-[5px]",
          className
        )}
        style={wrapperStyle}
      >
        <IconComponent
          width={iconSize.width}
          height={iconSize.height}
          {...svgProps}
        />
      </div>
    );
  }

  return (
    <IconComponent
      width={width}
      height={height}
      className={className}
      style={style}
      {...svgProps}
    />
  );
};
