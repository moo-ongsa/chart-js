"use client";

import React, { FC } from "react";
import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/Select";

export const AREA_VALUE = {
  CENTRAL: "ภาคกลาง",
  NORTH: "ภาคเหนือ",
  NORTHEAST: "ภาคตะวันออกเฉียงเหนือ",
  EASTERN: "ภาคตะวันออก",
  WESTERN: "ภาคตะวันตก",
  SOUTH: "ภาคใต้",
} as const;

// ✅ สร้าง type ของแต่ละค่าจาก AREA_VALUE
export type AreaValue = (typeof AREA_VALUE)[keyof typeof AREA_VALUE];

// ✅ getLabel function รับเฉพาะ AreaValue
export const getLabelOfArea = (type: AreaValue): string => {
  switch (type) {
    case AREA_VALUE.CENTRAL:
      return "Central Area";
    case AREA_VALUE.NORTH:
      return "North Area";
    case AREA_VALUE.NORTHEAST:
      return "Northeast Area";
    case AREA_VALUE.EASTERN:
      return "Eastern Area";
    case AREA_VALUE.WESTERN:
      return "Western Area";
    case AREA_VALUE.SOUTH:
      return "South Area";
    default:
      return "";
  }
};

interface AreaSelectGroupProps {
  selectedItems?: string[]; // หรือถ้าคุณใช้ AreaValue[] ก็สามารถใส่ได้เช่นกัน
}

const AreaSelectGroup: FC<AreaSelectGroupProps> = () => {
  return (
    <SelectGroup>
      <SelectLabel>Areas</SelectLabel>
      <SelectItem value={AREA_VALUE.CENTRAL}>
        {getLabelOfArea(AREA_VALUE.CENTRAL)}
      </SelectItem>
      <SelectItem value={AREA_VALUE.NORTH}>
        {getLabelOfArea(AREA_VALUE.NORTH)}
      </SelectItem>
      <SelectItem value={AREA_VALUE.NORTHEAST}>
        {getLabelOfArea(AREA_VALUE.NORTHEAST)}
      </SelectItem>
      <SelectItem value={AREA_VALUE.EASTERN}>
        {getLabelOfArea(AREA_VALUE.EASTERN)}
      </SelectItem>
      <SelectItem value={AREA_VALUE.WESTERN}>
        {getLabelOfArea(AREA_VALUE.WESTERN)}
      </SelectItem>
      <SelectItem value={AREA_VALUE.SOUTH}>
        {getLabelOfArea(AREA_VALUE.SOUTH)}
      </SelectItem>
    </SelectGroup>
  );
};

export default AreaSelectGroup;
