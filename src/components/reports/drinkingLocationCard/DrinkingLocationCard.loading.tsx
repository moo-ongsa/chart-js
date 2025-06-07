"use client";

import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/Table";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/Skeleton";

interface LoadingProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col w-full gap-6", className)}>
      <div className="flex flex-col  w-full">
        <div className="grid h-[150px] grid-cols-[1.4fr_0.6fr] grid-rows-2 gap-0.5">
          <Skeleton className="col-start-1 col-end-2 row-start-1 row-end-3" />
          <Skeleton className="col-start-2 col-end-3 row-start-1 row-end-2" />
          <Skeleton className="col-start-2 col-end-3 row-start-2 row-end-3" />
        </div>
      </div>
      <div className="relative flex-1 flex flex-row">
        <div className="flex flex-col items-center mr-4">
          <Skeleton className="h-[40px] w-[40px] rounded-full m-2" />
          <Skeleton className="h-[24px] w-[76px] m-1" />
          <Skeleton className="h-[24px] w-[76px] m-1" />
          <Skeleton className="h-[24px] w-[76px] m-1" />
        </div>
        <Table divClassName="relative overflow-auto rounded-t-md border w-full flex-1">
          <TableHeader className="sticky top-0 bg-white ">
            <TableRow>
              <TableHead>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-[20px] w-[60px]" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Loading;
