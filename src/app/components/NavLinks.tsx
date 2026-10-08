import Link from 'next/link';
import React from 'react';
interface categoryType {
    id: string,
    
    nameBn: string,
    icon: string
}

const NavLinks = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const data:categoryType[] = await res.json();
    console.log(data);
    
    return (
        <div className='flex gap-5 max-w-7xl mx-auto py-3'>
            {
                data.map(n => <Link  key={n.id} href={"/"}>
                    <div className='flex items-center gap-1 hover:text-[#047F39] px-2'>
                        <p>{n.icon}</p>
                    <h2 className='text-sm font-semibold'>{n.nameBn}</h2>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default NavLinks;