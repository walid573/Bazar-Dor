import Link from "next/link";
import { notFound } from "next/navigation";
import SortSelect from "./Sortselect";


interface Product {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    change: {
        dir: string;
        pct: number;
    };
}

interface ApiResponse {
    data?: Product[];
}

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

async function getCategoryProducts(
    category: string
): Promise<Product[]> {
    const url = `https://api.api-store.workers.dev/api/bazardor/products?category=${category}`;

    const res = await fetch(url, {
        cache: "no-store",
    });

    if (!res.ok) {
        return [];
    }

    const json: ApiResponse | Product[] = await res.json();

    // Handles both { data: [...] } and [...]
    if (Array.isArray(json)) {
        return json;
    }

    return json.data ?? [];
}

export default async function CategoryPage({
    params,
    searchParams,
}: {
    params: Promise<{ category: string }>;
    searchParams: Promise<{ sort?: string }>;
}) {
    const { category } = await params;
    const { sort = "default" } = await searchParams;

    const products = await getCategoryProducts(category);

    if (!products.length) {
        notFound();
    }

    const categoryName = products[0]?.categoryNameBn ?? category;
    const categoryIcon = products[0]?.categoryIcon ?? "🛒";

    const price = (p: Product) => Number(p.today) || 0;
    const change = (p: Product) =>
        Math.abs((Number(p.today) || 0) - (Number(p.yesterday) || 0));

    if (sort === "price-asc") products.sort((a, b) => price(a) - price(b));
    if (sort === "price-desc") products.sort((a, b) => price(b) - price(a));
    if (sort === "change-desc") products.sort((a, b) => change(b) - change(a));

    return (
        <main className="min-h-[72vh] bg-[#f1f4ef]">
            <div className="mx-auto max-w-7xl px-4 py-6">
                {/* Breadcrumb */}
                <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                    <Link
                        href="/"
                        className="hover:text-gray-900 hover:underline"
                    >
                        হোম
                    </Link>

                    <span>›</span>

                    <span className="font-medium text-gray-900">
                        {categoryName}
                    </span>
                </nav>

                {/* Header */}
                <div className="mb-4 flex items-center gap-3 rounded-2xl border border-gray-200/70 bg-[#fafcf9] px-5 py-5">
                    <span className="text-4xl leading-none">
                        {categoryIcon}
                    </span>

                    <div>
                        <h1 className="text-2xl font-bold leading-tight text-gray-900">
                            {categoryName}
                        </h1>

                        <p className="text-sm text-gray-500">
                            {bn(products.length)}টি পণ্যের আজকের দাম
                        </p>
                    </div>
                </div>

                {/* Sort */}
                <SortSelect current={sort} />

                {/* Products */}
                <h2 className="py-4 text-sm text-[#1D271F]/70 ">মোট {bn(products.length)} পণ্য দেখানো হচ্ছে</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => {
                        const today = Number(product.today) || 0;
                        const yesterday =
                            Number(product.yesterday) || 0;

                        const diff = today - yesterday;
                        const isUp = diff > 0;
                        const isDown = diff < 0;

                        const unit =
                            unitBn[product.unit] ?? product.unit;

                        return (
                            <Link
                                key={product.id}
                                href={`/details/${product.id}`}
                                className="rounded-2xl border border-gray-200/70 bg-[#fafcf9] p-3.5 transition-colors hover:border-gray-300 hover:bg-white"
                            >
                                {/* Product */}
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                                        {product.image ||
                                            product.categoryIcon ||
                                            "🛒"}
                                    </div>

                                    <div className="min-w-0">
                                        <h2 className="truncate text-[15px] font-semibold leading-tight text-gray-900">
                                            {product.nameBn}
                                        </h2>

                                        <p className="text-xs text-gray-600">
                                            প্রতি {unit}
                                        </p>
                                    </div>
                                </div>

                                {/* Price + Change */}
                                <div className="mt-4">
                                    <p className="text-xs text-gray-600">
                                        আজকের দাম
                                    </p>

                                    <div className="mt-0.5 flex items-center justify-between gap-2">
                                        <div className="flex items-baseline gap-1.5">
                                            <p className="text-xl font-bold text-gray-900">
                                                {bn(today)}
                                            </p>

                                            <p className="text-sm text-gray-700">
                                                টাকা 
                                            </p>
                                        </div>

                                        {/* Change */}
                                        <div
                                            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${isUp
                                                    ? "bg-red-50 text-red-600"
                                                    : isDown
                                                        ? "bg-green-50 text-green-700"
                                                        : "bg-gray-100 text-gray-600"
                                                }`}
                                        >
                                            {isUp
                                                ? "▲"
                                                : isDown
                                                    ? "▼"
                                                    : "—"}{" "}
                                            {isUp || isDown
                                                ? `${bn(Math.abs(product.change.pct), 1)} %`
                                                : "অপরিবর্তিত"}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}