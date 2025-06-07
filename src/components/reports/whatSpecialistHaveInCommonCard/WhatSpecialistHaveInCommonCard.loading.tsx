"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <div className="flex flex-wrap gap-8 flex-grow">
      <Card className="shadow-none flex-1">
        <CardHeader className="px-6 pt-[26px]">
          <Skeleton className="h-[20px] w-[100px] " />
        </CardHeader>
        <CardContent className=" flex justify-center flex-col items-center">
          <Skeleton className="w-[190px] h-[190px] md:w-[224px] md:h-[224px] rounded-full" />
          <div className="flex w-full gap-4 mt-[34px] gap-y-[7.5px] gap-x-9">
            <div className="flex flex-col mt-[34px] gap-y-[7.5px] gap-x-9 w-full">
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[130px] md:w-[160px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full mr-auto">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[90px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[130px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-none flex-1">
        <CardHeader className="px-6 pt-[26px]">
          <Skeleton className="h-[20px] w-[100px] " />
        </CardHeader>
        <CardContent className=" flex justify-center flex-col items-center">
          <Skeleton className="w-[190px] h-[190px] md:w-[224px] md:h-[224px] rounded-full" />
          <div className="flex w-full gap-4 mt-[34px] gap-y-[7.5px] gap-x-9">
            <div className="flex flex-col mt-[34px] gap-y-[7.5px] gap-x-9 w-full">
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[130px] md:w-[160px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full mr-auto">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[90px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[130px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-none flex-1">
        <CardHeader className="px-6 pt-[26px]">
          <Skeleton className="h-[20px] w-[100px] " />
        </CardHeader>
        <CardContent className=" flex justify-center flex-col items-center">
          <Skeleton className="w-[190px] h-[190px] md:w-[224px] md:h-[224px] rounded-full" />
          <div className="flex w-full gap-4 mt-[34px] gap-y-[7.5px] gap-x-9">
            <div className="flex flex-col mt-[34px] gap-y-[7.5px] gap-x-9 w-full">
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[130px] md:w-[160px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full mr-auto">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[90px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
              <div className="flex justify-center items-center gap-2.5 w-full">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-[130px] mr-auto" />
                <Skeleton className="h-5 w-[40px]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Loading;
