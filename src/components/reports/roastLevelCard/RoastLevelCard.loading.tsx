"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <>
      <Card className="shadow-none md:w-[calc(50%-12px)] border-none">
        <CardContent className=" flex justify-center flex-col items-center">
          <Skeleton className="w-[224px] h-[224px] rounded-full" />
          <div className="flex flex-col mt-[34px] gap-y-[7.5px] gap-x-9 w-full">
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[60px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
            <div className="flex justify-center items-center gap-2.5 w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-5 w-[30px] mr-auto" />
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
              <Skeleton className="h-5 w-[30px] mr-auto" />
              <Skeleton className="h-5 w-[40px]" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col  px-5 py-[23px]  shadow-none flex-1">
        <CardHeader className="gap-2 px-0">
          <Skeleton className="h-[20px] w-[85px] mr-auto" />
        </CardHeader>
        <CardContent className="pt-0 px-0">
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
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Loading;
