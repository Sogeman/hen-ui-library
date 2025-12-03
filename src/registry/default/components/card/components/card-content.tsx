import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface CardContentProps {
  children?: ReactNode;
  class?: string;
}

export function CardContent({
  class: className,
  children,
  ...props
}: CardContentProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

