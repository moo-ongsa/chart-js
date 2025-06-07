"use client";

import { useTranslations } from "next-intl";
import { TRANSlATION_KEY } from "@/utils/constants";
import Image from "next/image";
import Tag from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useData } from "@/utils/hooks";
import {
  getPermissionByKey,
  unlockPermissionById,
} from "@/core/usecases/permission";
import { useToast } from "@/hooks/useToast";

export default function UnlockAllCoffeeInsightsPage() {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const router = useRouter();
  const { toast } = useToast();

  const { data, error, loading } = useData({
    method: getPermissionByKey,
    params: "ALL_DASHBOARD",
  });

  const onClickUnlockButton = async () => {
    try {
      if (data?.id) {
        await unlockPermissionById(data?.id);
        router.refresh();
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
    <div className="bg-quiz-bg-01 px-[17px] pb-[26px] pt-7 flex flex-col">
      <div className="flex gap-5">
        <Button
          onClick={() => {
            router.back();
          }}
          variant="ghost"
          size="lgIcon"
          className="p-0"
        >
          <ChevronLeft width={24} height={24} />
        </Button>
        <Image
          src="/images/unlockAllInsight/unlockAllBackground.png"
          width={239}
          height={210}
          alt="Unlock all insight background"
          className="object-contain"
        />
      </div>
      <h4 className="text-center py-5 font-barlow font-semibold text-[24px] px-[40px] line-clamp-2">
        {t("unlockAllInsightTitle")}
      </h4>
      <div className="flex gap-[177px]">
        <div className="flex flex-col w-full max-w-[509px] gap-[14px]">
          <Tag
            className="bg-[#E9B63F]"
            label={t("unlockAllInsightLabel1")}
            imageSrc="/icons/cupOfHotCoffee.svg"
            labelClassName="pl-[14px] text-[16px]"
          />
          <Tag
            className="bg-[#F79859]"
            label={t("unlockAllInsightLabel2")}
            imageSrc="/icons/buy.svg"
            labelClassName="pl-[14px] text-[16px]"
          />
          <Tag
            className="bg-[#F5B8AD]"
            label={t("unlockAllInsightLabel3")}
            imageSrc="/icons/insight.svg"
            labelClassName="pl-[14px] text-[16px]"
          />
          <p className="font-inter text-[14px] text-center">
            {t.rich("unlockAllInsightDescription", { br: () => <br /> })}
          </p>
          <div className="mt-6 gap-[17px] flex flex-col items-center">
            <Button
              onClick={onClickUnlockButton}
              variant="quiz-primary-orange"
              className="w-[344px]"
              size="quiz-h-48"
              isLoading={loading}
              disabled={!!error}
            >
              {t("continueWith")}
              <Image
                src="/icons/bean.svg"
                width={20}
                height={20}
                alt="bean"
                className="ml-[16px] mr-1"
              />
              {data?.price}
            </Button>
            <p className="text-[14px] text-center">{t("saveCost")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
