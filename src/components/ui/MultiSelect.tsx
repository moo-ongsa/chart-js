"use client";

import * as React from "react";
import { CheckIcon, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/Command";
import { cva, type VariantProps } from "class-variance-authority";

// ✅ type ของแต่ละ option
export interface MultiSelectOption<T> {
  label: string;
  value: T;
  icon?: React.ElementType;
}

export interface MultiSelectProps<T extends string>
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof multiSelectVariants> {
  options: MultiSelectOption<T>[];
  onValueChange: (_selected: T[]) => void;
  defaultValue?: T[];
  placeholder?: string;
  animation?: number;
  maxCount?: number;
  modalPopover?: boolean;
  label?: string;
  renderLabel?: (_selected: T[]) => React.ReactNode;
}

const multiSelectVariants = cva(
  "m-1 transition ease-in-out delay-150 duration-300",
  {
    variants: {
      variant: {
        default:
          "border-foreground/10 text-sm font-semibold text-primary mr-0.5",
        secondary:
          "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        inverted: "inverted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// สร้าง generic MultiSelect component ที่รองรับ string literal types เช่น "coffee_drink" | "specialist"
// โดยแยก logic ไว้ที่ MultiSelectInner แล้วใช้ React.forwardRef เพื่อรองรับการส่ง ref
// จากนั้นใช้ TypeScript type assertion (as ...) เพื่อให้ component รองรับ generic `<T extends string>` ตอนใช้งาน
// ซึ่ง React.forwardRef ไม่รองรับโดยตรง

export const MultiSelect = React.forwardRef(MultiSelectInner) as <
  T extends string // จำกัดให้ generic T ต้องเป็น string literal (เช่น "admin" | "user")
>(
  props: MultiSelectProps<T> & { ref?: React.Ref<HTMLButtonElement> } // รวม props กับ ref ที่ต้องรองรับ
) => ReturnType<typeof MultiSelectInner>; // ให้ TypeScript รู้ว่า return type ตรงกับฟังก์ชันต้นฉบับ (React component)

function MultiSelectInner<T extends string>(
  {
    options,
    onValueChange,
    variant,
    defaultValue = [],
    placeholder = "Select options",
    animation = 0,
    maxCount = 10,
    modalPopover = false,
    label,
    className,
    renderLabel,
    ...props
  }: MultiSelectProps<T>,
  ref: React.Ref<HTMLButtonElement>
) {
  const [selectedValues, setSelectedValues] = React.useState<T[]>(defaultValue);
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  const toggleOption = (option: T) => {
    const newSelectedValues = selectedValues.includes(option)
      ? selectedValues.filter((value) => value !== option)
      : [...selectedValues, option];

    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };

  const handleTogglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  return (
    <Popover
      open={isPopoverOpen}
      onOpenChange={setIsPopoverOpen}
      modal={modalPopover}
    >
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          {...props}
          onClick={handleTogglePopover}
          className={cn(
            "flex p-1 rounded-md border min-h-9 h-auto items-center justify-between bg-inherit [&_svg]:pointer-events-auto",
            className
          )}
        >
          {selectedValues.length > 0 ? (
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-wrap items-center">
                {typeof renderLabel === "function"
                  ? renderLabel(selectedValues)
                  : selectedValues.slice(0, maxCount).map((value, index) => {
                      const option = options.find((o) => o.value === value);
                      const IconComponent = option?.icon;

                      return (
                        <span
                          key={value}
                          className={cn(multiSelectVariants({ variant }))}
                          style={{ animationDuration: `${animation}s` }}
                        >
                          {IconComponent && (
                            <IconComponent className="h-4 w-4 mr-2" />
                          )}
                          {option?.label}
                          {index !== selectedValues.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
              </div>
              <ChevronDown className="h-4 mx-2 cursor-pointer text-muted-foreground" />
            </div>
          ) : (
            <div className="flex items-center justify-between w-full mx-auto">
              <span className="text-sm text-muted-foreground mx-3">
                {placeholder}
              </span>
              <ChevronDown className="h-4 cursor-pointer text-muted-foreground mx-2" />
            </div>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-auto p-0"
        align="start"
        onEscapeKeyDown={() => setIsPopoverOpen(false)}
      >
        <Command>
          <CommandList>
            <CommandGroup>
              {label && (
                <div className="px-2 py-1.5 pl-[30px] text-sm font-semibold">
                  {label}
                </div>
              )}
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => toggleOption(option.value)}
                    className="cursor-pointer"
                  >
                    <CheckIcon
                      className={cn("h-4 w-4", isSelected ? "" : "invisible")}
                    />
                    {option.icon && (
                      <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

MultiSelectInner.displayName = "MultiSelect";
