"use client";

import React, { useState, useMemo, useCallback, FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import {
  coffeeDrinkerOptions,
  TYPES_OF_COFFEE_DRINKERS_VALUE,
} from "../TypesOfCoffeeDrinkersSelectGroup";
import { cn } from "@/lib/utils";
import Loading from "./SalesChannelsCard.loading";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { TypographyTitle } from "@/components/ui/TypographyTitle";
import SegmentedProgressBarChart from "@/components/ui/SegmentedProgressBarChart";
import { backgroundColorRankingList } from "@/utils/colos";
import Image from "next/image";
import { useAge } from "@/context/AgeContext";
import { SalesChannel } from "@/core/entities/SalesChannel";
import { useTranslations } from "next-intl";
import { ERROR_MESSAGE, TRANSlATION_KEY } from "@/utils/constants";
import SalesChannelsCardLock from "./SalesChannelsCard.lock";
import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";
import { getSalesChannel } from "@/core/usecases/dashboard/getSalesChannel";

interface SalesChannelsCardProps {
  className?: string;
}

const SalesChannelsBox: FC<SalesChannel> = ({ image, label, data }) => (
  <div className="border rounded-[10px] h-[130px] flex flex-col gap-2.5 justify-center items-center">
    <Image src={image} width={24} height={24} alt={label} />
    <TypographyTitle className="font-medium">{label}</TypographyTitle>
    <TypographyTitle className="font-medium">{data}%</TypographyTitle>
  </div>
);

const SalesChannelsCard: FC<SalesChannelsCardProps> = ({ className }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();

  const [selectedFilter, setSelectedFilter] = useState<CoffeeDrinker[]>([
    TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL,
  ]);

  const { data, error, loading, refetch } = useData({
    method: getSalesChannel,
    params: { age: ageRange, type: selectedFilter },
  });

  const handleFilterChange = useCallback((value: CoffeeDrinker[]) => {
    setSelectedFilter(value);
  }, []);

  const onsiteData = useMemo(() => {
    return data?.data?.find((item) => item.label === "Onsite");
  }, [data]);

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return <SalesChannelsCardLock className={className} refetch={refetch} />;
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">{t("salesChannel")}</CardTitle>
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
        {loading || error || !onsiteData?.data ? (
          <Loading />
        ) : (
          <>
            <SegmentedProgressBarChart
              data={{
                labels: ["On-site", "Online"],
                datasets: [
                  {
                    data: [onsiteData!.data, 100 - onsiteData!.data],
                    backgroundColor: backgroundColorRankingList,
                  },
                ],
              }}
            />

            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2.5 flex-wrap w-full">
              {data?.data.map(({ image, label, data }) => (
                <SalesChannelsBox
                  key={label}
                  image={image}
                  label={label}
                  data={data}
                />
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SalesChannelsCard;
