"use client";

import React, { useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { cn } from "@/lib/utils";
import { TypographyTitle } from "../../ui/TypographyTitle";
import HorizontalStackedBarChart from "../../ui/HorizontalStackedBarChart";
import Loading from "./PreferredNonCoffeeDrinkOptionsCard.loading";
import Image from "next/image";
import { backgroundColorRankingList } from "@/utils/colos";
import { useAge } from "@/context/AgeContext";
import { NoneCoffeePreferredMenu } from "@/core/entities/NoneCoffeePreferredMenu";
import { useData } from "@/utils/hooks";
import { ERROR_MESSAGE, TRANSlATION_KEY, VALUE_TYPE } from "@/utils/constants";
import ShowMoreItems from "@/components/ui/ShowMoreItems";
import { RoastLevelItem } from "@/core/entities/RoastLevelItem";
import { useTranslations } from "next-intl";
import PreferredNonCoffeeDrinkOptionsCardLock from "./PreferredNonCoffeeDrinkOptionsCard.lock";
import { getNoneCoffeePreferredMenu } from "@/core/usecases/dashboard/getNoneCoffeePreferredMenu";

export interface PreferredNonCoffeeDrinkOptionsCardProps {
  className?: string;
}

const PreferredNonCoffeeDrinkOptionsCard: React.FC<
  PreferredNonCoffeeDrinkOptionsCardProps
> = ({ className }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();

  const { data, error, loading, refetch } = useData({
    method: getNoneCoffeePreferredMenu,
    params: { age: ageRange },
  });

  const convertToStackChartData = useCallback(
    (level: RoastLevelItem[], name: string) => {
      const labels: string[] = [];
      const percentages: number[] = [];
      const backgroundColors: string[] = [];

      level.forEach(({ name, percent, backgroundColor }) => {
        labels.push(name);
        percentages.push(percent);
        backgroundColors.push(backgroundColor);
      });

      return {
        labels: [name],
        datasets: labels.map((label, index) => ({
          label: label,
          data: [percentages[index]],
          backgroundColor: backgroundColorRankingList[index],
        })),
      };
    },
    []
  );

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return (
      <PreferredNonCoffeeDrinkOptionsCardLock
        className={className}
        refetch={refetch}
      />
    );
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">
          {t("preferredNonCoffeeDrinkOptions")}
        </CardTitle>
      </CardHeader>
      <Separator className="w-full" />
      <CardContent className="flex flex-wrap gap-x-6 gap-y-5">
        {loading || error ? (
          <Loading />
        ) : (
          <ShowMoreItems<NoneCoffeePreferredMenu>
            items={data?.data || []}
            itemWidth={258}
            itemGap={7}
            className="[&>button]:mt-6"
            renderItem={(
              { percent, name, image, level }: NoneCoffeePreferredMenu,
              index: number
            ) => (
              <div
                key={index}
                className={`flex items-center gap-2.5 w-[258px] p-6 flex-col`}
              >
                <div className="flex items-center gap-3 w-full">
                  <Image src={image} width={48} height={48} alt={name} />
                  <TypographyTitle className="font-medium flex-1">
                    {name}
                  </TypographyTitle>
                  <TypographyTitle className="font-medium text-[13px] text-end">
                    {percent}%
                  </TypographyTitle>
                </div>
                <HorizontalStackedBarChart
                  valueType={VALUE_TYPE.PERCENT}
                  data={convertToStackChartData(level, name)}
                />
              </div>
            )}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default PreferredNonCoffeeDrinkOptionsCard;
