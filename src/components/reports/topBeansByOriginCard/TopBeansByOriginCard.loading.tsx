"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <div className="flex gap-2 w-full">
      <Card className="flex flex-col   shadow-none flex-1">
        <CardHeader className="gap-2">
          <Skeleton className="h-[20px] w-[20px]" />
          <Skeleton className="h-[20px] w-[85px] mr-auto" />
        </CardHeader>
        <Separator className="w-full" />
        <CardContent className="">
          <div className="flex flex-col mt-0 gap-y-[12.5px] gap-x-9 w-full">
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[150px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[80px] mr-auto" />
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
              <Skeleton className="h-5 w-[80px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[150px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[80px] mr-auto" />
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
        </CardContent>
      </Card>
      <Card className="flex flex-col   shadow-none flex-1">
        <CardHeader className="gap-2">
          <Skeleton className="h-[20px] w-[20px]" />
          <Skeleton className="h-[20px] w-[85px] mr-auto" />
        </CardHeader>
        <Separator className="w-full" />
        <CardContent className="">
          <div className="flex flex-col mt-0 gap-y-[12.5px] gap-x-9 w-full">
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[150px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[80px] mr-auto" />
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
              <Skeleton className="h-5 w-[80px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[150px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[80px] mr-auto" />
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Loading;
