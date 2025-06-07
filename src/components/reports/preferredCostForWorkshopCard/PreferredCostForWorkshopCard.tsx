"use client";

import React, { useState, useMemo, useCallback, FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import {
  coffeeDrinkerOptions,
  TYPES_OF_COFFEE_DRINKERS_VALUE,
} from "../TypesOfCoffeeDrinkersSelectGroup";
import DoughnutChart from "../../ui/DoughnutChart";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Loading from "./PreferredCostForWorkshopCard.loading";
import { backgroundColorRankingList } from "@/utils/colos";
import { ERROR_MESSAGE, TRANSlATION_KEY, VALUE_TYPE } from "@/utils/constants";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { useAge } from "@/context/AgeContext";
import { useTranslations } from "next-intl";
import PreferredCostForWorkshopCardLock from "./PreferredCostForWorkshopCard.lock";
import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";
import { getPreferredCostForWorkshop } from "@/core/usecases/dashboard/getPreferredCostForWorkshop";

interface PreferredCostForWorkshopCardProps {
  className?: string;
}

const PreferredCostForWorkshopCard: FC<PreferredCostForWorkshopCardProps> = ({
  className,
}) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();

  const [selectedFilter, setSelectedFilter] = useState<CoffeeDrinker[]>([
    TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL,
  ]);

  const { data, error, loading, refetch } = useData({
    method: getPreferredCostForWorkshop,
    params: { age: ageRange, type: selectedFilter },
  });

  const handleFilterChange = useCallback((value: CoffeeDrinker[]) => {
    setSelectedFilter(value);
  }, []);

  const dataDoughnut = useMemo(() => {
    const labels: string[] = [];
    const percentages: number[] = [];

    data?.data?.forEach(({ name, percent }) => {
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
  }, [data]);

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return (
      <PreferredCostForWorkshopCardLock
        className={className}
        refetch={refetch}
      />
    );
  }
  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader className="gap-2">
        <CardTitle>{t("preferredCostForWorkshop")}</CardTitle>
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
      <CardContent className="flex flex-1 flex-col justify-end">
        {loading || error ? (
          <Loading className={cn(className)} />
        ) : (
          <DoughnutChart
            data={dataDoughnut}
            className="h-fit min-h-[244px]"
            legendClassName="px-[13px]"
            separatedLegend
            valueType={VALUE_TYPE.PERCENT}
            showOnlyValueOnChart
            centerImage={
              <Image
                src="/icons/preferredCostForWorkshopIcon.svg"
                alt="Preferred Cost for Workshop"
                width={48}
                height={48}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
              />
            }
          />
        )}
      </CardContent>
    </Card>
  );
};

export default PreferredCostForWorkshopCard;
