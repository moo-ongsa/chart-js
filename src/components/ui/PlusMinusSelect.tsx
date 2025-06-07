import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import Image from "next/image";

interface PlusMinusSelectProps {
  value?: number;
  onChange?: (selected: number) => void;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  renderValue?: (_value: number) => React.ReactNode | string;
}

const PlusMinusSelect: React.FC<PlusMinusSelectProps> = ({
  value = 0,
  onChange,
  className = "",
  min = 0,
  max = Infinity,
  step = 1,
  renderValue,
}) => {
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [count, onChange]);

  const handleDecrease = () => {
    setCount((prev) => Math.max(min, prev - step));
  };

  const handleIncrease = () => {
    setCount((prev) => Math.min(max, prev + step));
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Button
        onClick={handleDecrease}
        size="xlIcon"
        variant="quiz-button-quiz-active"
        aria-label="Decrease"
        disabled={count <= min}
      >
        <Image
          width={28}
          height={28}
          src="/icons/remove.svg"
          alt="Decrease"
          className="object-contain"
        />
      </Button>
      <span className="font-afacad text-2xl flex flex-grow items-center justify-center rounded-[8px] border-2 border-quiz-button-input-disabled-border text-quiz-text-black bg-quiz-button-input-disabled h-[55px] px-7">
        {renderValue ? renderValue(count) : count}
      </span>
      <Button
        onClick={handleIncrease}
        size="xlIcon"
        variant="quiz-button-quiz-active"
        aria-label="Increase"
        disabled={count >= max}
      >
        <Image
          width={28}
          height={28}
          src="/icons/add.svg"
          alt="Increase"
          className="object-contain"
        />
      </Button>
    </div>
  );
};

export default PlusMinusSelect;
