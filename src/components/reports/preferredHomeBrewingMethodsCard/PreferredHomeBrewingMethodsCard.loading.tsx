"use client";

import { CardFooter } from "@/components/ui/Card";

import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <>
      <div className="flex items-center gap-2.5 p-6 w-[229px]">
        <Skeleton className="h-12 w-12" />
        <div className="flex flex-col justify-between h-full">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-12" />
        </div>
      </div>
      <div className="flex items-center gap-2.5 p-6 w-[229px]">
        <Skeleton className="h-12 w-12" />
        <div className="flex flex-col justify-between h-full">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-12" />
        </div>
      </div>
      <div className="flex items-center gap-2.5 p-6 w-[229px]">
        <Skeleton className="h-12 w-12" />
        <div className="flex flex-col justify-between h-full">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-5 w-12" />
        </div>
      </div>
      <div className="flex items-center gap-2.5 p-6 w-[229px]">
        <Skeleton className="h-12 w-12" />
        <div className="flex flex-col justify-between h-full">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-5 w-12" />
        </div>
      </div>
      <div className="flex items-center gap-2.5 p-6 w-[229px]">
        <Skeleton className="h-12 w-12" />
        <div className="flex flex-col justify-between h-full">
          <Skeleton className="h-5 w-12" />
          <Skeleton className="h-5 w-28" />
        </div>
      </div>
      <div className="flex items-center gap-2.5 p-6 w-[229px]">
        <Skeleton className="h-12 w-12" />
        <div className="flex flex-col justify-between h-full">
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-5 w-24" />
        </div>
      </div>
      <CardFooter className="w-full">
        <Skeleton className="h-9 w-full" />
      </CardFooter>
    </>
  );
};

export default Loading;
