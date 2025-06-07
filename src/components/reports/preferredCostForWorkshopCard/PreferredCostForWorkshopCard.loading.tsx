"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/Skeleton";

export interface LoadingProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-2">
        <Skeleton className="h-[20px] w-[85px] mr-auto" />
        <Skeleton className="h-[36px] w-[223px] " />
      </CardHeader>
      <Separator className="w-full" />
      <CardContent className="flex flex-wrap w-full gap-x-6 gap-y-5">
        <Card className="shadow-none w-full border-none">
          <CardContent className=" flex justify-center flex-col items-center">
            <Skeleton className="w-[224px] h-[224px] rounded-full" />
            <div className="grid grid-cols-2 gap-4 mt-[34px] gap-y-[7.5px] gap-x-9">
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
      </CardContent>
    </Card>
  );
};

export default Loading;
