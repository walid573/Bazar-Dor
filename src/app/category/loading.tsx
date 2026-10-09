"use client";

import { Card, Skeleton } from "@heroui/react";

export default function CategorySkeleton() {
  const renderProductSkeleton = (index: number) => (
    <Card
      key={index}
      className="p-4 border border-gray-100 bg-white rounded-2xl shadow-none"
    >
      {/* Product top */}
      <div className="flex items-start gap-3">
        {/* Image */}
        <Skeleton className="h-11 w-11 rounded-xl shrink-0" />

        {/* Name + unit */}
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-28 rounded-md" />
          <Skeleton className="h-3 w-16 rounded-md" />
        </div>
      </div>

      {/* Price */}
      <div className="mt-5">
        <Skeleton className="h-3 w-20 rounded-md" />

        <div className="mt-2 flex items-center justify-between">
          <Skeleton className="h-5 w-24 rounded-md" />

          {/* Percentage */}
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
    </Card>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 animate-pulse">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-5">
        <Skeleton className="h-4 w-10 rounded-md" />
        <Skeleton className="h-3 w-2 rounded-full" />
        <Skeleton className="h-4 w-12 rounded-md" />
      </div>

      {/* Category Header */}
      <Card className="w-full p-6 border border-gray-100 bg-white rounded-2xl shadow-none">
        <div className="flex items-center gap-4">
          {/* Category Icon */}
          <Skeleton className="h-12 w-12 rounded-xl shrink-0" />

          <div className="flex flex-col gap-2">
            {/* Category name */}
            <Skeleton className="h-6 w-24 rounded-md" />

            {/* Description */}
            <Skeleton className="h-3 w-40 rounded-md" />
          </div>
        </div>
      </Card>

      {/* Filter / Sort */}
      <Card className="mt-4 w-full h-16 px-6 border border-gray-100 bg-white rounded-2xl shadow-none">
        <div className="h-full flex items-center justify-end gap-3">
          <Skeleton className="h-4 w-12 rounded-md" />

          <Skeleton className="h-10 w-48 rounded-xl" />
        </div>
      </Card>

      {/* Result Count */}
      <div className="mt-8 mb-4">
        <Skeleton className="h-4 w-32 rounded-md" />
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 4 }).map((_, index) =>
          renderProductSkeleton(index)
        )}
      </div>
    </div>
  );
}