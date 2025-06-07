"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

import { Separator } from "@/components/ui/Separator";

import { useData } from "@/utils/hooks";

import { cn } from "@/lib/utils";

import { TypographySubHead } from "../../ui/TypographySubHead";
import EventCard from "./EventCard";
import EventDetail from "./EventDetail";
import { format } from "date-fns";
import Loading from "./UpcomingEventsCard.loading";

import AreaSelectGroup, {
  AREA_VALUE,
  getLabelOfArea,
} from "../AreaSelectGroup";
import moment from "moment";
import { EventLabel } from "./EventLabel";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { UpcomingEvent } from "@/core/entities/UpcomingEvent";
import { Area } from "@/core/types/Area";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { useTranslations } from "next-intl";
import { ERROR_MESSAGE, TRANSlATION_KEY } from "@/utils/constants";
import UpcomingEventsCardLock from "./UpcomingEventsCard.lock";
import { getUpcomingEvents } from "@/core/usecases/dashboard/getUpcomingEvents";

export interface UpcomingEventsCardProps {
  className?: string;
}

const UpcomingEventsCard: React.FC<UpcomingEventsCardProps> = ({
  className,
}) => {
  const t = useTranslations(TRANSlATION_KEY.DASHBOARD_PAGE);
  const selectedEventRef = useRef<HTMLDivElement>(null);
  const isClickLeftOrRight = useRef<boolean>(false);

  const [selectedFilter, setSelectedFilter] = useState<Area>(
    AREA_VALUE.CENTRAL
  );

  const { data, error, loading, refetch } = useData({
    method: getUpcomingEvents,
    params: { area: selectedFilter },
  });
  const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(
    null
  );

  const handleFilterChange = useCallback(
    (value: Area) => {
      setSelectedFilter(value);
    },
    [] // No dependencies, ensures stable reference
  );

  useEffect(() => {
    if (data?.data?.[0]) {
      setSelectedEvent(data?.data?.[0]);
    } else {
      setSelectedEvent(null);
    }
  }, [data]);

  useEffect(() => {
    // Automatically scroll to the selected event
    if (selectedEventRef.current && isClickLeftOrRight.current) {
      selectedEventRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
      isClickLeftOrRight.current = false;
    }
  }, [selectedEvent, isClickLeftOrRight]);

  const onLeftClick = useCallback(() => {
    if (!selectedEvent || !data?.data?.length) return;

    const currentIndex = data?.data.findIndex(
      (event) => event.id === selectedEvent.id
    );

    if (currentIndex > 0) {
      const previousEvent = data?.data[currentIndex - 1];
      setSelectedEvent(previousEvent);
      isClickLeftOrRight.current = true;
    }
  }, [data, selectedEvent]);

  const onRightClick = useCallback(() => {
    if (!selectedEvent || !data?.data?.length) return;

    const currentIndex = data?.data?.findIndex(
      (event) => event.id === selectedEvent.id
    );

    if (currentIndex < data?.data?.length - 1) {
      const nextEvent = data?.data?.[currentIndex + 1];
      setSelectedEvent(nextEvent);
      isClickLeftOrRight.current = true;
    }
  }, [data, selectedEvent]);

  const renderTitle = useCallback(() => {
    const dateText = getDateTextFromStartDate(selectedEvent?.startDate);
    const title = selectedEvent?.startDate
      ? format(selectedEvent?.startDate, "MMM yyyy")
      : null;

    //เลยวันมาแล้ว
    if (!dateText) {
      return <TypographySubHead>{title}</TypographySubHead>;
    }
    //วันอื่นๆ
    return (
      <>
        <TypographySubHead>{title}</TypographySubHead>
        <EventLabel>{dateText}</EventLabel>
      </>
    );
  }, [selectedEvent]);

  const renderContent = () => {
    if (loading || error) {
      return <Loading className={cn(className)} />;
    }
    if (selectedEvent === null) {
      return (
        <div className="flex justify-center items-center flex-grow max-h-[479px] min-h-32">
          <TypographySubHead>{t("noEvents")}</TypographySubHead>
        </div>
      );
    }
    return (
      <>
        <div className="flex flex-col flex-1 gap-2.5 overflow-auto max-h-[479px]">
          <div className="flex items-center gap-2.5">
            {renderTitle()}

            <div className="flex-1 text-right">
              <Button variant="ghost" size="icon" onClick={onLeftClick}>
                <ChevronLeft className="h-4 w-4 color-muted-foreground flex-shrink-0" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onRightClick}>
                <ChevronRight className="h-4 w-4 color-muted-foreground flex-shrink-0" />
              </Button>
            </div>
          </div>
          <EventDetail
            title={selectedEvent?.name}
            imageUrl={selectedEvent?.imageUrl}
            startDate={selectedEvent?.startDate}
            endDate={selectedEvent?.endDate}
            startTime={selectedEvent?.startTime}
            endTime={selectedEvent?.endTime}
            location={selectedEvent?.address}
            description={selectedEvent?.description}
          />
        </div>
        <div className="flex flex-col flex-1 gap-2.5 overflow-auto max-h-[479px]">
          {data?.data?.map((event: UpcomingEvent) => {
            const {
              id,
              name,
              startDate,
              endDate,
              startTime,
              imageUrl,
              province,
            } = event;

            const isSelected = selectedEvent?.id === id;

            return (
              <EventCard
                key={id}
                ref={isSelected ? selectedEventRef : null}
                isSelected={isSelected}
                title={name}
                imageUrl={imageUrl}
                startDate={startDate}
                endDate={endDate}
                startTime={startTime}
                fullAddress={province.nameEn}
                onClick={() => setSelectedEvent(event)}
              />
            );
          })}
        </div>
      </>
    );
  };

  if (error?.message === ERROR_MESSAGE.NO_PERMISSION_TO_SEE_DASHBOARD) {
    return <UpcomingEventsCardLock className={className} refetch={refetch} />;
  }

  return (
    <Card className={cn("max-h-full", className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex-1">{t("upcomingEvents")}</CardTitle>
        {/* <Popover>
          <PopoverTrigger>
            <Button variant="outline">
              <Image
                src="/icons/calendarIcon.svg"
                alt="Calendar"
                width={24}
                height={24}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <MonthPicker
              selected={selectedMonth}
              onSelect={(month) => {
                setSelectedMonth(month);
              }}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
              showOutsideDays={false}
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover> */}

        <Select onValueChange={handleFilterChange} value={selectedFilter}>
          <SelectTrigger className="w-fit min-w-[139px]">
            <SelectValue placeholder="Select types of coffee drinkers">
              {selectedFilter
                ? getLabelOfArea(selectedFilter)
                : "Select types of coffee drinkers"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <AreaSelectGroup />
          </SelectContent>
        </Select>
      </CardHeader>
      <Separator className="w-full" />
      {/* max-h-[calc(100%-84px)] */}
      <CardContent className="flex flex-wrap w-full h-fit md:h-full gap-x-6 gap-y-5">
        {renderContent()}
      </CardContent>
    </Card>
  );
};

export default UpcomingEventsCard;

export const getDateTextInBox = (startDate: Date, endDate: Date) => {
  if (startDate && endDate) {
    // ถ้ามีทั้ง startDate และ endDate date ตรวจสอบว่าเดือนเดียวกันหรือไม่
    if (moment(startDate).format("MMM") === moment(endDate).format("MMM")) {
      if (moment(startDate).format("DD") === moment(endDate).format("DD")) {
        return `${moment(startDate).format("DD")} \n ${moment(startDate).format(
          "MMM"
        )}`;
      }
      // ถ้าเดือนเดียวกัน ให้แสดงเป็น "11 - 14\nJul"
      return `${moment(startDate).format("DD")} - ${moment(endDate).format(
        "DD"
      )}\n${moment(endDate).format("MMM")}`;
    } else {
      // ถ้าเดือนต่างกัน ให้แสดงเป็น "11 Jul - \n 14 Aug"
      return `${moment(startDate).format("DD MMM")} - \n${moment(
        endDate
      ).format("DD MMM")}`;
    }
  } else {
    // ถ้าไม่มี start และ end date ให้แสดง "-"
    return "-";
  }
};

export const getDateTextFromStartDate = (startDate: Date | undefined) => {
  const inputDate = moment(startDate); // รับวันที่และแปลงเป็น moment
  const today = moment().startOf("day"); // วันที่วันนี้
  const tomorrow = moment().add(1, "days").startOf("day"); // วันที่พรุ่งนี้

  if (inputDate.isBefore(today, "day")) {
    // กรณีวันที่เลยวันปัจจุบันไปแล้ว
    return null;
  } else if (inputDate.isSame(today, "day")) {
    return "Today";
  } else if (inputDate.isSame(tomorrow, "day")) {
    return "Tomorrow";
  } else {
    const daysDifference = inputDate.diff(today, "days"); // คำนวณจำนวนวันที่ห่าง
    return `In ${daysDifference} days`;
  }
};
