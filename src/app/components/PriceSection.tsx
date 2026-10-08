import Link from "next/link";



const unitBn: Record<string, string> = {
  kg: 'কেজি',
  litre: 'লিটার',
  dozen: 'ডজন',
  piece: 'পিস',
};

interface itemsType{
    id:number,
    image:string,
    unit:string,
    nameBn:string,
    today:number,
    change:{
        pct:number
    }
}


const bn = (num:number, digits = 0) =>
  Number(num).toLocaleString('bn-BD', { maximumFractionDigits: digits });

const PriceSection = ({ title, items, dir }: {title:string,items:itemsType[],dir:string}) => {
  const isUp = dir === 'up';

  return (
    <section className="mb-10">
      <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <span className={`text-xs ${isUp ? 'text-red-500' : 'text-green-600'}`}>
          {isUp ? '▲' : '▼'}
        </span>
        {title}
      </h2>
<Link href='/'>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border bg-white/70 p-4"
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
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  isUp ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                }`}
              >
                {isUp ? '▲' : '▼'} {bn(Math.abs(item.change.pct), 1)}%
              </span>
            </div>
          </div>
        ))}
      </div>
</Link>
    </section>
  );
};

export default PriceSection;