"use client";

import { usePathname, useRouter } from "next/navigation";
import { ListBox, Select } from "@heroui/react";
import type { Key } from "@heroui/react";

const SORTS = [
    { id: "default", label: "ডিফল্ট" },
    { id: "price-asc", label: "দাম: কম থেকে বেশি" },
    { id: "price-desc", label: "দাম: বেশি থেকে কম" },
    { id: "change-desc", label: "সবচেয়ে বেশি পরিবর্তন" },
];

export default function SortSelect({ current }: { current: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (key: Key | null) => {
        const v = String(key ?? "default");
        router.replace(v === "default" ? pathname : `${pathname}?sort=${v}`, {
            scroll: false,
        });
    };

    return (
        <div className="mb-3 flex items-center justify-end gap-3 rounded-2xl border border-gray-200/70 bg-[#fafcf9] px-5 py-3.5">
            <span className="text-sm text-gray-500">সাজান</span>

            <Select
                aria-label="সাজান"
                value={current}
                onChange={handleChange}
                className="w-48"
            >
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                    <ListBox>
                        {SORTS.map((s) => (
                            <ListBox.Item key={s.id} id={s.id} textValue={s.label}>
                                {s.label}
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        ))}
                    </ListBox>
                </Select.Popover>
            </Select>
        </div>
    );
}