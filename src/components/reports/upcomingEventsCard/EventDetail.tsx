"use client";

import React, { useMemo } from "react";
import { Card } from "@/components/ui/Card";
import NextImage from "next/image";
import { cn } from "@/lib/utils";
import { TypographyTitle } from "../../ui/TypographyTitle";
import { TypographySubHead } from "../../ui/TypographySubHead";
import moment from "moment";
import { TypographyDescription } from "../../ui/TypographyDescription";
import Image from "../../ui/Image";
import { getDateTextInBox } from "./UpcomingEventsCard";

// ✅ define prop types
export interface EventDetailProps {
  className?: string;
  title: string;
  imageUrl: string | null;
  startDate: Date;
  endDate: Date;
  startTime?: Date; // รูปแบบ 'HH:mm:ss'
  endTime?: Date;
  location: string;
  description: string;
}

const EventDetail: React.FC<EventDetailProps> = ({
  className,
  title,
  imageUrl,
  startDate,
  endDate,
  startTime,
  endTime,
  location,
  description,
}) => {
  const eventDate = useMemo(
    () => getDateTextInBox(startDate, endDate),
    [startDate, endDate]
  );

  const eventTime = useMemo(() => {
    if (startTime && endTime) {
      return `Start ${moment(startTime, "HH:mm:ss").format(
        "h:mm A"
      )} - ${moment(endTime, "HH:mm:ss").format("h:mm A")}`;
    } else {
      return "-";
    }
  }, [startTime, endTime]);

  return (
    <div className={cn("flex gap-y-2.5 flex-col", className)}>
      <div className="flex items-center gap-2.5">
        <div className="w-[63px] h-[63px] flex justify-center bg-slider items-center">
          <TypographyTitle className="text-white text-center whitespace-pre-line">
            {eventDate}
          </TypographyTitle>
        </div>
        <TypographySubHead>{title}</TypographySubHead>
      </div>

      <Card className="flex px-2 py-[5px] font-normal text-[12px] gap-x-[5px] shadow-none rounded-[10px]">
        <NextImage
          src="/icons/timeIcon.svg"
          alt="Time"
          width={16}
          height={16}
        />
        <TypographyTitle className="font-normal">{eventTime}</TypographyTitle>
      </Card>

      <Card className="flex px-2 py-[5px] font-normal text-[12px] gap-x-[5px] shadow-none rounded-[10px]">
        <NextImage
          src="/icons/mappinIcon.svg"
          alt="Map pin"
          width={16}
          height={16}
        />
        <TypographyTitle className="font-normal overflow-ellipsis whitespace-nowrap overflow-auto">
          {location}
        </TypographyTitle>
      </Card>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Event"
          width={288}
          height={162}
          className="rounded-[10px] w-full"
        />
      ) : null}

      <TypographyDescription>{description}</TypographyDescription>
    </div>
  );
};

export default EventDetail;
