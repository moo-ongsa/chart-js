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
import { PermissionRepository } from "@/data/repositories/PermissionRepository";
import { getPermissionByKey } from "@/core/usecases/permission";

interface WhatSpecialistHaveInCommonCardLockProps {
  className?: string;
  refetch: () => Promise<void>;
}

const WhatSpecialistHaveInCommonCardLock: FC<
  WhatSpecialistHaveInCommonCardLockProps
> = ({ className, refetch }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { toast } = useToast();

  const { data, error, loading } = useData({
    method: getPermissionByKey,
    params: "SPECIALIST_COMMON",
  });

  const onClickUnlockButton = async () => {
    try {
      if (data?.id) {
        await PermissionRepository.postPurchase({
          permissionId: data?.id,
        });
      }
      refetch();
    } catch (error) {
      const err = error as Error;
      toast({
        variant: "destructive",
        title: err.message,
      });
    }
  };

  return (
    <Card className={cn(className, "relative min-h-[595px]")}>
      <NoPermissionDashboard
        title={t("whatSpecialistHaveInCommon")}
        subTitle={t("whatSpecialistHaveInCommonLockDescription")}
        beans={data?.price}
        onClickUnlockButton={onClickUnlockButton}
        className="max-w-[314px]"
        isLoading={loading}
        isError={!!error}
      />
      <Image
        src="/images/blur/whatSpecialistHaveInCommonBlur.png"
        fill
        alt="What Specialist Have In Common Blur"
        className="relative object-cover md:object-fill"
      />
    </Card>
  );
};

export default WhatSpecialistHaveInCommonCardLock;
