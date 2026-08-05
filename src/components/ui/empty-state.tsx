import { cn } from "@/utils/cn";

export function EmptyState({
  title = "No data",
  description,
  className,
  action,
}: {
  title?: string;
  description?: string;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-12 text-center", className)}>
      <div className="h-12 w-12 rounded-full bg-surface-2 flex items-center justify-center mb-4">
        <span className="text-muted text-lg">∅</span>
      </div>
      <h3 className="text-[14px] font-medium">{title}</h3>
      {description && <p className="mt-1 text-[13px] text-muted max-w-[320px] leading-5">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
