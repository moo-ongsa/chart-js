"use client";

import React, { useState, useCallback, useMemo, FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import {
  coffeeDrinkerOptions,
  TYPES_OF_COFFEE_DRINKERS_VALUE,
} from "../TypesOfCoffeeDrinkersSelectGroup";
import DoughnutChart from "../../ui/DoughnutChart";
import { Accordion, AccordionTrigger, AccordionItem } from "../../ui/Accordion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Loading from "./PopularTasteNoteCard.loading";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { ERROR_MESSAGE, TRANSlATION_KEY, VALUE_TYPE } from "@/utils/constants";
import { useAge } from "@/context/AgeContext";
import { useTranslations } from "next-intl";
import PopularTasteNoteCardLock from "./PopularTasteNoteCard.lock";
import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";
import { getPopularTasteNote } from "@/core/usecases/dashboard/getPopularTasteNote";

const backgroundColor: string[] = [
  "hsl(24, 91%, 66%)",
  "hsl(9, 78%, 82%)",
  "hsl(31, 22%, 53%)",
  "hsl(41, 89%, 68%)",
  "hsl(42, 79%, 58%)",
  "hsl(2, 56%, 54%)",
];

const images: string[] = [
  "/icons/fruityIcon.svg",
  "/icons/floralIcon.svg",
  "/icons/nuttyChocolateIcon.svg",
  "/icons/liquorIcon.svg",
  "/icons/fermentedIcon.svg",
  "/icons/herbalAndSpiceIcon.svg",
];

interface PopularTasteNoteCardProps {
  className?: string;
}

const PopularTasteNoteCard: FC<PopularTasteNoteCardProps> = ({ className }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();
  const [selectedFilter, setSelectedFilter] = useState<CoffeeDrinker[]>([
    TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL,
  ]);

  const { data, error, loading, refetch } = useData({
    method: getPopularTasteNote,
    params: { age: ageRange, type: selectedFilter },
  });

  const handleFilterChange = useCallback((value: CoffeeDrinker[]) => {
    setSelectedFilter(value);
  }, []);

  const coffeeBeanPopularTasteNoteDonutChartData = useMemo(
    () => ({
      labels: data?.labels ?? [],
      datasets: [
        {
          data: data?.data ?? [],
          backgroundColor,
          borderWidth: 2,
        },
      ],
    }),
    [data]
  );

  const coffeeBeanPopularTasteNoteData = useMemo(() => {
    return (data?.labels ?? []).map((label, index) => ({
      label,
      data: data?.data?.[index] ?? 0,
      image: images[index],
    }));
  }, [data]);

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return <PopularTasteNoteCardLock className={className} refetch={refetch} />;
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">{t("popularTasteNote")}</CardTitle>
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
      <CardContent className="flex flex-wrap gap-6 justify-center">
        {loading || error ? (
          <Loading />
        ) : (
          <>
            <DoughnutChart
              data={coffeeBeanPopularTasteNoteDonutChartData}
              centerImage={
                <Image
                  src="/icons/popularTasteNoteIcon.svg"
                  alt="Taste Note"
                  width={72}
                  height={72}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              }
              disabledLegend
              className="mx-auto my-auto min-h-[300px] lg:max-w-[477px] lg:h-[477px] lg:mx-[79px]"
              valueType={VALUE_TYPE.PERCENT}
            />
            <Card className="flex-1 shadow-none">
              <CardHeader className="px-6 pt-[26px] pb-[7px]">
                <CardTitle className="flex-1">
                  {t("popularTasteNote")}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-[6px] relative max-h-[400px] overflow-auto">
                <Accordion type="single" collapsible>
                  {coffeeBeanPopularTasteNoteData.map(
                    ({ label, image, data }) => (
                      <AccordionItem value={label} key={label}>
                        <AccordionTrigger
                          className="[&>svg.chevron]:hidden"
                          disabled
                        >
                          <div className="flex items-center gap-[10px] flex-1">
                            <Image
                              src={image}
                              alt={label}
                              width={24}
                              height={24}
                            />
                            {label}
                          </div>
                          {data}%
                        </AccordionTrigger>
                      </AccordionItem>
                    )
                  )}
                </Accordion>
              </CardContent>
            </Card>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PopularTasteNoteCard;
