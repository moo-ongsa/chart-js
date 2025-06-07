"use-client";

import React from "react";

export interface TypographyH1Props {
  children: React.ReactNode;
  className?: string;
}

export const TypographyH1 = ({ children, className }: TypographyH1Props) => {
  return <h1 className={`scroll-m-20 header-1 ${className}`}>{children}</h1>;
};
