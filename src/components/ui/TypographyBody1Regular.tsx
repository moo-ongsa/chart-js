"use-client";

import React from "react";

export interface TypographyBody1RegularProps {
  children: React.ReactNode;
  className?: string;
}

export const TypographyBody1Regular = ({
  children,
  className,
}: TypographyBody1RegularProps) => {
  return (
    <p className={`scroll-m-20 body-1-regular ${className}`}>{children}</p>
  );
};
