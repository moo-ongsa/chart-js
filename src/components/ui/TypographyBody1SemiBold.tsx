"use-client";

import React from "react";

export interface TypographyBody1SemiBoldProps {
  children: React.ReactNode;
  className?: string;
}

export const TypographyBody1SemiBold = ({
  children,
  className,
}: TypographyBody1SemiBoldProps) => {
  return (
    <p className={`scroll-m-20 body-1-semi-bold ${className}`}>{children}</p>
  );
};
