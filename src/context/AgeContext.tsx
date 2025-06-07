"use client";

import { AgeKey } from "@/core/types/AgeKey";
import { AgeRange } from "@/core/types/AgeRange";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// AGE_VALUE mapping
export const AGE_VALUE: Record<AgeKey, AgeRange> = {
  "0-18": "ต่ำกว่า 18 ปี",
  "18-24": "18 - 24 ปี",
  "25-34": "25 - 34 ปี",
  "35-44": "35 - 44 ปี",
  "45-54": "45 - 54 ปี",
  "55-64": "55 - 64 ปี",
  "65+": "มากกว่า 65 ปี",
};

// English Label Mapping
export const getLabelOfAgeByType = (type: AgeRange): string => {
  switch (type) {
    case AGE_VALUE["0-18"]:
      return "Below 18";
    case AGE_VALUE["18-24"]:
      return "18 - 24";
    case AGE_VALUE["25-34"]:
      return "25 - 34";
    case AGE_VALUE["35-44"]:
      return "35 - 44";
    case AGE_VALUE["45-54"]:
      return "45 - 54";
    case AGE_VALUE["55-64"]:
      return "55 - 64";
    case AGE_VALUE["65+"]:
      return "More 65+";
    default:
      return "";
  }
};

export const AGE_LABEL_TO_KEY: Record<AgeRange, AgeKey> = Object.entries(
  AGE_VALUE
).reduce((acc, [key, value]) => {
  acc[value as AgeRange] = key as AgeKey;
  return acc;
}, {} as Record<AgeRange, AgeKey>);

// Options for UI Components
export const ageOptions = (Object.values(AGE_VALUE) as AgeRange[]).map(
  (value) => ({
    value,
    label: getLabelOfAgeByType(value),
  })
);

// Context Types
interface AgeContextType {
  ageRange: AgeRange[];
  updateAgeRange: Dispatch<SetStateAction<AgeRange[]>>;
}

const AgeContext = createContext<AgeContextType | undefined>(undefined);

// Provider Props
interface AgeProviderProps {
  children: ReactNode;
}

// AgeProvider Component
export const AgeProvider = ({ children }: AgeProviderProps) => {
  const [ageRange, setAgeRange] = useState<AgeRange[]>([
    AGE_VALUE["0-18"],
    AGE_VALUE["18-24"],
    AGE_VALUE["25-34"],
    AGE_VALUE["35-44"],
    AGE_VALUE["45-54"],
    AGE_VALUE["55-64"],
    AGE_VALUE["65+"],
  ]);

  const updateAgeRange: Dispatch<SetStateAction<AgeRange[]>> = (value) => {
    if (typeof value === "function") {
      setAgeRange((prev) => (value as (_prev: AgeRange[]) => AgeRange[])(prev));
    } else {
      setAgeRange(value);
    }
  };

  return (
    <AgeContext.Provider value={{ ageRange, updateAgeRange }}>
      {children}
    </AgeContext.Provider>
  );
};

// useAge Hook
export const useAge = (): AgeContextType => {
  const context = useContext(AgeContext);
  if (!context) {
    throw new Error("useAge must be used within an AgeProvider");
  }
  return context;
};
