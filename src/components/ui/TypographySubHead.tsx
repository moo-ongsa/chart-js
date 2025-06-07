"use-client";

import React from "react";

export interface TypographySubHeadProps {
  children: React.ReactNode;
  className?: string;
}

export const TypographySubHead = ({
  children,
  className,
}: TypographySubHeadProps) => {
  return <p className={`scroll-m-20 sub-head ${className}`}>{children}</p>;
};
