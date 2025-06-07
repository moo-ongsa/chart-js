"use client";

import { FC, useState } from "react";
import DatePicker from "react-mobile-datepicker-ts";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/Dialog";
import { Button } from "./Button";
import moment from "moment";
import { cn } from "@/lib/utils";

const monthMap: Record<number, string> = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

type IOSScrollDatePickerWithDialogProps = {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
};

const IOSScrollDatePickerWithDialog: FC<IOSScrollDatePickerWithDialogProps> = ({
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(value);

  const handleOKButton = () => {
    onChange(date);
    setOpen(false);
  };

  const maxDate = moment().subtract(5, "years").toDate();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* ปุ่มเปิด dialog */}
      <DialogTrigger asChild>
        <button className="bg-white border border-quiz-text-black h-[55px] px-4 py-2 rounded-lg w-full ">
          <span
            className={cn("button-afacad-20 text-quiz-text-black", {
              "opacity-50": !date,
            })}
          >
            {date ? moment(date).format("DD / MM / YYYY") : "DD / MM / YYYY"}
          </span>
        </button>
      </DialogTrigger>

      {/* เนื้อหา dialog */}
      <DialogContent
        className="p-6 max-w-md w-[calc(100%-34px)] bg-white rounded-xl"
        overlayClassName="bg-quiz-text-black opacity-50"
      >
        <DialogTitle className="text-center header-inter-18">
          Pick a Date
        </DialogTitle>
        <DatePicker
          isPopup={false}
          theme="ios"
          value={date ?? maxDate}
          onChange={(date: Date) => {
            setDate(date);
          }}
          onCancel={() => setOpen(false)}
          showHeader={false}
          showCaption={false}
          showFooter={false}
          min={new Date(1950, 0, 1)}
          max={maxDate}
          dateConfig={[
            {
              type: "month",
              format: (val: Date) => monthMap[val.getMonth() + 1], // custom full month name
              caption: "Month",
              step: 1,
            },
            { type: "date", format: "DD", caption: "Day", step: 1 },
            { type: "year", format: "YYYY", caption: "Year", step: 1 },
          ]}
        />
        <DialogFooter className="justify-center sm:justify-center flex-row">
          <Button
            onClick={handleOKButton}
            variant="quiz-primary-orange"
            size="quiz-h-40"
            className="button-barlow-20 w-[74px] py-4"
          >
            OK
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default IOSScrollDatePickerWithDialog;
