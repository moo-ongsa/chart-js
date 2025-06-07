"use client";

import React, { useState, useCallback, FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import {
  coffeeDrinkerOptions,
  TYPES_OF_COFFEE_DRINKERS_VALUE,
} from "../TypesOfCoffeeDrinkersSelectGroup";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CountryListItem from "../../ui/CountryListItem";
import { ERROR_MESSAGE, TRANSlATION_KEY, VALUE_TYPE } from "@/utils/constants";
import Loading from "./TopBeansByOriginCard.loading";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { useAge } from "@/context/AgeContext";
import { useTranslations } from "next-intl";
import TopBeansByOriginCardLock from "./TopBeansByOriginCard.lock";
import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";
import { getTopBeansByOrigin } from "@/core/usecases/dashboard/getTopBeansByOrigin";

interface TopBeansByOriginCardProps {
  className?: string;
}

const TopBeansByOriginCard: FC<TopBeansByOriginCardProps> = ({ className }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();

  const [selectedFilter, setSelectedFilter] = useState<CoffeeDrinker[]>([
    TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL,
  ]);

  const { data, error, loading, refetch } = useData({
    method: getTopBeansByOrigin,
    params: { age: ageRange, type: selectedFilter },
  });

  const handleFilterChange = useCallback((value: CoffeeDrinker[]) => {
    setSelectedFilter(value);
  }, []);

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return <TopBeansByOriginCardLock className={className} refetch={refetch} />;
  }

  return (
    <Card
      className={cn("flex flex-col max-h-full md:max-h-[541px]", className)}
    >
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">{t("topBeansByOrigin")}</CardTitle>
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
      <CardContent className="flex flex-1 flex-wrap w-full gap-x-6 gap-y-5">
        {loading || error ? (
          <Loading />
        ) : (
          <>
            <Card className="flex-1 shadow-none w-full md:w-[calc(50%-12px)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2.5">
                  <Image
                    src="/icons/local.svg"
                    alt="Local"
                    width={24}
                    height={24}
                  />
                  Local {data?.thaiPercent}%
                </CardTitle>
              </CardHeader>
              <Separator className="w-full" />
              <CardContent className="pt-4 pb-1.5 mb-4 relative max-h-[314px] overflow-auto gap-y-1.5 flex flex-col">
                {data?.dataLocal?.map(({ id, name, percent, countryCode }) => (
                  <CountryListItem
                    key={id}
                    name={name}
                    value={percent}
                    countryCode={countryCode}
                    valueType={VALUE_TYPE.PERCENT}
                  />
                ))}
              </CardContent>
            </Card>
            <Card className="flex-1 shadow-none w-full md:w-[calc(50%-12px)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2.5">
                  <Image
                    src="/icons/imported.svg"
                    alt="Imported"
                    width={24}
                    height={24}
                  />
                  Imported {data?.importedPercent}%
                </CardTitle>
              </CardHeader>
              <Separator className="w-full" />
              <CardContent className="pt-4 pb-1.5 mb-4 relative max-h-[314px] overflow-auto gap-y-1.5 flex flex-col">
                {data?.dataImported?.map(
                  ({ id, name, percent, countryCode }) => (
                    <CountryListItem
                      key={id}
                      name={name}
                      value={percent}
                      countryCode={countryCode}
                      valueType={VALUE_TYPE.PERCENT}
                    />
                  )
                )}
              </CardContent>
            </Card>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TopBeansByOriginCard;
