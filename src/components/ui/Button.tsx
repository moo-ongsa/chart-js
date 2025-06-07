import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "quiz-primary-orange":
          "text-quiz-text-black bg-quiz-primary-orange rounded-full border-[2px] border-quiz-text-black hover:bg-quiz-button-primary-hover",
        "quiz-primary-blue":
          "text-quiz-text-black bg-quiz-primary-blue rounded-2 border-[2px] border-quiz-text-black hover:bg-quiz-input-focus",
        "quiz-button-secondary":
          "bg-quiz-button-secondary-active rounded-full border-[2px] border-quiz-text-black hover:bg-quiz-button-secondary-hover ",
        "quiz-button-quiz-active":
          "bg-quiz-button-quiz-active rounded-2 border-[2px] border-quiz-text-black hover:bg-quiz-button-quiz-hover ",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        smIcon: "h-7 w-7",
        lgIcon: "h-10 w-10",
        xlIcon: "h-[55px] w-[55px]",
        custom: "",
        "quiz-h-40": "h-10 px-4 py-2  button-barlow-20",
        "quiz-h-48": "h-12 px-5 py-2  button-barlow-20",
        "icon-rounded-48":
          "size-[48px] [&_svg:not([class*='size-'])]:size-[20px] rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
