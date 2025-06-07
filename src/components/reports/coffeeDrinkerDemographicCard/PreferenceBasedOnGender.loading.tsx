"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

const PreferenceBasedOnGender = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap w-full">
      <div className="flex flex-1 flex-col mx-0 gap-5 justify-between w-[195px] md:w-full">
        <Card className="flex justify-start items-center flex-row gap-[10px] px-5 py-[23px]  shadow-none flex-1">
          <div className="flex items-center gap-2 w-full">
            <Skeleton className="h-5 w-5 flex-shrink-0" />
            <Skeleton className="h-5 w-20 md:w-44 flex-shrink-0" />
            <div className="flex gap-6 w-full">
              <Skeleton className="h-[49px] w-full" />
              <Skeleton className="h-[49px] w-full" />
            </div>
          </div>
        </Card>

        <div className="flex items-center gap-2 justify-end">
          <Skeleton className="h-3 w-3 flex-shrink-0 rounded-full" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-3 w-3 flex-shrink-0 rounded-full" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-3 w-3 flex-shrink-0 rounded-full" />
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-3 w-3 flex-shrink-0 rounded-full" />
          <Skeleton className="h-5 w-32" />
        </div>
        <Card className="flex justify-start items-center flex-row gap-[10px] px-5 py-[23px]  shadow-none flex-1">
          <div className="flex items-center gap-2 w-full">
            <Skeleton className="h-5 w-5 flex-shrink-0" />
            <Skeleton className="h-5 w-20 md:w-44 flex-shrink-0" />
            <div className="flex gap-6 w-full">
              <Skeleton className="h-[49px] w-full" />
              <Skeleton className="h-[49px] w-full" />
            </div>
          </div>
        </Card>
        <div className="flex items-center gap-2 justify-end">
          <Skeleton className="h-3 w-3 flex-shrink-0 rounded-full" />
          <Skeleton className="h-5 w-10" />
          <Skeleton className="h-3 w-3 flex-shrink-0 rounded-full" />
          <Skeleton className="h-5 w-12" />
          <Skeleton className="h-3 w-3 flex-shrink-0 rounded-full" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-3 w-3 flex-shrink-0 rounded-full" />
          <Skeleton className="h-5 w-14" />
        </div>
        <Card className="flex justify-start items-center flex-row gap-[10px] px-5 py-[23px]  shadow-none flex-1">
          <div className="flex items-center gap-2 w-full">
            <Skeleton className="h-5 w-5 flex-shrink-0" />
            <Skeleton className="h-5 w-20 md:w-44 flex-shrink-0" />
            <div className="flex gap-6 w-full">
              <Skeleton className="h-[49px] w-full" />
              <Skeleton className="h-[49px] w-full" />
            </div>
          </div>
        </Card>
        <div className="flex items-center gap-2 justify-end">
          <Skeleton className="h-3 w-3 flex-shrink-0 rounded-full" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-3 w-3 flex-shrink-0 rounded-full" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>
    </div>
  );
};

export default PreferenceBasedOnGender;
