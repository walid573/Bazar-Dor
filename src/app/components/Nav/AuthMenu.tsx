"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, Button, Dropdown, Skeleton } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function AuthMenu() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

  
    if (isPending) {
        return (
            <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3 w-30 rounded-lg" />
        <Skeleton className="h-3 w-18 rounded-lg" />
      </div>
    </div>
        );
    }

   
    if (!session) {
        return (
            <div className="flex items-center gap-2">
                <Button className='bg-transparent text-black text-sm'><Link href='/sign-in'>সাইন ইন</Link></Button>
                <Button className='bg-[#047F39] shadow-md shadow-green-600/40 rounded-md py-4 '><Link href='/sign-up'>সাইন আপ</Link></Button>
            </div>
        );
    }

   
    const { name, email, image } = session.user;
    const initial = (name?.trim().charAt(0) || email.charAt(0)).toUpperCase();

   const handleAction = async (key: React.Key) => {
    if (key === "profile") {
        router.push("/profile");
    }

    if (key === "signout") {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("You've been signed out. See you soon!", {
                        icon: "👋",
                    });
                    router.push("/");
                },
                onError: () => {
                    toast.error("Logout failed. Please try again.");
                },
            },
        });
    }
};

    return (
        <Dropdown>
            <Button
                variant="ghost"
                aria-label="অ্যাকাউন্ট মেনু"
                className="h-auto gap-2 rounded-full px-2 py-2"
            >
                <Avatar size="md">
                    {image ? <Avatar.Image src={image} alt={name} referrerPolicy="no-referrer" /> : null}
                    <Avatar.Fallback>{initial}</Avatar.Fallback>
                </Avatar>
                <span className="hidden text-sm font-medium text-gray-900 sm:inline">
                    {name}
                </span>
                <span className="text-[10px] text-gray-500" aria-hidden="true">
                    ▼
                </span>
            </Button>

            <Dropdown.Popover placement="bottom end" offset={8} className="min-w-60 rounded-2xl pb-4 px-2"
            >
                <div className="px-3 pb-2 pt-3">
                    <p className="text-sm font-semibold text-gray-900">{name}</p>
                    <p className="truncate text-xs text-gray-500">{email}</p>
                </div>

                <Dropdown.Menu onAction={handleAction}>
                    <Dropdown.Item id="profile" textValue="আমার প্রোফাইল" className="rounded-xl">
                        <span aria-hidden="true">👤</span> আমার প্রোফাইল
                    </Dropdown.Item>
                    <Dropdown.Item  className="text-[#D03739] rounded-xl" id="signout" textValue="সাইন আউট" variant="danger">
                        <span aria-hidden="true">↩</span> সাইন আউট
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}