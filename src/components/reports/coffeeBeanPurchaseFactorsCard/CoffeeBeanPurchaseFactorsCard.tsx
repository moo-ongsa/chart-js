"use client";

import React, { useState, useMemo, FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import WaffleChart from "@/components/ui/WaffleChart";

import { useData } from "@/utils/hooks";
import {
  coffeeDrinkerOptions,
  TYPES_OF_COFFEE_DRINKERS_VALUE,
} from "../TypesOfCoffeeDrinkersSelectGroup";
import { cn } from "@/lib/utils";
import Loading from "./CoffeeBeanPurchaseFactorsCard.loading";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { backgroundColorRankingList } from "@/utils/colos";
import { TypographySubHead } from "@/components/ui/TypographySubHead";
import { useAge } from "@/context/AgeContext";
import CoffeeBeanPurchaseFactorsCardLock from "./CoffeeBeanPurchaseFactorsCard.lock";
import { ERROR_MESSAGE, TRANSlATION_KEY } from "@/utils/constants";
import { useTranslations } from "next-intl";
import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";
import { getCoffeeBeanPurchaseFactor } from "@/core/usecases/dashboard/getCoffeeBeanPurchaseFactor";

interface CoffeeBeanPurchaseFactorsCardProps {
  className?: string;
}

const CoffeeBeanPurchaseFactorsCard: FC<CoffeeBeanPurchaseFactorsCardProps> = ({
  className,
}) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();

  const [selectedFilter, setSelectedFilter] = useState<CoffeeDrinker[]>([
    TYPES_OF_COFFEE_DRINKERS_VALUE.SPECIALIST,
    TYPES_OF_COFFEE_DRINKERS_VALUE.COFFEE_DRINK,
  ]);

  const { data, error, loading, refetch } = useData({
    method: getCoffeeBeanPurchaseFactor,
    params: { age: ageRange, type: selectedFilter },
  });

  const handleFilterChange = (value: CoffeeDrinker[]) => {
    setSelectedFilter(value);
  };

  const coffeeBeanPurchaseFactorsWaffleChartData = useMemo(() => {
    return {
      labels: data?.labels ?? [],
      datasets: [
        {
          data: data?.data ?? [],
          backgroundColor: backgroundColorRankingList,
        },
      ],
    };
  }, [data]);

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return (
      <CoffeeBeanPurchaseFactorsCardLock
        className={className}
        refetch={refetch}
      />
    );
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-2">
        <CardTitle>{t("coffeeBeanPurchaseFactor")}</CardTitle>
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
      <CardContent>
        {loading || error ? (
          <Loading />
        ) : (data?.data ?? []).length > 0 ? (
          <WaffleChart
            data={coffeeBeanPurchaseFactorsWaffleChartData}
            totalSquares={100}
            rows={10}
            columns={10}
          />
        ) : (
          <div className="flex justify-center items-center flex-grow max-h-[479px]">
            <TypographySubHead>{t("noData")}</TypographySubHead>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CoffeeBeanPurchaseFactorsCard;
