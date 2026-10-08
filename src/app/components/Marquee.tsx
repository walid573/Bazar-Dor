import Link from 'next/link';
import React from 'react';
import MarqueeText from 'react-marquee-text';

const unitBn: Record<string, string> = {
  kg: 'কেজি',
  litre: 'লিটার',
  dozen: 'ডজন',
  piece: 'পিস',
};

interface marType {
    id: string,
    categoryIcon:string,
    nameBn:string,
    today:number,
    unit:string,
    change:{
        dir:string,
        pct:number
    }
}
const bn = (num:number, digits = 0) =>
  Number(num).toLocaleString('bn-BD', { maximumFractionDigits: digits });

const Marquee = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data:marType[] = await res.json()
    return (
        <div className='flex overflow-x-auto mt-5 border-y border-gray-100'>
             <MarqueeText direction='right' duration={20}>
        {
            data.map(mar => <Link key={mar.id} href={`/details/${mar.id}`}>
            <div  className='flex items-center gap-2 whitespace-nowrap px-6 py-3 border border-gray-100 last:border-r-0'>
                <p className='text-sm'>{mar.categoryIcon}</p>
                <h2 className='font-medium'>{mar.nameBn}</h2>
                <p>{bn(mar.today)} টাকা/{ unitBn[mar.unit] ?? mar.unit } </p>
                <div className='font-semibold'>
                    {mar.change.dir === 'up' ? <p className='text-red-500'>▲{mar.change.pct}%</p> : <p className='text-green-600'>▼{mar.change.pct}%</p>}
                </div>
            </div>
            </Link>)
        }
    </MarqueeText>
        </div>
    );
};

export default Marquee;