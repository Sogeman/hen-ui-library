import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface BadgeProps {
  children?: ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

const badgeVariants = {
  default: "border-transparent bg-primary text-primary-foreground",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  destructive: "border-transparent bg-destructive text-destructive-foreground",
  outline: "text-foreground",
};

export function Badge({
  children,
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
