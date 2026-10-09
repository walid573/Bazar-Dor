import { Button } from '@heroui/react';
import Image from 'next/image';

import Link from 'next/link';
import Marquee from './Marquee';
import AuthMenu from './AuthMenu';
import NavLinks from './NavLinks';


const Navbar = () => {
    const date = Intl.DateTimeFormat("bn-BD", {
        dateStyle: "full",
    }).format();
    return (
        <div className='bg-white'>
            {/* Main Nav  */}
            <div className='max-w-7xl mx-auto flex justify-between items-center py-3'>
                {/* Left section */}
                <Link href='/'>

                    <div className='flex items-center gap-2'>
                        <div className='bg-[#05893E] p-4 rounded-2xl'>

                            <Image src='/logo.png' alt='' height={20} width={20}></Image>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>বাজার দর</h2>
                            <p className='text-xs '>{date}</p>
                        </div>
                    </div>
                </Link>
                {/* Right section */}
                <div>
                   <AuthMenu/>
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