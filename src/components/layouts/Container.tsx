import { ReactNode, JSX } from "react";
import { cn } from "@/lib/utils"; // สมมุติว่าใช้ tailwind-merge หรือ clsx

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({
  children,
  className,
}: ContainerProps): JSX.Element => {
  return (
    <div className={cn("grid grid-cols-12 p-6 gap-y-12 lg:gap-x-8", className)}>
      {children}
    </div>
  );
};
