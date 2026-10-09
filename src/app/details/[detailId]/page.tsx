import SummaryCard from "@/app/components/SummaryCard";
import Link from "next/link";
import { notFound } from "next/navigation";

const unitBn: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
};

const bn = (num: number, digits = 0) =>
    Number(num).toLocaleString("bn-BD", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    });

interface MarketPrice {
    market: string,
    division: string,
    min: number,
    max: number,
    avg: number
}

interface ItemDetails {
    id: number,
    slug:string,
    nameBn: string,
    category:string,
    categoryBn:string,
    categoryNameBn: string,
    image: string,
    unit: string,
    today: number,
    yesterday: number,
    min: number,
    max: number,
    change: { pct: number },
    markets: MarketPrice[]
}


async function getItem(id: string): Promise<ItemDetails | null> {
    const url = `https://api.abcz.workers.dev/api/bazardor/products/${id}`;
    const res = await fetch(url, { cache: "no-store" });
    console.log("URL:", url, "STATUS:", res.status);

    if (!res.ok) return null;

    const json = await res.json();
    return json; 
}
export default async function DetailsPage({
    params,
}: {
    params: Promise<{ detailId: string }>; 
}) {
    const { detailId } = await params;
    const item = await getItem(detailId);

    if (!item) notFound();

    const diff = item.today - item.yesterday;
    const isUp = diff > 0;
    const unit = unitBn[item.unit] ?? item.unit;

    return (
        <main className="mx-auto max-w-7xl px-4 py-6">
            {/* breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:underline">
                    হোম
                </Link>
                <span>›</span>
                <Link href={`/category/${item.category}`} className="hover:underline">
                    {item.categoryNameBn}
                </Link>
                <span>›</span>
                <span className="text-gray-900 font-medium">{item.nameBn}</span>
            </nav>

            {/* header card */}
            <section className="mb-5 flex flex-col gap-4 rounded-2xl border bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-3xl">
                        {item.image}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold leading-tight">{item.nameBn}</h1>
                        <p className="text-xs text-gray-500">
                            প্রতি {unit} · {item.categoryBn}
                        </p>
                        <p className="mt-1 text-xs text-gray-600">
                            গতকালের তুলনায় আজ দাম{" "}
                            <b>{isUp ? "বেড়েছে" : diff < 0 ? "কমেছে" : "অপরিবর্তিত"}</b> ·{" "}
                            {bn(Math.abs(diff))} টাকা
                        </p>
                    </div>
                </div>

                <div className="rounded-xl bg-gray-100 px-5 py-3 text-center">
                    <p className="text-xs text-gray-500">আজকের দাম</p>
                    <p className="text-3xl font-bold">{bn(item.today)}</p>
                    <p className="text-xs text-gray-500">টাকা / {unit}</p>
                    <p
                        className={`mt-1 text-xs font-semibold ${isUp ? "text-red-600" : "text-green-600"
                            }`}
                    >
                        {isUp ? "▲" : "▼"} {bn(Math.abs(item.change.pct), 1)}%
                    </p>
                </div>
            </section>

            {/* summary */}
            <section className="rounded-2xl border bg-white/70 p-5">
                <h2 className="mb-3 text-base font-semibold">দামের সারসংক্ষেপ</h2>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <SummaryCard
                        label="সর্বনিম্ন দাম"
                        value={Math.min(...item.markets.map((m) => Number(m.min)))}
                        valueClass="text-green-600"
                        note="সবচেয়ে কম দামের বাজার"
                    />

                    <SummaryCard
                        label="সর্বাধিক দাম"
                        value={Math.max(...item.markets.map((m) => Number(m.max)))}
                        valueClass="text-red-600"
                        note="সবচেয়ে বেশি দামের বাজার"
                    />
                    <SummaryCard
                        label="গড় দাম"
                        value={item.today}
                        valueClass="text-green-700"
                        note={`প্রতি ${unit}-এর হিসাবে`}
                    />
                </div>

                {/* market table */}
                <h2 className="mb-3 mt-8 text-base font-semibold">
                    বাজারভিত্তিক আজকের দাম
                </h2>

                <div className="overflow-x-auto rounded-xl border">
                    <table className="w-full min-w-140 text-sm">
                        <thead>
                            <tr className="text-left text-xs text-gray-500">
                                <th className="px-4 py-3 font-normal">বাজার</th>
                                <th className="px-4 py-3 font-normal">বিভাগ</th>
                                <th className="px-4 py-3 text-right font-normal">সর্বনিম্ন</th>
                                <th className="px-4 py-3 text-right font-normal">সর্বাধিক</th>
                                <th className="px-4 py-3 text-right font-normal">গড়</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.markets.map((m) => (
                                <tr key={m.market} className="border-t border-black even:bg-gray-50/70">
                                    <td className="px-4 py-3 font-medium">{m.market}</td>
                                    <td className="px-4 py-3 text-gray-600">{m.division}</td>
                                    <td className="px-4 py-3 text-right text-gray-600">
                                        {bn(m.min)} টাকা
                                    </td>
                                    <td className="px-4 py-3 text-right text-gray-600">
                                        {bn(m.max)} টাকা
                                    </td>
                                    <td className="px-4 py-3 text-right font-bold">
                                        {bn((Number(m.min) + Number(m.max)) / 2, Number.isInteger((Number(m.min) + Number(m.max)) / 2) ? 0 : 2)} টাকা
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}

