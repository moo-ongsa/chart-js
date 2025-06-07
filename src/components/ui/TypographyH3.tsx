"use-client";

import React from "react";

export interface TypographyH3Props {
  children: React.ReactNode;
  className?: string;
}

export const TypographyH3 = ({ children, className }: TypographyH3Props) => {
  return <h3 className={`scroll-m-20 header-3 ${className}`}>{children}</h3>;
};
