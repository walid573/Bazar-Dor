"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    // logged out -> go to sign in
    useEffect(() => {
        if (!isPending && !session) router.replace("/sign-in");
    }, [isPending, session, router]);

    if (!session) return <p className="p-10 text-center">লোড হচ্ছে...</p>;

    const { name, email, image } = session.user;

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/");
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newName = String(new FormData(e.currentTarget).get("name"));
        await authClient.updateUser({ name: newName });
        alert("আপডেট হয়েছে");
    };

    return (
        <main className="mx-auto min-h-[70.5vh] max-w-2xl px-4 py-10">
            <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
            <p className="mb-5 text-sm text-gray-600">
                আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
            </p>

         
            <Card className="mb-4 flex-row items-center justify-between rounded-xl border border-gray-200/70 p-5">
                <div className="flex items-center gap-4">
                    {image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={image}
                            alt={name}
                            referrerPolicy="no-referrer"
                            className="size-16 rounded-xl object-cover"
                        />
                    ) : (
                        <div className="flex size-16 items-center justify-center rounded-xl bg-gray-200 text-xl font-semibold">
                            {name.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <div>
                        <p className="font-bold text-xl">{name}</p>
                        <p className="text-md text-[#1D271F]/70">{email}</p>
                    </div>
                </div>

                <Button variant="outline" onPress={handleSignOut} className="text-[#D03739] border border-[#D03739] rounded-lg px-4.5 py-2.5">
                    ↩ সাইন আউট
                </Button>
            </Card>

            
            <Card className="rounded-xl p-5 border border-gray-200/70">
                <h2 className="mb-4 font-semibold text-lg">তথ্য</h2>
                <Form onSubmit={handleUpdate} className="flex flex-col gap-4">
                    <TextField name="name"  isRequired fullWidth>
                        <Label>নাম</Label>
                        <Input className='border rounded-lg border-gray-200/70 py-2' />
                    </TextField>
                    <Button type="submit" className="w-full rounded-lg bg-[#0a8a43] text-white shadow-md shadow-green-600/40">
                        আপডেট
                    </Button>
                </Form>
            </Card>
        </main>
    );
}