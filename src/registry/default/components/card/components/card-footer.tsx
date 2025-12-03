import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface CardFooterProps {
  children?: ReactNode;
  class?: string;
}

export function CardFooter({
  class: className,
  children,
  ...props
}: CardFooterProps) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

