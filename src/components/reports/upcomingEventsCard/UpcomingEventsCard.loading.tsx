"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/Skeleton";

const EventCardLoading = () => (
  <Card className="flex gap-y-[5px] flex-col p-2.5 rounded-[10px] shadow-none border-none">
    <Skeleton className="h-[20px] w-[85px]" />
    <div className="flex items-center flex-row w-full gap-x-2">
      <div className="flex flex-1">
        <Skeleton className="h-[63px] w-full" />
      </div>
      <div className="flex flex-col gap-2.5">
        <Card className="flex px-2 py-0.5 font-normal text-[12px] gap-x-[5px] shadow-none rounded-[10px]">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-[112px]" />
        </Card>
        <Card className="flex px-2 py-0.5 font-normal text-[12px] gap-x-[5px] shadow-none rounded-[10px]">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-[112px]" />
        </Card>
      </div>
    </div>
  </Card>
);

export interface UpComingEventsCardLoadingProps {
  className?: string;
}

const Loading = ({ className }: UpComingEventsCardLoadingProps) => {
  return (
    <>
      <div className="flex flex-col flex-1 gap-2.5 overflow-auto max-h-[479px]">
        <div className="flex items-center gap-[29px]">
          <Skeleton className="h-[20px] w-[85px] mr-auto" />
          <Separator className="flex-1" />
        </div>
        <Skeleton className="h-[20px] w-[85px] " />
        <div className={cn("flex gap-y-2.5 flex-col", className)}>
          <div className="flex items-center gap-2.5">
            <Skeleton className="h-[63px] w-[63px] " />

            <Skeleton className="h-[20px] w-[85px] " />
          </div>
          <Card className="flex px-2 items-center py-[5px] font-normal text-[12px] gap-x-[5px] shadow-none rounded-[10px] w-fit">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-[16px] w-[85px] " />
          </Card>

          <Card className="flex px-2 items-center py-[5px] font-normal text-[12px] gap-x-[5px] shadow-none rounded-[10px] w-fit">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-[16px] w-[185px] " />
          </Card>

          <Skeleton className="h-[162px] w-full rounded-[10px]" />

          <Skeleton className="h-[20px] w-full " />
          <Skeleton className="h-[20px] w-full" />
          <Skeleton className="h-[20px] w-[185px] " />
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-auto max-h-[479px]">
        <Skeleton className="h-[20px] w-[85px] flex-shrink-0" />
        <EventCardLoading />
        <EventCardLoading />
        <Skeleton className="h-[20px] w-[85px] flex-shrink-0 " />
        <EventCardLoading />
        <EventCardLoading />
        <EventCardLoading />
      </div>
    </>
  );
};

export default Loading;
