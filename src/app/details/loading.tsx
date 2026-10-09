"use client";

import { Card, Skeleton } from "@heroui/react";

export default function ProductDetailsSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 animate-pulse">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-5">
        <Skeleton className="h-3.5 w-10 rounded-md" />
        <Skeleton className="h-3 w-2 rounded-full" />
        <Skeleton className="h-3.5 w-12 rounded-md" />
        <Skeleton className="h-3 w-2 rounded-full" />
        <Skeleton className="h-3.5 w-16 rounded-md" />
      </div>

      {/* Product Header */}
      <Card className="w-full border border-gray-200 bg-white rounded-2xl shadow-none p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            {/* Product Image */}
            <Skeleton className="h-12 w-12 rounded-xl shrink-0" />

            {/* Product Info */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-6 w-28 rounded-md" />

              <Skeleton className="h-3 w-20 rounded-md" />

              <Skeleton className="h-3 w-52 rounded-md" />
            </div>
          </div>

          {/* Current Price */}
          <div className="hidden sm:flex flex-col items-center justify-center bg-gray-50 rounded-xl px-5 py-3 min-w-20">
            <Skeleton className="h-3 w-14 rounded-md" />
            <Skeleton className="h-6 w-10 rounded-md mt-1" />
            <Skeleton className="h-3 w-16 rounded-md mt-1" />
            <Skeleton className="h-3 w-12 rounded-md mt-2" />
          </div>
        </div>

        {/* Mobile Price */}
        <div className="flex sm:hidden items-center justify-between mt-4 rounded-xl bg-gray-50 p-3">
          <div className="flex flex-col gap-1">
            <Skeleton className="h-3 w-20 rounded-md" />
            <Skeleton className="h-6 w-12 rounded-md" />
          </div>

          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
      </Card>

      {/* Price Summary */}
      <Card className="mt-4 w-full border border-gray-200 bg-white rounded-2xl shadow-none p-5">
        {/* Section title */}
        <Skeleton className="h-5 w-32 rounded-md mb-4" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Lowest */}
          <div className="border border-gray-200 rounded-xl p-4">
            <Skeleton className="h-3 w-20 rounded-md" />
            <Skeleton className="h-6 w-14 rounded-md mt-2" />
            <Skeleton className="h-3 w-28 rounded-md mt-2" />
          </div>

          {/* Highest */}
          <div className="border border-gray-200 rounded-xl p-4">
            <Skeleton className="h-3 w-20 rounded-md" />
            <Skeleton className="h-6 w-14 rounded-md mt-2" />
            <Skeleton className="h-3 w-28 rounded-md mt-2" />
          </div>

          {/* Average */}
          <div className="border border-gray-200 rounded-xl p-4">
            <Skeleton className="h-3 w-16 rounded-md" />
            <Skeleton className="h-6 w-14 rounded-md mt-2" />
            <Skeleton className="h-3 w-28 rounded-md mt-2" />
          </div>
        </div>

        {/* Market section */}
        <div className="mt-7">
          <Skeleton className="h-5 w-44 rounded-md mb-4" />

          {/* Table */}
          <div className="w-full overflow-hidden rounded-xl border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 px-4 py-3 border-b border-gray-200">
              <Skeleton className="h-3 w-12 rounded-md" />
              <Skeleton className="h-3 w-14 rounded-md" />
              <Skeleton className="h-3 w-14 rounded-md" />
              <Skeleton className="h-3 w-14 rounded-md" />
              <Skeleton className="h-3 w-10 rounded-md ml-auto" />
            </div>

            {/* Table Rows */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 items-center px-4 py-3 border-b border-gray-200 last:border-b-0"
              >
                <Skeleton className="h-3.5 w-24 rounded-md" />

                <Skeleton className="h-3.5 w-16 rounded-md" />

                <Skeleton className="h-3.5 w-16 rounded-md" />

                <Skeleton className="h-3.5 w-16 rounded-md" />

                <Skeleton className="h-4 w-20 rounded-md ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}