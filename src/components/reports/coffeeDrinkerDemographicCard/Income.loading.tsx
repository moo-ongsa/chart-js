"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

const IncomeLoading = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap w-full">
      <Card className="shadow-none flex-1 flex-shrink-0 w-full max-w-[523px] border-0">
        <CardContent className=" flex flex-1 w-full justify-center flex-col items-center">
          <Skeleton className="w-[280px] h-[280px] mt-[10px] rounded-full" />
          <div className="grid grid-cols-3 gap-4 mt-[130px] gap-y-[7.5px] gap-x-9">
            <div className="flex flex-col mt-[34px] gap-y-[7.5px] gap-x-9 w-full">
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[60px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[60px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[60px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
            </div>
            <div className="flex flex-col mt-[34px] gap-y-[7.5px] gap-x-9 w-full">
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[60px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[60px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[60px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
            </div>
            <div className="flex flex-col mt-[34px] gap-y-[7.5px] gap-x-9 w-full">
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[60px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[60px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[60px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncomeLoading;
