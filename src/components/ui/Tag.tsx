import { FC } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TagProps = {
  className?: string;
  labelClassName?: string;
  imageSrc: string;
  label: string;
};

const Tag: FC<TagProps> = ({ className, labelClassName, imageSrc, label }) => {
  return (
    <div className="rounded-[10px] flex bg-white items-center">
      <div
        className={cn(
          "bg-white rounded-l-[10px] px-4 h-[66px] flex-shrink-0 flex justify-center items-center",
          className
        )}
      >
        <Image src={imageSrc} width={36} height={36} alt={label} className="" />
      </div>
      <p
        className={cn(
          "pl-6 font-inter text-[18px] text-quiz-text-black",
          labelClassName
        )}
      >
        {label}
      </p>
    </div>
  );
};

export default Tag;
