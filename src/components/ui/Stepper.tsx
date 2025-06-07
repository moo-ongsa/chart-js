import React from "react";
import clsx from "clsx";

interface StepperProps {
  totalSteps: number;
  currentStep: number; // 1-based index
  className?: string;
}

const Stepper: React.FC<StepperProps> = ({
  totalSteps,
  currentStep,
  className,
}) => {
  return (
    <div className={clsx("flex items-center gap-[6px]", className)}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index === currentStep - 1;

        return (
          <div
            key={index}
            className={clsx(
              "rounded-full transition-all duration-300",
              isActive
                ? "w-[58px] h-[4px] bg-quiz-primary-orange"
                : "w-[18px] h-[2px] bg-quiz-primary-brown"
            )}
          />
        );
      })}
    </div>
  );
};

export default Stepper;
