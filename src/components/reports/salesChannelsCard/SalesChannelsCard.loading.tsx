"use client";

import React from "react";

import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col  w-full">
        <div className="grid h-[75px] gap-0.5">
          <Skeleton className="col-start-1 col-end-2 " />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2.5 flex-wrap w-full">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <Skeleton key={index} className="h-[130px]" />
          ))}
      </div>
    </>
  );
};

export default Loading;
