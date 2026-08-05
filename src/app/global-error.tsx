"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased">
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-md rounded-[16px] border bg-surface p-8 space-y-4">
            <h2 className="text-[15px] font-semibold">Critical error</h2>
            <p className="text-[13px] text-muted">{error.message}</p>
            <button
              onClick={() => reset()}
              className="h-9 rounded-[10px] bg-primary px-4 text-sm text-white"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
