"use-client";

import React from "react";

export interface TypographyBody2RegularProps {
  children: React.ReactNode;
  className?: string;
}

export const TypographyBody2Regular = ({
  children,
  className,
}: TypographyBody2RegularProps) => {
  return (
    <p className={`scroll-m-20 body-2-regular ${className}`}>{children}</p>
  );
};
