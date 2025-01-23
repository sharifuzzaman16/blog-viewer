import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className='border-b border-[#333] fixed w-full backdrop-blur-sm'>
            <nav className='flex justify-between items-center h-[75px] container mx-auto'>
                <div>
                    <Link href={'/'}><h2 className='text-2xl font-bold'>Blog Viewer</h2></Link>
                </div>
                <div>
                    <ul className='flex items-center gap-4'>
                        <li className='text-base font-medium hover:underline'><Link href={'/'}>Home</Link></li>
                        <li className='text-base font-medium hover:underline'><Link href={'/'}>Profile</Link></li>
                        <li className='text-base font-medium hover:underline'><Link href={'/'}>Logout</Link></li>
                        <li className='text-base font-medium'>
                            <Link className='hover:underline' href={'/'}>Login </Link>
                            /
                            <Link className='hover:underline' href={'/'}> Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;