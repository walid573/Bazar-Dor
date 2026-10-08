import Link from 'next/link';

const unitBn: Record<string, string> = {
    kg: 'কেজি',
    litre: 'লিটার',
    dozen: 'ডজন',
    piece: 'পিস',
};

interface ChangeType {
    id: number;            
    slug: string;
    image: string;
    unit: string;
    nameBn: string;
    today: number;
    change: {
        dir: 'up' | 'down' | 'flat';
        pct: number;
    };
}

const bn = (num: number, digits = 0) =>
    Number(num).toLocaleString('bn-BD', { maximumFractionDigits: digits });

const badgeStyle = {
    up: 'bg-red-50 text-red-600',
    down: 'bg-green-50 text-green-600',
    flat: 'bg-gray-100 text-gray-500',
};

const arrow = { up: '▲', down: '▼', flat: '–' };

const AllProducts = ({ data }: { data: ChangeType[] }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">সব পণ্য</h2>
            <p className="pb-4">মোট {bn(data.length)}টি পণ্য দেখানো হচ্ছে</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => {
                    const dir = item.change.dir; // per item

                    return (
                        <Link
                            key={item.id}
                            href={`/products/${item.slug}`}
                            className="rounded-xl border bg-white/70 p-4 block"
                        >
                            {/* top: icon + name */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-2xl">
                                    {item.image}
                                </div>
                                <div>
                                    <h3 className="font-semibold leading-tight">{item.nameBn}</h3>
                                    <p className="text-xs text-gray-500">
                                        প্রতি {unitBn[item.unit] ?? item.unit}
                                    </p>
                                </div>
                            </div>

                            {/* bottom: price + badge */}
                            <div className="mt-4 flex items-end justify-between">
                                <div>
                                    <p className="text-xs text-gray-500">আজকের দাম</p>
                                    <p className="text-lg font-bold">{bn(item.today)} টাকা</p>
                                </div>

                                <span
                                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeStyle[dir]}`}
                                >
                                    {arrow[dir]} {bn(Math.abs(item.change.pct), 1)}%
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default AllProducts;