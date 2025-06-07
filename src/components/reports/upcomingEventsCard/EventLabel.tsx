import React, { FC } from "react";
import { TypographyDescription } from "@/components/ui/TypographyDescription";

// ✅ define prop types
export interface EventDetailProps {
  children: React.ReactNode;
}

export const EventLabel: FC<EventDetailProps> = ({ children }) => {
  return (
    <div className="border rounded-[10px] text-border w-fit px-2 py-0.5 bg-white">
      <TypographyDescription className="text-text-secondary">
        {children}
      </TypographyDescription>
    </div>
  );
};
