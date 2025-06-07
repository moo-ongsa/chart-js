"use client";

import React, { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TRANSlATION_KEY } from "@/utils/constants";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

interface NoPermissionDashboardProps {
  className?: string;
  title: string;
  subTitle: string;
  beans?: number;
  isLoading?: boolean;
  isError?: boolean;
  onClickUnlockButton: () => void;
}

const NoPermissionDashboard: FC<NoPermissionDashboardProps> = ({
  className,
  title,
  subTitle,
  beans,
  isLoading = false,
  isError = false,
  onClickUnlockButton,
}) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  return (
    <div
      className={cn(
        "relative z-20 w-full h-full max-w-[257px] flex justify-center items-center flex-col text-center mx-auto",
        className
      )}
    >
      <Image src="/images/blur/lock.svg" width={75} height={75} alt="Lockr" />
      <h4 className="mt-6 font-inter font-semibold text-[18px]">{title}</h4>
      <p className="mt-4 font-inter text-[14px]">{subTitle}</p>
      <Button
        onClick={onClickUnlockButton}
        variant="quiz-button-secondary"
        className="mt-6"
        isLoading={isLoading}
        disabled={isError}
      >
        {isError ? (
          t("purchasingError")
        ) : (
          <>
            {t("unlockWith")}
            <Image
              src="/icons/bean.svg"
              width={20}
              height={20}
              alt="bean"
              className="ml-[16px] mr-1"
            />
            {beans}
          </>
        )}
      </Button>
    </div>
  );
};

export default NoPermissionDashboard;
