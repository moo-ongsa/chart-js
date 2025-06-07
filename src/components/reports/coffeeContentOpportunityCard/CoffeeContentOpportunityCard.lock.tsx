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

interface CoffeeContentOpportunityCardLockProps {
  className?: string;
  refetch: () => Promise<void>;
}

const CoffeeContentOpportunityCardLock: FC<
  CoffeeContentOpportunityCardLockProps
> = ({ className, refetch }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { toast } = useToast();

  const { data, error, loading } = useData({
    method: getPermissionByKey,
    params: "CONTENT_OPPORTUNITY",
  });

  const onClickUnlockButton = async () => {
    try {
      if (data?.id) {
        await unlockPermissionById(data?.id);
      }
      refetch();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error.message,
      });
    }
  };

  return (
    <Card className={cn(className, "relative min-h-[595px]")}>
      <NoPermissionDashboard
        title={t("coffeeContentOpportunity")}
        subTitle={t("coffeeContentOpportunityLockDescription")}
        beans={20}
        onClickUnlockButton={onClickUnlockButton}
        className="max-w-[329px]"
        isLoading={loading}
        isError={!!error}
      />
      <Image
        src="/images/blur/coffeeContentOpportunityBlur.png"
        fill
        alt="Coffee Content Opportunity Blur"
        className="relative object-contain md:object-fill"
      />
    </Card>
  );
};

export default CoffeeContentOpportunityCardLock;
