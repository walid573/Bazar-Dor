"use client";

import { Card, Skeleton } from "@heroui/react";

export default function UserProfile() {
    return (
        <main className="mx-auto min-h-[70.5vh] max-w-2xl px-4 py-10 animate-pulse">
           
            <Skeleton className="h-8 w-48 rounded-lg mb-2" />
            <Skeleton className="h-4 w-64 rounded-lg mb-6" />

          
            <Card className="mb-4 flex-row items-center justify-between rounded-xl border border-gray-200/70 p-5">
                <div className="flex items-center gap-4 w-full">
                 
                    <Skeleton className="size-16 rounded-xl shrink-0" />
                    
                 
                    <div className="flex flex-col gap-2 w-full">
                        <Skeleton className="h-5 w-32 rounded-lg" />
                        <Skeleton className="h-4 w-48 rounded-lg" />
                    </div>
                </div>
            
                <Skeleton className="h-10 w-24 rounded-lg shrink-0 ml-4" />
            </Card>

           
            <Card className="rounded-xl p-5 border border-gray-200/70 flex flex-col gap-4">
                <Skeleton className="h-6 w-16 rounded-lg mb-2" />
              
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-10 rounded-md" />
                    <Skeleton className="h-11 w-full rounded-lg border border-gray-200/50" />
                </div>

             
                <Skeleton className="h-10 w-full rounded-lg mt-2" />
            </Card>
        </main>
    );
}
