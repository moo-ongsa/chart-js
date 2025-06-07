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

interface CommercialCoffeeShopCardLockProps {
  className?: string;
  refetch: () => Promise<void>;
}

const CommercialCoffeeShopCardLock: FC<CommercialCoffeeShopCardLockProps> = ({
  className,
  refetch,
}) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { toast } = useToast();

  const { data, error, loading } = useData({
    method: getPermissionByKey,
    params: "COMMERCIAL_COFFEE_SHOP",
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
    <Card className={cn(className, "relative min-h-[572px]")}>
      <NoPermissionDashboard
        title={t("topCoffeeShop")}
        subTitle={t("topCoffeeShopLockDescription")}
        beans={data?.price}
        onClickUnlockButton={onClickUnlockButton}
        className="max-w-[257px]"
        isLoading={loading}
        isError={!!error}
      />
      <Image
        src="/images/blur/commercialCoffeeShopBlur.png"
        fill
        alt="Commercial Coffee Shop Blur"
        className="relative"
      />
    </Card>
  );
};

export default CommercialCoffeeShopCardLock;
