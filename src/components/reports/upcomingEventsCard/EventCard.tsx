"use client";

import React, {
  forwardRef,
  useCallback,
  useMemo,
  MouseEventHandler,
} from "react";
import { Card } from "@/components/ui/Card";
import NextImage from "next/image";
import { cn } from "@/lib/utils";
import Image from "../../ui/Image";
import { TypographyTitle } from "../../ui/TypographyTitle";
import { TypographySubHead } from "../../ui/TypographySubHead";
import moment from "moment";
import {
  getDateTextFromStartDate,
  getDateTextInBox,
} from "./UpcomingEventsCard";
import { EventLabel } from "./EventLabel";

export interface EventCardProps {
  isSelected?: boolean;
  className?: string;
  title: string;
  imageUrl: string | null;
  startDate: Date; // format "YYYY-MM-DD"
  endDate: Date;
  startTime?: Date; // format "HH:mm:ss"
  fullAddress: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const EventCard = forwardRef<HTMLDivElement, EventCardProps>(
  (
    {
      isSelected,
      className,
      title,
      imageUrl,
      startDate,
      endDate,
      startTime,
      fullAddress,
      onClick,
    },
    ref
  ) => {
    const eventDate = useMemo(
      () => getDateTextInBox(startDate, endDate),
      [startDate, endDate]
    );

    const eventTime = useMemo(() => {
      if (startTime) {
        return moment(startTime, "HH:mm:ss").format("h.mm A");
      }
      return "-";
    }, [startTime]);

    const renderTitle = useCallback(() => {
      const dateText = getDateTextFromStartDate(startDate);

      if (!dateText) {
        return <TypographySubHead>{title}</TypographySubHead>;
      }

      if (["Today", "Tomorrow"].includes(dateText)) {
        return (
          <>
            <EventLabel>{dateText}</EventLabel>
            <TypographySubHead>{title}</TypographySubHead>
          </>
        );
      }

      return (
        <>
          <TypographySubHead>{title}</TypographySubHead>
          <EventLabel>{dateText}</EventLabel>
        </>
      );
    }, [startDate, title]);

    return (
      <Card
        ref={ref}
        className={cn(
          "flex gap-y-[5px] flex-col p-2.5 rounded-[10px] shadow-none border-none hover:bg-light-gold cursor-pointer",
          className,
          { "bg-light-gold": isSelected }
        )}
        onClick={onClick}
      >
        {renderTitle()}
        <div className="flex items-center flex-row w-full gap-x-2">
          <div className="flex flex-1">
            <div className="w-[63px] h-[63px] flex justify-center bg-slider items-center">
              <TypographyTitle className="text-white text-center whitespace-pre-line">
                {eventDate}
              </TypographyTitle>
            </div>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Event"
                className="h-[63px] flex-grow object-cover"
                width={112}
                height={63}
              />
            ) : null}
          </div>
          <div className="flex flex-col gap-2.5">
            <Card className="flex px-2 py-0.5 font-normal text-[12px] gap-x-[5px] shadow-none rounded-[10px]">
              <NextImage
                src="/icons/mappinIcon.svg"
                alt="Map pin"
                width={16}
                height={16}
              />
              <TypographyTitle className="font-normal text-[12px]">
                {fullAddress}
              </TypographyTitle>
            </Card>
            <Card className="flex px-2 py-0.5 font-normal text-[12px] gap-x-[5px] shadow-none rounded-[10px]">
              <NextImage
                src="/icons/timeIcon.svg"
                alt="Time"
                width={16}
                height={16}
              />
              <TypographyTitle className="font-normal text-[12px]">
                {eventTime}
              </TypographyTitle>
            </Card>
          </div>
        </div>
      </Card>
    );
  }
);

EventCard.displayName = "EventCard";

export default EventCard;
