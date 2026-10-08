import { Button } from '@heroui/react';
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import Marquee from './Marquee';


const Navbar = () => {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

    return (
        <div className='bg-white'>
            {/* Main Nav  */}
            <div className='max-w-7xl mx-auto flex justify-between items-center py-3'>
                {/* Left section */}
                <Link href='/'>

                <div className='flex items-center gap-2'>
                    <div className='bg-[#05893E] p-4 rounded-2xl'>

                    <Image  src='/logo.png' alt='' height={20} width={20}></Image>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>বাজার দর</h2>
                        <p className='text-xs '>{date}</p>
                    </div>
                </div>
                </Link>
                {/* Right section */}
                <div>
                    <Button className='bg-transparent text-black text-sm'>সাইন ইন</Button>
                    <Button className='bg-[#047F39] rounded-md py-4 '>সাইন আপ</Button>
                </div>
            </div>
            {/* Categor */}
            <div>
                <NavLinks></NavLinks>
            </div>
            <div>
                <Marquee></Marquee>
            </div>
        </div>
    );
};

export default Navbar;