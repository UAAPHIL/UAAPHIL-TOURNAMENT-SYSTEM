import Link from "next/link";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center space-y-6">
        <EmptyState
          title="Page not found"
          description="The page you are looking for does not exist or has been moved."
        />
        <Link href="/">
          <Button variant="secondary" size="sm">Back to home</Button>
        </Link>
      </div>
    </div>
  );
}
