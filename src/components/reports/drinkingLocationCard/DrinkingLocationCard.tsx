"use client";

import React, { useCallback, useMemo, useState, FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { useData } from "@/utils/hooks";
import Image from "next/image";
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
import TreemapChart from "../../ui/TreemapChart";
import { color as colorF } from "chart.js/helpers";
import { TypographySubHead } from "../../ui/TypographySubHead";
import { cn } from "@/lib/utils";
import Loading from "./DrinkingLocationCard.loading";
import { ERROR_MESSAGE, TRANSlATION_KEY, VALUE_TYPE } from "@/utils/constants";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { backgroundColorRankingList } from "@/utils/colos";
import { useAge } from "@/context/AgeContext";
import {
  coffeeDrinkerOptions,
  TYPES_OF_COFFEE_DRINKERS_VALUE,
} from "../TypesOfCoffeeDrinkersSelectGroup";
import { Location } from "@/core/entities/Location";
import { DrinkingTimeDistribution } from "@/core/entities/DrinkingTimeDistribution";
import { useTranslations } from "use-intl";
import DrinkingLocationCardLock from "./DrinkingLocationCard.lock";
import { CoffeeDrinker } from "@/core/types/CoffeeDrinker";
import { getDrinkingLocation } from "@/core/usecases/dashboard/getDrinkingLocation";

const images = [
  "/icons/homeIcon.svg",
  "/icons/cafeIcon.svg",
  "/icons/officeIcon.svg",
];

export const locationColumns: ColumnDef<Location>[] = [
  {
    accessorKey: "location",
    header: () => (
      <Image
        src="/icons/locationIcon.svg"
        width={48}
        height={48}
        alt="Location"
      />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2.5 h-8">
        <Image
          src={row.original.image}
          width={24}
          height={24}
          alt={row.getValue("location")}
        />
        <TypographySubHead className="overflow-hidden text-ellipsis whitespace-nowrap">
          {row.getValue("location")}
        </TypographySubHead>
      </div>
    ),
  },
];

const locationDatas: Location[] = [
  { id: 1, image: "/icons/homeOutlineIcon.svg", location: "Home" },
  { id: 2, image: "/icons/officeOutlineIcon.svg", location: "Office" },
  { id: 3, image: "/icons/cafeOutlineIcon.svg", location: "Cafe" },
];

export const columns: ColumnDef<DrinkingTimeDistribution>[] = [
  {
    accessorKey: "morning",
    header: () => (
      <div className="flex items-center justify-between flex-col h-11">
        <TypographySubHead className="text-text-main-light">
          Morning
        </TypographySubHead>
        <Image
          src="/icons/morningIcon.svg"
          width={24}
          height={24}
          alt="Morning"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="h-8 flex items-center justify-center">
        {row.getValue("morning")}%
      </div>
    ),
  },
  {
    accessorKey: "noon",
    header: () => (
      <div className="flex items-center justify-between flex-col h-11">
        <TypographySubHead className="text-text-main-light">
          Noon
        </TypographySubHead>
        <Image src="/icons/noonIcon.svg" width={24} height={24} alt="Noon" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="h-8 flex items-center justify-center">
        {row.getValue("noon")}%
      </div>
    ),
  },
  {
    accessorKey: "afternoon",
    header: () => (
      <div className="flex items-center justify-between flex-col h-11">
        <TypographySubHead className="text-text-main-light">
          Afternoon
        </TypographySubHead>
        <Image
          src="/icons/afternoonIcon.svg"
          width={24}
          height={24}
          alt="Afternoon"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="h-8 flex items-center justify-center">
        {row.getValue("afternoon")}%
      </div>
    ),
  },
  {
    accessorKey: "evening",
    header: () => (
      <div className="flex items-center justify-between flex-col h-11">
        <TypographySubHead className="text-text-main-light">
          Evening
        </TypographySubHead>
        <Image
          src="/icons/eveningIcon.svg"
          width={24}
          height={24}
          alt="Evening"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="h-8 flex items-center justify-center">
        {row.getValue("evening")}%
      </div>
    ),
  },
];

const colorFromRaw = (ctx: any) => {
  if (ctx.type !== "data") return "transparent";
  const value = ctx.raw.v;
  const alpha = (1 + Math.log(value)) / 5;
  const color = "#C59B6B";
  if (ctx.index >= 0) return backgroundColorRankingList[ctx.index];
  return colorF(color).alpha(alpha).rgbString();
};

const DrinkingLocationCard: FC<{ className?: string }> = ({ className }) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const { ageRange } = useAge();
  const [selectedFilter, setSelectedFilter] = useState<CoffeeDrinker[]>([
    TYPES_OF_COFFEE_DRINKERS_VALUE.GENERAL,
  ]);

  const { data, error, loading, refetch } = useData({
    method: getDrinkingLocation,
    params: { age: ageRange, type: selectedFilter },
  });

  const handleFilterChange = useCallback((value: CoffeeDrinker[]) => {
    setSelectedFilter(value);
  }, []);

  const locationTable = useReactTable({
    data: locationDatas,
    columns: locationColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const table = useReactTable({
    data: data?.table ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const drinkingLocationDonutChartData = useMemo(
    () => ({
      labels: data?.labels ?? [],
      datasets: [
        {
          type: "treemap" as const,
          data: [],
          images,
          tree: data?.data ?? [],
          borderColor: "white",
          borderWidth: 1,
          spacing: -0.5,
          backgroundColor: colorFromRaw,
          valueType: VALUE_TYPE.PERCENT,
        },
      ],
    }),
    [data]
  );

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return <DrinkingLocationCardLock className={className} refetch={refetch} />;
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">{t("drinkingLocation")}</CardTitle>
        <MultiSelect<CoffeeDrinker>
          options={coffeeDrinkerOptions}
          onValueChange={handleFilterChange}
          defaultValue={selectedFilter}
          placeholder="Select types"
          label="Types"
          className="bg-light-gold"
        />
      </CardHeader>
      <Separator className="w-full" />
      <CardContent className="flex flex-wrap gap-x-6 gap-y-5">
        {loading || error ? (
          <Loading className={cn(className)} />
        ) : (
          <>
            <TreemapChart data={drinkingLocationDonutChartData} />
            <div className="flex gap-x-6 flex-wrap w-full">
              <Table divClassName="w-[72px]">
                <TableHeader className="top-0 bg-white [&_tr]:border-b-transparent">
                  {locationTable.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id} className="px-[14px] py-3">
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
                  {locationTable.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} className="border-transparent">
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="px-0">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Table divClassName="max-h-[295px] relative overflow-auto rounded-md border flex-1">
                <TableHeader className="sticky top-0 bg-white">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id} className="px-[14px] py-3">
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
                      <TableRow key={row.id}>
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
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DrinkingLocationCard;
