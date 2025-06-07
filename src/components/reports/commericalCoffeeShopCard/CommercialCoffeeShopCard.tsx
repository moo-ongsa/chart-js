"use client";

import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import Image from "next/image";
import RankingChart from "../../ui/RankingChart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/Table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TypographyTitle } from "../../ui/TypographyTitle";
import { TypographySubHead } from "../../ui/TypographySubHead";
import { cn } from "@/lib/utils";
import Loading from "./CommercialCoffeeShopCard.loading";
import { backgroundColorRankingList } from "@/utils/colos";
import { UPLOADS_URL } from "@/utils/env";
import { ERROR_MESSAGE, TRANSlATION_KEY, VALUE_TYPE } from "@/utils/constants";
import { useAge } from "@/context/AgeContext";
import { CommercialCoffeeShop } from "@/core/entities/CommercialCoffeeShop";
import { useTranslations } from "next-intl";
import CommercialCoffeeShopCardLock from "./CommercialCoffeeShopCard.lock";
import { getCommercialCoffeeShop } from "@/core/usecases/dashboard/getCommerialCoffeeShop";

interface CommercialCoffeeShopCardProps {
  className?: string;
}

export const columns: ColumnDef<CommercialCoffeeShop>[] = [
  {
    accessorKey: "rank",
    header: () => <div className="text-center w-8">Rank</div>,
    cell: ({ row }) => (
      <div className="text-center w-8">{row.getValue("rank")}</div>
    ),
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => {
      const original = row.original;
      return (
        <div className="flex items-center gap-2 w-[140px]">
          <Image
            src={original.image}
            width={32}
            height={32}
            alt={row.getValue("brand")}
          />
          <TypographyTitle className="overflow-hidden text-ellipsis whitespace-nowrap">
            {row.getValue("brand")}
          </TypographyTitle>
        </div>
      );
    },
  },
  {
    accessorKey: "gender",
    header: () => <div className="text-center">Gender</div>,
    cell: ({ row }) => (
      <div className="text-center whitespace-nowrap">
        {row.getValue("gender")}
      </div>
    ),
  },
  {
    accessorKey: "sharePercent",
    header: () => <div className="text-center">%Share</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("sharePercent")}%</div>
    ),
  },
];

const CommercialCoffeeShopCard: FC<CommercialCoffeeShopCardProps> = ({
  className,
}) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();

  const { data, error, loading, refetch } = useData({
    method: getCommercialCoffeeShop,
    params: { age: ageRange },
  });

  const table = useReactTable({
    data: data?.table ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return (
      <CommercialCoffeeShopCardLock className={className} refetch={refetch} />
    );
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">{t("topCoffeeShop")}</CardTitle>
        <div className="rounded h-[36px] w-[83px] border-input border-[1px] flex items-center justify-center sub-head">
          <TypographySubHead>General</TypographySubHead>
        </div>
      </CardHeader>
      <Separator className="w-full" />
      <CardContent className="flex flex-wrap gap-6">
        {loading || error ? (
          <Loading />
        ) : (
          <>
            <RankingChart
              data={{
                labels: data?.label,
                datasets: [
                  {
                    data: data?.data ?? [],
                    backgroundColor: backgroundColorRankingList,
                    images: data?.table?.map((item) => item.image) ?? [],
                    borderWidth: 100,
                  },
                ],
              }}
              aspectRatio={643 / 161}
              className="w-[calc(100%+38px)] h-[161px] mr-[-14px] ml-[-14px]"
              valueType={VALUE_TYPE.PERCENT}
            />

            <Table divClassName="max-h-[295px] relative overflow-auto rounded-t-md border w-full">
              <TableHeader className="sticky top-0 bg-white">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      {t("noData")}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CommercialCoffeeShopCard;
