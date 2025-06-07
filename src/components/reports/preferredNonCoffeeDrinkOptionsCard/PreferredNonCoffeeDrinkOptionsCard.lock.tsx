"use client";

import React, { FC } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TRANSlATION_KEY } from "@/utils/constants";
import NoPermissionDashboard from "../NoPermissionDashboard";
import { useToast } from "@/hooks/useToast";
import { useData } from "@/utils/hooks";
import {
  getPermissionByKey,
  unlockPermissionById,
} from "@/core/usecases/permission";

interface PreferredNonCoffeeDrinkOptionsCardLockProps {
  className?: string;
  refetch: () => Promise<void>;
}

const PreferredNonCoffeeDrinkOptionsCardLock: FC<
  PreferredNonCoffeeDrinkOptionsCardLockProps
> = ({ className, refetch }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { toast } = useToast();

  const { data, error, loading } = useData({
    method: getPermissionByKey,
    params: "NONE_COFFEE_PREFERRED_MENU",
  });

  const onClickUnlockButton = async () => {
    try {
      if (data?.id) {
        await unlockPermissionById(data?.id);
        refetch();
      }
    } catch (error) {
      const err = error as Error;
      toast({
        variant: "destructive",
        title: err.message,
      });
    }
  };

  return (
    <Card className={cn(className, "relative min-h-[416px]")}>
      <NoPermissionDashboard
        title={t("preferredNonCoffeeDrinkOptions")}
        subTitle={t("preferredNonCoffeeDrinkOptionsLockDescription")}
        beans={20}
        onClickUnlockButton={onClickUnlockButton}
        className="max-w-[244px]"
        isLoading={loading}
        isError={!!error}
      />
      <Image
        src="/images/blur/preferredNonCoffeeBlur.png"
        fill
        alt="Preferred Non-Coffee Blur"
        className="relative object-cover md:object-fill"
      />
    </Card>
  );
};

export default PreferredNonCoffeeDrinkOptionsCardLock;
