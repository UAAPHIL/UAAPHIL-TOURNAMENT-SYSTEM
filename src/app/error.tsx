"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: Log to monitoring service in production
    console.error("[App Error]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-[16px] border bg-surface p-8 space-y-4">
        <div className="h-10 w-10 rounded-full bg-danger/10 flex items-center justify-center">
          <span className="text-danger">!</span>
        </div>
        <div className="space-y-1">
          <h2 className="text-[15px] font-semibold">Something went wrong</h2>
          <p className="text-[13px] leading-5 text-muted">
            An unexpected error occurred. Our team has been notified.
          </p>
          {process.env.NODE_ENV === "development" && (
            <pre className="mt-3 rounded-lg bg-surface-2 p-3 text-[11px] text-muted overflow-auto max-h-[120px]">
              {error.message}
            </pre>
          )}
        </div>
        <div className="flex gap-2 pt-2">
          <Button onClick={() => reset()} size="sm">Try again</Button>
          <Button onClick={() => window.location.href = "/"} variant="secondary" size="sm">Go home</Button>
        </div>
      </div>
    </div>
  );
}
