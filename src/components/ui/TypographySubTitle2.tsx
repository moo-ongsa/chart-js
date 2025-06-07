"use-client";

import React from "react";

export interface TypographySubTitle2Props {
  children: React.ReactNode;
  className?: string;
}

export const TypographySubTitle2 = ({
  children,
  className,
}: TypographySubTitle2Props) => {
  return <p className={`scroll-m-20 subtitle-2 ${className}`}>{children}</p>;
};
