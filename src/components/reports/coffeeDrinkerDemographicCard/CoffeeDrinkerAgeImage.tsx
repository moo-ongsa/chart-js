"use client";

import { AGE_VALUE } from "@/context/AgeContext";
import { AgeRange } from "@/core/types/AgeRange";
import Image from "next/image";
import React, { useMemo } from "react";

interface CoffeeDrinkerAgeImageProps {
  ageRange: AgeRange[];
}

const CoffeeDrinkerAgeImage: React.FC<CoffeeDrinkerAgeImageProps> = ({
  ageRange,
}) => {
  const [srrMan, srrWoman] = useMemo<[string | null, string | null]>(() => {
    const man = ageRange[0];
    const woman = ageRange[ageRange.length - 1];

    switch (man + woman) {
      case AGE_VALUE["0-18"] + AGE_VALUE["18-24"]:
        return [
          "/images/age/man/age_man_1.png",
          "/images/age/woman/age_woman_1.png",
        ];
      case AGE_VALUE["0-18"] + AGE_VALUE["25-34"]:
        return [
          "/images/age/man/age_man_2.png",
          "/images/age/woman/age_woman_2.png",
        ];
      case AGE_VALUE["0-18"] + AGE_VALUE["35-44"]:
        return [
          "/images/age/man/age_man_3.png",
          "/images/age/woman/age_woman_3.png",
        ];
      case AGE_VALUE["0-18"] + AGE_VALUE["45-54"]:
        return [
          "/images/age/man/age_man_4.png",
          "/images/age/woman/age_woman_4.png",
        ];
      case AGE_VALUE["0-18"] + AGE_VALUE["55-64"]:
        return [
          "/images/age/man/age_man_5.png",
          "/images/age/woman/age_woman_5.png",
        ];
      case AGE_VALUE["0-18"] + AGE_VALUE["65+"]:
        return [
          "/images/age/man/age_man_6.png",
          "/images/age/woman/age_woman_6.png",
        ];
      case AGE_VALUE["18-24"] + AGE_VALUE["18-24"]:
        return [
          "/images/age/man/age_man_23.png",
          "/images/age/woman/age_woman_23.png",
        ];
      case AGE_VALUE["18-24"] + AGE_VALUE["25-34"]:
        return [
          "/images/age/man/age_man_7.png",
          "/images/age/woman/age_woman_7.png",
        ];
      case AGE_VALUE["18-24"] + AGE_VALUE["35-44"]:
        return [
          "/images/age/man/age_man_8.png",
          "/images/age/woman/age_woman_8.png",
        ];
      case AGE_VALUE["18-24"] + AGE_VALUE["45-54"]:
        return [
          "/images/age/man/age_man_9.png",
          "/images/age/woman/age_woman_9.png",
        ];
      case AGE_VALUE["18-24"] + AGE_VALUE["55-64"]:
        return [
          "/images/age/man/age_man_10.png",
          "/images/age/woman/age_woman_10.png",
        ];
      case AGE_VALUE["18-24"] + AGE_VALUE["65+"]:
        return [
          "/images/age/man/age_man_11.png",
          "/images/age/woman/age_woman_11.png",
        ];
      case AGE_VALUE["25-34"] + AGE_VALUE["25-34"]:
        return [
          "/images/age/man/age_man_24.png",
          "/images/age/woman/age_woman_24.png",
        ];
      case AGE_VALUE["25-34"] + AGE_VALUE["35-44"]:
        return [
          "/images/age/man/age_man_12.png",
          "/images/age/woman/age_woman_12.png",
        ];
      case AGE_VALUE["25-34"] + AGE_VALUE["45-54"]:
        return [
          "/images/age/man/age_man_13.png",
          "/images/age/woman/age_woman_13.png",
        ];
      case AGE_VALUE["25-34"] + AGE_VALUE["55-64"]:
        return [
          "/images/age/man/age_man_14.png",
          "/images/age/woman/age_woman_14.png",
        ];
      case AGE_VALUE["25-34"] + AGE_VALUE["65+"]:
        return [
          "/images/age/man/age_man_15.png",
          "/images/age/woman/age_woman_15.png",
        ];
      case AGE_VALUE["35-44"] + AGE_VALUE["35-44"]:
        return [
          "/images/age/man/age_man_25.png",
          "/images/age/woman/age_woman_25.png",
        ];
      case AGE_VALUE["35-44"] + AGE_VALUE["45-54"]:
        return [
          "/images/age/man/age_man_16.png",
          "/images/age/woman/age_woman_16.png",
        ];
      case AGE_VALUE["35-44"] + AGE_VALUE["55-64"]:
        return [
          "/images/age/man/age_man_17.png",
          "/images/age/woman/age_woman_17.png",
        ];
      case AGE_VALUE["35-44"] + AGE_VALUE["65+"]:
        return [
          "/images/age/man/age_man_18.png",
          "/images/age/woman/age_woman_18.png",
        ];
      case AGE_VALUE["45-54"] + AGE_VALUE["45-54"]:
        return [
          "/images/age/man/age_man_26.png",
          "/images/age/woman/age_woman_26.png",
        ];
      case AGE_VALUE["45-54"] + AGE_VALUE["55-64"]:
        return [
          "/images/age/man/age_man_19.png",
          "/images/age/woman/age_woman_19.png",
        ];
      case AGE_VALUE["45-54"] + AGE_VALUE["65+"]:
        return [
          "/images/age/man/age_man_20.png",
          "/images/age/woman/age_woman_20.png",
        ];
      case AGE_VALUE["55-64"] + AGE_VALUE["55-64"]:
        return [
          "/images/age/man/age_man_27.png",
          "/images/age/woman/age_woman_27.png",
        ];
      case AGE_VALUE["55-64"] + AGE_VALUE["65+"]:
        return [
          "/images/age/man/age_man_21.png",
          "/images/age/woman/age_woman_21.png",
        ];
      case AGE_VALUE["65+"] + AGE_VALUE["65+"]:
        return [
          "/images/age/man/age_man_28.png",
          "/images/age/woman/age_woman_28.png",
        ];
      default:
        return [null, null];
    }
  }, [ageRange]);

  return (
    <div className="flex flex-row justify-start mt-4 mb-[13px]">
      {ageRange.length === 0 || !srrMan || !srrWoman ? null : (
        <>
          <div className="hidden md:block md:w-[215px]" />
          <div className="flex-1 flex relative justify-center h-[52px]">
            <Image src={srrMan} alt="text" fill className="object-contain" />
          </div>
          <div className="flex-1 flex relative justify-center  h-[52px]">
            <Image src={srrWoman} alt="text" fill className="object-contain" />
          </div>
        </>
      )}
    </div>
  );
};

export default CoffeeDrinkerAgeImage;
