"use-client";

import React from "react";

export interface TypographyH2Props {
  children: React.ReactNode;
  className?: string;
}

export const TypographyH2 = ({ children, className }: TypographyH2Props) => {
  return <h2 className={`scroll-m-20 header-2 ${className}`}>{children}</h2>;
};
