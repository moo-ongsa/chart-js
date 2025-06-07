"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import {
  coffeeDrinkerOptions,
  TYPES_OF_COFFEE_DRINKERS_VALUE,
} from "../TypesOfCoffeeDrinkersSelectGroup";
import DoughnutChart from "../../ui/DoughnutChart";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/Accordion";
import HorizontalStackedBarChart from "../../ui/HorizontalStackedBarChart";
import Loading from "./RoastLevelCard.loading";
import { backgroundColorRankingList } from "@/utils/colos";
import NextImage from "next/image";
import Image from "next/image";
import { ERROR_MESSAGE, TRANSlATION_KEY, VALUE_TYPE } from "@/utils/constants";
import { useAge } from "@/context/AgeContext";
import { RoastLevelItem } from "@/core/entities/RoastLevelItem";
import { useTranslations } from "next-intl";
import RoastLevelCardLock from "./RoastLevelCard.lock";
import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";
import { getRoastLevel } from "@/core/usecases/dashboard/getRoastLevel";

interface RoastLevelCardProps {
  className?: string;
}

const RoastLevelCard: React.FC<RoastLevelCardProps> = ({ className }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();

  const [selectedFilter, setSelectedFilter] = useState<CoffeeDrinker[]>([
    TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL,
  ]);

  const { data, error, loading, refetch } = useData({
    method: getRoastLevel,
    params: { age: ageRange, type: selectedFilter },
  });

  const handleFilterChange = useCallback((value: CoffeeDrinker[]) => {
    setSelectedFilter(value);
  }, []);

  const convertToStackChartData = useCallback(
    (data: RoastLevelItem[], name: string) => {
      const labels: string[] = [];
      const percentages: number[] = [];

      data?.forEach(({ name, percent }) => {
        labels.push(name);
        percentages.push(percent);
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

  const dataDoughnut = useMemo(() => {
    const labels: string[] = [];
    const legends: string[] = [];
    const percentages: number[] = [];

    data?.data?.forEach(({ abbreviate, percent, name }) => {
      labels.push(abbreviate);
      legends.push(name);
      percentages.push(percent);
    });

    return {
      labels,
      legends,
      datasets: [
        {
          data: percentages,
          backgroundColor: backgroundColorRankingList,
          barPercentage: 2,
        },
      ],
    };
  }, [data]);

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return <RoastLevelCardLock className={className} refetch={refetch} />;
  }

  return (
    <Card className={cn("max-h-full", className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">{t("roastLevel")} </CardTitle>
        <MultiSelect<CoffeeDrinker>
          options={coffeeDrinkerOptions}
          onValueChange={handleFilterChange}
          defaultValue={selectedFilter}
          placeholder="Select types"
          label="Types"
          className="bg-light-gold"
        />
      </CardHeader>
      <Separator className="w-full" />
      <CardContent className="flex flex-wrap w-full gap-x-6 gap-y-5 h-full max-h-[calc(100%-84px)]">
        {loading || error ? (
          <Loading />
        ) : (
          <>
            <Card className="border-0 w-full shadow-none md:w-[calc(50%-12px)]">
              <CardContent className="pt-0 pb-[6px] h-full">
                <DoughnutChart
                  data={dataDoughnut}
                  className="h-fit min-h-[260px] max-h-fit md:max-h-[260px]"
                  centerImage={
                    <NextImage
                      src="/icons/coffeeBean.svg"
                      alt="Roast Level"
                      width={40}
                      height={40}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                    />
                  }
                  valueType={VALUE_TYPE.PERCENT}
                />
              </CardContent>
            </Card>
            <Card className="flex-1 shadow-none w-full  md:w-[calc(50%-12px)]">
              <CardHeader className="px-6 pt-6 pb-[7px]">
                <CardTitle className="flex-1">Roast Level</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-[6px] relative max-h-[350px] overflow-auto">
                <Accordion type="single" collapsible>
                  {data?.data?.map(({ id, name, percent, image, level }) => (
                    <AccordionItem key={id} value={id.toString()}>
                      <AccordionTrigger className="py-[6.6px]">
                        <div className="flex items-center gap-[10px] flex-1">
                          <Image
                            src={image}
                            alt={name}
                            width={24}
                            height={24}
                          />
                          {name}
                        </div>
                        {percent}%
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <HorizontalStackedBarChart
                          valueType={VALUE_TYPE.PERCENT}
                          data={convertToStackChartData(level, name)}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default RoastLevelCard;
