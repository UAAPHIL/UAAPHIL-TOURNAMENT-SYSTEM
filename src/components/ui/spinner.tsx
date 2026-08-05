import { cn } from "@/utils/cn";

export function Spinner({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = { sm: "h-4 w-4 border-2", md: "h-6 w-6 border-2", lg: "h-8 w-8 border-[3px]" } as const;
  return (
    <div
      className={cn("animate-spin rounded-full border-border border-t-foreground", sizes[size], className)}
      role="status"
      aria-label="Loading"
    />
  );
}
