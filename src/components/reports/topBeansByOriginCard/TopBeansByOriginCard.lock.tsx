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

interface TopBeansByOriginCardLockProps {
  className?: string;
  refetch: () => Promise<void>;
}

const TopBeansByOriginCardLock: FC<TopBeansByOriginCardLockProps> = ({
  className,
  refetch,
}) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { toast } = useToast();

  const { data, error, loading } = useData({
    method: getPermissionByKey,
    params: "TOP_BEAN_BY_ORIGIN",
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
    <Card className={cn(className, "relative min-h-[543px]")}>
      <NoPermissionDashboard
        title={t("topBeansByOrigin")}
        subTitle={t("topBeansByOriginLockDescription")}
        beans={data?.price}
        onClickUnlockButton={onClickUnlockButton}
        className="max-w-[314px]"
        isLoading={loading}
        isError={!!error}
      />
      <Image
        src="/images/blur/topBeansByOriginBlur.png"
        fill
        alt="Top Beans By Origin Blur"
        className="relative object-contain md:object-fill"
      />
    </Card>
  );
};

export default TopBeansByOriginCardLock;
