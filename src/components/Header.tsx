import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {UserCircleIcon} from "@heroicons/react/outline"

interface pageProps{
    user_img? : string
    user_name?: string
}

const Header : FC<pageProps> = ({user_img , user_name}) =>{
    return <header className='sticky top-0 z-30 flex w-full item-center justify-between p-4 bg-[#E7ECEE]'>
        <div className='flex items-center justify-center md:w-1/5'>
        <Link href="/">
        <div className='relative h-5 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
            <Image src="/./favicon.ico" alt="icon" fill= {true} style={{objectFit: "contain"}} />
        </div>
        </Link>
        </div>
        <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
            <Link href = '/features' className='headerlink'>Features</Link>
            <Link href = '/pricing' className='headerlink'>Pricing</Link>
            <Link href = '/customer' className='headerlink'>Customer</Link>
            <Link href = '/aboutus' className='headerlink'>About Us</Link>
        </div>
        {/* <div className='flex gap-4 justify-center items-center md:w-1/5'> */}
            {user_img && user_name ? (
                <div className='flex gap-4 justify-center items-center md:w-1/5'>
                <div>{user_name}</div>
                <div className='relative h-5 w-5 cursor-pointer opacity-75 transition hover:opacity-100 rounded-lg'>
                <Image src={user_img} alt="user" fill= {true} style={{objectFit: "contain"}} />
            </div>
            </div>
            ) : (<div className='flex gap-4 justify-center items-center md:w-1/5'>
                <Link href='/login'>Login/Signup</Link>
                <Link href='/login'><UserCircleIcon className='headericon' /></Link>
                </div>)}
            {/* <Link href='/login'>Login/Signup</Link>
            {!user_img ? (<Link href='/login'><UserCircleIcon className='headericon' /></Link>) : 
            <div className='relative h-5 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
                <Image src={user_img} alt="user" fill= {true} style={{objectFit: "contain"}} />
            </div>
            }
            <Link href='/login'><UserCircleIcon className='headericon' /></Link>
        </div> */}
    </header>
}

export default Header