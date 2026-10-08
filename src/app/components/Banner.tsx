import { Button } from '@heroui/react';
import Image from 'next/image';


const Banner = () => {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
    return (
        <div className='max-w-7xl mx-auto mt-10 bg-white'>
            {/* Main */}
            <div className='grid grid-cols-3 justify-center border rounded-2xl'>
                
                {/* Left */}
                <div className='col-span-2 pl-4'>
                    <p className='text-[#05893E] font-medium text-sm mt-4 pb-4'><span className='bg-[#05893E]/10 py-1 px-3 rounded-3xl'>{date}</span></p>
                    <h2 className='text-4xl font-bold pt-1 pb-4'>আজকের বাজারের দাম এক নজরে</h2>
                    <p className='text-[#1D271F]/70 max-w-[75%] pb-7 text-md'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    <Button className='bg-[#047F39] rounded-md py-4 mb-15'>সব পণ্য দেখুন</Button>
                </div>
                {/* Right */}
                <div className='col-span-1 flex justify-center items-center '>
                    <Image src='/bazar-hero.png' alt='' width={315} height={263}></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;