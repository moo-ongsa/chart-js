"use-client";

import React from "react";

import { cn } from "@/lib/utils";

export interface TypographySubTitle1Props {
  children: React.ReactNode;
  className?: string;
}

export const TypographySubTitle1 = ({
  children,
  className,
}: TypographySubTitle1Props) => {
  return <p className={cn("scroll-m-20 subtitle-1", className)}>{children}</p>;
};
