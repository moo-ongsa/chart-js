"use client";

import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import DoughnutChartForCoffeeDemographic from "@/components/ui/DoughnutChartForCoffeeDemographic";
import { cn } from "@/lib/utils";
import { backgroundColorRankingList } from "@/utils/colos";
import { useData } from "@/utils/hooks";
import { TypographyBody2SemiBold } from "@/components/ui/TypographyBody2SemiBold";
import { TypographyDescription } from "@/components/ui/TypographyDescription";
import PreferenceBasedOnGenderCard from "./PreferenceBasedOnGenderCard";
import CoffeeDrinkerAgeImage from "./CoffeeDrinkerAgeImage";
import IncomeLoading from "./Income.loading";
import PreferenceBasedOnGenderLoading from "./PreferenceBasedOnGender.loading";
import { useAge } from "@/context/AgeContext";
import { useTranslations } from "next-intl";
import { TRANSlATION_KEY } from "@/utils/constants";
import { getDrinkerDemographic } from "@/core/usecases/dashboard/getDrinkerDemographic";

interface CoffeeDrinkerDemographicCardProps {
  className?: string;
}

const CoffeeDrinkerDemographicCard: React.FC<
  CoffeeDrinkerDemographicCardProps
> = ({ className }) => {
  const { ageRange } = useAge();
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);

  const { data, error, loading } = useData({
    method: getDrinkerDemographic,
    params: { age: ageRange },
  });

  const dataDoughnut = useMemo(() => {
    return {
      labels: data?.income?.labels ?? [],
      datasets: [
        {
          data: data?.income?.data ?? [],
          backgroundColor: backgroundColorRankingList,
          barPercentage: 2,
        },
      ],
    };
  }, [data]);

  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">
          {t("coffeeDrinkerDemographic")}
        </CardTitle>
      </CardHeader>
      <Separator className="w-full" />

      <CardContent className="flex flex-wrap gap-2 pt-6 pl-0 pr-0">
        <div className="relative w-full max-w-[510px] flex flex-col justify-start">
          <TypographyBody2SemiBold className="px-4 py-0">
            {t("income")}
          </TypographyBody2SemiBold>
          {loading || error ? (
            <IncomeLoading />
          ) : (
            <DoughnutChartForCoffeeDemographic
              data={dataDoughnut}
              separatedLegend
              className="min-h-[580px]"
            />
          )}
        </div>

        <div className="flex flex-col flex-1 mx-4 md:mr-[27px]">
          <div className="flex relative flex-col gap-2">
            <TypographyBody2SemiBold>
              {t("preferenceBasedOnGender")}
            </TypographyBody2SemiBold>
            <TypographyDescription>
              {data?.womenWhoDrinkCoffee ?? 0}
              {t("ofRespondentsAreWomen")}
              <span className="text-text-main-light">
                {t("whoDrinkCoffee")}
              </span>
            </TypographyDescription>
          </div>
          <CoffeeDrinkerAgeImage ageRange={ageRange} />
          {loading || error ? (
            <PreferenceBasedOnGenderLoading />
          ) : (
            <div className="flex gap-2 flex-col">
              <PreferenceBasedOnGenderCard
                imageSrc="/icons/spendingIcon.svg"
                title={t("avgCoffeeSpendingPerMonth")}
                data={data?.avgCoffeeSpendingPerMonth}
              />
              <PreferenceBasedOnGenderCard
                imageSrc="/icons/coffeePrice.svg"
                title={t("avgCoffeePricePreferred")}
                data={data?.avgCoffeePricePreferred}
              />
              <PreferenceBasedOnGenderCard
                imageSrc="/icons/temperature.svg"
                title={t("temperature")}
                data={data?.preference}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CoffeeDrinkerDemographicCard;
