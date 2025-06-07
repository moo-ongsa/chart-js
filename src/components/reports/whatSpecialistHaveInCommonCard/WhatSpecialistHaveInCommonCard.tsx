"use client";

import React, { useCallback, FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import DoughnutChart from "../../ui/DoughnutChart";
import { cn } from "@/lib/utils";
import { TypographySubHead } from "../../ui/TypographySubHead";
import { TypographyTitle } from "../../ui/TypographyTitle";
import Loading from "./WhatSpecialistHaveInCommonCard.loading";
import Image from "next/image";
import { ERROR_MESSAGE, TRANSlATION_KEY, VALUE_TYPE } from "@/utils/constants";
import { backgroundColorRankingList } from "@/utils/colos";
import { useAge } from "@/context/AgeContext";
import { SpecialistCommon } from "@/core/entities/SpecialistCommon";
import { Level } from "@/core/entities/Level";
import { useTranslations } from "next-intl";
import WhatSpecialistHaveInCommonCardLock from "./WhatSpecialistHaveInCommonCard.lock";
import { getSpecialistCommon } from "@/core/usecases/dashboard/getSpecialistCommon";

export interface WhatSpecialistHaveInCommonCardProps {
  className?: string;
}

const WhatSpecialistHaveInCommonCard: FC<
  WhatSpecialistHaveInCommonCardProps
> = ({ className }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();

  const { data, error, loading, refetch } = useData({
    method: getSpecialistCommon,
    params: { age: ageRange },
  });

  const convertToDoughnutData = useCallback((data: Level[]) => {
    const labels: string[] = [];
    const percentages: number[] = [];

    data.forEach(({ name, percent }) => {
      labels.push(name);
      percentages.push(percent);
    });

    return {
      labels,
      datasets: [
        {
          data: percentages,
          backgroundColor: backgroundColorRankingList,
          barPercentage: 2,
        },
      ],
    };
  }, []);

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return (
      <WhatSpecialistHaveInCommonCardLock
        className={className}
        refetch={refetch}
      />
    );
  }

  return (
    <Card className={cn("max-h-full", className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">
          {t("whatSpecialistHaveInCommon")}
        </CardTitle>
        <div className="rounded h-[36px] w-[83px] border-input border-[1px] flex items-center justify-center sub-head">
          <TypographySubHead>Specialist</TypographySubHead>
        </div>
      </CardHeader>
      <Separator className="w-full" />
      <CardContent className="flex flex-wrap justify-between w-full gap-y-5">
        {loading || error ? (
          <Loading />
        ) : (
          <>
            {data?.data.map(
              ({ name, sub, percent, level, image }: SpecialistCommon) => (
                <Card
                  key={name}
                  className="border-0 shadow-none h-fit w-full md:w-[calc(33%-50px)]"
                >
                  <Card className="shadow-none flex flex-col py-4 items-center justify-center gap-2.5">
                    <TypographySubHead>{name}</TypographySubHead>
                    <TypographyTitle className="text-center">
                      {sub} ({percent}%)
                    </TypographyTitle>
                  </Card>
                  <DoughnutChart
                    data={convertToDoughnutData(level)}
                    className="h-fit min-h-[244px]"
                    legendClassName="[&>ul>li>p.label-legend]:text-black [&>ul>li>p.value-legend]:text-black"
                    showOnlyValueOnChart
                    valueType={VALUE_TYPE.PERCENT}
                    centerImage={
                      <Image
                        src="/icons/coffeeBean.svg"
                        alt={name}
                        width={40}
                        height={40}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    }
                  />
                </Card>
              )
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default WhatSpecialistHaveInCommonCard;
