import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ListSkeleton({ isReportFormat = false }) {
  return (
    <Card className="space-y-4 px-4 py-6">
      {/* Company and Report Details */}
      {isReportFormat && (
        <div className="space-y-4">
          <div className="text-center">
            <Skeleton className="mx-auto h-6 w-32" />
            <Skeleton className="mx-auto mt-2 h-4 w-64" />
            <Skeleton className="mx-auto mt-1 h-4 w-48" />
          </div>
        </div>
      )}

      {/* Table Toolbar (when no report format) */}
      <div className="mt-2 flex items-center justify-between">
        <Skeleton className="h-9 w-1/5" />
        <Skeleton className="h-9 w-2/5" />
      </div>

      {/* Table */}
      <div className="space-y-2 rounded-md border">
        <Skeleton className="h-10 w-full bg-gray-100" />
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, cellIdx) => (
                <Skeleton key={cellIdx} className="h-10 w-full" />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Skeleton */}
      <div className="mt-4 grid h-9 grid-cols-5 gap-10">
        <Skeleton className="col-span-2 h-full w-1/2" />
        <Skeleton className="size-full" />
        <Skeleton className="col-span-2 size-full" />
      </div>
    </Card>
  );
}

ListSkeleton.displayName = "ListSkeleton";