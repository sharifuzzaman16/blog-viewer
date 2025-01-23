import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import React from 'react';


const Navbar = async () => {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <header className='border-b border-[#333] fixed w-full backdrop-blur-sm'>
            <nav className='flex justify-between items-center h-[75px] container mx-auto'>
                <div>
                    <Link href={'/'}><h2 className='text-2xl font-bold'>Blog Viewer</h2></Link>
                </div>
                <div>
                    <ul className='flex items-center gap-4'>
                        <li className='text-base font-medium hover:underline'><Link href={'/'}>Home</Link></li>
                        {
                            user ?
                                <>
                                    <li className='text-base font-medium hover:underline'><Link href={'/profile'}>Profile</Link></li>
                                    <li className='text-base font-medium hover:underline'><Link href={'/api/auth/logout'}>Logout</Link></li>
                                </> :
                                <>
                                    <li className='text-base font-medium'>
                                        <Link href={'/api/auth/login'} className='hover:underline'>Login </Link>
                                        /
                                        <Link href={'/api/auth/register'} className='hover:underline'> Register</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;