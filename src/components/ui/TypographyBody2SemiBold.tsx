"use-client";

import React from "react";

export interface TypographyBody2SemiBoldProps {
  children: React.ReactNode;
  className?: string;
}

export const TypographyBody2SemiBold = ({
  children,
  className,
}: TypographyBody2SemiBoldProps) => {
  return (
    <p className={`scroll-m-20 body-2-semi-bold ${className}`}>{children}</p>
  );
};
