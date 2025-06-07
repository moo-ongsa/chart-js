"use-client";

import React from "react";

export interface TypographyH4Props {
  children: React.ReactNode;
  className?: string;
}

export const TypographyH4 = ({ children, className }: TypographyH4Props) => {
  return <h4 className={`scroll-m-20 header-4 ${className}`}>{children}</h4>;
};
