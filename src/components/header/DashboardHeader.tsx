"use client";

import Image from "next/image";
import { TypographyH2 } from "../ui/TypographyH2";
import { TypographyBody2SemiBold } from "../ui/TypographyBody2SemiBold";
import RangeSelect from "../ui/RangeSelect";
import { AGE_VALUE, ageOptions, useAge } from "@/context/AgeContext";
import React from "react";
import { useTranslations } from "next-intl";
import { TRANSlATION_KEY } from "@/utils/constants";

// ฟังก์ชันแปลงค่าจาก AGE_VALUE กลับเป็นคีย์ที่ใช้งานได้
const reverseAgeValue = (label: string): string => {
  return (
    (Object.keys(AGE_VALUE) as Array<keyof typeof AGE_VALUE>).find(
      (key) => AGE_VALUE[key] === label
    ) || label
  );
};

export const DashboardHeader: React.FC = () => {
  const t = useTranslations(TRANSlATION_KEY.HEADER);
  const { ageRange, updateAgeRange } = useAge();

  const renderLabel = (selectedValue: string[]): string => {
    if (selectedValue.length === 0) return "Age";

    const validValues = selectedValue.map(reverseAgeValue);

    if (selectedValue.length === 1 && selectedValue[0] === AGE_VALUE["0-18"]) {
      return "Age: Below 18";
    }

    if (selectedValue.length === 1 && selectedValue[0] === AGE_VALUE["65+"]) {
      return "Age: 65+";
    }

    const numericRanges = validValues.map((range) =>
      range.split("-").map((num) => (num === "65+" ? 65 : parseInt(num, 10)))
    );

    const minAge = Math.min(...numericRanges.map((range) => range[0]));
    const maxAge = Math.max(
      ...numericRanges.map((range) => range[range.length - 1])
    );

    const minLabel = minAge === 0 ? "Below 18" : minAge;

    return `Age: ${minLabel}${maxAge === 65 ? `-${maxAge}+` : `-${maxAge}`}`;
  };

  return (
    <div className="pt-20 pr-6 pb-12 pl-6 bg-header-gradient">
      <div className="rounded-[20px] p-[25px] bg-header-card-gradient h-full w-full flex items-center relative flex-col md:flex-row md:h-[223px]">
        <div className="sm:mr-6">
          <Image src="/logo.svg" alt="Logo" width={116} height={116} />
        </div>
        <div className="flex flex-col gap-2 max-w-[580px] md:max-w-[580px] h-full xl:h-[86px]">
          <TypographyH2 className="leading-[36px] text-text-brown z-10">
            {t("dashboardTitle")}
          </TypographyH2>
          <TypographyBody2SemiBold className="text-[16px] tracking-[-0.03em] text-text-secondary font-semibold z-20">
            {t("dashboardSubtitle")}
          </TypographyBody2SemiBold>

          <Image
            src="/hero/avatar_1.svg"
            alt="Logo Woman"
            width={210}
            height={217}
            className="absolute z-10 translate-x-2 right-1/2 bottom-[70px] w-[87px] md:bottom-[22px] md:translate-x-0 md:right-[310px] xl:w-[217px] xl:right-[420px] xl:bottom-[-15px]"
          />
          <Image
            src="/hero/avatar_2.svg"
            alt="Logo Man"
            width={213}
            height={210}
            className="absolute translate-x-2 left-1/2 bottom-[73px] w-[90px] md:left-auto md:bottom-[25px] md:translate-x-0 md:right-[240px] xl:w-[210px] xl:right-[260px] xl:bottom-[-5px]"
          />
          <RangeSelect
            options={ageOptions}
            onValueChange={
              // ไม่ค่อยดีแต่ทำไปก่อน
              updateAgeRange as (_value: (string | number)[]) => void
            }
            defaultValue={ageRange || []}
            placeholder="Select types"
            className="rounded-[10px] relative mt-[100px] right-0 w-full md:absolute md:mt-0 md:bottom-[25px] md:right-[25px] md:w-fit xl:right-[48px] xl:bottom-[48px]"
            renderLabel={
              renderLabel as (_value: (string | number)[]) => React.ReactNode
            }
          />
        </div>
      </div>
    </div>
  );
};
