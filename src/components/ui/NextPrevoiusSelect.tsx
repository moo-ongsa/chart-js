import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import Image from "next/image";

interface OptionItem {
  label: string | React.ReactNode;
  value: string;
}

interface NextPreviousSelectProps {
  options: OptionItem[];
  value?: string;
  onChange?: (selected: string) => void;
  className?: string;
}

const NextPreviousSelect: React.FC<NextPreviousSelectProps> = ({
  options,
  value,
  onChange,
  className = "",
}) => {
  const getInitialIndex = () => {
    const idx = options.findIndex((item) => item.value === value);
    return idx >= 0 ? idx : 0;
  };

  const [index, setIndex] = useState(getInitialIndex());

  useEffect(() => {
    if (onChange) {
      onChange(options[index].value);
    }
  }, [index]);

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + options.length) % options.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % options.length);
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Button
        onClick={handlePrevious}
        size="xlIcon"
        variant="quiz-button-quiz-active"
        aria-label="Previous"
      >
        <Image
          width={28}
          height={28}
          src="/icons/arrow_back_ios.svg"
          alt="Previous Question"
          className="object-contain"
        />
      </Button>
      <span className="font-afacad text-2xl flex flex-grow items-center justify-center rounded-[8px] border-2 border-quiz-button-input-disabled-border text-quiz-text-black bg-quiz-button-input-disabled h-[70px] px-7">
        {options[index].label}
      </span>
      <Button
        onClick={handleNext}
        size="xlIcon"
        variant="quiz-button-quiz-active"
        aria-label="Next"
      >
        <Image
          width={28}
          height={28}
          src="/icons/arrow_forward_ios.svg"
          alt="Previous Question"
          className="object-contain"
        />
      </Button>
    </div>
  );
};

export default NextPreviousSelect;
