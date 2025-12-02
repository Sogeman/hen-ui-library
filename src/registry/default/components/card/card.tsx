import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { CardDescription } from "./components/card-description";
import { CardFooter } from "./components/card-footer";
import { CardHeader } from "./components/card-header";
import { CardTitle } from "./components/card-title";

export interface CardProps {
  children?: ReactNode;
  class?: string;
  title?: string;
  description?: string;
  footer?: ReactNode;
}

export function Card({
  class: className,
  children,
  title,
  description,
  footer,
  ...props
}: CardProps) {
  const hasHeader = title || description;

  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      {hasHeader && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && (
        <div className={cn("p-6", hasHeader && "pt-0")}>{children}</div>
      )}
      {footer && <CardFooter>{footer}</CardFooter>}
    </div>
  );
}
