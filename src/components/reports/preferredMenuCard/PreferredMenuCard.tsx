"use client";

import React, { useState, useCallback, FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import { MultiSelect } from "@/components/ui/MultiSelect";
import {
  coffeeDrinkerOptions,
  TYPES_OF_COFFEE_DRINKERS_VALUE,
} from "../TypesOfCoffeeDrinkersSelectGroup";
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
import { cn } from "@/lib/utils";
import Loading from "./PreferredMenuCard.loading";
import Image from "next/image";
import { backgroundColorRankingList } from "@/utils/colos";
import { UPLOADS_URL } from "@/utils/env";
import { ERROR_MESSAGE, TRANSlATION_KEY, VALUE_TYPE } from "@/utils/constants";
import { useAge } from "@/context/AgeContext";
import { PreferredMenu } from "@/core/entities/PreferredMenu";
import PreferredMenuCardLock from "./PreferredMenuCard.lock";
import { useTranslations } from "next-intl";
import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";
import { getPreferredMenu } from "@/core/usecases/dashboard/getPreferredMenu";

export interface PreferredMenuCardProps {
  className?: string;
}

export const columns: ColumnDef<PreferredMenu>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("rank")}</div>
    ),
  },
  {
    accessorKey: "menu",
    header: "Menu",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Image
          src={row.original.image}
          width={32}
          height={32}
          alt={row.getValue("menu")}
        />
        <TypographyTitle className="overflow-hidden text-ellipsis whitespace-nowrap">
          {row.getValue("menu")}
        </TypographyTitle>
      </div>
    ),
  },
  {
    accessorKey: "avgPrice",
    header: () => <div className="text-center">Avg.Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("avgPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB",
      }).format(amount);
      return <div className="text-center font-medium">{formatted}</div>;
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

const PreferredMenuCard: FC<PreferredMenuCardProps> = ({ className }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();
  const [selectedFilter, setSelectedFilter] = useState<CoffeeDrinker[]>([
    TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL,
  ]);

  const { data, error, loading, refetch } = useData({
    method: getPreferredMenu,
    params: { age: ageRange, type: selectedFilter },
  });

  const handleFilterChange = useCallback((value: CoffeeDrinker[]) => {
    setSelectedFilter(value);
  }, []);

  const table = useReactTable({
    data: data?.table ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return <PreferredMenuCardLock className={className} refetch={refetch} />;
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">{t("topCoffeeMenu")}</CardTitle>
        <MultiSelect
          options={coffeeDrinkerOptions}
          onValueChange={handleFilterChange}
          defaultValue={selectedFilter}
          placeholder="Select types"
          label="Types"
          className="bg-light-gold"
        />
      </CardHeader>
      <Separator className="w-full" />

      <CardContent className="flex flex-col gap-6">
        {loading || error ? (
          <Loading />
        ) : (
          <>
            <RankingChart
              data={{
                labels: data?.label ?? [],
                datasets: [
                  {
                    data: data?.data ?? [],
                    backgroundColor: backgroundColorRankingList,
                    images: data?.table.map(({ image }) => image) ?? [],
                    borderWidth: 100,
                  },
                ],
              }}
              aspectRatio={619 / 271}
              className="w-[calc(100%+38px)] h-[271px] mr-[-14px] ml-[-14px]"
              valueType={VALUE_TYPE.PERCENT}
            />

            <Table divClassName="max-h-[245px] relative overflow-auto rounded-t-md border w-full flex-1">
              <TableHeader className="sticky top-0 bg-white ">
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
                {table.getRowModel().rows?.length ? (
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

export default PreferredMenuCard;
