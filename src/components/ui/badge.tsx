import * as React from "react";
import { cn } from "@/utils/cn";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "success" | "warning" | "danger" }) {
  const variants = {
    default: "bg-surface-2 text-foreground border-border",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    danger: "bg-danger/10 text-danger border-danger/20",
  };
  return <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium", variants[variant], className)} {...props} />;
}
