"use client";

import React, { useState, useCallback, useMemo, FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import {
  coffeeDrinkerOptions,
  TYPES_OF_COFFEE_DRINKERS_VALUE,
} from "../TypesOfCoffeeDrinkersSelectGroup";
import DoughnutChart from "@/components/ui/DoughnutChart";
import NextImage from "next/image";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { TypographyTitle } from "@/components/ui/TypographyTitle";
import Loading from "./CoffeeContentOpportunityCard.loading";
import { backgroundColorRankingList } from "@/utils/colos";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { ERROR_MESSAGE, TRANSlATION_KEY, VALUE_TYPE } from "@/utils/constants";
import Image from "@/components/ui/Image";
import { useAge } from "@/context/AgeContext";
import { EducationChannel } from "@/core/entities/EducationChannels";
import { ChartData, Color } from "chart.js";
import HorizontalStackedBarChart from "@/components/ui/HorizontalStackedBarChart";
import { useTranslations } from "next-intl";
import CoffeeContentOpportunityCardLock from "./CoffeeContentOpportunityCard.lock";
import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";
import { getCoffeeContentOpportunity } from "@/core/usecases/dashboard/getCoffeeContentOpportunity";

export interface CoffeeContentOpportunityCardProps {
  className?: string;
}

const CoffeeContentOpportunityCard: FC<CoffeeContentOpportunityCardProps> = ({
  className,
}) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();

  const [selectedFilter, setSelectedFilter] = useState<CoffeeDrinker[]>([
    TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL,
    TYPES_OF_COFFEE_DRINKERS_VALUE.COFFEE_DRINK,
  ]);

  const { data, error, loading, refetch } = useData({
    method: getCoffeeContentOpportunity,
    params: { age: ageRange, type: selectedFilter },
  });

  const handleFilterChange = useCallback((value: CoffeeDrinker[]) => {
    setSelectedFilter(value);
  }, []);

  const convertToStackChartData = useCallback((data?: EducationChannel[]) => {
    const labels: string[] = [];
    const percentages: number[] = [];
    const backgroundColors: Color[] = [];

    data?.forEach(({ name, percent }, index) => {
      labels.push(name);
      percentages.push(percent);
      backgroundColors.push(backgroundColorRankingList[index]);
    });

    return {
      labels: ["Channels"],
      datasets: labels.map((label, index) => ({
        label,
        data: [percentages[index]],
        backgroundColor: backgroundColors[index],
      })),
    };
  }, []);

  const dataDoughnut: ChartData<"doughnut"> = useMemo(() => {
    return {
      labels: data?.coffeeReadings?.labels || [],
      datasets: [
        {
          data: data?.coffeeReadings?.data || [],
          backgroundColor: backgroundColorRankingList,
          barPercentage: 2,
        },
      ],
    };
  }, [data]);

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return (
      <CoffeeContentOpportunityCardLock
        className={className}
        refetch={refetch}
      />
    );
  }

  return (
    <Card className={cn("max-h-full", className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">
          {t("coffeeContentOpportunity")}
        </CardTitle>
        <MultiSelect
          options={coffeeDrinkerOptions}
          onValueChange={handleFilterChange}
          defaultValue={selectedFilter}
          placeholder="Select types"
          label="Types"
          className="bg-light-gold"
        />
      </CardHeader>

      <Separator className="w-full" />

      <CardContent className="flex flex-wrap w-full gap-x-6 gap-y-5">
        {loading || error ? (
          <Loading />
        ) : (
          <>
            {/* Left: Doughnut */}
            <Card className="flex-1 shadow-none w-full md:w-[calc(50%-12px)]">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="flex-1">
                  {t("attentionToContent")}
                </CardTitle>
              </CardHeader>
              <Separator className="w-full" />
              <CardContent className="py-[34.5px] px-6 h-full">
                <DoughnutChart
                  data={dataDoughnut}
                  valueType={VALUE_TYPE.PERCENT}
                  className="h-fit min-h-[244px] max-h-fit md:max-h-[260px]"
                  showOnlyValueOnChart
                  centerImage={
                    <NextImage
                      src="/icons/contentIcon.svg"
                      alt="Roast Level"
                      width={48}
                      height={48}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                    />
                  }
                />
              </CardContent>
            </Card>

            {/* Right: Stacked bar */}
            <Card className="flex-1 shadow-none w-full md:w-[calc(50%-12px)]">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="flex-1">
                  {t("preferredPlatform")}
                </CardTitle>
              </CardHeader>
              <Separator className="w-full" />
              <CardContent className="pb-[6px] pt-[14px] relative">
                <div className="max-h-[220px] overflow-auto mb-[15px]">
                  <Accordion type="single" collapsible>
                    {data?.socialMedias?.map(
                      ({ id, name, percent, image, level }) => (
                        <AccordionItem key={id} value={String(id)}>
                          <AccordionTrigger className="py-[10px] font-medium">
                            <div className="flex items-center gap-[10px] flex-1">
                              {/* <Image
                                src={image}
                                alt={name}
                                width={24}
                                height={24}
                              /> */}
                              {name}
                            </div>
                            {percent}%
                          </AccordionTrigger>
                          <AccordionContent className="pb-0">
                            <HorizontalStackedBarChart
                              valueType={VALUE_TYPE.PERCENT}
                              data={convertToStackChartData(level)}
                            />
                          </AccordionContent>
                        </AccordionItem>
                      )
                    )}
                  </Accordion>
                </div>

                <div className="flex flex-col">
                  <TypographyTitle className="text-text-main-light mb-1.5">
                    {t("channelsEducateCustomers")}
                  </TypographyTitle>
                  <HorizontalStackedBarChart
                    valueType={VALUE_TYPE.PERCENT}
                    data={convertToStackChartData(data?.educationChannels)}
                  />
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CoffeeContentOpportunityCard;
