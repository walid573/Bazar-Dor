import { Skeleton } from "@heroui/react";

export default function MarqueeSkeleton() {
  return (
    <div className="flex overflow-hidden mt-5 border-y border-gray-100">
      <div className="flex w-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-2 whitespace-nowrap px-6 py-3 border border-gray-100"
          >
            {/* Icon */}
            <Skeleton className="h-4 w-4 rounded-md" />

            {/* Name */}
            <Skeleton className="h-4 w-20 rounded-md" />

            {/* Price */}
            <Skeleton className="h-4 w-24 rounded-md" />

            {/* Percentage */}
            <Skeleton className="h-4 w-12 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}