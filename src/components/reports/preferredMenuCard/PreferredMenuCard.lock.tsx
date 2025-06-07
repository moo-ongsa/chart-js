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

interface PreferredMenuCardLockProps {
  className?: string;
  refetch: () => Promise<void>;
}

const PreferredMenuCardLock: FC<PreferredMenuCardLockProps> = ({
  className,
  refetch,
}) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { toast } = useToast();

  const { data, error, loading } = useData({
    method: getPermissionByKey,
    params: "PREFERRED_MENU",
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
    <Card className={cn(className, "relative min-h-[656px]")}>
      <NoPermissionDashboard
        title={t("topCoffeeMenu")}
        subTitle={t("topCoffeeMenuLockDescription")}
        beans={data?.price}
        onClickUnlockButton={onClickUnlockButton}
        className="max-w-[319px]"
        isLoading={loading}
        isError={!!error}
      />
      <Image
        src="/images/blur/preferredMenuBlur.png"
        fill
        alt="PreferredMenu Blur"
        className="relative"
      />
    </Card>
  );
};

export default PreferredMenuCardLock;
