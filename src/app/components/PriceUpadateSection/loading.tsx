"use client";

import React from "react";
import { Card, Skeleton } from "@heroui/react";

export default function SkeletonHome() {
  const renderItemCardSkeleton = (index: number) => (
    <Card
      key={index}
      className="p-4 border border-gray-100 bg-white rounded-xl flex flex-col gap-4 shadow-none"
    >
      <div className="flex items-center gap-3">
        <Skeleton className="h-11 w-11 rounded-lg shrink-0" />

        <div className="flex flex-col gap-1.5 w-full">
          <Skeleton className="h-4 w-24 rounded-md" />
          <Skeleton className="h-3 w-14 rounded-md" />
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between w-full">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-3 w-16 rounded-md" />
          <Skeleton className="h-5 w-20 rounded-md" />
        </div>

        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </Card>
  );

  const renderSectionHeaderSkeleton = (widthClass: string) => (
    <div className="flex items-center gap-2 mb-4">
      <Skeleton className="size-4 rounded-md shrink-0" />
      <Skeleton className={`h-6 ${widthClass} rounded-md`} />
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-8 animate-pulse">
     
      <Card className="w-full border border-gray-100 bg-white rounded-xl p-6 shadow-none flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-3 w-full sm:w-2/3">
          <Skeleton className="h-5 w-36 rounded-full" />

          <Skeleton className="h-8 w-4/5 rounded-lg mt-1" />

          <div className="flex flex-col gap-2 mt-1">
            <Skeleton className="h-3.5 w-full rounded-md" />
            <Skeleton className="h-3.5 w-5/6 rounded-md" />
          </div>

          <Skeleton className="h-9 w-32 rounded-lg mt-2" />
        </div>

        <Skeleton className="h-28 w-32 rounded-xl shrink-0 hidden sm:block" />
      </Card>

    
      <section>
        {renderSectionHeaderSkeleton("w-36")}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) =>
            renderItemCardSkeleton(i)
          )}
        </div>
      </section>

      
      <section>
        {renderSectionHeaderSkeleton("w-32")}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) =>
            renderItemCardSkeleton(i + 10)
          )}
        </div>
      </section>

      {/* Catalog */}
      <section>
        {renderSectionHeaderSkeleton("w-20")}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 15 }).map((_, i) =>
            renderItemCardSkeleton(i + 20)
          )}
        </div>
      </section>
    </div>
  );
}