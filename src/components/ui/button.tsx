"use client";
import * as React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-[var(--radius)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90",
      secondary: "bg-surface-2 text-foreground border border-border hover:bg-surface",
      ghost: "bg-transparent text-muted hover:text-foreground hover:bg-surface-2",
      danger: "bg-danger text-white hover:bg-danger/90",
    } as const;
    const sizes = {
      sm: "h-8 px-3 text-[12px]",
      md: "h-9 px-4 text-[13px]",
      lg: "h-11 px-6 text-[14px]",
    } as const;
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
