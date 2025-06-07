"use client";

import React, { useState, useCallback, FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import {
  coffeeDrinkerOptions,
  TYPES_OF_COFFEE_DRINKERS_VALUE,
} from "../TypesOfCoffeeDrinkersSelectGroup";
import { cn } from "@/lib/utils";
import ShowMoreItems from "../../ui/ShowMoreItems";
import { TypographyTitle } from "../../ui/TypographyTitle";
import Image from "next/image";
import Loading from "./PreferredHomeBrewingMethodsCard.loading";
import { useAge } from "@/context/AgeContext";
import { PreferredBrewingMethod } from "@/core/entities/PreferredBrewingMethod";
import { ERROR_MESSAGE, TRANSlATION_KEY } from "@/utils/constants";
import PreferredHomeBrewingMethodsCardLock from "./PreferredHomeBrewingMethodsCard.lock";
import { useTranslations } from "next-intl";
import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";
import { getPreferredHomeBrewingMethod } from "@/core/usecases/dashboard/getPreferredHomeBrewingMethod";

interface PreferredHomeBrewingMethodsCardProps {
  className?: string;
}

const PreferredHomeBrewingMethodsCard: FC<
  PreferredHomeBrewingMethodsCardProps
> = ({ className }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();

  const [selectedFilter, setSelectedFilter] = useState<CoffeeDrinker[]>([
    TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL,
  ]);

  const { data, error, loading, refetch } = useData({
    method: getPreferredHomeBrewingMethod,
    params: { age: ageRange, type: selectedFilter },
  });

  const handleFilterChange = useCallback((value: CoffeeDrinker[]) => {
    setSelectedFilter(value);
  }, []);

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return (
      <PreferredHomeBrewingMethodsCardLock
        className={className}
        refetch={refetch}
      />
    );
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">
          {t("preferredHomeBrewingMethod")}
        </CardTitle>
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
      <CardContent className="flex flex-wrap gap-x-6 gap-y-5">
        {loading || error ? (
          <Loading />
        ) : (
          <ShowMoreItems<PreferredBrewingMethod>
            items={data?.data ?? []}
            itemGap={32}
            itemWidth={229}
            renderItem={({ percent, name, image }, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 p-6 w-[229px]"
              >
                <Image src={image} width={48} height={48} alt={name} />
                <div>
                  <TypographyTitle className="font-medium">
                    {name}
                  </TypographyTitle>
                  <TypographyTitle className="font-medium text-[13px]">
                    {percent}%
                  </TypographyTitle>
                </div>
              </div>
            )}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default PreferredHomeBrewingMethodsCard;
