"use client";

import React, { FC } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TRANSlATION_KEY } from "@/utils/constants";
import NoPermissionDashboard from "../NoPermissionDashboard";
import { useData } from "@/utils/hooks";
import { useToast } from "@/hooks/useToast";
import {
  getPermissionByKey,
  unlockPermissionById,
} from "@/core/usecases/permission";

interface CoffeeBeanPurchaseFactorsCardLockProps {
  className?: string;
  refetch: () => Promise<void>;
}

const CoffeeBeanPurchaseFactorsCardLock: FC<
  CoffeeBeanPurchaseFactorsCardLockProps
> = ({ className, refetch }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { toast } = useToast();

  const { data, error, loading } = useData({
    method: getPermissionByKey,
    params: "COFEE_PURCHASE_FACTOR",
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
    <Card className={cn(className, "relative min-h-[545px]")}>
      <NoPermissionDashboard
        title={t("coffeeBeanPurchaseFactor")}
        subTitle={t("coffeeBeanPurchaseFactorLockDescription")}
        beans={data?.price}
        onClickUnlockButton={onClickUnlockButton}
        className="max-w-[257px]"
        isLoading={loading}
        isError={!!error}
      />
      <Image
        src="/images/blur/coffeeBeanPurchaseFactorBlur.png"
        fill
        alt="Coffee Bean Purchase Factor Blur"
        className="relative"
      />
    </Card>
  );
};

export default CoffeeBeanPurchaseFactorsCardLock;
