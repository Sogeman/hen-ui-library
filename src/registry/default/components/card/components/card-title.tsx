import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface CardTitleProps {
  children?: ReactNode;
  class?: string;
}

export function CardTitle({
  class: className,
  children,
  ...props
}: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
