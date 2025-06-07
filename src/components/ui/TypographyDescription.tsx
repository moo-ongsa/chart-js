"use-client";

import React from "react";

export interface TypographyDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const TypographyDescription = ({
  children,
  className,
}: TypographyDescriptionProps) => {
  return <h3 className={`scroll-m-20 description ${className}`}>{children}</h3>;
};
