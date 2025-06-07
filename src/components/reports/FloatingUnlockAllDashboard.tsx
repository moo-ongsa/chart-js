"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/Dialog";
import { Button } from "../ui/Button";
import { useTranslations } from "next-intl";
import { TRANSlATION_KEY } from "@/utils/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react"; // ใช้ icon จาก lucide
import Tag from "../ui/Tag";
import { useData, useWindowSize } from "@/utils/hooks";
import { TAILWIND_BREAKPOINTS } from "@/utils/breakpoints";
import {
  getPermissionByKey,
  unlockPermissionById,
} from "@/core/usecases/permission";
import { useToast } from "@/hooks/useToast";

export default function FloatingUnlockAllDashboard() {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { width } = useWindowSize();
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

  const handleClick = () => {
    if (width < TAILWIND_BREAKPOINTS.md) {
      router.push("/dashboard/unlock-all-coffee-insights");
    } else {
      setOpen(!open);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild> */}
      <Button
        className="fixed px-[15px] bottom-0 right-[25px] z-50 rounded-t-lg rounded-b-none border-0 font-semibold"
        variant="outline"
        style={{
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
        onClick={handleClick}
      >
        <Image
          src="/icons/key.svg"
          width={24}
          height={24}
          alt="Unlock all insight"
          className="mr-1"
        />
        {t("unlockAllInsight")}
        {open ? (
          <ChevronDown className="ml-1 w-5 h-5" />
        ) : (
          <ChevronUp className="ml-1 w-5 h-5" />
        )}
      </Button>
      {/* </DialogTrigger> */}
      <DialogContent
        overlayClassName="bg-quiz-text-black opacity-50"
        className="bg-quiz-bg-01 max-w-screen-xl px-[49px] pb-[80px] pt-0"
      >
        <DialogTitle className="text-center pt-[70px] pb-[70px] font-inter font-bold text-[36px]">
          {t("unlockAllInsightTitle")}
        </DialogTitle>
        <div className="flex gap-[177px]">
          <Image
            src="/images/unlockAllInsight/unlockAllBackground.png"
            width={485}
            height={454}
            alt="Unlock all insight background"
            className="mr-1 object-contain"
          />
          <div className="flex flex-col w-full max-w-[509px] gap-[26px]">
            <Tag
              className="bg-[#E9B63F]"
              label={t("unlockAllInsightLabel1")}
              imageSrc="/icons/cupOfHotCoffee.svg"
            />
            <Tag
              className="bg-[#F79859]"
              label={t("unlockAllInsightLabel2")}
              imageSrc="/icons/buy.svg"
            />
            <Tag
              className="bg-[#F5B8AD]"
              label={t("unlockAllInsightLabel3")}
              imageSrc="/icons/insight.svg"
            />
            <p className="font-inter text-[16px] text-center">
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
      </DialogContent>
    </Dialog>
  );
}
