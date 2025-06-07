"use client";

import { Card, CardTitle } from "@/components/ui/Card";
import SegmentedProgressBar from "@/components/ui/SegmentedProgressBarChart";
import { TypographyDescription } from "@/components/ui/TypographyDescription";
import { Preference } from "@/core/entities/Preference";
import Image from "next/image";
import React, { FC } from "react";

interface PreferenceBasedOnGenderCardProps {
  imageSrc: string;
  title: string;
  data?: Preference;
}

const PreferenceBasedOnGenderCard: FC<PreferenceBasedOnGenderCardProps> = ({
  imageSrc,
  title,
  data,
}) => {
  return (
    <>
      <Card className="flex gap-2 flex-wrap lg:flex-nowrap items-center px-5 py-[21px] border-none shadow-none bg-flesh">
        <div className="w-full lg:w-[195px] flex gap-2.5 flex-shrink-0">
          <Image src={imageSrc} alt={title} width={24} height={24} />
          <CardTitle className="text-sm md:w-[149px] flex-shrink-0 text-center">
            {title}
          </CardTitle>
        </div>
        <TypographyDescription className="block md:hidden">
          Man
        </TypographyDescription>
        <SegmentedProgressBar
          data={{
            labels: Array(data?.man.length).fill(""),
            datasets: [
              {
                data: data?.man || [],
                backgroundColor: data?.backgroundColorMan || [],
              },
            ],
          }}
          className="md:mr-[33px]"
          barClassName="h-[50px] [&>div]:border-r-[1px] [&>div>span]:text-[12px] md:[&>div>span]:text-[14px]"
        />
        <TypographyDescription className="block md:hidden">
          Woman
        </TypographyDescription>
        <SegmentedProgressBar
          data={{
            labels: Array(data?.woman.length).fill(""),
            datasets: [
              {
                data: data?.woman || [],
                backgroundColor: data?.backgroundColorWoman || [],
              },
            ],
          }}
          barClassName="h-[50px] [&>div]:border-r-[1px]  [&>div>span]:text-[12px] md:[&>div>span]:text-[14px]"
        />
      </Card>
      <div className="flex flex-wrap mb-4 justify-center md:mb-0 md:justify-start gap-2.5 items-center mt-2 ml-[7px]">
        {data?.labels.map((label, index) => (
          <div key={label} className="flex gap-[9px]">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: data?.labelColor[index] }}
            />
            <span className="text-[10px] text-text-secondary">{label}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PreferenceBasedOnGenderCard;
