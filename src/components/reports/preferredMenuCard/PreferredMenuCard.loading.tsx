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

import { Skeleton } from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <div className="flex w-full h-[400px] gap-8 flex-col">
      <div className="flex h-1/2 justify-between items-end gap-8">
        <Skeleton className="w-full h-5/6" />
        <Skeleton className="w-full h-full" />
        <Skeleton className="w-full h-3/4" />
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
              <Skeleton className="h-[20px] w-[90px]" />
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
              <Skeleton className="h-[20px] w-[30px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[100px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[60px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[100px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[20px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-[20px] w-[30px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[60px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[120px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[50px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[60px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-[20px] w-[30px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[50px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[40px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[70px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[30px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-[20px] w-[30px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[100px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[60px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[100px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[20px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-[20px] w-[30px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[60px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[100px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[60px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-[20px] w-[40px]" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Loading;
