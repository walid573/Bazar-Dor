

import { Card, Skeleton } from "@heroui/react";

export default function NavbarSkeleton() {
  return (
    <div className="bg-white">
      <Card className="mx-auto max-w-7xl rounded-none border-b border-gray-100 bg-white p-4 shadow-none">
       
        <div className="flex w-full items-center justify-between">
         
          <div className="flex items-center gap-3">
            <Skeleton className="size-12 shrink-0 rounded-xl" />

            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-5 w-24 rounded-md" />
              <Skeleton className="h-3.5 w-36 rounded-md" />
            </div>
          </div>

          
          <Skeleton className="size-9 rounded-full" />
        </div>

       
        <div className="flex items-center gap-6 overflow-x-auto pt-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center gap-1.5"
            >
              <Skeleton className="size-5 rounded-full" />
              <Skeleton className="h-4 w-10 rounded-md" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}