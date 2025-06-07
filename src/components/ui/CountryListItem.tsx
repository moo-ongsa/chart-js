import React, { FC } from "react";
import ReactCountryFlag from "react-country-flag";
import { TypographyTitle } from "./TypographyTitle";
import { cn } from "@/lib/utils";
import { VALUE_TYPE } from "@/utils/constants";

export interface CountryListItemProps {
  className?: string;
  countryCode: string;
  name: string;
  value: number;
  valueType?: VALUE_TYPE;
}

const CountryListItem: FC<CountryListItemProps> = ({
  className,
  countryCode,
  name,
  value,
  valueType,
}) => {
  return (
    <div className={cn("flex justify-between items-center", className)}>
      <div className="flex items-center gap-[10px] flex-1">
        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{
              width: "20px",
              height: "13.1px",
              borderRadius: "100px",
            }}
            aria-label={countryCode}
          />
        </div>
        <TypographyTitle className="text-text-main">{name}</TypographyTitle>
      </div>
      <TypographyTitle className="text-foreground font-medium">
        {value}
        {valueType === VALUE_TYPE.PERCENT ? "%" : ""}
      </TypographyTitle>
    </div>
  );
};

export default CountryListItem;
