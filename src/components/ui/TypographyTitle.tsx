"use-client";

import React from "react";

import { cn } from "@/lib/utils";

export interface TypographyTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const TypographyTitle = ({
  children,
  className,
}: TypographyTitleProps) => {
  return <p className={cn("scroll-m-20 title", className)}>{children}</p>;
};
